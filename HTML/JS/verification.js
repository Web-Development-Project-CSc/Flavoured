  
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