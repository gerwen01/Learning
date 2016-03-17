/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("this is the best<br>");


var myString = "Paul, Paula, Pauline, paul, Paul";

document.write(myString + "<br>");

var myRegExp = /Paul/gi;

myString = myString.replace(myRegExp, "Ringo");
document.write(myString);