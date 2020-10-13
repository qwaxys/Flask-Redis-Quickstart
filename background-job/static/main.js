"use strict"

function writeData() {
    // create a new form and populate with selected mode
    var form = document.querySelector('form');
    var formData = new FormData(form);
    console.log(formData)

    // post data with our form data and api key
    fetch("http://localhost:5000/job", {
        method: "post",
        body: formData,
    })
    .then( (response) => { 
        console.log(response);
    });
}