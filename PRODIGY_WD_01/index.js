// Function to open the side navigation bar
function openNavbar() {
  document.getElementById("sideNavigationBar").style.width = "50%";
}

// Function to close the side navigation bar
function closeNavbar() {
  document.getElementById("sideNavigationBar").style.width = "0%";
}

// Function to add 'scrolled' class to navbar on scroll
window.onscroll = function() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
};
