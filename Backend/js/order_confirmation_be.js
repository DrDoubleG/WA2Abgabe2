
$(document).ready(function () {
    console.log("Document ready, loading data from Service");
				$.ajax({
						url: "http://localhost:8000/api/bestellung/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var resp = response.daten[0];
						bestell_id = resp.id;
						console.log(bestell_id);
    $.ajax({
        url: "http://localhost:8000/api/bestellposition/produkt/" + bestell_id,
        method: "get",
		async: false,
        dataType: "json"
    }).done(function (response) {
        console.log("Data loaded successfully");
        console.log(response);

        var content = '';



        // neuen code zusammensetzen

        for (i = 0; i < response.daten.length; i++) {
            var obj = response.daten[i];
            var bruttopreis;
            bruttopreis = (obj.produkt.bruttopreis.toString()).replace(".", ",");

			console.log(obj.produkt.bilder.bildpfad);
               content += '<div class="conatiner-fluid col-12">';
			   content += '<div class="row mt-5">';
			   content += '<div class="col-2">';
			   content += '<a href="product-detail.html" data-toggle="tooltip" title="Produktdetails"><img src="' + obj.produkt.bilder.bildpfad + '" class="pictures" alt="Produkt"></a>';
			   content += '</div>';
			   content += '<div class="col-6" id="product_container">';
			   content += '<p id="product_discribtion">' + obj.produkt.name + '</p>';
			   content += '</div>';
			   content += '<div class="col-2" id="product_container">';
			   content += '<p id="product_discribtion">' + obj.menge+ '</p>';
			   content += '</div>';
			   content += '<div class="col-2" id="product_container">';
			   content += '<p id="product_discribtion">' + obj.produkt.bruttopreis + ' €</p>';
			   content += '</div>';
			   content += '</div>';
			   content += '</div>';
				

            };
			content += '<p class="underscored"></p>';
			content += '<div class="conatiner-fluid col-12">';
			content += '<div class="row mt-5">';
			content += '<div class="col-10">';
			content += '</div>';
			content += '<div class="col-2">';
			content += '<p id="all_price">18,99 €</p>';
			content += '</div>';
			content += '</div>';
			content += '</div>';
			content += '<div class="conatiner-fluid col-12">';
			content += '<div class="row">';
			content += '<div class="col-4 ml-5">';
			content += '<h3 class="mb-3"> Deine Lieferadresse:</h3>';
			content += '<h5> ' + obj.bestellung.lieferadresse.person.vorname +' ' +obj.bestellung.lieferadresse.person.name + '</h5>';
			content += '<h5> ' + obj.bestellung.lieferadresse.adresse.strasse +' ' + obj.bestellung.lieferadresse.adresse.hausnummer +'</h5>';
			content += '<h5>' + obj.bestellung.lieferadresse.adresse.ort +' ' + obj.bestellung.lieferadresse.adresse.plz +' </h5>';
			content += '</div>';
			content += '<div class="col-4 ml-5">';
			content += '<h3 class="mb-3"> Deine Rechnungsadresse:</h3>';
			content += '<h5> ' + obj.bestellung.rechnungsadresse.kunde.person.vorname +' ' +obj.bestellung.rechnungsadresse.kunde.person.name + '</h5>';
			content += '<h5>' + obj.bestellung.rechnungsadresse.adresse.strasse +' ' + obj.bestellung.rechnungsadresse.adresse.hausnummer +'</h5>';
			content += '<h5>' + obj.bestellung.rechnungsadresse.adresse.ort +' ' + obj.bestellung.rechnungsadresse.adresse.plz +'</h5>';
			content += '</div>';
			content += '</div>';
			content += '</div>';



		
            $('#lastTarget').html(content);
		});
        
	});
	deleteItem();
	
});

function deleteItem() {
  localStorage.removeItem("warenkorb");
}
 
 