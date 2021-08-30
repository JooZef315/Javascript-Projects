function pick_img(sign = "next") {
  var img = document.getElementsByTagName("img")[0];
  var id = parseInt(img.getAttribute("src")[4]);

  if (sign == "next") {
    id == 5 ? (id = 1) : id++;
    img.setAttribute("src", `img/${id}.jpg`);
  } else if (sign == "Previous") {
    id == 1 ? (id = 5) : id--;
    img.setAttribute("src", `img/${id}.jpg`);
  }
}

document.getElementById("Next").addEventListener("click", function () {
  pick_img((sign = "next"));
});

document.getElementById("Previous").addEventListener("click", function () {
  pick_img((sign = "Previous"));
});
var time;
document.getElementById("Slideshow").addEventListener("click", function () {
  time = setInterval(pick_img, 1500);
});

document.getElementById("Stop").addEventListener("click", function () {
  clearInterval(time);
});
