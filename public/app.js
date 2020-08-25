window.onscroll = function() {
    myFunction()
    closeNav()
    
    
};


// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");
    
  }
}

function openNav() {
  document.getElementById("mySidenav").style.marginLeft = "0px"
  document.getElementById("opac").style.opacity = "0.5"
  document.getElementById("opac").style.transition = "0.5s"


}

function closeNav() {
  document.getElementById("mySidenav").style.marginLeft = "-250px"
  document.getElementById("opac").style.opacity = "1"
}
