var fieldToAddTo = "";
var text = "Hello";

$("#input-box").append("<input type='text' placeholder='Type and click in a box' />");

window.onkeyup = keyup;

function keyup(e) {
  text = e.target.value || "Hello";
  if (e.keyCode == 13) {
    console.log("Error");
  }
}

$(".segment").click(function(event) {
  var target = $(event.target);
  if (target.is(".segment-details")) {
    target.remove();
  } else {
    fieldToAddTo = $(this);
    addNewItem(text);
  }
});

function addNewItem(text) {
  fieldToAddTo.append("<div class='segment-details'>" + text + "</div>");
}

