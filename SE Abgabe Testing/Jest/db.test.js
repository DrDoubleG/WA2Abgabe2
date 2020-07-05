const Database = require("better-sqlite3");
const dbOptions = {verbose: console.log};
const dbFile = "./db.sqlite";
const dbConnection = new Database(dbFile, dbOptions);

const ProduktDao = require("./produktDao");
const ProduktbildDao = require("./produktbildDao");
const PfandstufeDao = require("./pfandstufeDao");


var dao=new ProduktDao(dbConnection);
var dao1=new ProduktbildDao(dbConnection);
var dao2=new PfandstufeDao(dbConnection);






test('Verbindungstest', () => {
    expect(dao.getConnection()).toBeTruthy();
  });

test('Nettopreis check Produktid= 1', () => {
  expect(dao.loadById(1).nettopreis).toEqual(11.99);
})

test('Produktbild check Produktid=1',() => {
  expect(dao1.exists(1)).toBeTruthy();
})

test('Pfandstufenanzahl = 5?',() => {
  expect(dao2.loadAll()).toHaveLength(5);
})

test('Mehrwertsteuer richtig?',() => {
  expect(dao.loadById(1).bruttopreis).toEqual(12.83);
})
