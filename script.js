// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails

// console.log("Hello");

function checkUserName() {
    let username = document.getElementById("usertext").toString();
    let a = true;
    console.log(username);
    if (username.length == 0) {
        alert("Username can't be of 0 length");
        a = false;
        console.log(1);
    }
    if (username.length <= 7) {
        alert("Username to lie between 8-15 characters");
        a = false;
        console.log(2);
    }
    if (username.length >= 16) {
        alert("Username to lie between 8-15 characters");
        a = false;
        console.log(3);
    }
    if (username.indexOf(" ") != -1) {
        alert("Username cannot have spaces in between");
        a = false;
        console.log(4);
    }
    if (username.indexOf("~") != -1 && username.indexOf("!") != -1 && username.indexOf("@") != -1 && username.indexOf("$") != -1 && username.indexOf("%") != -1 && username.indexOf("^") != -1 && username.indexOf("*") != -1 && username.indexOf("(") != -1 && username.indexOf(")") != -1 && username.indexOf("-") != -1 && username.indexOf("+") != -1) {
        a = false;
    }

    return a;
}

// checkUserName();

// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

function checkEmail() {
    let email = document.getElementById("emailtext").toString();
    let a = true;
    if (email.indexOf("@") == -1 && email.indexOf(",") == -1 && email.indexOf(".") == -1) {
        a = false;
    }
    return a;
}

checkEmail();

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false

function checkPassword() {
    let password = document.getElementById("passwordtext").toString();
    let p1 = password.toLowerCase();
    let a = true;
    let c = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < c.length; i++) {
        if (c.indexOf(p1[i]) == -1) {
            a = false;
        }
    }
    return a;
}