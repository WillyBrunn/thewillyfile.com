/* album page collapsibles: ------------------------------------------------- */

var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    this.classList.remove("hover-effect")
    // this.classList.remove("ireland-flag-border")
    this.parentNode.style.background = "";
    } else {
    content.style.display = "block";
      if (this.parentNode.classList.contains("Pride")) {
        this.parentNode.style.background = "var(--test-pride-color)";
      }
      // if (this.parentNode.classList.contains("Ireland")) {
      //   this.classList.add("ireland-flag-border");
      // }
    this.classList.add("hover-effect");
    }
});
}