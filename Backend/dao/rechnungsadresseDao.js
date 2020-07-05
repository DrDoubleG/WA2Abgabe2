const helper = require("../helper.js");
const KundeDao = require("./kundeDao.js");
const AdresseDao = require("./adresseDao.js");


class RechnungsadresseDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }
    
    loadById(id) {
        const adresseDao = new AdresseDao(this._conn);
        const kundeDao = new KundeDao(this._conn);
        
        var sql = "SELECT * FROM Rechnungsadresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);


        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

		
        result.kunde = kundeDao.loadById(result.kunde_id);
        delete result.kunde_id;

        result.adresse = adresseDao.loadById(result.adresse_id);
        delete result.adresse_id;

    
        return result;
    }

    



    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Rechnungsadresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    toString() {
        helper.log("RechnungsadresseDao [_conn=" + this._conn + "]");
    }
}

module.exports = RechnungsadresseDao;