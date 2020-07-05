DROP TABLE kategorie;
DROP TABLE pfandstufe;
DROP TABLE bestellposition;
DROP TABLE produkt;
DROP TABLE tags;
DROP TABLE tagszuweisung;
DROP TABLE land;
DROP TABLE adresse;
DROP TABLE person;
DROP TABLE kunde;
DROP TABLE lieferadresse;
DROP TABLE rechnungsadresse;
DROP TABLE zahlungsart ;
DROP TABLE bestellung;
DROP TABLE mehrwertsteuer;
DROP TABLE unsere_empfehlungen;
DROP TABLE top10;
DROP TABLE angebot;
DROP TABLE produktbild;
DROP TABLE rabatt;

CREATE TABLE kategorie (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT(45) NOT NULL,
	altersbeschraekung INTEGER NOT NULL  
);

CREATE TABLE pfandstufe (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	bezeichnung TEXT(100) NOT NULL,
	gebuehr REAL NOT NULL
);

CREATE TABLE mehrwertsteuer(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bezeichnung TEXT(45) NOT NULL,
    steuersatz REAL NOT NULL
);

CREATE TABLE tags (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	tags TEXT(45) NOT NULL
);

CREATE TABLE tagszuweisung (
	tags_id INTEGER, 
	produkt_id INTEGER,
	CONSTRAINT tagszuweisung_1 PRIMARY KEY (tags_id, produkt_id),
	CONSTRAINT fk_tagszuweisung_1 FOREIGN KEY (tags_id) REFERENCES tags (id),
	CONSTRAINT fk_tagszuweisung_2 FOREIGN KEY (produkt_id) REFERENCES produkt (id)
);

CREATE TABLE produkt (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT(45) NOT NULL,
	nettopreis REAL NOT NULL,
	beschreibung TEXT(200) NOT NULL,
	pfandstufe_id INTEGER NOT NULL,
	mehrwertsteuer_id INTEGER NOT NULL,
	kategorie_id INTEGER NOT NULL,
	CONSTRAINT fk_produkt_1 FOREIGN KEY (pfandstufe_id) REFERENCES pfandstufe (id),
	CONSTRAINT fk_produkt_2 FOREIGN KEY (mehrwertsteuer_id) REFERENCES mehrwertsteuer (id),
	CONSTRAINT fk_produkt_3 FOREIGN KEY (kategorie_id) REFERENCES kategorie (id)
);


CREATE TABLE unsere_empfehlungen(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produkt_id INTEGER NOT NULL,
    CONSTRAINT fk_unsere_empfehlungen_1 FOREIGN KEY(produkt_id) REFERENCES produkt(id)
);

CREATE TABLE top10(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produkt_id INTEGER NOT NULL,
    CONSTRAINT fk_top10_1 FOREIGN KEY(produkt_id) REFERENCES produkt(id)
);

CREATE TABLE rabatt (
id INTEGER PRIMARY KEY AUTOINCREMENT,
faktor REAL NOT NULL
);

CREATE TABLE angebot(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rabatt_id INTEGER NOT NULL,
    produkt_id INTEGER NOT NULL,
    CONSTRAINT fk_angebot_1 FOREIGN KEY(produkt_id) REFERENCES produkt(id),
    CONSTRAINT fk_angebot_2 FOREIGN KEY(rabatt_id) REFERENCES rabatt(id)
);

CREATE TABLE produktbild(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bildpfad TEXT(45) NOT NULL,
    produkt_id INTEGER NOT NULL,
    CONSTRAINT fk_produktbild_1 FOREIGN KEY(produkt_id) REFERENCES produkt(id)
);

CREATE TABLE land (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bezeichnung TEXT(45) NOT NULL
);

CREATE TABLE adresse (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    strasse TEXT(45) NOT NULL,
    hausnummer TEXT(45) NOT NULL,
    plz INTEGER NOT NULL,
    ort TEXT(45) NOT NULL,
    land_Id INTEGER NOT NULL,
    CONSTRAINT fk_adresse_1 FOREIGN KEY (land_Id) REFERENCES land (id)
);

CREATE TABLE person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Anrede TEXT(45) NOT NULL,
    Vorname TEXT(45) NOT NULL,
    Name TEXT(45) NOT NULL
);

CREATE TABLE kunde (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT(45) NOT NULL,
    geburtsdatum TEXT(45) NOT NULL,
    person_Id INTEGER NOT NULL,
    CONSTRAINT fk_kunde_1 FOREIGN KEY (person_Id) REFERENCES person (id)
);

CREATE TABLE rechnungsadresse (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    kunde_Id INTEGER NOT NULL,
    adresse_Id INTEGER NOT NULL,
    CONSTRAINT fk_Rechnungsadresse_1 FOREIGN KEY (kunde_Id) REFERENCES kunde (id),
    CONSTRAINT fk_Rechnungsadresse_2 FOREIGN KEY (adresse_Id) REFERENCES adresse (id)
);

CREATE TABLE lieferadresse (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    person_Id INTEGER NOT NULL,
    adresse_Id INTEGER NOT NULL,
    CONSTRAINT fk_Lieferadresse_1 FOREIGN KEY (person_Id) REFERENCES person (id),
    CONSTRAINT fk_Lieferadresse_2 FOREIGN KEY (adresse_Id) REFERENCES adresse (id)
);

CREATE TABLE zahlungsart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bezeichnung TEXT(45) NOT NULL
);

CREATE TABLE bestellung (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Bestellzeitpunkt TEXT(45) NOT NULL,
    Zahlungsart_Id INTEGER NOT NULL,
    Lieferadresse_Id INTEGER NOT NULL,
    Rechnungsadresse_Id INTEGER NOT NULL,
    CONSTRAINT fk_bestellung_1 FOREIGN KEY (Zahlungsart_Id) REFERENCES zahlungsart (id),
    CONSTRAINT fk_bestellung_2 FOREIGN KEY (lieferadresse_Id) REFERENCES lieferadresse (id),
    CONSTRAINT fk_bestellung_3 FOREIGN KEY (Rechnungsadresse_Id) REFERENCES Rechnungsadresse (id)
);

CREATE TABLE bestellposition (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	menge INTEGER NOT NULL,
	produkt_id INTEGER NOT NULL,
	bestellung_id INTEGER NOT NULL,
	CONSTRAINT fk_bestellposition_1 FOREIGN KEY (produkt_id) REFERENCES produkt (id),
	CONSTRAINT fk_bestellposition_2 FOREIGN KEY (bestellung_id) REFERENCES bestellung (id)
);

