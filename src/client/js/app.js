 export { getInfo }





 const { default: Axios } = require("axios");


 async function getInfo() {

     let city = document.getElementById('city').value;
     let date = document.getElementById('date').value;
     let timeNow = new Date();

     let response = await Axios({
         method: 'get',
         url: '/travel-info',
         params: {
             city: city,
             date: date
         }
     })

     document.getElementById("result-modal").classList.add("is-active");

     console.log(response)


     let today = new Date();
     let day = String(today.getDate()).padStart(2, '0');
     let month = String(today.getMonth() + 1).padStart(2, '0'); // Because January is 0!
     let year = today.getFullYear();

     // Set two dates to two variables    
     let dateNow = new Date(year + '/' + month + '/' + day);
     let travelDate = new Date(date);

     // To calculate the time difference of two dates 
     let DifferenceInTime = travelDate.getTime() - dateNow.getTime();

     // To calculate the number of days between two dates 
     let DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
     DifferenceInDays = DifferenceInDays.toFixed(0);








     console.log(DifferenceInDays)

     document.getElementById("res-img").src = response.data.images;
     document.getElementById("res-city").innerHTML = `You will go to: ${response.data.city}`;
     document.getElementById("res-date").innerHTML = `Departure: ${response.data.date}`;
     document.getElementById("res-time").innerHTML = `You will travel in: ${DifferenceInDays}  days`;
     document.getElementById("res-temp-weather").innerHTML = `Weather: ${response.data.weather} temp: ${response.data.temp}`



 }