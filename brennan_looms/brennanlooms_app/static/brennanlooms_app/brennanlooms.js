
document.getElementById("company-info").addEventListener('click', changeAbout);
document.getElementById("products").addEventListener('click', changeLooms);
document.getElementById("links").addEventListener('click', changeLinks);
document.getElementById("contact-info").addEventListener('click', changeContact);
document.getElementById("cart").addEventListener('click', changeCart);
document.getElementById("pdfs").addEventListener('click', changePDF);


// --------------------------- Cart --------------------------- //

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
    currentList = JSON.parse(sessionStorage.getItem("products"));
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
    sessionStorage.setItem("products", JSON.stringify(currentList));

    loadCartCount();

    // Add success message 
    document.getElementById("alert-"+id).textContent = "Loom added to Cart"

}

function changeCart(event) {
    if (event) {
        event.preventDefault(); 
    }
    // This adds the cart to the url in the browser
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

function loadCartCount(){

    currentList = JSON.parse(sessionStorage.getItem("products"));
    
    if (currentList !== null){
        count = currentList.length
        document.getElementById("cart").textContent = "Cart (" + count + ")"; 
    } 
}
// --------------------------- About --------------------------- //

function changeAbout(event) {
    // stop the default action of an element from happening
    if (event) {
        event.preventDefault();
    }
    
    // This adds the about to the url in the browser
    window.location = "#About"; 
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
}

// --------------------------- Product/Looms --------------------------- //

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
        $(".cart-button").bind('click', cartPage);
        //to everything on this selector, bind a click listener and run this function
        $(".product_image").bind("click", photoPop);
        $(".primary").bind("click", photoPop);
        image_show.addEventListener('click', closePhotoviewing); 
        history.pushState
        }
    });
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

// --------------------------- Links --------------------------- //

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

// --------------------------- PDF/Loom Design Page --------------------------- //

function changePDF(event) {
     // stop the default action of an element from happening
    if (event) {
        event.preventDefault(); 
    }

    // This adds the pdfs to the url in the browser
    window.location = "#Pdfs"
}

//Create a function to call the Loom Design page when link is clicked on 
function loadLoomDesign(event){
    $.ajax({
        url: "pdfs", 
        success: function(data){
            $("#content-box").html(data);
        }
    }); 
}; 


// --------------------------- Contact --------------------------- //

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

// // ------------- Home page ------------------//

// function homePage(){ 
//     // stop the default action of an element from happening
//     if (event) {
//         event.preventDefault();
//     }
    
//     // This adds the about to the url in the browser
//     window.location = ""; 
// }

// //Create a function to call the about page so it generated when the event listener is clicked
// function loadHomePage(){
//     // AJAX request to the server 
//     $.ajax({
//         url: "home", 
//         success: function(data){
//             $("#content-box").html(data);
//         }
//     }); 
// }

// --------------------------- Navigation and browser control --------------------------- //

// anytime the value after the has changes, run this function
window.onhashchange = navigate;
window.onload = navigate;

// Variable that will hold the interval
var interval;

// This function calls each AJAX function when the page loads
function navigate() {
    // Stop the homepage rotation, just in case
    clearInterval(interval);

    loadCartCount(); 

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
    else if (link === "Pdfs") {
        loadLoomDesign();
    }
    else {
        runHomepage();
    }
}



// ------------- Home's rotating images ------------------//


//function that rotates the images every 3 seconds 
function runHomepage(){

    var jumbo = document.getElementById("jumbotron");
    jumbo.addEventListener('click', rotateImages);

    jumbo.className = "jumbotron";

    interval = setInterval(rotateImages, 5000);

    // need to track the value of i outside the function
    i = 1; 

    //create function to rotate the images in the jumbotron
    function rotateImages(){ 

        // grab the id from the HTML 
        var jumbo = document.getElementById("jumbotron");
        console.log(jumbo.style.backgroundImage)

        var imageStrBeg = "url('static/brennanlooms_app/images/pdxcg_"; 
        var imageStrEnd = ".jpg')"; 
        

        // if the number if less than 9, add a 0 to it....
        if (i <= 9){
            // add 0 to the number 
            i = "0" + i; 
        }; 

        //concatinate the string together to make the image number increment and 
        // hold into variable
        var singleImage = (imageStrBeg + i + imageStrEnd)
        console.log(singleImage)
        

        //change jumbo src to equal the concatinated equasion 
        jumbo.style.backgroundImage= singleImage

        //if i - the number of photo - is equal to 10, change it to equal one
        // so it loops back 
        if (i === 10){
            i = 0 // This should be 0 or you will never see picture 1 - I noticed that, I was going to rename the photos hahahaha thank you!
        }

        // increment each photo 
        i++
    }
}








