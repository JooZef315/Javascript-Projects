var div = document.querySelector(".div");
var span = document.querySelector(".span");

span.addEventListener("click", function (e) {
  div.style.backgroundColor = picking();
  span.style.color = picking();
  span.innerText = `Background Color: ${picking()}`;
});

var picking = function () {
  var color = "#";
  var color_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < 6; i++) {
    var c = Math.floor(Math.random() * color_list.length);
    color += color_list[c];
  }
  return color;
};
