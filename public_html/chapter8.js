/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function geoSuccess(position) {
    var coords = position.coords;
    var latitude = coords.latitude;
    var longitude = coords.longitude;
    
    var message = "you're at " + latitude + ", " + longitude;
    
    alert(message);
    
}

function geoError(errorObj) {
    alert(errorObj.message);
    
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
console.log("testing testing");

