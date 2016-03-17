/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function updateTime() {
    var curTime = new Date();
    document.getElementById("output").innerHTML = curTime.toISOString() +
            "<br>" + curTime.toLocaleDateString();
}
setInterval(updateTime, 1000);
