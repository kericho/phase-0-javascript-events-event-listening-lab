/*const btn = document.getElementById('button');
function clickAlert(){
    alert('Hello theere!');
}
function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}
addingEventListener();*/
function addingEventListener() {
    let input= document.getElementById("button");
    input.addEventListener("click", addingEventListener);
    alert("I was clicked")
}