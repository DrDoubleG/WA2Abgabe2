const helper = require("../helper.js");
const LandDao = require("./landDao.js");


class AdresseDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadById(id) {
        const landDao = new LandDao(this._conn);
        
        var sql = "SELECT * FROM Adresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);
        
        return result;
    }
	

    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Adresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }
    create(strasse = "", hausnummer = "", plz = "", ort = "", land_id = "") {
        var sql = "INSERT INTO Adresse (Strasse,Hausnummer,PLZ,Ort,Land_ID) VALUES (?,?,?,?,?)";
        var statement = this._conn.prepare(sql);
        var params = [strasse, hausnummer, plz, ort, land_id];
        var result = statement.run(params);

        if (result.changes != 1) 
            throw new Error("Could not insert new Record. Data: " + params);

        var newObj = this.loadById(result.lastInsertRowid);
        return newObj;
    }

    toString() {
        helper.log("AdresseDao [_conn=" + this._conn + "]");
    }
}

module.exports = AdresseDao;