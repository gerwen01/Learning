/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("this is the best<br>");

var values = prompt("Please enter a set of comma separated values.", "Apples,Oranges,Bananas,Plums,Mangos,Apricots");

document.write(values + "<br>");

function splitAndReverseText(csv) {
    var parts = csv.split(",");
    parts.reverse();
    
    var reversedString = parts.join(",");
    
    document.write(reversedString + "<br>");
    
}

function splitAndAlphText(csv) {
    var parts = csv.split(",");
    parts.sort();
    
    var sortedString = parts.join(",");
    
    document.write(sortedString + "<br>");
    
}


splitAndReverseText(values);
splitAndAlphText(values);