function submit(){
				var x = 0; 
				var name1 = document.getElementById("lastname").value;
				var name2 = document.getElementById("firstname").value;
				var gender = document.getElementById("Gender").value;
				var email = document.getElementById("adress").value;
				var place1 = document.getElementById("Origin").value;
				var place2 = document.getElementById("Destination").value;
				var date1 = document.getElementById("date1").value;
				var date2 = document.getElementById("date2").value;
					

				if(name1.length == 0) {document.getElementById("alert1").innerHTML = "Your Last Name is Empty!"; x = 1;}
				else {document.getElementById("alert1").innerHTML = "";}
				if(name2.length == 0){ document.getElementById("alert2").innerHTML = "Your First Name is Empty!";x = 1;}
				else {document.getElementById("alert2").innerHTML = "";}
				if(gender == "None") {document.getElementById("alert3").innerHTML = "Your Gender Must Be Specified!";x = 1;}
				else {document.getElementById("alert3").innerHTML = "";}
				if(email.length == 0){document.getElementById("alert4").innerHTML = "Your Email Adress is Empty!";x = 1;}
				else if(email.indexOf('@') <= -1){document.getElementById("alert4").innerHTML = "That is not an invalid Email Adress!";x = 1;}
				else {document.getElementById("alert4").innerHTML = "";}
				if(place1.length == 0) {document.getElementById("alert5").innerHTML = "Your Origin is Empty!";x = 1;}
				else {document.getElementById("alert5").innerHTML = "";}
				if(place2.length == 0) {document.getElementById("alert6").innerHTML = "Your Destination is Empty!";x = 1;}
				else {document.getElementById("alert6").innerHTML = "";}
				if(date1.length == 0) {document.getElementById("alert7").innerHTML = "Your Departure Date Empty!";x = 1;}
				else {document.getElementById("alert7").innerHTML = "";}
				if(date2.length == 0) {document.getElementById("alert8").innerHTML = "Your Return Date is Empty!";x = 1;}
				else if(date1 > date2) {document.getElementById("alert8").innerHTML = "Your Return Date is Earlier Than Your Departure!";x = 1;}
				else {document.getElementById("alert8").innerHTML = "";}

				if(x == 0) document.getElementById("sub").innerHTML = "Thank You. Your Booking Has Been Submitted";
				else {document.getElementById("sub").innerHTML = "";}

			}