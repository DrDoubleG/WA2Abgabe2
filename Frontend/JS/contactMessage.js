function send() {
  alert('Ihre Anfrage wird beartbeitet! Sie werden gleich wieder auf die Hauptseite weitergelitet. Bitte gedulden sie sich.');
  document.getElementById("anfrage").reset();
  setTimeout("window.location.href='index.html'", 4000);
}
