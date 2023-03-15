
document.getElementById("cpword").onchange = function() {confirmPass()};
document.getElementById("bdate").onchange = function() {validateAge()};

    function confirmPass(){

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

// document.getElementById("signupbtn").onclick= function(){
//   let account = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     password: document.getElementById("pword").value,
//     age: document.getElementById("bdate").value,
//     address: document.getElementById("address"),
//     country: document.getElementById("country"),
//     phone: document.getElementById("mobile"),
//   };
//   addUser(account);
//   console.log(userExists(account.email));
// }