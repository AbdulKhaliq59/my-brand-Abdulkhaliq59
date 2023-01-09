function login(e)
{
    // e.preventDefault();
    let firstDetail=JSON.parse(localStorage.getItem('userDetails'));
    // console.log(firstDetail[0].password);
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    if(email.value===firstDetail[0].email || password.value===firstDetail[0].password)
    {
        // alert("You are successfully logged in");
        return window.location.href="http://127.0.0.1:5501/pages/adminPanel/index.html";
    }
    else{
        // alert("username or password is invalid");
        return location.href="../index.html";
    }
    // alert("email "+email.value);
    // alert("userDetails"+userDetails.userDetails.email); 
    // console.log(userDetails.userDetails.email);
}