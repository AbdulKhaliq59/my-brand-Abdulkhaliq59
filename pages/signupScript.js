//Function to save value in arrays
let userDetails=[];

 function save()
{ 
  var email=document.getElementById("email");
  var password=document.getElementById("password");
  var confirmedPassword=document.getElementById("confirmedPassword");
  if(password.value===confirmedPassword.value)
  {
    alert("your email is"+email.value);
  alert("your password is"+password.value);
  let userData=
  {
      email:email.value,
      password:password.value,
      confirmedPassword:confirmedPassword.value
  }
  userDetails.push(userData);
  setData()
  }
  else
  {
    alert("Please check your password and confirmed Password");
  }
}
//Function to put data in localstorage
function setData()
{
    localStorage.setItem("userDetails",JSON.stringify(userDetails))
}
