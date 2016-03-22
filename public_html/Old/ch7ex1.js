/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var birthYear = prompt("What year were you born", 1971);
var birthMonth = prompt("What month? (Number)",11)-1;
var birthDay = prompt("What Day?",6);

/*
var birthYear = 1971;
var birthMonth = 10;
var birthDay = 6;
*/
// 
// document.write("hello");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday",
    "Saturday"];

var birthDate = new Date();
birthDate.setYear(parseInt(birthYear));
birthDate.setMonth(parseInt(birthMonth));
birthDate.setDate(parseInt(birthDay));

var birthDOW = "";

document.write(birthDate + "<br>");
document.write(birthDate.getDay() +"<br>");
/*
switch(birthDate.getDay()) {
    case 0:
        birthDOW = "Sunday";
        break;
    case 1:
        birthDOW = "Monday";
        break;
    case 2:
        birthDOW = "Tuesday";
        break;
    case 3:
        birthDOW = "Wednesday";
        break;
    case 4:
        birthDOW = "Thursday";
        break;
    case 5:
        birthDOW = "Friday";
        break;
    case 6:
        birthDOW = "Saturday";
        break;

        
}
*/
document.write("You were born on a " + days[birthDate.getDay()] );
