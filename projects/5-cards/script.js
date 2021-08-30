var user = document.getElementById("name");
var age = document.getElementById("age");
var email = document.getElementById("email");
var submit = document.getElementById("submit");
var reset = document.getElementById("reset");
var table = document.getElementsByTagName("table")[0];
var table = document.getElementsByTagName("table")[0];
var div = document.querySelector(".cards");

var user_check = function () {
  if (!user.value) {
    document.getElementById("req_name").style.display = "inline";
    document.getElementById("name_span").style.display = "none";
    return null;
  } else if (!isNaN(user.value)) {
    document.getElementById("req_name").style.display = "none";
    document.getElementById("name_span").style.display = "inline";
    return null;
  } else {
    document.getElementById("req_name").style.display = "none";
    document.getElementById("name_span").style.display = "none";
    return user.value;
  }
};

var age_check = function () {
  if (!age.value) {
    document.getElementById("req_age").style.display = "inline";
    document.getElementById("age_span").style.display = "none";
    return null;
  } else if (
    isNaN(age.value) ||
    parseInt(age.value) < 5 ||
    parseInt(age.value) > 60
  ) {
    document.getElementById("req_age").style.display = "none";
    document.getElementById("age_span").style.display = "inline";
    return null;
  } else {
    document.getElementById("req_age").style.display = "none";
    document.getElementById("age_span").style.display = "none";
    return age.value;
  }
};

var email_check = function () {
  var rgx = /[a-zA-Z0-9-_]+@[a-zA-Z0-9-_]+[.][a-zA-Z0-9-]+/;
  if (!email.value) {
    document.getElementById("req_email").style.display = "inline";
    document.getElementById("email_span").style.display = "none";
    return null;
  } else if (!rgx.test(email.value)) {
    document.getElementById("req_email").style.display = "none";
    document.getElementById("email_span").style.display = "inline";
    return null;
  } else {
    document.getElementById("req_email").style.display = "none";
    document.getElementById("email_span").style.display = "none";
    return email.value;
  }
};

var add_to_card = function (user, age, email) {
  var card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `  
    <button type="button" onclick="del(event)">X</button>     
    <div>
    <h2>${user}</h2>
    <h1>${age}</h1>
  </div>
  <h3>E-mail: ${email}</h3>
  `;
  div.appendChild(card);
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (user_check() != null && age_check() != null && email_check() != null) {
    add_to_card(user_check(), age_check(), email_check());
  } else {
    user_check();
    age_check();
    email_check();
  }
});

reset.addEventListener("click", function () {
  user.value = age.value = email.value = "";
  for (let i = 0; i < 6; i++) {
    document.getElementsByTagName("span")[i].style.display = "none";
  }
});

[...document.getElementsByClassName("delete")].forEach((del) => {
  del.addEventListener("click", function (e) {
    console.log(e.target.parentElement);
    e.target.parentElement.remove();
  });
});

const del = (e) => {
  e.target.parentElement.remove();
};
