let switcher = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcher.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manImage);
});

///remove active
function removeActive() {
  switcher.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manImage() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}

// section2
let btnE1 = document.querySelector(".generate");
let serialE1 = document.querySelector(".serial");

btnE1.onclick = function () {
  let characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$%£!";
  let charCount = 20;
  let randomSerial = "";
  for (let i = 0; i < charCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialE1.innerHTML = randomSerial;
};

//section3

let arr = ["ahmed", "mohammed", "ali"];

console.log(arr.length);

console.log(Math.random() * arr.length);

console.log(Math.trunc(Math.random() * arr.length));

console.log(arr[Math.trunc(Math.random() * arr.length)]);

//section ....

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll(".content > div ");
let divsArray = Array.from(divs);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabs.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});

//section4

let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
