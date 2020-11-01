export { hideDiv }



function hideDiv() {
    let divHistory = document.getElementById("hide-div")

    if (divHistory.style.display === "none") {
        divHistory.style.display = "block";
    } else {
        divHistory.style.display = "none";
    }
}