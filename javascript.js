


 function availRoom() {
    let numRooms = 10;
    document.getElementById("rooms").innerHTML = + numRooms;
};

function greet(){
var greeting = 'Hi ';
var name = 'Renita! ';
var welcome = greeting + name;
var updateGreet = document.getElementById("greeting");
updateGreet.textContent = welcome;
}

document.getElementById("cottages").innerHTML = '1';


window.onload = function () {
  greet()
  availRoom()
}
