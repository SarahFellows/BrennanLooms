document.getElementById("company-info").addEventListener('click', changeAbout);
document.getElementById("products").addEventListener('click', changeLooms);
document.getElementById("links").addEventListener('click', changeLinks);
document.getElementById("contact-info").addEventListener('click', changeContact);
document.getElementById("cart").addEventListener('click', changeCart);


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
    // create a variable that holds the parsed data held in the sessionStorage//retrieve data
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
        //way the data can be accepted in sessionStorage), give it a name to refer the value to and set it to sessionStorage
        // store data
    sessionStorage.setItem("products", JSON.stringify(currentList))

}

function changeAbout(event) {
    // stop the default action of an element from happening
    if (event) {
        event.preventDefault(); 
    }
    
    // This adds the about to the url in the browser
    window.location = "#About"
}

//Create a function to call the about page so it generated when the event listener is clicked
function loadAboutPage(){
    // AJAX request to the server 
    $.ajax({
        url: "about", 
        success: function(data){
            $("#content-box").html(data); 
        }
    }); 
}; 


function changeLooms(event) {
    // stop the default action of an element from happening
    if (event) {
        event.preventDefault(); 
    }
    
    // This adds the about to the url in the browser
    window.location = "#Looms"
}

//Create a function to call the looms page when link is clicked on 
function loadLoomsPage(){
   $.ajax({
    url: "looms", 
    success: function(data){
        $("#content-box").html(data); 
    
        // This is the button for the cart 
        document.addEventListener('click', cartPage)
        //to everything on this selector, bind a click listener and run this function
        $(".product_image").bind("click", photoPop);
        image_show.addEventListener('click', closePhotoviewing); 
        history.pushState
        }
    })
};

function changeLinks(event) {
    // stop the default action of an element from happening
    if (event) {
        event.preventDefault(); 
    }
    
    // This adds the about to the url in the browser
    window.location = "#Links"
}

//Create a function to call the links page when link is clicked on 
function loadLinksPage(event){
    $.ajax({
        url: "links", 
        success: function(data){
            $("#content-box").html(data);
        }
    }); 
}; 

function changeContact(event) {
    // stop the default action of an element from happening
    if (event) {
        event.preventDefault(); 
    }
    
    // This adds the about to the url in the browser
    window.location = "#Contact"
}

//Create a function to call the contact page when link is clicked on 
function loadContactPage(event){
    $.ajax({
        url: "contact", 
        success: function(data){
            $("#content-box").html(data); 
        }
    }); 
}

function changeCart(event) {
    if (event) {
        event.preventDefault(); 
    }
    window.location = "#Cart"
}

// Create a function that will load the Cart Page 
function loadCartPage(event){
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

// anytime the value after the has changes, run this function
window.onhashchange = navigate;
window.onload = navigate;

// This function calls each AJAX function when the page loads
function navigate() {
    // get the hash - includes the pound - get all the things in the hash from one to the end, ignoring the #
    var link = window.location.hash.substr(1);
    if (link === "About"){
        loadAboutPage();
    }
    else if (link === "Looms") {
        loadLoomsPage();
    }
    else if (link === "Links") {
        loadLinksPage();
    }
    else if (link === "Contact"){
        loadContactPage();
    }
    else if (link === "Cart") {
        loadCartPage();
    }
    else {

    }
}



// Create a function that will pop up the image when it is click on in the Product Page 
function photoPop(event){

    var imageShow = document.getElementById("image_show");
    imageShow.className = "display_img";

        // taking the element id's first child - img - change pic is the div 
        //changing the src to reflect the one that is being clicked on
    imageShow.firstChild.src = event.target.src;

}

//If click outside photo, image disapears - class goes back to display none
function closePhotoviewing(){
     // add an event listener to the div 
    var imageDisapear = document.getElementById("image_show");
   
    // if we click anywhere outside the photo... 
    if (imageDisapear){

        //grab the id from HTML, change class name 
        imageDisapear.setAttribute("class", "display_none");
    }
}








