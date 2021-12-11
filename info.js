function checkForm() {
    var res = true;
    var messages = "";
    if (!radioCheck()) {
        messages = "<p>Please, check Education Status.</p>";
        res = false;
    }

    if (passwordCheck() === -2) {
        messages += "<p>Passwords not match.</p>";
        res = false;
    }
    else if (passwordCheck() === -1) {
        messages += "<p>Password must be 6 characters long, must start with a character, must have a least 1 digit and 1 uppercase.</p>";
        res = false;
    }
    if (!usernameCheck()) {
        messages += "<p>Username should start with letter and length should be more than 6.</p>";
        res = false;
    }

    showErrors(messages);
    if(res == true){
        alert("Submitted");
    }
    return res;
}

function radioCheck() {
    var onechecked = false;  
    var radio_num = document.signup.status.length;
    for (var i = 0; i < radio_num; i++) {
        if (document.signup.status[i].checked == true) { 
           onechecked = true;
        }
    }
    return onechecked;
}

//username should start with letter and length should be more than 6
function usernameCheck() {
    var correct = true;
    var name = document.signup.username.value.trim();
    name.toUpperCase();
    if (name.length >= 6) {
            if (name.charAt(0) < "A" || name.charAt(0) > "Z") {
                correct = false;
            }
        }
    else {
        correct = false;
    }
    return correct;
}

//must be at least 6 characters long, must start with an alphabet,
//must have at least 1 digit and 1 uppercase. The password strings must match. 
function passwordCheck(){
    var match = 1 ;
    var password=document.signup.password.value;
    var repassword=document.signup.repassword.value;
    if(password.length < 6 ||password.search(/[A-Z]/i)!=0||password.search(/\d/)==-1||password.search(/[A-Z]/)==-1){
        match =  -1;
    }
    else if(password!=repassword){
        match = -2;
    }
    return match;
}

function showErrors(messages) {   
    document.querySelector('#errors').innerHTML = messages;
 } 
 
 function  clearErrors() {
   document.querySelector('#errors').innerHTML = " ";        
 } 