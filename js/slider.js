// Bottom slider

let elSimilarList = document.querySelector(".xabarlar__list");
let elRight = document.querySelector(".right");
let elLeft = document.querySelector(".left");
let elCheck = 0;

elRight.addEventListener("click", () => {
  elCheck++;
  carouselIt();
});

elLeft.addEventListener("click", () => {
  elCheck--;
  carouselIt();
});

function carouselIt() {
  if (elCheck == 0) {
    elLeft.style.display = "none";
  } else if (elCheck > 0) {
    elLeft.style.display = "block";
  }

  if (elCheck == 7) {
    elRight.style.display = "none";
  } else {
    elRight.style.display = "block";
  }

  elSimilarList.style.transform = `translate(${-elCheck * 25.5}%)`;
}


