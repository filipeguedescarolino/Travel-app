export { travelHistory }
const { default: Axios } = require("axios");

async function travelHistory() {

    let response = await Axios({
        method: 'get',
        url: '/travel-history'
    })

    let cards = "";
    let travelHistories = response.data;

    travelHistories.forEach(historyCard => {
        cards += `
           
        <div class="history-card">
            <div>  
                <img src=${historyCard.smallURL}>
            </div>

            <h2>  
               City: ${historyCard.city}
            </h2>

            <h2>  
                Flight date: ${historyCard.date}
             </h2>
               
            <h2> 
                Booked in: ${historyCard.dateToday}     
            </h2>
            <h2> 
                    Weather:  ${historyCard.weather} 
            </h2>
            
            <h2>
                Temperature: ${historyCard.temp}   
            </h2>
         </div>`;

    });


    document.getElementById('cards-container').innerHTML = cards;









}