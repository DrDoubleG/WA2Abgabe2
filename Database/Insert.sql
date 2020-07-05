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

INSERT INTO tags (tags) VALUES ('fkfkfkfk');
INSERT INTO tags (tags) VALUES ('fswwwefwef');

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bad Brambach Mineralwasser Medium 20x0,25L',11.99,'Natürliches Bad Brambacher Mineralwasser mit wenig Kohlensäure für den zarten, prickelnden Genuss.',4,1,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Afri Cola 24x0,20L',18.99,'Macht wach. Macht aufmerksam. Macht einzigartig. afri belebt Körper und Geist. Der Langzeitkick mit Sofortwirkung. Das Original.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('28 Black Absolute Zero Guava-Passion Fruit Energy Drink 24x0,25L ',32.49,'28 BLACK Absolute Zero Guava-Passion Fruit kein Zucker, keine Kalorien, voller Geschmack. Vegan, laktose- und glutenfrei, kein Taurin, keine Konservierungsstoffe.',2,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('28 Black Sour Cherry Energy Drink 24x0,25L ',32.49,'28 BLACK Sour Cherry  Der Energy Drink mit dem sauer-prickelnden Geschmack der Kirsche. Vegan, laktose- und glutenfrei, kein Taurin, keine Konservierungsstoffe.',2,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bad Brambach Mineralwasser Spritzig 12x0,70L',10.99,'Natürliches Bad Brambacher Mineralwasser mit Kohlensäure, anregend und voller Frische.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bionade Holunder 24x0,33L ',23.99,'"Unsere Rote" - wie wir Bionade Holunder bei uns liebevoll nennen - ist die beliebteste Sorte. Das liegt natürlich vor allem am feinherb.fruchtigen Geschmack, aber auch optisch kann man an ihr einfach nicht vorbeischauen. Denn die reifen, saftigen Beeren von unseren Bio-Bauern aus der Rhön sorgen für einen tollen intensiven roten Farbton - und das natürlich ganz ohne zusätliche Farbstoffe. Inzwischen kommen übrigens nahezu 100 Prozent des für unsere BIONADE-Produktion benötigten Holunders aus dem Biosphärenreservat Rhön, direkt vor unserer Haustür.',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bundaberg Ginger Brew 20x0,33L ',32.99,'Alkoholfreies Erfrischungsgetränk aus Australien mit Ingwer-Geschmack, nach einem alten Familienrezept hergestellt.',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Einsiedler Fassbrause Himbeer 20x0,33L',12.99,'"Die schmeckt genau wie früher..." Der prickelnd-frische Geschmack erfreut Kinder und lässt bei Erwachsenen Kindheitserinnerungen wach werden. Gut gekühlt ist Einsiedler Fassbrause der ideale sommerliche Durstlöscher für die ganze Familie. Charakteristik vollfruchtiger Himbeergeschmack, hellrote Farbe',3,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Eizbach Cryztal Cola 24x0,33L',27.99,'Frisch aus unserer Cryztal Cola Küche - klarer kann eine Cola nicht sein. Ob pur, oder gemixt in Deinem Drink. Nimm einen Schluck und die Welt geht klar.',4,2,1);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Fritz Kola 24x0,20L ',19.99,'Eine der aufgewecktesten Kolas der Welt. Mit echter Kolanuss und natürlichem Koffein - der unverwechselbare Wachmacher. - schmeckt super - vegan - enthält natürliches Koffein',4,2,1);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Augustiner Edelstoff 20x0,50L',25.99,'Ein helles Exportbier, weich, spritzig und frisch zugleich, aus edelsten Rohstoffen gebraut. Das Spitzenerzeugnis altbayerischer Braukunst. Ein Hochgenuss für jeden Bierkenner.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bayreuther Hell 20x0,50L',23.99,'Gut-hopfiges Weißbier mit Bio-Hopfen',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Corona Extra 24x0,355L',33.99,'Die malzig-süßliche Würze, als auch die elegante Mais- und Zitrusnote erwecken Erinnerungen an den letzten Urlaub am Meer. Corona Extra sorgt für Beach Feeling pur im Alltag.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Desperados 24x0,33L',41.99,'Desperados-Bier',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Eibauer Zwickil 11x0,5L',15.99,'Oberlausitzer Braukunst mit dem feinen Unterschied. Eibauer Zwick`l - der besondere Biergenuß für Liebhaber unfiltrieter Bierspezialitäten. Brauart: untergärig',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Franziskaner Hefeweizen Hell 20x0,50L ',21.99,'Franziskaner Hefe-Weissbier Naturtrüb ist ein natürlicher und eleganter Weissbierprotagonist aus Bayern mit einem üppig weißen Schaum. Das kupfergoldene Weizenbier mit hefetrüber Opaleszenz entfaltet einen aromatischen Duft mit harmonischer Frucht in dem Bananen und Zitrusfrüchte grüßen lassen. Durch den höheren Kohlensäuregehalt ist es besonders spritzig und perlend. Seinen unverwechselbaren besonders frischen, dezent würzigen und fruchtigen Geschmack mit mild-süßlichem Ausklang entfaltet Franziskaner Hefe-Weissbier Naturtrüb beim genussvollen Herunterschlucken. Das naturtrübe Franziskaner ist genau das Richtige für die genussvolle und entspannte Auszeit nach der Arbeit, in der Bar, im Restaurant zum Essen oder zuhause. Eigenständig, ehrlich und sympathisch. Franziskaner Naturtrüb passt hervorragend zu Fleischgerichten - am besten direkt vom Grill.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Gessner Premium Pils Bügelverschluß 20x0,50L ',18.99,'- ein edles, elegantes Premium Pils von höchster Qualität - feinherb, harmonisch im Geschmack - gebraut mit kristallklarem Wasser des Thüringer Schiefergebirges und besten Rohstoffen - eine besondere Pilsgeneration in der Bügelverschkussflasche - gebraut nach dem deutschen Reinheitsgebot',4,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Guinness Extra Stout 24x0,33L ',27.99,'Das Original mit dem alles gegann, 250 Jahre Braukunst in einer Flasche. Einfach öffnen und eintigartige Frische genießen. Eine prickelnd-herbe Liaison aus gerösteter Gerste und Hopfen.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Lösch Zwerg Würzig 20x0,33L',18.99,'Der würzige Gaumenschmeichler! Drin sind reinstes Wasser, streng kontrolliertes Gerstenmalz und ausschließlich Aromahopfen aus der Hallertau. Lösch-Zwerg würzig wird mit einem speziellen Hefe-Stamm gebraut. Dieser setzt bei der offenen Bottichgärung besonders aromatische Geschmackskomponenten frei. Nur dadurch erhält der Lösch-Zwerg seinen würzig-milden Biercharakter.',3,2,2);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Paulaner Original Münchner Hell 20x0,50L ',23.99,'Klassiker in München und bayerisches Grundnahrungsmittel schlechthin. Klar und hellgolden im Glas hochperlend, von hell weißem Schaum gekrönt, wird es am liebsten traditionell unter Kastanien getrunken. Ein ausgesprochen süffiges Bier: mild, elegant-malzig, mit einer leichten Süße. Und einem leisen "Servus" vom Hopfen im Nachhall. Da grüßt das bayrische Lebensgefühl. Der Klassiker begleitet gerne aromatische Gerichte mit seinen feinen Geschmacksnoten. Daher sollte man sich auf keinen Fall die delikate Verbindung von unserem Hellen mit saftigen SpareRibs entgehen lassen. Man wird köstlich belohnt. Damit das Geschmackserlebnis perfekt wird, empfehlen wir das Münchner Hell mit einer Serviertemperatur von 7 Grad zu reichen.',3,2,2);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('African Pride Wines Cabernet Sauvignon Footprint trocken 0,75L ',5.99,'gut ausbalanciert mit integrierten, runden Tanninen und sauberem Abgang',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Alex Sensacin Rosé DO Viura Navarra 0,75L',5.99,'fruchtig und langanhaltend',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bardolino Chiaretto Classico DOC Fratelli 0,75L',6.99,'frisch, delikat, fruchtig und lebendig',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Baron Liebenstein Dornfelder Halbtrocken 0,75L',3.49,'kraftvoller und komplexer Wein mit samtigen Tanninen',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bender Wine Der Weié Bender Deutscher Qualitätswein trocken 0,75L',6.99,'ein fruchtiger Mix aus heimischer gelber Frucht und einem Touch Exotik, nicht aufdringlich und nicht zu dezent',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Bischoffinger Weiér Burgunder QbA Das Tor zum Kaiserstuhl Halbtrocken 0,75L',4.99,'fruchtig, charaktervoll, klarer Burgundertyp, feine Herbe',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Cabernet Riserva Alto Adige Alois Lageder 0,75L',5.99,'kräftige Struktur, fleischiger, runder, noch recht jugendlicher Geschmack; langer Nachhall und gute Frische sanfte Pressung der Trauben, Maischegärung über 15 Tage und biologischer Säureabbau im Stahltank; Ausbau während achtzehn Monaten in Barriques',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Chardonnay Weston Golden State Vintners 0,75L',5.79,'frisch, klare Frucht, angenehmer Nachhall von tropischen Fruchtnoten und einer harmonischen, frischen Süße',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Chenet Blanc de Blanc Landwein Trocken 0,75L',3.79,'frisch und lebhaft am Gaumen, perfekte Balance zwischen Frucht und Süße',1,2,3);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Don Zoilo W&H Collection Sherry Amontillado 12 Jahre Medium Dry 0,75L ',5.99,'delikat, reif köstlich, trocken- aromatisch, elegant, rassig und stilvoll',1,2,3);

INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absolut Vodka Citron 1,0L 40% vol',19.99,'Zitronenessenzen und Zitrusnoten geben eine erstaunliche Frische',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absolut Vodka 0,7L 40% vol ',19.99,'jeder Tropfen Absolut Vodka wird ausschließlich in der traditionellen Destillerie in Åhus produziert; täglich wird hier Winterweizen geschrotet und in heißem Wasser erhitzt; beim Erhitzen wird die entscheidende Stärke im Korn freigesetzt und durch zugefügte Enzyme in Zucker aufgespalten; die Erwärmung des Gemisches findet bis 95° C statt, Bakterien werden entfernt und die Stärke löst sich aus dem Weizen; um den enthaltenen Zucker in Ethanol zu wandeln, wird das Weizengemisch mit Hefe angereichert, der Alkoholgehalt steigt auf 8%; die Umwandlung zur weit hochprozentigeren Spirituose mit 85 - 90% Alkohol, erfolgt durch eine Erstdestillation; vollständig entfernt werden Fremdstoffe und Geschmack verfälschende Substanzen im nächsten Produktionsschritt; die Spirituose wird nicht nur drei- oder viermal destilliert, sondern durchläuft ein kontinuierliches, über 100faches Destillationsverfahren; das Ergebnis ist eine reine Spirituose mit 96% Alkohol die nun mit Wasser aus dem tiefen Brunnen von Åhus abgemischt wird; durch diesen Prozess entsteht die einmalige Reinheit und Klarheit und der perfekte Geschmack von Absolut Vodka mit einem endgültigen Alkoholgehalt von 40%; die Herstellung an nur einem Ort, in dem nur lokale Rohstoffe verarbeitet werden, ermöglicht die vollständige Kontrolle des gesamten Produktionsprozesses und garantiert höchste Qualitätsstandards; in einem Jahr verlassen mehr als 100 Containerschiffe beladen mit Absolut Vodka den kleinen Hafen von Åhus',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('1800 Tequila Blanco 0,7L 38% vol',28.99,'ausgewogener Geschmack mit einem Hauch von süßen Früchten und Pfeffer',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('42 Below Wodka 0,7L 42% vol',19.49,'weicher, komplexer Geschmack mit einer leichten Note von Anis und warmen Korn gepaart mit einem langen Abgang mit einem Hauch Süße; 42 Below ist der einzige in Neuseeland hergestellte Vodka, die natürlich reinen Zutaten, wie das neuseeländische Quellwasser des vulkanischen Plateaus der neuseeländischen Nordinsel und der 100%ige Weizen machen ihn zu einem außergewöhnlichen Geschmackserlebnis; die Reinheit und Qualität von 42 Below zeichnet sich durch eine vierfache Destillation aus',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Absinth Tabu 0,7L 55% vol ',26.49,'der Klassiker unter den Absinthen; das Geheimnis verbirgt sich hinter den ausgewählten Zutaten wie Kräutern, Anis und Artemisia Absinthium',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Abuelo Rum 12 Jahre GP 0,7L 40% vol ',47.49,'buttrig weich mit Schokoladen- und Vanilletönen, sehr langer Nachklang mit Holz, Toffee, Leder und Vanille',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Aalborg Jubilaeums Akvavit 1,0L 42% vol',24.99,'schmeckt würzig nach Dill und Koriander',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Adler Berlin Dry Gin 0,70L 42% vol',31.99,'sehr mild und ausgewogen; Reifung des Destillates für 3-8 Monate in Steingutfässern, damit sich die Aromen harmonisch verbinden können',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Alpenschnaps Marillen 1,0L 35% vol',15.99,'ausgewogen, ausgeprägte Aprikosenfruchtnote mit feiner Süße abgestimmt, fruchtig herbes Finale',1,2,4);
INSERT INTO produkt (name,nettopreis,beschreibung,pfandstufe_id,mehrwertsteuer_id,kategorie_id) VALUES ('Asbach Uralt 1,0L 36% vol',18.99,'nach sorgfältiger, mehrfacher Destillation und verfeinert durch das geheime Asbach Reife- und Veredelungsverfahren reift Asbach in mehrjähriger Lagerung in kleinen Fässern aus dem edlen Holz der Limousineiche, hier entwickelt sich sein abgerundeter, einzigartiger Geschmack',1,2,4);

INSERT INTO tagszuweisung VALUES (1,1);

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

select *
from produkt;

