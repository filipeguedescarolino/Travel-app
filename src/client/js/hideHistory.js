export {
    toggleHistory,
    removeModal
}
import { travelHistory } from './travelHistory';



var isVisible = false;

function toggleHistory() {
    let divHistory = document.getElementById("cards-container")

    if (!isVisible) {
        travelHistory()
            // divHistory.style.display = "block";
        isVisible = true;
    } else {
        // divHistory.style.display = "none";
        divHistory.innerHTML = "";
        isVisible = false;
    }
}

document.getElementById("get-history").addEventListener("click", toggleHistory);

function removeModal() {
    document.getElementById('result-modal').classList.remove('is-active');
}

document.getElementById("hide-modal").addEventListener("click", removeModal)