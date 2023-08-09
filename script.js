
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 2 seconds
}


function showhide() {
  var btnText = document.getElementById("showless");
  var x = document.getElementById("showhide");
  if (x.style.display === "none") {
    x.style.display = "flex";
    btnText.innerHTML = "Show less";
     
  } else {
    x.style.display = "none";
    btnText.innerHTML = "Show More"; 
  }
}