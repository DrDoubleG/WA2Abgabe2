		function getData() {
				
					var checkBox = document.getElementById("difference_delivery");
				if (checkBox.checked == true){
				
					var vorname_1 = document.getElementById("vorname_1").value;
					var email_1 = document.getElementById("email_1").value;
					var geburtsdatum_1 = document.getElementById("geburtsdatum_1").value;
					var name_1 = document.getElementById("name_1").value;
					var inputs_form1 = document.getElementById("inputs_form1").value;
					var strasse_1 = document.getElementById("strasse_1").value;
					var hausnummer_1 = document.getElementById("hausnummer_1").value;
					var plz_1 = document.getElementById("plz_1").value;
					var ort_1 = document.getElementById("ort_1").value;
					var land_1 = document.getElementById("land_1").value;
					
					var vorname_2 = document.getElementById("vorname_2").value;
					var name_2 = document.getElementById("name_2").value;
					var inputs_form2 = document.getElementById("inputs_form2").value;
					var strasse_2 = document.getElementById("strasse_2").value;
					var hausnummer_2 = document.getElementById("hausnummer_2").value;
					var plz_2 = document.getElementById("plz_2").value;
					var ort_2 = document.getElementById("ort_2").value;
					var land_2 = document.getElementById("land_2").value;
					
					var land_id;
					var person_id;
					var kunde_id;
					var adresse_id;
					
					console.log("button senddbtn clicked");
					
					var obj = {"bezeichnung": land_2}
					$.ajax({
						url: "http://localhost:8000/api/land",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});

					
					var obj2 = {"anrede":inputs_form2,"vorname":vorname_2,"name":name_2};

					$.ajax({
						url: "http://localhost:8000/api/person",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj2)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});
					
					$.ajax({
						url: "http://localhost:8000/api/land/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var obj = response.daten[0];
						land_id = obj.id;
						
						var obj1 = {"strasse": strasse_2, "hausnummer": hausnummer_2, "plz": plz_2, "ort": ort_2 ,"land_id": land_id};

						$.ajax({
							url: "http://localhost:8000/api/adresse",
							method: "post",
							async: false,
							contentType: "application/json",
							data: JSON.stringify(obj1)
						}).done(function (response) {
							console.log(response);
							$("#output").html(JSON.stringify(response));
						}).fail(function (jqXHR, statusText, error) {
							console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
							$("#output").html("Ein Fehler ist aufgetreten");
						});
					});
					
					$.ajax({
						url: "http://localhost:8000/api/adresse/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var resp4 = response.daten[0];
							adresse_id = resp4.id;
					
							
						$.ajax({
							url: "http://localhost:8000/api/person/neuste",
							method: "get",
							async: false,
							dataType: "json"
							}).done(function (response) {
							console.log("Data loaded successfully");
							console.log(response);
						
							var resp3 = response.daten[0];
							person_id = resp3.id;
							
							var obj6 = {"person_id": person_id, "adresse_id": adresse_id};
							$.ajax({
								url: "http://localhost:8000/api/lieferadresse",
								method: "post",
								async: false,
								contentType: "application/json",
								data: JSON.stringify(obj6)
							}).done(function (response) {
								console.log(response);
								$("#output").html(JSON.stringify(response));
							}).fail(function (jqXHR, statusText, error) {
								console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
								$("#output").html("Ein Fehler ist aufgetreten");
							});

							});

					});
					var obj = {bezeichnung: land_1}
					$.ajax({
						url: "http://localhost:8000/api/land",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});

					
					var obj2 = {"anrede":inputs_form1,"vorname":vorname_1,"name":name_1};

					$.ajax({
						url: "http://localhost:8000/api/person",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj2)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});
					
					$.ajax({
						url: "http://localhost:8000/api/land/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var obj = response.daten[0];
						land_id = obj.id;
						
						var obj1 = {"strasse": strasse_1, "hausnummer": hausnummer_1, "plz": plz_1, "ort": ort_1 ,"land_id": land_id};

						$.ajax({
							url: "http://localhost:8000/api/adresse",
							method: "post",
							async: false,
							contentType: "application/json",
							data: JSON.stringify(obj1)
						}).done(function (response) {
							console.log(response);
							$("#output").html(JSON.stringify(response));
						}).fail(function (jqXHR, statusText, error) {
							console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
							$("#output").html("Ein Fehler ist aufgetreten");
						});
					});
					

					$.ajax({
						url: "http://localhost:8000/api/person/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var obj = response.daten[0];
						person_id = obj.id;
						
					
					var obj3 = {"email": email_1,"geburtsdatum":geburtsdatum_1,"person_id":person_id};

					$.ajax({
						url: "http://localhost:8000/api/kunde",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj3)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});
					});
					
	
						
						$.ajax({
						url: "http://localhost:8000/api/adresse/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var resp = response.daten[0];
						adresse_id = resp.id;
							$.ajax({
							url: "http://localhost:8000/api/kunde/neuste",
							method: "get",
							async: false,
							dataType: "json"
							}).done(function (response) {
							console.log("Data loaded successfully");
							console.log(response);
						
							var resp2 = response.daten[0];
							kunde_id = resp2.id;
							
							var obj5 = {"kunde_id": kunde_id, "adresse_id": adresse_id};
							$.ajax({
								url: "http://localhost:8000/api/rechnungsadresse",
								method: "post",
								async: false,
								contentType: "application/json",
								data: JSON.stringify(obj5)
							}).done(function (response) {
								console.log(response);
								$("#output").html(JSON.stringify(response));
							}).fail(function (jqXHR, statusText, error) {
								console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
								$("#output").html("Ein Fehler ist aufgetreten");
							});
							
						

					});
					});
				
				} else {
					
					var vorname_1 = document.getElementById("vorname_1").value;
					var email_1 = document.getElementById("email_1").value;
					var geburtsdatum_1 = document.getElementById("geburtsdatum_1").value;
					var name_1 = document.getElementById("name_1").value;
					var inputs_form1 = document.getElementById("inputs_form1").value;
					var strasse_1 = document.getElementById("strasse_1").value;
					var hausnummer_1 = document.getElementById("hausnummer_1").value;
					var plz_1 = document.getElementById("plz_1").value;
					var ort_1 = document.getElementById("ort_1").value;
					var land_1 = document.getElementById("land_1").value;
					var land_id;
					var person_id;
					var kunde_id;
					var adresse_id;
					
					console.log("button senddbtn clicked");
					
					var obj = {bezeichnung: land_1}
					$.ajax({
						url: "http://localhost:8000/api/land",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});

					
					var obj2 = {"anrede":inputs_form1,"vorname":vorname_1,"name":name_1};

					$.ajax({
						url: "http://localhost:8000/api/person",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj2)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});

					$.ajax({
						url: "http://localhost:8000/api/person/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var obj = response.daten[0];
						person_id = obj.id;
						
					
					var obj3 = {"email": email_1,"geburtsdatum":geburtsdatum_1,"person_id":person_id};

					$.ajax({
						url: "http://localhost:8000/api/kunde",
						method: "post",
						async: false,
						contentType: "application/json",
						data: JSON.stringify(obj3)
					}).done(function (response) {
						console.log(response);
						$("#output").html(JSON.stringify(response));
					}).fail(function (jqXHR, statusText, error) {
						console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
						$("#output").html("Ein Fehler ist aufgetreten");
					});
					});
					
					$.ajax({
						url: "http://localhost:8000/api/land/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var obj = response.daten[0];
						land_id = obj.id;
						
						var obj1 = {"strasse": strasse_1, "hausnummer": hausnummer_1, "plz": plz_1, "ort": ort_1 ,"land_id": land_id};

						$.ajax({
							url: "http://localhost:8000/api/adresse",
							method: "post",
							async: false,
							contentType: "application/json",
							data: JSON.stringify(obj1)
						}).done(function (response) {
							console.log(response);
							$("#output").html(JSON.stringify(response));
						}).fail(function (jqXHR, statusText, error) {
							console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
							$("#output").html("Ein Fehler ist aufgetreten");
						});

						});
						
						$.ajax({
						url: "http://localhost:8000/api/adresse/neuste",
						method: "get",
						async: false,
						dataType: "json"
						}).done(function (response) {
						console.log("Data loaded successfully");
						console.log(response);
						
						var resp = response.daten[0];
						adresse_id = resp.id;
							$.ajax({
							url: "http://localhost:8000/api/kunde/neuste",
							method: "get",
							async: false,
							dataType: "json"
							}).done(function (response) {
							console.log("Data loaded successfully");
							console.log(response);
						
							var resp2 = response.daten[0];
							kunde_id = resp2.id;
							
							var obj5 = {"kunde_id": kunde_id, "adresse_id": adresse_id};
							$.ajax({
								url: "http://localhost:8000/api/rechnungsadresse",
								method: "post",
								async: false,
								contentType: "application/json",
								data: JSON.stringify(obj5)
							}).done(function (response) {
								console.log(response);
								$("#output").html(JSON.stringify(response));
							}).fail(function (jqXHR, statusText, error) {
								console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
								$("#output").html("Ein Fehler ist aufgetreten");
							});
							
							$.ajax({
							url: "http://localhost:8000/api/person/neuste",
							method: "get",
							async: false,
							dataType: "json"
							}).done(function (response) {
							console.log("Data loaded successfully");
							console.log(response);
						
							var resp3 = response.daten[0];
							person_id = resp3.id;
							
							var obj6 = {"person_id": person_id, "adresse_id": adresse_id};
							$.ajax({
								url: "http://localhost:8000/api/lieferadresse",
								method: "post",
								async: false,
								contentType: "application/json",
								data: JSON.stringify(obj6)
							}).done(function (response) {
								console.log(response);
								$("#output").html(JSON.stringify(response));
							}).fail(function (jqXHR, statusText, error) {
								console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
								$("#output").html("Ein Fehler ist aufgetreten");
							});

							});

					});
					});
				}
				var obj10 = {"bestellzeitpunkt": "07.0202.2020", "zahlungsart_id": "1", "lieferadresse_id": "1", "rechnungsadresse_id":"1" }
		$.ajax({
			url: "http://localhost:8000/api/bestellung",
			method: "post",
			contentType: "application/json",
			data: JSON.stringify(obj10)
		}).done(function (response) {
			console.log(response);
			$("#output").html(JSON.stringify(response));
		}).fail(function (jqXHR, statusText, error) {
			console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
			$("#output").html("Ein Fehler ist aufgetreten");
		});

		var obj11 = {"menge": "10", "produkt_id": "1", "bestellung_id": "1"}
		$.ajax({
			url: "http://localhost:8000/api/bestellposition",
			method: "post",
			contentType: "application/json",
			data: JSON.stringify(obj11)
		}).done(function (response) {
			console.log(response);
			$("#output").html(JSON.stringify(response));
		}).fail(function (jqXHR, statusText, error) {
			console.log("Response Code: " + jqXHR.status + " - Fehlermeldung: " + jqXHR.responseText);
			$("#output").html("Ein Fehler ist aufgetreten");
		});
				}