function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(input.value);
    if (input.value.match(validRegex)) {
        alert("Valid email address!");
        return true;
    } 
    else {
        alert("Invalid email address!");
        return false;
    }
}