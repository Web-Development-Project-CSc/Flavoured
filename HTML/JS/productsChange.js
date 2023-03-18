let num = document.getElementsByClassName("page");
let pages = document.getElementsByClassName("items");
currentPage(1);
function currentPage(n) {
    showPage(pageNum = n);
    under(n);
  }
  function under(n) {
    for (i = 0; i < num.length; i++) {
      num[i].style.textDecoration="none";
    }
    num[n-1].style.textDecoration="underline";
}
  function showPage(n) {
    let i;
    if (n > pages.length) {pageNum = 1}    
    if (n < 1) {pageNum = pages.length}
    for (i = 0; i < pages.length; i++) {
      pages[i].style.display = "none";  
    }
    pages[pageNum-1].style.display = "block";  
    window.scrollTo({top :0, behavior:"smooth"});
}
  
  