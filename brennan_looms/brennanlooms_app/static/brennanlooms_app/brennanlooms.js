

document.getElementById("company-info").addEventListener('click', loadAboutPage); 
document.getElementById("products").addEventListener('click', loadLoomsPage); 
document.getElementById("links").addEventListener('click', loadLinksPage); 
document.getElementById("contact-info").addEventListener('click', loadContactPage); 



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
            console.log("Looms/Product page Success")
            // This is the button for the cart 
            document.addEventListener('click', cartPage)
            }
        })
};

// this calls the cart page to store the pk value and pass it in sessionStorage
function cartPage(event){
    if (event.target.className === "cart-button"){
        // console.log("this is for the cart page")
        // console.log(event.target.id)
        sessionStorage.setItem("product-id", event.target.id)
    } else {
        console.log("Value in sesssion storage is:", sessionStorage.getItem("product-id"))
    }
    

}

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

// function loadCartPage(event){
//     event.preventDefault(); 
//     console.log("load cart Page test")

//     $.ajax({
//         url: "cart", 
//         success: function(data){
//             $("#content-box").html(data); 
//             console.log("cart page success!")
//         }
//     }); 
// }



