$(document).ready(function () {
    console.log("Document ready, loading data from Service");
	
	var content = '';
	for (i = 0; i < warenkorb.length; i++) {
		var id = warenkorb[i].Produkt.Id;
		$.ajax({
        url: "http://localhost:8000/api/produkt/gibkategorie/"+ id +"",
        method: "get",
        dataType: "json"
		
    }).done(function (response) {
        console.log("Data loaded successfully");
        console.log(response);

        var obj = response.daten[0];
        bruttopreis = (obj.bruttopreis.toString()).replace(".", ",");
        content += '<div class="row m-5">';
		content += '<div class="col-1"></div>';
		content += '<div class="col-2">';
		content += '<a href="product-detail.html" data-toggle="tooltip" title="Produktdetails"><img src="../pictures/produktbsp.jpg" alt="Produkt"></a>';
		content += '</div>';
		content += '<div class="col-2 " id="shopping">';
		content += '<span>Enso Japanese Whisky 0,7L</span>';
		content += '</div>';
		content += '<div class="col-1"></div>';
		content += '<div class="col-2" id="number">';
		content += '<input step="1" data-step-max="10" class="col-4" type="number" id="inputLoop" value="1" data-decimals="0" min="1" max="360" />';
		content += '</div>';
		content += '<div class="col-2" id="garbage">';
		content += '<img src="../pictures/delete.png" class="col-3" alt="Produkt">';
		content += '</div>';
		content += '<div class="col-2" id="shopping">';
		content += '<span>10,57 €</span>';
		content += '</div>';
		content += '</div>';
       



        }
    });
	 $('#dyntarget4').html(content);
});