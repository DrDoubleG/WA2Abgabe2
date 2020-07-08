$(document).ready(function () {
    console.log("Document ready, loading data from Service");

    $.ajax({
        url: "http://localhost:8000/api/produkt/gibkategorie/4",
        method: "get",
        dataType: "json"
    }).done(function (response) {
        console.log("Data loaded successfully");
        console.log(response);

        var content = '';



        // neuen code zusammensetzen

        for (i = 0; i < 2; i++) {
            var obj = response.daten[i];
            var bruttopreis;
            bruttopreis = (obj.bruttopreis.toString()).replace(".", ",");


               content += '<div class="conatiner-fluid col-12">';
			   content += '<div class="row mt-5">';
			   content += '<div class="col-2">';
			   content += '<a href="product-detail.html" data-toggle="tooltip" title="Produktdetails"><img src="../pictures/produktbsp.jpg" alt="Produkt"></a>';
			   content += '</div>';
			   content += '<div class="col-6" id="product_container">';
			   content += '<p id="product_discribtion">Whisky 30000 0,5L 6%</p>';
			   content += '</div>';
			   content += '<div class="col-2" id="product_container">';
			   content += '<p id="product_discribtion">1</p>';
			   content += '</div>';
			   content += '<div class="col-2" id="product_container">';
			   content += '<p id="product_discribtion">6,50 €</p>';
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
			content += '<h3 class="mb-3"> Deine Rechnungsadresse:</h3>';
			content += '<h5> Peter Schwamborn</h5>';
			content += '<h5> Lortzingstraße 25</h5>';
			content += '<h5> 72458 Albstadt</h5>';
			content += '</div>';
			content += '<div class="col-4 ml-5">';
			content += '<h3 class="mb-3"> Deine Lieferadresse:</h3>';
			content += '<h5> Peter Schwamborn</h5>';
			content += '<h5> Lortzingstraße 25</h5>';
			content += '<h5> 72458 Albstadt</h5>';
			content += '</div>';
			content += '</div>';
			content += '</div>';




            $('#lastTarget').html(content);

        
    });
});
