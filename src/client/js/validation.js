let city = document.getElementById("city").value;
let err = document.getElementById("err");
let button = document.getElementById("get");
let date = document.getElementById("date");
const errElement = document.getElementById("error");

console.log("i am here");

button.addEventListener("click", function validation(e) {
    debugger

    let messages = []

    if (city.value === "" || city.value == null) {
        messages.push("Name is required")
    }

    if (date.value === "" || date.value == null) {
        messages.push("date is required");
    }
    if (messages.length > 0) {
        e.preventDefault()
        errElement.innerHTML = messages.join(',')
    }

})