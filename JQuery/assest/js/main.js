//error msg function
function errorMsg(flag,id1,error){
  if(flag==false){
  $(id1).css("border","2px solid red");
  $(error).text("Please enter the correct input");
  return flag;
}
else{
   $(id1).css("border","2px solid green")
   $(error).text(""); 
   return flag; 
  } 
}
//Empty and number Field Validation func
function requiredField(id1,error){
    flag = true;
    if(id1.value == ""||!isNaN(id1.value)||id1.value.length<=1||id1.value.length>20){
    flag = false; 
    errorMsg(flag,id1,error) 
   }
   else{
     flag=true;
     errorMsg(flag,id1,error); 
   }
    return flag;
 }
//phone validation function
function contact(id1,error){
    if(isNaN(id1.value)||id1.value.length!=10||id1.value==""){
      flag=false;
      errorMsg(flag,id1,error);
    } 
    else{
      flag=true;
      errorMsg(flag,id1,error);
    }
 }
 //num validation with max digit 6
 function numSix(id1,error){
    if(isNaN(id1.value) || id1.value==""||id1.value.length>6){
      flag=false;
      errorMsg(flag,id1,error);
    } 
    else{
      flag=true;
      errorMsg(flag,id1,error);
    }
 }
 //state validation
 function stateValidation(id1,error){
   
  if (id1.value=="state") {
    flag=false;
    errorMsg(flag,id1,error);
  }
  else {
    flag= true;
    errorMsg(flag,id1,error);
  }
}
//gender validation function
function genderValid(id1,error){
 
  if($(id1).is(":checked")){
    $(error).text(""); 
 }
 else{
   flag=false;
   $(error).text("please select gender");
 }
}
//validate function
function validation() {
  requiredField(fname,nameErr);
  requiredField(lname,nameErr);

//email validation
  requiredField(email,emailErr);

//phone validation func call
var phone = document.getElementById("phone");
var contactErr=document.getElementById("contactErr");
var area = document.getElementById("area");
contact(phone,contactErr);
numSix(area,contactErr);
    
//Dob validation function call
var dob = document.getElementById("dob");
var dobErr=document.getElementById("dobErr");
requiredField(dob,dobErr);

//gender function call
var gender = document.getElementsByName("gender");
var genErr=document.getElementById("genErr");
genderValid(gender,genErr);

//state validation function call
var state = document.getElementById("state");
var stateErr=document.getElementById("stateErr");
stateValidation(state,stateErr);
  
//address validation function call
var address = document.getElementById("address");
var addressErr=document.getElementById("addressErr");
requiredField(address,addressErr);

//city validation function call
var city = document.getElementById("city");
var cityErr=document.getElementById("cityErr");
requiredField(city,cityErr);

//country validation
var country = document.getElementById("country");
var countryErr=document.getElementById("countryErr");
requiredField(country,countryErr);

//pincode validation
var pinBlock = document.getElementById("pinBlock");
var pinErr=document.getElementById("pinErr")
numSix(pinBlock,pinErr);
}

//Reset function
  function resetValid(){
    err=document.getElementsByClassName("error");
    select=document.getElementsByClassName("state")
    $(err).text("");
    $("input").css("border","1px solid gray");
    $("select").css("border","1px solid gray");
  }