const node = document.querySelector("form .item");
let param = new URLSearchParams(window.location.search);
let total = document.querySelector("h2 span");
let number = document.querySelector("#num");
let int =0;
let clone = [];
let products = [];
    let sum =0;
for(let i=0; i<param.get('num'); i++) 
    sum += 35;
total.innerHTML = sum + '$';
for(let i=0; i<param.get('item'); i++){
    products[param.get('item')]
}
number.innerHTML = param.get('num');
int = param.get('num');
let buttons = document.querySelectorAll('.quantity img');
buttons[1].addEventListener("click", function(){
    number.innerHTML = ++int;
    total.innerHTML = (int*35) + '$';
});
    buttons[0].addEventListener("click", function(){
        number.innerHTML =--int;
        total.innerHTML = (int*35) + '$';
    })
