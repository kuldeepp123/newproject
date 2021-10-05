// ============================LOGIN=AND=REGISTER===AREA========

document.getElementById("login").style.display = "block";

// document.getElementById("register").style.display = "block";

// let x =document.getElementById("login");
// let y =document.getElementById("register");
function register() {
    document.getElementById("register").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("heading1").style.display = "none";
    document.getElementById("active-css1").style.backgroundColor = "#f8f8f8";
    document.getElementById("active-css1").style.border = "1px solid #dadce0"
    document.getElementById("active-css").style.backgroundColor = "#fff";
    document.getElementById("active-css").style.border = "none";

}

function login() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.getElementById("heading1").style.display = "block";
    document.getElementById("active-css").style.backgroundColor = "#f8f8f8";
    document.getElementById("active-css").style.border = "1px solid #dadce0";
    document.getElementById("active-css1").style.backgroundColor = "#fff";
    document.getElementById("active-css1").style.border = "none"
}

function otp_send() {
    document.getElementById("otp_send").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("login-and-register-form").style.display = "none";
}

document.getElementById("back").onclick = function() {

    document.getElementById("back").style.display = "none";
    document.getElementById("login-and-register-form").style.display = "block";
    document.getElementById("otp_send").style.display = "none";
    document.getElementById("login").style.display = "block";

}
document.getElementById("my_account").onclick = function() {

    document.getElementById("login").style.display = "none";
    document.getElementById("otp_send").style.display = "none";
    document.getElementById("myaccount_details").style.display = "block";
    document.getElementById("login-and-register-form").style.display = "none";

}
document.getElementById("edit_info").onclick = function() {

    document.getElementById("personal_info").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("myaccount_details").style.display = "none";
    document.getElementById("login-and-register-form").style.display = "none";

}