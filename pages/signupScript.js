//Function to save value in arrays
let userDetails = [];
function validatePassword(password) {
  //Regular expression for 8 minimum characters and Start with capital letter
  var re = /^[A-Z][a-zA-Z\d!@#\$%\^&\*]{7,}$/;
  return re.test(password);
}
function save() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var confirmedPassword = document.getElementById("confirmedPassword");
  if (validatePassword(password.value)) {
    if (password.value === confirmedPassword.value) {
      let userData = {
        email: email.value,
        password: password.value,
        confirmedPassword: confirmedPassword.value,
      };
      userDetails.push(userData);
      setData();
      alert("Hopefully Now You can Login");
    } else {
      alert("Please check your password and confirmed Password");
    }
  }
  else{
    alert('Password Should start with capital letter\n and have 8 minimum character');
  }
}
//Function to put data in localstorage
function setData() {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
}
