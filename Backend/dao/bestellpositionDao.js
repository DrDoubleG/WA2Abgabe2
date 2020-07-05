const helper = require("../helper.js");
const ProduktDao = require("./produktDao.js");
const BestellungDao = require("./bestellungDao.js");

class BestellpositionDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }
    
    loadById(id) {
        const kategorieDao = new KategorieDao(this._conn);
        const mehrwertsteuerDao = new MehrwertsteuerDao(this._conn);
        const bestellpositionbildDao = new BestellpositionbildDao(this._conn);
        const pfandstufeDao = new PfandstufeDao(this._conn);
        const angebotDao = new AngebotDao(this._conn);
        
        var sql = "SELECT * FROM Bestellposition WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);
		
        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

		/*
        result.kategorie = kategorieDao.loadById(result.kategorie_id);
        delete result.kategorie_id;

        result.mehrwertsteuer = mehrwertsteuerDao.loadById(result.mehrwertsteuer_id);
        delete result.mehrwertsteuer_id;

        result.pfandstufe = pfandstufeDao.loadById(result.pfandstufe_id);
        delete result.pfandstufe_id;

        result.bilder = bestellpositionbildDao.loadById(result.id);
        delete result.bilder.bestellposition_id;
        delete result.bilder.bestellposition;
		*/
        
        return result;
    }
	
	/*
    loadAll() {
        const kategorieDao = new KategorieDao(this._conn);
        var categories = kategorieDao.loadAll();
        const mehrwertsteuerDao = new MehrwertsteuerDao(this._conn);
        var taxes = mehrwertsteuerDao.loadAll();
        const pfandstufeDao = new PfandstufeDao(this._conn);
        var pain = pfandstufeDao.loadAll();
        const bestellpositionbildDao = new BestellpositionbildDao(this._conn);
        var pictures = bestellpositionbildDao.loadAll();


        var sql = "SELECT * FROM Bestellposition";
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
                if (element.bestellposition_id == result[i].id) {
                    result[i].bilder = (element);

                }
            }
            delete result[i].bilder.bestellposition_id;
            delete result[i].bilder.bestellposition;

            result[i].mehrwertsteueranteil = helper.round((result[i].nettopreis) * result[i].mehrwertsteuer.steuersatz);

            result[i].bruttopreis = helper.round(result[i].nettopreis + result[i].mehrwertsteueranteil).toFixed(2);

        }

        return result;
    }
	*/


    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Bestellposition WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    toString() {
        helper.log("BestellpositionDao [_conn=" + this._conn + "]");
    }
}

module.exports = BestellpositionDao;