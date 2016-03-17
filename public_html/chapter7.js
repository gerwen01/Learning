/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var localTime= new Date();

var html = "<p>UTC Time is " + localTime.toUTCString() + "</p>";

html += "<P>Time Zone Offset is " +
        localTime.getTimezoneOffset()/60 + " hours<p>";

html += "<p>Using toLocaleTimeString() gives: " +
        localTime.toLocaleTimeString() + "</p>";

html += "<p>Using toTimeString() gives: " +
        localTime.toTimeString() + "</p>";

html += "<p>Using toLocaleDateString() gives: " +
        localTime.toLocaleDateString() + "</p>";

html += "<p>Using toDateString() gives: " +
        localTime.toDateString() + "</p>";

document.write(html);
