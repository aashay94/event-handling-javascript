//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}


Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};


var t = new Title("CONNECT WITH ME!");

var el = document.getElementsByClassName("dropDownTextArea");
var btn = document.getElementById("button");
var checkBox = document.querySelectorAll("input[type=checkbox]");

//part 1 and 2
window.addEventListener("load", function () {
  for (var i = 0; i < el.length; i++) {
    el[i].style.display = "none";
  }
  btn.classList.add("disabled");
  btn.disabled = true;
});

//part3
for (var i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener("click", function () {
    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked == true) {
        checkBox[i].parentNode.parentNode.style.background = "#ccff00";
        btn.classList.remove("disabled");
        btn.disabled = false;
      }
      else {
        checkBox[i].parentNode.parentNode.style.background = "#ffffff";
      }
    }
  });
}

//part4
for (var i = 0; i < checkBox.length; i++) {
  checkBox[i].addEventListener("change", function () {
    for (var i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked == false && checkBox[i + 1].checked == false && checkBox[i + 2].checked == false) {
        btn.classList.add("disabled");
        btn.disabled = true;
      }
    }
  });
}

//part5
function toggleDisplay(txtArea) {
  var tstAr = document.getElementById(txtArea);
  if (tstAr.style.display == "none") {
    tstAr.style.display = "table-row";
  } else {
    tstAr.style.display = "none";
  }
}




