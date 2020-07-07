
function priceCalc(preis){
    let show = document.getElementById("price");
    document.getElementById("numeric").oninput = function (eve) {
        if(this.value>0){
        preis=this.value*preis;
        preis=String(preis.toFixed(2));
        show.innerHTML = preis.replace(".",",")+"&#x20ac";
        }
    }
}

