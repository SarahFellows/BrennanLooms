

document.getElementById("company-info").addEventListener('click', loadAboutPage); 


//Create a function to call the about page 
function loadAboutPage(event){
    console.log("This is for the about button"); 
    event.preventDefault(); 
    // AJAX request to the server - Jquery 
        // JQuery UML 
    $.ajax({
        url: "about", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("About Success")

        }

    })
}



