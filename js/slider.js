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




// Bottom slider

let elSimilarList1 = document.querySelector(".galereya__list12");
let elRight1 = document.querySelector(".galereya__right");
let elLeft1 = document.querySelector(".galereya__left");
let elCheck1 = 0;

elRight1.addEventListener("click", () => {
  elCheck1++;
  carouselIt();
});

elLeft1.addEventListener("click", () => {
  elCheck1--;
  carouselIt();
});

function carouselIt() {
  if (elCheck1 == 0) {
    elLeft1.style.display = "none";
  } else if (elCheck > 0) {
    elLeft1.style.display = "block";
  }

  if (elCheck1 == 7) {
    elRight1.style.display = "none";
  } else {
    elRight1.style.display = "block";
  }

  elSimilarList1.style.transform = `translate(${-elCheck * 25.5}%)`;
}


