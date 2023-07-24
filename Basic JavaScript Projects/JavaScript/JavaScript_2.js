function validateForm() {
    let fName = document.forms["contactForm"]["fName"].value;
    let lName = document.forms["contactForm"]["lName"].value;
    let email = document.forms["contactForm"]["email"].value;
    let phone = document.forms["contactForm"]["phoneNum"].value;
    if (fName == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lName == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (phone == "") {
        alert("Phone number must be filled out");
        return false;
    }
}