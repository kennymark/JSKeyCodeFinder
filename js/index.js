$(document).on("keydown", function(e) {
  var key = $(".key");
  $(".keycode").text(e.keyCode);
  key.text(e.key);

  if (e.keyCode == 32) {
    key.text("Spacebar");
  } else if (e.keyCode === 91) {
    e.preventDefault();
    key.text("Windows");
  }
  console.log(e);
  e.preventDefault();
});

setInterval(function() {
  $(".footer i").addClass("anim").delay(200).removeClass("anim");
}, 500);