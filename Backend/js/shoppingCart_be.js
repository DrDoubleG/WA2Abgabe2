async function dynamise(url,menge){
	$.ajax({
			url: url,
			method: "get",
			dataType: "json"
			
			}).done(function (response) {
				console.log("Data loaded successfully");
				console.log(response);

			var obj = response.daten;
			bruttopreis = (obj.bruttopreis.toString()).replace(".", ",");
			content += '<div class="row m-5">';
			content += '<div class="col-1"></div>';
			content += '<div class="col-2">';
			content += '<a href="product-detail.html" data-toggle="tooltip" title="Produktdetails"><img src="' + obj.bilder.bildpfad + '" class="pictures" alt="Produkt"></a>';
			content += '</div>';
			content += '<div class="col-2 " id="shopping">';
			content += '<span>' + obj.name + '</span>';
			content += '</div>';
			content += '<div class="col-1"></div>';
			content += '<div class="col-2" id="number">';
			content += '<input step="1" data-step-max="10" class="col-4" type="number" id="inputLoop" value="' + menge + '" data-decimals="0" min="1" max="360" onchange="checkCookie('+obj.id.toString()+');updateShoppingCart(this)" />';
			content += '</div>';
			content += '<div class="col-2" id="garbage">';
			content += '<img src="../pictures/delete.png" class="col-3" alt="Produkt">';
			content += '</div>';
			content += '<div class="col-2" id="shopping">';
			content += '<span>' + bruttopreis + ' €</span>';
			content += '</div>';
			content += '</div>';
			
			$('#dyntarget5').html(content);
});
};





$(document).ready( async function () {
    console.log("Document ready, loading data from Service");
	var warenkorb = JSON.parse(localStorage.getItem('warenkorb'));
	var content = '';
	for (i = 0; i < warenkorb.length; i++) {
		var id = warenkorb[i].Produkt.Id;
		var menge = warenkorb[i].Menge;
		var url = "http://localhost:8000/api/produkt/gib/" + id;
		
		await dynamise(url,menge);
			
       


	
			}
    });

function updateShoppingCart(e){
	console.log("updateing shopping cart");
	var warenkorb = JSON.parse(localStorage.getItem('warenkorb'));
	var menge = e.value;
			for (i = 0; i < warenkorb.length; i++) {
                if (warenkorb[i].Produkt.Id == getCookie("objectCookie")) {
					var erg = parseInt(menge);
					console.log(warenkorb[i].Menge);
                    warenkorb[i].Menge = erg;
					console.log(erg);
                    break;
				}
				
			}
			localStorage.setItem('warenkorb', JSON.stringify(warenkorb));
			
		
}

