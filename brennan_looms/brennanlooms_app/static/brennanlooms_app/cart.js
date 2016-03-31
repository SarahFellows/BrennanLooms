// event listener for when the page loads, function will trigger 
window.onload = loadCart; 

function getDataInStorageSession(){
//This is function that will pull in the sessionStorage from brennanlooms.js 
    //console.log(sessionStorage.getItem("products"));

    //retreieve data stored in browser 
    if (sessionStorage.getItem("currentList") === null){
        //no items in cart
        document.write("There are no items in your cart yet."); 
    } else {
        //get the value 
        var itemsInlist = JSON.parse(sessionStorage["currentList"]); 
        console.log("Here are items in your cart", itemsInlist); 
    }
}

// function displayCart(){

// }


