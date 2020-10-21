 export { getTodos }
 export { showOutput }

 const { default: Axios } = require("axios");


 // function handleSubmit(event) {
 //     event.preventDefault()
 //     let destinationValue = document.getElementById("city").value;
 //     let dateValue = document.getElementById("date").value;
 //         console.log("Form Submitted")


 //Get Request
 function getTodos() {
     debugger
     let destinationValue = document.getElementById("city").value;
     let username = "filipeslb10"
     let dateValue = document.getElementById("date").value;

     Axios({
             method: 'get',
             url: `http://localhost:4500/city?q=${destinationValue}`
         })
         .then(res => showOutput(res))
         .catch(err => console.log(err))


     //  Axios({
     //          method: 'get',
     //          url: `http://api.geonames.org/searchJSON?q=${destinationValue}&maxRows=1&username=filipeslb10`
     //      })
     //      .then(res => console.log(res.data.geonames))
     //      .catch(err => console.log(err))
 }

 // Show output in browser
 function showOutput(res) {
     document.getElementById("res").innerHTML = `
        <div class="card card-body mb-4">
            <h5>Status: §{res.status} </h5>
        </div>

        <div class="card card-mt-3">
            <div class="card-header">
            Headers
            </div>
            <div class="card-body">
            <pre> ${JSON.stringify(res.headers.data, null, 2)}</pre>
            </div>
        </div>

        <div class="card mt-3>
            <div class="card-header">
            DATA
            </div>
        </div>

        
        `
 }



 // }
 // fetch api req ex
 // function handlesubmit(event) {
 //     event.preventDefault()
 //     let formText = document.getElementById('name').value 
 //     Client.checkForName(formText)
 // console.log(" Form Submitted")

 // fetch("http://localhost:8081/test")
 //     .then(res => {
 //         return res.json()
 //     })
 //     .then (function(data) {
 //         document.getElementById('results').innerHTML = data.qquer coisa
 //     })
 // }

 // exporting
 // export { handlesubmit }

 // Function to GET Web API