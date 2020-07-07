INSERT INTO pfandstufe (bezeichnung, gebuehr) VALUES ('Pfandfrei',0.00);
INSERT INTO pfandstufe (bezeichnung, gebuehr) VALUES ('PET-Flaschen/Aluminium-Getraenkedosen/Einweg-Glasflaschen',0.25);
INSERT INTO pfandstufe (bezeichnung, gebuehr) VALUES ('Bier',0.08);
INSERT INTO pfandstufe (bezeichnung, gebuehr) VALUES ('Plastikflaschen/Buegelflaschen/Brunnenflaschen',0.15);
INSERT INTO pfandstufe (bezeichnung, gebuehr) VALUES ('Schweppes',0.10);


INSERT INTO kategorie (name, altersbeschraekung) VALUES ('ALKOHOLFREI',0);
INSERT INTO kategorie (name, altersbeschraekung) VALUES ('BIER',16);
INSERT INTO kategorie (name, altersbeschraekung) VALUES ('WEIN',16);
INSERT INTO kategorie (name, altersbeschraekung) VALUES ('SPIRITUOSEN',18);

INSERT INTO mehrwertsteuer (bezeichnung, steuersatz) VALUES ('Mineralwasser',0.07);
INSERT INTO mehrwertsteuer (bezeichnung, steuersatz) VALUES ('Getraenke',0.19);

INSERT INTO zahlungsart (bezeichnung) VALUES ('Paypal');
INSERT INTO zahlungsart (bezeichnung) VALUES ('Auf Rechnung');

INSERT INTO land (bezeichnung) VALUES ('Deutschland');
INSERT INTO land (bezeichnung) VALUES ('Oesterreich');
INSERT INTO land (bezeichnung) VALUES ('Schweiz');

INSERT INTO tags (tags) VALUES ('wasser');				
INSERT INTO tags (tags) VALUES ('limonade');			
INSERT INTO tags (tags) VALUES ('energy drink');
INSERT INTO tags (tags) VALUES ('cola');

INSERT INTO tags (tags) VALUES ('bier');				
INSERT INTO tags (tags) VALUES ('mixbier');				

INSERT INTO tags (tags) VALUES ('weisswein');			
INSERT INTO tags (tags) VALUES ('rotwein');				
INSERT INTO tags (tags) VALUES ('rosewein');			

INSERT INTO tags (tags) VALUES ('vodka');				
INSERT INTO tags (tags) VALUES ('gin');						
INSERT INTO tags (tags) VALUES ('brantwein');			

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bad Brambach Mineralwasser Medium 0,25l',0.59,'Natuerliches Bad Brambacher Mineralwasser mit wenig Kohlensaeure fuer den zarten, prickelnden Genuss.',4,1,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Afri Cola 0,2l',0.79,'Macht wach. Macht aufmerksam. Macht einzigartig. afri belebt Koerper und Geist. Der Langzeitkick mit Sofortwirkung. Das Original.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('28 Black Absolute Zero Guava-Passion Fruit Energy Drink 0,25L ',1.35,'28 BLACK Absolute Zero Guava-Passion Fruit kein Zucker, keine Kalorien, voller Geschmack. Vegan, laktose- und glutenfrei, kein Taurin, keine Konservierungsstoffe.',2,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('28 Black Sour Cherry Energy Drink 0,25L ',1.35,'28 BLACK Sour Cherry  Der Energy Drink mit dem sauer-prickelnden Geschmack der Kirsche. Vegan, laktose- und glutenfrei, kein Taurin, keine Konservierungsstoffe.',2,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bad Brambach Mineralwasser Spritzig 0,70L',0.92,'Natuerliches Bad Brambacher Mineralwasser mit Kohlensaeure, anregend und voller Frische.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bionade Holunder 0,33L ',0.99,'"Unsere Rote" - wie wir Bionade Holunder bei uns liebevoll nennen - ist die beliebteste Sorte. Das liegt natuerlich vor allem am feinherbfruchtigen Geschmack, aber auch optisch kann man an ihr einfach nicht vorbeischauen. Denn die reifen, saftigen Beeren von unseren Bio-Bauern aus der Rh?n sorgen fuer einen tollen intensiven roten Farbton - und das natuerlich ganz ohne zusaetliche Farbstoffe. Inzwischen kommen uebrigens nahezu 100 Prozent des fuer unsere BIONADE-Produktion benoetigten Holunders aus dem Biosphaerenreservat Rhoen, direkt vor unserer Haustuer.',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bundaberg Ginger Brew 0,33L ',1.65,'Alkoholfreies Erfrischungsgetraenk aus Australien mit Ingwer-Geschmack, nach einem alten Familienrezept hergestellt.',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Einsiedler Fassbrause Himbeer 0,33L',0.65,'"Die schmeckt genau wie frueher..." Der prickelnd-frische Geschmack erfreut Kinder und laesst bei Erwachsenen Kindheitserinnerungen wach werden. Gut gekuehlt ist Einsiedler Fassbrause der ideale sommerliche Durstloescher fuer die ganze Familie. Charakteristik vollfruchtiger Himbeergeschmack, hellrote Farbe',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Eizbach Cryztal Cola 0,33L',1.17,'Frisch aus unserer Cryztal Cola Kueche - klarer kann eine Cola nicht sein. Ob pur, oder gemixt in Deinem Drink. Nimm einen Schluck und die Welt geht klar.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Fritz Kola 0,20L ',0.83,'Eine der aufgewecktesten Kolas der Welt. Mit echter Kolanuss und natuerlichem Koffein - der unverwechselbare Wachmacher. - schmeckt super - vegan - enthaelt natuerliches Koffein',4,2,1);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Augustiner Edelstoff 0,50L',1.29,'Ein helles Exportbier, weich, spritzig und frisch zugleich, aus edelsten Rohstoffen gebraut. Das Spitzenerzeugnis altbayerischer Braukunst. Ein Hochgenuss fuer jeden Bierkenner.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bayreuther Hell 0,50L',1.19,'Gut-hopfiges Weissbier mit Bio-Hopfen',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Corona Extra 0,355L',1.42,'Die malzig-suessliche Wuerze, als auch die elegante Mais- und Zitrusnote erwecken Erinnerungen an den letzten Urlaub am Meer. Corona Extra sorgt f?r Beach Feeling pur im Alltag.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Desperados 0,33L',1.75,'Desperados-Bier',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Eibauer Zwickil 0,5L',1.45,'Oberlausitzer Braukunst mit dem feinen Unterschied. Eibauer Zwick`l - der besondere Biergenuss fuer Liebhaber unfiltrieter Bierspezialitaeten. Brauart: untergaerig',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Franziskaner Hefeweizen Hell 0,50L ',1.10,'Franziskaner Hefe-Weissbier Naturtrueb ist ein natuerlicher und eleganter Weissbierprotagonist aus Bayern mit einem ueppig weissen Schaum. Das kupfergoldene Weizenbier mit hefetrueber Opaleszenz entfaltet einen aromatischen Duft mit harmonischer Frucht in dem Bananen und Zitrusfruechte gruessen lassen. Durch den hoeheren Kohlensaeuregehalt ist es besonders spritzig und perlend. Seinen unverwechselbaren besonders frischen, dezent wuerzigen und fruchtigen Geschmack mit mild-suesslichem Ausklang entfaltet Franziskaner Hefe-Weissbier Naturtrueb beim genussvollen Herunterschlucken. Das naturtruebe Franziskaner ist genau das Richtige fuer die genussvolle und entspannte Auszeit nach der Arbeit, in der Bar, im Restaurant zum Essen oder zuhause. Eigenst?ndig, ehrlich und sympathisch. Franziskaner Naturtrueb passt hervorragend zu Fleischgerichten - am besten direkt vom Grill.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Gessner Premium Pils Buegelverschluss 0,50L ',0.95,'- ein edles, elegantes Premium Pils von hoechster Qualitaet - feinherb, harmonisch im Geschmack - gebraut mit kristallklarem Wasser des Thueringer Schiefergebirges und besten Rohstoffen - eine besondere Pilsgeneration in der Buegelverschkussflasche - gebraut nach dem deutschen Reinheitsgebot',4,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Guinness Extra Stout 0,33L ',1.17,'Das Original mit dem alles gegann, 250 Jahre Braukunst in einer Flasche. Einfach oeffnen und eintigartige Frische geniessen. Eine prickelnd-herbe Liaison aus geroesteter Gerste und Hopfen.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Loesch Zwerg Wuerzig 0,33L',0.95,'Der wuerzige Gaumenschmeichler! Drin sind reinstes Wasser, streng kontrolliertes Gerstenmalz und ausschliesslich Aromahopfen aus der Hallertau. Loesch-Zwerg wuerzig wird mit einem speziellen Hefe-Stamm gebraut. Dieser setzt bei der offenen Bottichgaerung besonders aromatische Geschmackskomponenten frei. Nur dadurch erhaelt der Loesch-Zwerg seinen wuerzig-milden Biercharakter.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Paulaner Original Muenchner Hell 0,50L ',1.20,'Klassiker in Muenchen und bayerisches Grundnahrungsmittel schlechthin. Klar und hellgolden im Glas hochperlend, von hell weissem Schaum gekroent, wird es am liebsten traditionell unter Kastanien getrunken. Ein ausgesprochen sueffiges Bier: mild, elegant-malzig, mit einer leichten Suesse. Und einem leisen "Servus" vom Hopfen im Nachhall. Da gruesst das bayrische Lebensgefuehl. Der Klassiker begleitet gerne aromatische Gerichte mit seinen feinen Geschmacksnoten. Daher sollte man sich auf keinen Fall die delikate Verbindung von unserem Hellen mit saftigen SpareRibs entgehen lassen. Man wird k?stlich belohnt. Damit das Geschmackserlebnis perfekt wird, empfehlen wir das M?nchner Hell mit einer Serviertemperatur von 7 Grad zu reichen.',3,2,2);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('African Pride Wines Cabernet Sauvignon Footprint trocken 0,75L ',5.99,'gut ausbalanciert mit integrierten, runden Tanninen und sauberem Abgang',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Alex Sensacin Rosé DO Viura Navarra 0,75L',5.99,'fruchtig und langanhaltend',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bardolino Chiaretto Classico DOC Fratelli 0,75L',6.99,'frisch, delikat, fruchtig und lebendig',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Baron Liebenstein Dornfelder Halbtrocken 0,75L',3.49,'kraftvoller und komplexer Wein mit samtigen Tanninen',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bender Wine Der Weiss Bender Deutscher Qualitaetswein trocken 0,75L',6.99,'ein fruchtiger Mix aus heimischer gelber Frucht und einem Touch Exotik, nicht aufdringlich und nicht zu dezent',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bischoffinger Weissr Burgunder QbA Das Tor zum Kaiserstuhl Halbtrocken 0,75L',4.99,'fruchtig, charaktervoll, klarer Burgundertyp, feine Herbe',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Cabernet Riserva Alto Adige Alois Lageder 0,75L',5.99,'kraeftige Struktur, fleischiger, runder, noch recht jugendlicher Geschmack; langer Nachhall und gute Frische sanfte Pressung der Trauben, Maischegaerung ueber 15 Tage und biologischer Saeureabbau im Stahltank; Ausbau waehrend achtzehn Monaten in Barriques',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Chardonnay Weston Golden State Vintners 0,75L',5.79,'frisch, klare Frucht, angenehmer Nachhall von tropischen Fruchtnoten und einer harmonischen, frischen Suesse',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Chenet Blanc de Blanc Landwein Trocken 0,75L',3.79,'frisch und lebhaft am Gaumen, perfekte Balance zwischen Frucht und Suesse',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Don Zoilo W&H Collection Sherry Amontillado 12 Jahre Medium Dry 0,75L ',5.99,'delikat, reif koestlich, trocken- aromatisch, elegant, rassig und stilvoll',1,2,3);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absolut Vodka Citron 1,0L 40% vol',19.99,'Zitronenessenzen und Zitrusnoten geben eine erstaunliche Frische',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absolut Vodka 0,7L 40% vol ',19.99,'jeder Tropfen Absolut Vodka wird ausschliesslich in der traditionellen Destillerie in Oehus produziert; taeglich wird hier Winterweizen geschrotet und in heissem Wasser erhitzt; beim Erhitzen wird die entscheidende Staerke im Korn freigesetzt und durch zugefuegte Enzyme in Zucker aufgespalten; die Erwaermung des Gemisches findet bis 95? C statt, Bakterien werden entfernt und die Staerke laest sich aus dem Weizen; um den enthaltenen Zucker in Ethanol zu wandeln, wird das Weizengemisch mit Hefe angereichert, der Alkoholgehalt steigt auf 8%; die Umwandlung zur weit hochprozentigeren Spirituose mit 85 - 90% Alkohol, erfolgt durch eine Erstdestillation; vollstaendig entfernt werden Fremdstoffe und Geschmack verfaelschende Substanzen im naechsten Produktionsschritt; die Spirituose wird nicht nur drei- oder viermal destilliert, sondern durchlaeuft ein kontinuierliches, ?ber 100faches Destillationsverfahren; das Ergebnis ist eine reine Spirituose mit 96% Alkohol die nun mit Wasser aus dem tiefen Brunnen von Oehus abgemischt wird; durch diesen Prozess entsteht die einmalige Reinheit und Klarheit und der perfekte Geschmack von Absolut Vodka mit einem endgueltigen Alkoholgehalt von 40%; die Herstellung an nur einem Ort, in dem nur lokale Rohstoffe verarbeitet werden, ermoeglicht die vollstaendige Kontrolle des gesamten Produktionsprozesses und garantiert hoechste Qualitaetsstandards; in einem Jahr verlassen mehr als 100 Containerschiffe beladen mit Absolut Vodka den kleinen Hafen von Oehus',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('1800 Tequila Blanco 0,7L 38% vol',28.99,'ausgewogener Geschmack mit einem Hauch von suessen Fruechten und Pfeffer',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('42 Below Wodka 0,7L 42% vol',19.49,'weicher, komplexer Geschmack mit einer leichten Note von Anis und warmen Korn gepaart mit einem langen Abgang mit einem Hauch Suesse; 42 Below ist der einzige in Neuseeland hergestellte Vodka, die natuerlich reinen Zutaten, wie das neuseelaendische Quellwasser des vulkanischen Plateaus der neuseelaendischen Nordinsel und der 100%ige Weizen machen ihn zu einem aussergewoehnlichen Geschmackserlebnis; die Reinheit und Qualitaet von 42 Below zeichnet sich durch eine vierfache Destillation aus',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absinth Tabu 0,7L 55% vol ',26.49,'der Klassiker unter den Absinthen; das Geheimnis verbirgt sich hinter den ausgewaehlten Zutaten wie Kraeutern, Anis und Artemisia Absinthium',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Abuelo Rum 12 Jahre GP 0,7L 40% vol ',47.49,'buttrig weich mit Schokoladen- und Vanilletoenen, sehr langer Nachklang mit Holz, Toffee, Leder und Vanille',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Aalborg Jubilaeums Akvavit 1,0L 42% vol',24.99,'schmeckt wuerzig nach Dill und Koriander',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Adler Berlin Dry Gin 0,70L 42% vol',31.99,'sehr mild und ausgewogen; Reifung des Destillates fuer 3-8 Monate in Steingutfuessern, damit sich die Aromen harmonisch verbinden koennen',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Alpenschnaps Marillen 1,0L 35% vol',15.99,'ausgewogen, ausgepraegte Aprikosenfruchtnote mit feiner Suesse abgestimmt, fruchtig herbes Finale',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Asbach Uralt 1,0L 36% vol',18.99,'nach sorgfaeltiger, mehrfacher Destillation und verfeinert durch das geheime Asbach Reife- und Veredelungsverfahren reift Asbach in mehrjaehriger Lagerung in kleinen Faessern aus dem edlen Holz der Limousineiche, hier entwickelt sich sein abgerundeter, einzigartiger Geschmack',1,2,4);

INSERT INTO tagszuweisung VALUES (1,1);
INSERT INTO tagszuweisung VALUES (4,2);
INSERT INTO tagszuweisung VALUES (3,3);
INSERT INTO tagszuweisung VALUES (3,4);
INSERT INTO tagszuweisung VALUES (1,5);
INSERT INTO tagszuweisung VALUES (2,6);
INSERT INTO tagszuweisung VALUES (2,7);
INSERT INTO tagszuweisung VALUES (2,8);
INSERT INTO tagszuweisung VALUES (4,9);
INSERT INTO tagszuweisung VALUES (4,10);

INSERT INTO tagszuweisung VALUES (5,11);
INSERT INTO tagszuweisung VALUES (5,12);
INSERT INTO tagszuweisung VALUES (6,13);
INSERT INTO tagszuweisung VALUES (6,14);
INSERT INTO tagszuweisung VALUES (5,15);
INSERT INTO tagszuweisung VALUES (5,16);
INSERT INTO tagszuweisung VALUES (5,17);
INSERT INTO tagszuweisung VALUES (5,18);
INSERT INTO tagszuweisung VALUES (5,19);
INSERT INTO tagszuweisung VALUES (5,20);

INSERT INTO tagszuweisung VALUES (8,21);
INSERT INTO tagszuweisung VALUES (9,22);
INSERT INTO tagszuweisung VALUES (9,23);
INSERT INTO tagszuweisung VALUES (8,24);
INSERT INTO tagszuweisung VALUES (7,25);
INSERT INTO tagszuweisung VALUES (7,26);
INSERT INTO tagszuweisung VALUES (8,27);
INSERT INTO tagszuweisung VALUES (7,28);
INSERT INTO tagszuweisung VALUES (7,29);
INSERT INTO tagszuweisung VALUES (8,30);

INSERT INTO tagszuweisung VALUES (10,31);
INSERT INTO tagszuweisung VALUES (10,32);
INSERT INTO tagszuweisung VALUES (12,33);
INSERT INTO tagszuweisung VALUES (10,34);
INSERT INTO tagszuweisung VALUES (12,35);
INSERT INTO tagszuweisung VALUES (12,36);
INSERT INTO tagszuweisung VALUES (12,37);
INSERT INTO tagszuweisung VALUES (11,38);
INSERT INTO tagszuweisung VALUES (12,39);
INSERT INTO tagszuweisung VALUES (12,40);

INSERT INTO unsere_empfehlungen (produkt_id) VALUES (11);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (21);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (34);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (28);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (22);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (17);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (29);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (35);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (39);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (20);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (16);
INSERT INTO unsere_empfehlungen (produkt_id) VALUES (18);

INSERT INTO top10 (produkt_id) VALUES (1);
INSERT INTO top10 (produkt_id) VALUES (20);
INSERT INTO top10 (produkt_id) VALUES (30);
INSERT INTO top10 (produkt_id) VALUES (15);
INSERT INTO top10 (produkt_id) VALUES (26);
INSERT INTO top10 (produkt_id) VALUES (38);
INSERT INTO top10 (produkt_id) VALUES (9);
INSERT INTO top10 (produkt_id) VALUES (27);
INSERT INTO top10 (produkt_id) VALUES (33);
INSERT INTO top10 (produkt_id) VALUES (40);

INSERT INTO rabatt(faktor) VALUES (0.9);
INSERT INTO rabatt(faktor) VALUES (0.8);


INSERT INTO angebot (rabatt_id,produkt_id) VALUES (1,1);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (2,2);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (1,10);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (2,11);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (1,21);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (2,22);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (1,31);
INSERT INTO angebot (rabatt_id,produkt_id) VALUES (2,32);



INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei1.jpg',1);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei2.jpg',2);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei3.jpg',3);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei4.jpg',4);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei5.jpg',5);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei6.jpg',6);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei7.jpg',7);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei8.jpg',8);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei9.jpg',9);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Alkoholfrei/frei10.jpg',10);

INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier1.jpg',11);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier2.jpg',12);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier3.jpg',13);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier4.jpg',14);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier5.jpg',15);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier6.jpg',16);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier7.jpg',17);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier8.jpg',18);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier9.jpg',19);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Bier/bier10.jpg',20);

INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein1.jpg',21);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein2.jpg',22);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein3.jpg',23);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein4.jpg',24);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein5.jpg',25);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein6.jpg',26);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein7.jpg',27);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein8.jpg',28);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein9.jpg',29);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Wein/wein10.jpg',30);

INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit1.jpg',31);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit2.jpg',32);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit3.jpg',33);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit4.jpg',34);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit5.jpg',35);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit6.jpg',36);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit7.jpg',37);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit8.jpg',38);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit9.jpg',39);
INSERT INTO produktbild (bildpfad,produkt_id) VALUES ('../../backend/pictures//Spirituosen/spirit10.jpg',40);

INSERT INTO adresse (strasse,hausnummer,plz,ort,land_Id) VALUES ('Lortzingstra?e','25','72458','Albstadt',1);
INSERT INTO adresse (strasse,hausnummer,plz,ort,land_Id) VALUES ('Mozartstra?e','7','72458','Albstadt',1);

INSERT INTO person (anrede, vorname, name) VALUES ('Herr', 'Peter', 'Schwamborn');
INSERT INTO person (anrede, vorname, name) VALUES ('Frau', 'Katrin', 'Schwamborn');

INSERT INTO kunde (email, geburtsdatum, person_Id) VALUES ('k.schwamborn@gmx.de','12.12.1968',2);

INSERT INTO rechnungsadresse (kunde_Id, adresse_Id) VALUES (1,2);

INSERT INTO lieferadresse (person_Id, adresse_Id) VALUES (1,2);

INSERT INTO bestellung (bestellzeitpunkt,zahlungsart_Id,lieferadresse_Id,rechnungsadresse_Id) VALUES ('07.06.2020',1,1,1);

INSERT INTO bestellposition (menge,produkt_id, bestellung_id ) VALUES (2,1,1);

select *
from produkt;

