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
        const produktDao = new ProduktDao(this._conn);
        const bestellungDao = new BestellungDao(this._conn);

        
        var sql = "SELECT * FROM Bestellposition WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);
		
        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

        result.produkt = produktDao.loadById(result.produkt_id);
        delete result.produkt_id;

        result.bestellung = bestellungDao.loadById(result.bestellung_id);
        delete result.bestellung_id;
		
        return result;
    }
	
    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Bestellposition WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }
    create(menge= "",produkt_id="",bestellung_id="") {
        var sql = "INSERT INTO Bestellposition(menge,Produkt_ID,Bestellung_ID) VALUES (?,?,?)";
        var statement = this._conn.prepare(sql);
        var params = [menge,produkt_id,bestellung_id];
        var result = statement.run(params);

        if (result.changes != 1) 
            throw new Error("Could not insert new Record. Data: " + params);

        var newObj = this.loadById(result.lastInsertRowid);
        return newObj;
    }

    toString() {
        helper.log("BestellpositionDao [_conn=" + this._conn + "]");
    }
}

module.exports = BestellpositionDao;