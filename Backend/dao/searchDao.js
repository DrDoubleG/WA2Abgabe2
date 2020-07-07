const helper = require("../helper.js");
const ProduktDao = require("./produktDao.js");

class SearchDao {

    constructor(dbConnection) {
        this._conn = dbConnection;
    }

    getConnection() {
        return this._conn;
    }

    loadProductsByTags(searchString) {
        const produktDao = new ProduktDao(this._conn);
        var sql = "SELECT produkt_id FROM tagszuweisung WHERE tags_id=(SELECT ID FROM tags where tags=?)";
        var statement = this._conn.prepare(sql);
        var result = statement.get(helper.arrayObjectKeysToLower(searchString));
        var outProducts = [];
        var length = Object.values(result).length;

        for(var i=0 ; i<length;i++){
            
            outProducts.push(produktDao.loadById(Object.values(result)[i]));
        }
        return outProducts;
    }
}

module.exports = SearchDao;