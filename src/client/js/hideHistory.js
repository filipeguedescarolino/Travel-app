export { hideDiv }



function hideDiv() {
    let divHistory = document.getElementById("cards-container")

    if (divHistory.style.display === "none") {
        divHistory.style.display = "block";
    } else {
        divHistory.style.display = "none";
    }
}