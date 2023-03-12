let index = 0;
infoFade();
function infoFade(){
    let i;
    let p = document.getElementsByClassName("paragraph");
    for (i = 0; i < p.length; i++) {
        p[i].style.display = "none";  
      }
      index++;
      if (index > p.length) {index = 1}    
      p[index-1].style.display = "block"; 
 setTimeout(infoFade, 5000); 
}