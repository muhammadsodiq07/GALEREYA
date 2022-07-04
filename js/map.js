const objMap = [{
  id: 1,
  name: "toshkent",
  title: "toshkent shahar",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 2,
  name: "xorazm",
  title: "Xorazm",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 3,
  name: "buxoro",
  title: "Buxoro",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 4,
  name: "qoraqolpakston",
  title: "Qoraqolpakstan",
  day: "6 kun",
  study: "9:00-18:00",
  teachers: "3",
  students: "20",
},
{
  id: 5,
  name: "navoiy",
  title: "Navoiy",
  day: "5 kun",
  study: "11:00-17:00",
  teachers: "1",
  students: "15",
},
{
  id: 6,
  name: "samarqand",
  title: "Samarqand",
  day: "6 kun",
  study: "8:00-18:00",
  teachers: "5",
  students: "25",
},
{
  id: 7,
  name: "qashqadaryo",
  title: "Qashqadaryo",
  day: "3 kun",
  study: "9:00-18:00",
  teachers: "5",
  students: "25",
},
{
  id: 8,
  name: "surxandaryo",
  title: "Surxandaryo",
  day: "4 kun",
  study: "10:00-15:00",
  teachers: "5",
  students: "25",
},
{
  id: 9,
  name: "andijon",
  title: "Andijon",
  day: "4 kun",
  study: "10:00-15:00",
  teachers: "5",
  students: "25",
},
{
  id: 10,
  name: "fergana",
  title: "Fergana",
  day: "6 kun",
  study: "9:00-15:00",
  teachers: "5",
  students: "25",
},
{
  id: 11,
  name: "namangan",
  title: "Namangan",
  day: "6 kun",
  study: "9:00-15:00",
  teachers: "5",
  students: "25",
},
{
  id: 12,
  name: "jizzah",
  title: "Jizzah",
  day: "6 kun",
  study: "9:00-15:00",
  teachers: "5",
  students: "25",
},
{
  id: 13,
  name: "sirdaryo",
  title: "Sirdaryo",
  day: "6 kun",
  study: "9:00-15:00",
  teachers: "5",
  students: "25",
},
];

let list = document.querySelector(".hududiy__info-main");

let toshkent = document.querySelector(".map-svg .toshkent");
let buxoro = document.querySelector(".map-svg .buxoro");
let xorazm = document.querySelector(".map-svg .xorazm");
let qoraqolpakston = document.querySelector(".map-svg .qoraqolpakstan");
let navoiy = document.querySelector(".map-svg .navoiy");
let samarqand = document.querySelector(".map-svg .samarqand");
let qashqadaryo = document.querySelector(".map-svg .qashqadaryo");
let surxandaryo = document.querySelector(".map-svg .surxandaryo");
let andijon = document.querySelector(".map-svg .andijon");
let fergana = document.querySelector(".map-svg .fergana");
let namangan = document.querySelector(".map-svg .namangan");
let jizzah = document.querySelector(".map-svg .jizzah");
let sirdaryo = document.querySelector(".map-svg .sirdaryo");

toshkent.addEventListener("click", () => showData(toshkent, 1));
xorazm.addEventListener("click", () => showData(xorazm, 2));
buxoro.addEventListener("click", () => showData(buxoro, 3));
qoraqolpakston.addEventListener("click", () => showData(qoraqolpakston, 4));
navoiy.addEventListener("click", () => showData(navoiy, 5));
samarqand.addEventListener("click", () => showData(samarqand, 6));
qashqadaryo.addEventListener("click", () => showData(qashqadaryo, 7));
surxandaryo.addEventListener("click", () => showData(surxandaryo, 8));
andijon.addEventListener("click", () => showData(andijon, 9));
fergana.addEventListener("click", () => showData(fergana, 10));
namangan.addEventListener("click", () => showData(namangan, 11));
jizzah.addEventListener("click", () => showData(jizzah, 12));
sirdaryo.addEventListener("click", () => showData(sirdaryo, 13));

function showData(smth,num) {
  let a = document.querySelectorAll(".map-svg path");

  a.forEach(item => {
    item.setAttribute("fill", "#d4d3c4");
  })

  smth.setAttribute("fill", "#938F6A");
  list.innerHTML = ""
  objMap.forEach((item) => {
    if(item.id == num){
      let elItem = document.createElement("div");
      elItem.className = "hududiy__info-div";
      elItem.innerHTML = `
                <div class="hududiy__info-title">
                  <p class="hududiy__info-t">
                    ${item.title}
                  </p>
                </div>
                <div class="hududiy__info d-flex mb-3">
                  <div class="hududiy__day1 d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.day}
                    </span>
                    <p class="hududiy__info-text">
                      Xafta kunlari
                    </p>
                  </div>
                  <div class="hududiy__day d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.study}
                    </span>
                    <p class="hududiy__info-text">
                      O’quv-mashg’ulot vaqti
                    </p>
                  </div>
                </div>
                <div class="hududiy__info d-flex">
                  <div class="hududiy__day2 d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.teachers}
                    </span>
                    <p class="hududiy__info-text">
                      Murabbiylar
                    </p>
                  </div>
                  <div class="hududiy__day d-flex flex-column">
                    <span class="hududiy__info-span">
                    ${item.students}
                    </span>
                    <p class="hududiy__info-text">
                      O’quvchilar
                    </p>
                  </div>
                </div>
                <a class="text-deco" href="/boglanish.html">
                  <button class="heaeder__btn1 d-flex align-items-center ms-5">
                    bog’lanish
                    <i class='bx bx-right-arrow-alt header__btn-icon'></i>
                  </button>
                </a>
        `;
  
      list.appendChild(elItem);image.png
      console.log(list);
    }

  })
}

showData(toshkent, 1)