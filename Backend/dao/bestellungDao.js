const helper = require("../helper.js");
const ZahlungsartDao = require("./zahlungsartDao.js");
const LieferadresseDao = require("./lieferadresseDao.js");
const RechnungsadresseDao = require("./rechnungsadresseDao.js");

class BestellungDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }
    
    loadById(id) {
        const zahlungsartDao = new ZahlungsartDao(this._conn);
        const lieferadresseDao = new LieferadresseDao(this._conn);
        const rechnungsadresseDao = new RechnungsadresseDao(this._conn);

        
        var sql = "SELECT * FROM Bestellung WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);


        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

		
        result.zahlungsart = zahlungsartDao.loadById(result.zahlungsart_id);
        delete result.zahlungsart_id;
		
		result.lieferadresse = lieferadresseDao.loadById(result.lieferadresse_id);
        delete result.lieferadresse_id;
		
		result.rechnungsadresse = rechnungsadresseDao.loadById(result.rechnungsadresse_id);
        delete result.rechnungsadresse_id;
		
        
        return result;
    }

    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Bestellung WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    create(bestellzeitpunkt= "",zahlungsart_id="",lieferadresse_id="",rechnungsadresse_id="") {
        var sql = "INSERT INTO Bestellung (Bestellzeitpunkt, Zahlungsart_ID, Lieferadresse_ID, Rechnungsadresse_ID) VALUES (?,?,?,?)";
        var statement = this._conn.prepare(sql);
        var params = [bestellzeitpunkt, zahlungsart_id, lieferadresse_id, rechnungsadresse_id];
        var result = statement.run(params);

        if (result.changes != 1) 
            throw new Error("Could not insert new Record. Data: " + params);

        var newObj = this.loadById(result.lastInsertRowid);
        return newObj;
    }

    toString() {
        helper.log("BestellungDao [_conn=" + this._conn + "]");
    }
}

module.exports = BestellungDao;