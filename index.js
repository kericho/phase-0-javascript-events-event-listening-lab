const btn = document.getElementById('button');
function clickAlert(){
    alert('Hello theere!');
}
function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}
addingEventListener();