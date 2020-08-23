


 function availRoom() {
    let numRooms = 10;
    document.getElementById("rooms").innerHTML = + numRooms;
};
var hour = new Date().getHours();
let hourUpdate = ("Good " + (hour<12 && "Morning" || hour<18 && "Afternoon" || "Evening"))


function greet(){
var name = ' Renita! ';
var welcome = hourUpdate + name;
var updateGreet = document.getElementById("greeting");
updateGreet.textContent = welcome;
}

document.getElementById("cottages").innerHTML = '1';


window.onload = function () {
  greet()
  availRoom()
}
