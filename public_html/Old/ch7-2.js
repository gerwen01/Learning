/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myDate = new Date();

var html = "<p>" + myDate.toUTCString() + "</p>";
html += "<p>" + myDate.toLocaleString() + "<p>";

document.write(html);

myDate.setUTCHours(12);
myDate.setUTCMinutes(0);
myDate.setUTCSeconds(0);
myDate.setUTCMilliseconds(0);

html = "<p>" + myDate.toUTCString() + "</p>";
html += "<p>" + myDate.toLocaleString() + "<p>";
html += "<p>" + myDate.toISOString() + "<p>";

document.write(html);

