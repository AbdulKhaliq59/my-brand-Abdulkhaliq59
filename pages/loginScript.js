function login(e) {
  // e.preventDefault();
  let firstDetail = JSON.parse(localStorage.getItem("userDetails"));
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  if (validatePassword(password.value)) {
    //if true;
    if (
      email.value === firstDetail[0].email &&
      password.value === firstDetail[0].password
    ) {
      return (window.location.href = "/pages/adminPanel/index.html");
    } else {
      alert("username or password is invalid");
    }
  }
  else{
    alert('Password Should start with capital letter\n and have 8 minimum character');
  }
}
function validatePassword(password) {
  //Regular expression for 8 minimum characters and Start with capital letter
  var re = /^[A-Z][a-zA-Z\d!@#\$%\^&\*]{7,}$/;
  return re.test(password);
}
