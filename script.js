function validation() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;
  var pass2 = document.getElementById('pass2').value;
  var mobile = document.getElementById('mobile').value;

  if (name === "") {
    document.getElementById('username').innerHTML = '**This feild is required';
    return false;
  }
  if((name.length <= 2) || (name.length > 20)) {
    document.getElementById('username').innerHTML = 'Length must be between 2 and 20';
    return false;
  }
  if(!isNaN(name)){
    document.getElementById('username').innerHTML = 'Only characters are allowed';
    return false;
  }
  if(email == ""){
    document.getElementById('emailid').innerHTML = '**This feild is required';
    return false;
  }
  if(email.indexOf('@') <= 0){
    document.getElementById('emailid').innerHTML = '@ Invalid Position';
    return false;
  }
  if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    document.getElementById('emailid').innerHTML = ". Invalid Position";
    return false;
  }
  if(pass == ""){
    document.getElementById('Password').innerHTML = '**This feild is required';
    return false;
  }
  if((pass.length <= 8) || (pass.length > 25)) {
    document.getElementById('Password').innerHTML = 'Length must be between 8 and 25';
    return false;
  }
  if(pass2 == ""){
    document.getElementById('Password2').innerHTML = '**This feild is required';
    return false;
  }
  if(pass != pass2){
    document.getElementById('Password2').innerHTML ="It must matched with password";
    return false;
  }
  if(mobile == ""){
    document.getElementById('mobileno').innerHTML = '**This feild is required';
    return false;
  }
  if(isNaN(mobile)){
    document.getElementById('mobileno').innerHTML = 'Only digits are allowed';
    return false;
  }
  if(mobile.length != 10) {
    document.getElementById('mobileno').innerHTML = 'Must write 10 digits';
    return false;
  }
  return true;

}
