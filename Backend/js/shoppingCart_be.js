async function dynamise(url,menge,count){
	$.ajax({
			url: url,
			method: "get",
			dataType: "json"
			
			}).done(function (response) {
				console.log("Data loaded successfully");
				console.log(response);

			var obj = response.daten;
			var numericInput = "inputLoop"+ count;
			var texti = "price" + count;
			
			bruttopreis = (obj.bruttopreis.toString()).replace(".", ",");
			content += '<div class="row m-5 onload="priceCalc('+ obj.bruttopreis +',' + numericInput +',' + texti +')">';
			content += '<div class="col-1"></div>';
			content += '<div class="col-2">';
			content += '<a href="product-detail.html" data-toggle="tooltip" title="Produktdetails"><img src="' + obj.bilder.bildpfad + '" class="pictures" alt="Produkt"></a>';
			content += '</div>';
			content += '<div class="col-2 " id="shopping">';
			content += '<span>' + obj.name + '</span>';
			content += '</div>';
			content += '<div class="col-1"></div>';
			content += '<div class="col-2" id="number">';
			content += '<input step="1" data-step-max="10" class="col-4" type="number" id="'+ numericInput +'" value="' + menge + '" data-decimals="0" min="1" max="360" onchange="checkCookie('+obj.id.toString()+');updateShoppingCart(this);priceCalc('+ obj.bruttopreis +',' + numericInput +',' + texti +')" />';
			content += '</div>';
			content += '<div class="col-2" id="garbage">';
			content += '<img src="../pictures/delete.png" class="col-3" alt="Produkt">';
			content += '</div>';
			content += '<div class="col-2" id="shopping">';
			content += '<span id="'+ texti +'">' + bruttopreis + ' €</span>';
			content += '</div>';
			content += '</div>';
		
			$('#dyntarget5').html(content);
			
});
};

function priceCalc(preis,numericInput,texti){
    let show = texti;
    numericInput.oninput = function () {
        if(this.value>0){
        preis=this.value*preis;
        preis=String(preis.toFixed(2));
        show.innerHTML = preis.replace(".",",")+"&#x20ac";
        }
    }
}



$(document).ready( async function () {
    console.log("Document ready, loading data from Service");
	var warenkorb = JSON.parse(localStorage.getItem('warenkorb'));
	var content = '';
	var count;
	for (i = 0; i < warenkorb.length; i++) {
		var id = warenkorb[i].Produkt.Id;
		var menge = warenkorb[i].Menge;
		var url = "http://localhost:8000/api/produkt/gib/" + id;
		count = i;
		await dynamise(url,menge, count);
			
       


	
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



