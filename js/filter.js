
let elPortfolioList = document.querySelector(".rahbariyat__exaple-list");

rahbariyatObj.forEach((item) => {
      let elItem = document.createElement("li");
      elItem.className = "rahbariyat__ex-item";
      elItem.innerHTML = `
      <div class="rahbariyat__ex">
      <h4 class="rahbariyat__ex-title">
        ${item.country}
      </h4>
      <img class="rahbariyat__ex-img" src="${item.img}" alt="rahbariyat1">
      <p class="rahbariyat__ex-name">
        ${item.name}
      </p>
      <div class="rahbariyat__ex-span">
        ${item.work}
      </div>
    </div>
      `;

      elPortfolioList.appendChild(elItem);
  
  })


