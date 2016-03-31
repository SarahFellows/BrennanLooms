

document.getElementById("company-info").addEventListener('click', loadAboutPage); 
document.getElementById("products").addEventListener('click', loadLoomsPage); 
document.getElementById("links").addEventListener('click', loadLinksPage); 
document.getElementById("contact-info").addEventListener('click', loadContactPage); 
document.getElementById("cart").addEventListener('click', loadCartPage); 



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
        console.log("Value in sesssion storage is:", sessionStorage.getItem("products"))
    } 
}

function addToSessionStorage(id){
    currentList = JSON.parse(sessionStorage.getItem("products"))
    console.log(typeof(currentList))
    if (currentList === null){
        currentList = []
    } 
    currentList.push(Number(id))

    //when the user clicks the add to cart button, we grab the value from products and write it to sessionStorage
    sessionStorage.setItem("products", JSON.stringify(currentList))

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



