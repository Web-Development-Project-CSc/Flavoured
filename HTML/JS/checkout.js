const node = document.querySelector("form .item");
let param = new URLSearchParams(window.location.search);
let total = document.querySelector("h2 span");
let clone = [];
    let sum =0;
for(let i=0; i<param.get('num'); i++) 
    sum += 35;
     total.innerHTML = sum + '$';