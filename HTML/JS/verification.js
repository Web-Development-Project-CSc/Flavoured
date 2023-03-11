function validateAge() {
    let today = new Date();
    let birthdate = document.getElementsByClassName("date");
    let age = today.getFullYear() - birthdate;
    if (age < 16) {
        alert("You must be at least 16 years old to use this service.");
    }
    
}
validateAge();