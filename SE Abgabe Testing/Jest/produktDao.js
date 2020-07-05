const helper = require("./helper.js");
const KategorieDao = require("./kategorieDao.js");
const MehrwertsteuerDao = require("./mehrwertsteuerDao.js");
const ProduktbildDao = require("./produktbildDao.js");
const PfandstufeDao = require("./pfandstufeDao.js");

class ProduktDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadById(id) {
        const kategorieDao = new KategorieDao(this._conn);
        const mehrwertsteuerDao = new MehrwertsteuerDao(this._conn);
        const produktbildDao = new ProduktbildDao(this._conn);
        const pfandstufeDao = new PfandstufeDao(this._conn);

        var sql = "SELECT * FROM Produkt WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

        result.kategorie = kategorieDao.loadById(result.kategorie_id);
        delete result.kategorie_id;

        result.mehrwertsteuer = mehrwertsteuerDao.loadById(result.mehrwertsteuer_id);
        delete result.mehrwertsteuer_id;

        result.pfandstufe = pfandstufeDao.loadById(result.pfandstufe_id);
        delete result.pfandstufe_id;

        result.bilder = produktbildDao.loadById(result.id);
        delete result.bilder.produkt_id;
        delete result.bilder.produkt;

        result.mehrwertsteueranteil = helper.round((result.nettopreis) * result.mehrwertsteuer.steuersatz);
        result.bruttopreis = helper.round(result.nettopreis + result.mehrwertsteueranteil);


        return result;
    }

    loadByKategorie(id) {
        const kategorieDao = new KategorieDao(this._conn);
        var categories = kategorieDao.loadAll();
        const mehrwertsteuerDao = new MehrwertsteuerDao(this._conn);
        var taxes = mehrwertsteuerDao.loadAll();
        const pfandstufeDao = new PfandstufeDao(this._conn);
        var pain = pfandstufeDao.loadAll();
        const produktbildDao = new ProduktbildDao(this._conn);
        var pictures = produktbildDao.loadAll();


        var sql = "SELECT * FROM Produkt WHERE kategorie_id=?";
        var statement = this._conn.prepare(sql);
        var result = statement.all(id);

        if (helper.isArrayEmpty(result))
            return [];

        result = helper.arrayObjectKeysToLower(result);

        for (var i = 0; i < result.length; i++) {
            for (var element of categories) {
                if (element.id == result[i].kategorie_id) {
                    result[i].kategorie = element;
                    break;
                }
            }
            delete result[i].kategorie_id;

            for (var element of taxes) {
                if (element.id == result[i].mehrwertsteuer_id) {
                    result[i].mehrwertsteuer = element;
                    break;
                }
            }
            delete result[i].mehrwertsteuer_id;

            for (var element of pain) {
                if (element.id == result[i].pfandstufe_id) {
                    result[i].pfandstufe = element;
                    break;
                }
            }
            delete result[i].pfandstufe_id;



            for (var element of pictures) {
                if (element.produkt_id == result[i].id) {
                    result[i].bilder = (element);

                }
            }
            delete result[i].bilder.produkt_id;
            delete result[i].bilder.produkt;

            result[i].mehrwertsteueranteil = helper.round((result[i].nettopreis) * result[i].mehrwertsteuer.steuersatz);

            result[i].bruttopreis = helper.round(result[i].nettopreis + result[i].mehrwertsteueranteil);

        }

        return result;
    }

    loadAll() {
        const kategorieDao = new KategorieDao(this._conn);
        var categories = kategorieDao.loadAll();
        const mehrwertsteuerDao = new MehrwertsteuerDao(this._conn);
        var taxes = mehrwertsteuerDao.loadAll();
        const pfandstufeDao = new PfandstufeDao(this._conn);
        var pain = pfandstufeDao.loadAll();
        const produktbildDao = new ProduktbildDao(this._conn);
        var pictures = produktbildDao.loadAll();


        var sql = "SELECT * FROM Produkt";
        var statement = this._conn.prepare(sql);
        var result = statement.all();

        if (helper.isArrayEmpty(result))
            return [];

        result = helper.arrayObjectKeysToLower(result);

        for (var i = 0; i < result.length; i++) {
            for (var element of categories) {
                if (element.id == result[i].kategorie_id) {
                    result[i].kategorie = element;
                    break;
                }
            }
            delete result[i].kategorie_id;

            for (var element of taxes) {
                if (element.id == result[i].mehrwertsteuer_id) {
                    result[i].mehrwertsteuer = element;
                    break;
                }
            }
            delete result[i].mehrwertsteuer_id;

            for (var element of pain) {
                if (element.id == result[i].pfandstufe_id) {
                    result[i].pfandstufe = element;
                    break;
                }
            }
            delete result[i].pfandstufe_id;



            for (var element of pictures) {
                if (element.produkt_id == result[i].id) {
                    result[i].bilder = (element);

                }
            }
            delete result[i].bilder.produkt_id;
            delete result[i].bilder.produkt;

            result[i].mehrwertsteueranteil = helper.round((result[i].nettopreis) * result[i].mehrwertsteuer.steuersatz);

            result[i].bruttopreis = helper.round(result[i].nettopreis + result[i].mehrwertsteueranteil);

        }

        return result;
    }



    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Produkt WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

	/*
    create(kategorieid = 1, bezeichnung = "", beschreibung = "", mehrwertsteuerid = 1, details = null, nettopreis = 0.0,  bilder = []) {
        const produktbildDao = new ProduktbildDao(this._conn);

        var sql = "INSERT INTO Produkt (KategorieID,Bezeichnung,Beschreibung,MehrwertsteuerID,Details,Nettopreis,DatenblattID) VALUES (?,?,?,?,?,?,?)";
        var statement = this._conn.prepare(sql);
        var params = [kategorieid, bezeichnung, beschreibung, mehrwertsteuerid, details, nettopreis];
        var result = statement.run(params);

        if (result.changes != 1) 
            throw new Error("Could not insert new Record. Data: " + params);

        if (bilder.length > 0) {
            for (var element of bilder) {
                produktbildDao.create(element.bildpfad, result.lastInsertRowid);
            }
        }

        var newObj = this.loadById(result.lastInsertRowid);
        return newObj;
    }

    update(id, kategorieid = 1, bezeichnung = "", beschreibung = "", mehrwertsteuerid = 1, details = null, nettopreis = 0.0, bilder = []) {
        const produktbildDao = new ProduktbildDao(this._conn);
        produktbildDao.deleteByParent(id);

        var sql = "UPDATE Produkt SET KategorieID=?,Bezeichnung=?,Beschreibung=?,MehrwertsteuerID=?,Details=?,Nettopreis=?,DatenblattID=? WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var params = [kategorieid, bezeichnung, beschreibung, mehrwertsteuerid, details, nettopreis, id];
        var result = statement.run(params);

        if (result.changes != 1) 
            throw new Error("Could not update existing Record. Data: " + params);

        if (bilder.length > 0) {
            for (var element of bilder) {
                produktbildDao.create(element.bildpfad, id);
            }
        }

        var updatedObj = this.loadById(id);
        return updatedObj;
    }

    delete(id) {
        try {
            const produktbildDao = new ProduktbildDao(this._conn);
            produktbildDao.deleteByParent(id);

            var sql = "DELETE FROM Produkt WHERE ID=?";
            var statement = this._conn.prepare(sql);
            var result = statement.run(id);

            if (result.changes != 1) 
                throw new Error("Could not delete Record by id=" + id);

            return true;
        } catch (ex) {
            throw new Error("Could not delete Record by id=" + id + ". Reason: " + ex.message);
        }
    }
	
	*/

    toString() {
        helper.log("ProduktDao [_conn=" + this._conn + "]");
    }
}

module.exports = ProduktDao;