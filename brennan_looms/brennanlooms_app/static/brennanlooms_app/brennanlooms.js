

document.getElementById("company-info").addEventListener('click', loadAboutPage); 
document.getElementById("products").addEventListener('click', loadLoomsPage); 
document.getElementById("links").addEventListener('click', loadLinksPage); 
document.getElementById("contact-info").addEventListener('click', loadContactPage); 
document.getElementById("cart").addEventListener('click', loadCartPage); 



//Create a function to call the about page so it generated when the event listener is clicked
function loadAboutPage(event){
    // stop the default action of an element from happening
    event.preventDefault(); 
    // AJAX request to the server 
    $.ajax({
        url: "about", 
        success: function(data){
            $("#content-box").html(data); 
            // console.log("About Success")
        }
    }); 
}; 

//Create a function to call the looms page when link is clicked on 
function loadLoomsPage(event){
    event.preventDefault(); 
       $.ajax({
        url: "looms", 
        success: function(data){
            $("#content-box").html(data); 
        
            // This is the button for the cart 
            document.addEventListener('click', cartPage)
            }
        })
};

// this calls the cart page to store the pk value and pass it in sessionStorage
function cartPage(event){
    // if the cart button is clicked, add the ID to the storage session
    if (event.target.className === "cart-button"){
        addToSessionStorage(event.target.id)
        // console.log("Value in sesssion storage is:", sessionStorage.getItem("products"))
    } 
}

//This function operates when the user clicks the add to cart button, we grab the value object for the products 
    //and write it to sessionStorage
function addToSessionStorage(id){
    // create a variable that holds the parsed data held in the sessionStorage 
    currentList = JSON.parse(sessionStorage.getItem("products"))
    // console.log(typeof(currentList))
    // if the sessionStorage doesn't hold any strings/objects, then create an empty string so 
    // the cart page doesn't render a error 500 if nothing is in the sessionStorage(cart) yet.
    if (currentList === null){
        currentList = []
    } 
    // if the session storage does contain data, take the number of the id, push it to the empty list
    currentList.push(Number(id))

    // Take the numbers pushed to currentList, make them a string (because thats the  
        //way the data can be accepted in sessionSTorage), give it a name to refer the 
        //value to and set it to sessionStorage
    sessionStorage.setItem("products", JSON.stringify(currentList))

}

//Create a function to call the links page when link is clicked on 
function loadLinksPage(event){
    event.preventDefault(); 

    $.ajax({
        url: "links", 
        success: function(data){
            $("#content-box").html(data);
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
        }
    }); 
}

// Create a function that will load the Cart Page 
function loadCartPage(event){
    event.preventDefault(); 

    // if value in session storage is null, it cant be passed in the brower because its not a string
    // double bars = or 
    currentList = (sessionStorage.getItem("products") || "[]")
    $.ajax({
        url: "cart", 
        data: {"products": currentList}, 
        success: function(data){
            $("#content-box").html(data); 
        }
    }); 
}



