const helper = require("../helper.js");
const PersonDao = require("./personDao.js");


class KundeDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadById(id) {
        const personDao = new PersonDao(this._conn);
        
        var sql = "SELECT * FROM Kunde WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (helper.isUndefined(result))
            throw new Error("No Record found by id=" + id);

        result = helper.objectKeysToLower(result);
		
		result.person = personDao.loadById(result.person_id);
        delete result.person_id;
        
        return result;
    }
	

    exists(id) {
        var sql = "SELECT COUNT(ID) AS cnt FROM Kunde WHERE ID=?";
        var statement = this._conn.prepare(sql);
        var result = statement.get(id);

        if (result.cnt == 1)
            return true;

        return false;
    }

    toString() {
        helper.log("KundeDao [_conn=" + this._conn + "]");
    }
}

module.exports = KundeDao;