
function cookieCheck() {
    var text = "";
    if (!getCookie("cookiesEnabled")) {
        if (navigator.cookieEnabled == true) {
            text = "Cookies sind aktiviert.";
            setCookie("cookiesEnabled", true);
        } else {
            text = "Cookies sind nicht aktiviert.\nUm die Funktionalität der Website zu berwerktstelligen sind Cookies notwendig.";
        }
        alert(text)
    }
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";path=/";
}

function getCookie(productObject) {
    var name = productObject + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split('=');
    var text = ca[ca.length - 1];
    return (text);
}

function checkCookie(object) {
    setCookie("objectCookie", object);

}