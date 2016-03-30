// event listener for when the page loads, function will trigger 
window.onload = loadCart; 

function loadCart(){
//This is function that will pull in the sessionStorage from brennanlooms.js 
    document.write(sessionStorage.getItem("product-id"));

}