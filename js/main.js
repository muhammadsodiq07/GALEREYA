let elDescBtn = document.querySelector(".galeria__photo");
let elDescSpec = document.querySelector(".galeria__video");
let elColor = document.querySelector(".text__color");
let eldescSummaryInfo = document.querySelector(".galeria__photos--imgs");
let elDescSpecification = document.querySelector(".galeria__photos--videos");

elDescSpec.addEventListener("click", () => {
  elColor.style.transform = "translateX(124%)";
  eldescSummaryInfo.classList.remove("show-it");
  elDescSpecification.classList.add("show-it");
});

elDescBtn.addEventListener("click", () => {
  elColor.style.transform = "translateX(0)";
  eldescSummaryInfo.classList.add("show-it");
  elDescSpecification.classList.remove("show-it");
});


