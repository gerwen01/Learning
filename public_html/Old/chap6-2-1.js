/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var text = "Go fuck yourself you fucking shithead.  There's no fucking way "+
        "such a shitfaced fucker like you deserves to live.  Go take a shit " +
        "motherfucker.";

var myRegExp = /\w*fuck\w*|\w*shit\w*/gi;
var fixedText = text.replace(myRegExp,"____");

document.write("Original :"+text+"<br>");
document.write("Fixed :"+fixedText);


