const node = document.querySelector("form .item");
let param = new URLSearchParams(window.location.search);
let total = document.querySelector("h2 span");
let number = document.querySelector("#num");
document.getElementById("cncl").onclick= function() { location.replace("STORE.html");}
let int =0;
    let sum =0;
for(let i=0; i<param.get('num'); i++) 
    sum += 35;
int = param.get('num');
let buttons = document.querySelectorAll('.quantity img');
buttons[1].addEventListener("click", function(){
    number.innerHTML = ++int;
    total.innerHTML = (int*35) + '$';
});
    buttons[0].addEventListener("click", function(){
        if(int-1>=0){
        number.innerHTML =--int;
        total.innerHTML = (int*35) + '$';
        }
    })
let string = param.get('item');
let arr = [];
if(string!=null){
        for(let i=0; i<string.length; i++){
            arr[i] = 0;
            let j =i;
           while(string[i]!='+' && i<string.length){
            if(arr[j]==0)
               arr[j] = string[i];
               else arr[j]+= string[i];
               i++;
           }
        }
    }
    let result = [];
    for(let i =0 ;i<27; i++) result.push(0);
    for(let i=0; i<arr[0].length; i++){
        let temp = '';
        if(arr[0].charAt(i)!=' ')  temp = arr[0].charAt(i);
        if(arr[0].charAt(i+1)!=' ') temp +=arr[0].charAt(i+1);
        result[parseInt(temp)]++;
    }

