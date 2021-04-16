// JavaScript Document

/************************************************************************
         			 	contact Page Javascript code
*************************************************************************/
//form validation code
function validate(){	
	if(checkFullName() && checkEmailAdress() && checkMobileNo() && checkMassage()){
			alert("Details all validated as ok.");
			}
		}
		function checkFullName(){
			let fullnameLength = document.getElementById("fullname").value.length;
			if(fullnameLength == 0){
				alert("Full name field cannot be left empty");
				return false;
			}
			return true;
		}
		function checkEmailAdress(){
			let x = document.getElementById("emailAddress").value;
			let a = x.indexOf("@");
			let b = x.indexOf(".");
			
			if(a == -1 || b == -1){
			alert("Email address must contain a '@' and a '.'");
			return false;
			}
			return true;
		}
		function checkMobileNo(){
			let mobilenoLength = document.getElementById("mobileNo").value.length;
			if(mobilenoLength < 13){
				alert("Mobile must be at least 11 characters in length");
				return false;
			}
			return true;
		}
		function checkMassage(){
			let messageLength = document.getElementById("message").value.length;
			if(messageLength == 0){
				alert("Message field cannot be left empty");
				return false;
			}
			return true;
		}

/************************************************************************
         			 	About Page Javascript code
*************************************************************************/
//code for shop opening hour
function openingHours(){
let today = new Date();
let open = "We're open today from 9am - 6pm";
let closed = "We're closed now and will open again tomorrow 9am - 6pm";
let weekendclosed = "We're closed now and will open again on Monday 9am";
let display = document.getElementById('display');

if (today.getHours() >= 9 && today.getHours() < 18 && today.getDay() >=1 && today.getDay() <= 5) {
    display.innerHTML = open;
	display.style.color = "green";
} else if(today.getDay() >= 5 && today.getDay() <= 6) {
    display.innerHTML = weekendclosed;	
	display.style.color = "red";
} else{
	display.innerHTML = closed;	
	display.style.color = "red";
}
}
openingHours();
	

	
	
	
