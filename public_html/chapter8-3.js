/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var imageLoc = "images/";
var myImages = [
    "usa.gif",
    "canada.gif",
    "jamaica.gif",
    "mexico.gif"
];

var imgIndex = prompt("Enter a number from 0 to 3","");

document.images[0].src = imageLoc + myImages[imgIndex];

