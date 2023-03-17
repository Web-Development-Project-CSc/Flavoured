let hidden = document.getElementsByTagName("section");
let showers = document.getElementsByClassName("scroller");
move(showers[0]);
function move(tag){
    for(let i =0; i<showers.length; i++) showers[i].classList.remove("active");
    tag.classList.add("active");
    for(let i=0; i<hidden.length; i++) hidden[i].style.display="none";
    if(tag == showers[0]){
        hidden[0].style.display="block";
    }
   else if(tag == showers[1]){
        hidden[1].style.display="block";
    }
   else if(tag == showers[2]){
        hidden[2].style.display="block";
    }
}
let payments = document.querySelectorAll('input[name="method"]');
payments[1].addEventListener('change', function (e) {
    if (this.checked)
     openDetails();
  });
  payments[0].addEventListener('change', function (e) {
    if (this.checked)
     closeDetails();
  });
function openDetails() {
  document.getElementById("online").open = true;
}

function closeDetails() {
  document.getElementById("online").open = false;
}