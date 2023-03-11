
    function confirmpass(){

        let p=document.getElementById("pword").value;
        let pc=document.getElementById("cpword").value;
        let x= document.getElementById("cc");
        if(p!=pc){
          
          x.classList.add("show");
        }
          else {
          x.classList.remove("show");
          }  
    }
function validateAge()
{
let b=document.getElementById("bdate").value;
let x = new Date();
if(new Date(b).getTime()<= x.getTime()){
  alert("nooo");
  return false;
}
return true;
}