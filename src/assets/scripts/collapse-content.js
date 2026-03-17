var buttons = document.getElementsByClassName("collapsible-button");
var i;
for (i = 0; i < buttons.length; i++) {
  var button = buttons[i];

  // Add listener for button click
  button.addEventListener("click", function() {
    this.classList.toggle("collapsible-button-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
