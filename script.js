const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById('email');
const password = document.getElementById('password');

const validation = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "" || firstNameValue === null) {
        errorInput(firstName, "First Name cannot be empty");
    } else {
        successInput(firstName);
    }

    if (lastNameValue === "" || lastNameValue === null) {
        errorInput(lastName, "Last Name cannot be empty");
    } else {
        successInput(lastName);
    }

    if (emailValue === "" || emailValue === null) {
        errorInput(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        errorInput(email, "Looks like this is not an email");
    } else {
        successInput(email);
    }

    if (passwordValue === "" || passwordValue === null) {
        errorInput(password, "Password cannot be empty");
    } else {
        successInput(password);
    }
}

const errorInput = (input, message) => {
    const formInput = input.parentElement;
    const errMess = formInput.querySelector("span");
    formInput.className = "input-field error";
    errMess.innerText = message;
}

const successInput = (input) => {
    const formInput = input.parentElement;
    const errMess = formInput.querySelector("span");
    formInput.className = "input-field";
    errMess.innerText = "";
}

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
    firstName.addEventListener("keyup", validation);
});
