var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    this.classList.remove("hover-effect")
    this.parentNode.style.background = "";
    } else {
    content.style.display = "block";
      if (this.parentNode.classList.contains("Pride")) {
        this.parentNode.style.background = "linear-gradient(135deg, rgb(0, 0, 0), rgb(54, 35, 18), rgb(120, 79, 23), rgb(181, 63, 27), rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 48%, rgb(241, 235, 27), rgb(241, 235, 27) 52%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142))";
      }
    this.classList.add("hover-effect");
    }
});
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menu_dropdown_function() {
    document.getElementById("navigation-menu-id").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.navigation-menu-button')) {
      var dropdowns = document.getElementsByClassName("navigation-menu-dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }