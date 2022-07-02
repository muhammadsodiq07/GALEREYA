
let elPortfolioList = document.querySelector(".maktabfaolati__list");

maktabfaolatiObj.forEach((item) => {
      let elItem = document.createElement("li");
      elItem.className = "maktabfaolati__item";
      elItem.innerHTML = `
      <div class="maktabfaolati__box d-flex flex-column">
      <p class="maktabfaolati__box-title">
        ${item.title}
      </p>
    <a class="maktabfaolati__box-link d-flex align-items-center mb-4" href="#">
      <img class="maktabfaolati__box-img me-3" src=" ${item.img}" alt="location">
      ${item.location}
    </a>
    <a class="maktabfaolati__box-link d-flex align-items-center" href="#">
      <img class="maktabfaolati__box-img1 me-3" src="${item.img2}" alt="phone">
      ${item.phone}
    </a>
  </div>
      `;

      elPortfolioList.appendChild(elItem);
  
  })

