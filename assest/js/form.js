function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
   //name validation
    var flag;
    if (fname == "" || lname == "") {
        document.getElementById("nameErr").innerHTML = "*please enter Full Name";
        flag = false;
        document.getElementById("fname").style.borderColor = "red";
        document.getElementById("lname").style.borderColor = "red";
    }
    else {
        document.getElementById("nameErr").innerHTML = "";
        flag = true;
        document.getElementById("fname").style.borderColor = "green";
        document.getElementById("lname").style.borderColor = "green";
    }


    //email validation
    var email = document.getElementById("email").value;
   
    if (email=="") {
        document.getElementById("emailErr").innerHTML = "*please enter email Id";
        flag = false;
        document.getElementById("email").style.borderColor = "red";
    }
    else {
        document.getElementById("emailErr").innerHTML = "";
        flag = true;
        document.getElementById("email").style.borderColor = "green";
    }

      //conatact no validation
    var area = document.getElementById("areaCode").value;
    var phone = document.getElementById("phone").value;
    
    if (isNaN(phone) || isNaN(area)||area == "" || phone == ""|| phone.length!=10) {
        document.getElementById("contactErr").innerHTML = "*please enter Contact No";
        flag = false;
        document.getElementById("areaCode").style.borderColor = "red";
        document.getElementById("phone").style.borderColor = "red";
    }
    else {
        document.getElementById("contactErr").innerHTML = "";
        document.getElementById("areaCode").style.borderColor = "green";
        document.getElementById("phone").style.borderColor = "green";
        
    }
      //address validation
    var address = document.getElementById("address").value;
   
    if (address=="") {
        document.getElementById("addressErr").innerHTML = "*please enter address";
        document.getElementById("address").style.borderColor = "red";
    }
    else {
        document.getElementById("addressErr").innerHTML = "";
        document.getElementById("address").style.borderColor = "green";
    }

      //city validation
    var city = document.getElementById("city").value;
   
    if (city=="") {
        document.getElementById("cityErr").innerHTML = "*please enter city name";
        document.getElementById("city").style.borderColor = "red";
    }
    else {
        document.getElementById("cityErr").innerHTML = "";
        document.getElementById("city").style.borderColor = "green";
    }

      //country validation
    var country = document.getElementById("country").value;
   
    if (country=="") {
        document.getElementById("countryErr").innerHTML = "*please enter country name";
        document.getElementById("country").style.borderColor = "red";
    }
    else {
        document.getElementById("countryErr").innerHTML = "";
        document.getElementById("country").style.borderColor = "green";
    }

    var pinBlock = document.getElementById("pinBlock").value;

     //pin code validation
    if (isNaN(pinBlock) || pinBlock=="" || pinBlock.length!=6) {
        document.getElementById("pinErr").innerHTML = "*please enter the pin code";
        document.getElementById("pinBlock").style.borderColor = "red";
    }
    else {
        document.getElementById("pinErr").innerHTML = "";
        document.getElementById("pinBlock").style.borderColor = "green";
    }

  //gender validation
    var genders = document.getElementsByName("gender");
   
    if (genders[0].checked==true) {
        document.getElementById("genErr").innerHTML = "";
        return false;
       
    }
    else if(genders[1].checked==true){
        document.getElementById("genErr").innerHTML = "";
        return false;
        
    }
    else if(genders[2].checked==true){
        document.getElementById("genErr").innerHTML = "";
        return false;
      
    }
    else {
        document.getElementById("genErr").innerHTML = "*please select gender";
    }
  //dob validation
    var dob = document.getElementById("dob").value;
    
   
    if (dob=="") {
        document.getElementById("dobErr").innerHTML = "*please enter D.O.B";
        document.getElementById("dob").style.borderColor = "red";
    }
    else {
        document.getElementById("dobErr").innerHTML = "";
        document.getElementById("dob").style.borderColor = "green";
       
    }
  //state validation
    var state = document.getElementById("state").value;
  
    if (state=="state") {
        document.getElementById("stateErr").innerHTML = "*please enter state name";
   
    }
    else {
        document.getElementById("stateErr").innerHTML = "";
       
    }

    return flag;
}
