

document.getElementById("company-info").addEventListener('click', loadAboutPage); 
document.getElementById("products").addEventListener('click', loadLoomsPage); 
document.getElementById("links").addEventListener('click', loadLinksPage); 
document.getElementById("contact-info").addEventListener('click', loadContactPage); 
// This is the button for the cart 
document.getElementById("cart-button").addEventListener('click', loadCartPage); 


//Create a function to call the about page 
function loadAboutPage(event){
    console.log("This is for the about button"); 

    // stop the default action of an element from happening
    event.preventDefault(); 
    // AJAX request to the server - Jquery 
        // JQuery UML 
    $.ajax({
        url: "about", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("About Success")
        }
    }); 
}; 

//Create a function to call the looms page when link is clicked on 
function loadLoomsPage(event){
    console.log("This is for the looms button"); 
    event.preventDefault(); 

       $.ajax({
        url: "looms", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("Looms/Product page   Success")
        }
    }); 
}; 

//Create a function to call the links page when link is clicked on 
function loadLinksPage(event){
    console.log("This is for the links button"); 
    event.preventDefault(); 

    $.ajax({
        url: "links", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("Links Success!!")
        }
    }); 
}; 

//Create a function to call the contact page when link is clicked on 
function loadContactPage(event){
    event.preventDefault(); 

    $.ajax({
        url: "contact", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("contact page success!")
        }
    }); 
}

function loadCartPage(event){
    event.preventDefault(); 
    console.log("load cart Page test")

    $.ajax({
        url: "cart", 
        success: function(data){
            $("#content-box").html(data); 
            console.log("cart page success!")
        }
    }); 
}



