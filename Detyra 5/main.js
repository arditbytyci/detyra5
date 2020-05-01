


function addClass1() {
  var element = document.getElementById('li1');
  element.classList.add("addCSS");
}

function removeClass1() {
  var element = document.getElementById('li1');
  element.classList.remove("addCSS");
}

function addClass2() {
  var element = document.getElementById('li2');
  element.classList.add("addCSS");
}

function removeClass2() {
  var element = document.getElementById('li2');
  element.classList.remove("addCSS");
}
function addClass3() {
  var element = document.getElementById('li3');
  element.classList.add("addCSS");
}

function removeClass3() {
  var element = document.getElementById('li3');
  element.classList.remove("addCSS");
}



function validateForm() {
  var x = document.forms["myForm"]["username"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
