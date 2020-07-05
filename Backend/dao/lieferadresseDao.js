const helper = require("../helper.js");
const AdresseDao = require("./adresseDao.js");
const PersonDao = require("./personDao.js");


class LieferadresseDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }
    

    loadById(id) {
        const adresseDao = new AdresseDao(this._conn);
        const personDao = new PersonDao(this._conn);
        
        var sql = "SELECT * FROM Lieferadresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);


        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);

        //Zum aufsplitten der Daten 

		
        result.person = personDao.loadById(result.person_id);
        delete result.person_id;

        result.adresse = adresseDao.loadById(result.adresse_id);
        delete result.adresse_id;

    
        return result;
    }

    



    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Lieferadresse WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    toString() {
        helper.log("LieferadresseDao [_conn=" + this._conn + "]");
    }
}

module.exports = LieferadresseDao;