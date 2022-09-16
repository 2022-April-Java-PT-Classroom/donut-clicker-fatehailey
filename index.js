import DonutMaker from "./DonutMaker.js";

const filsanDonutMaker = new DonutMaker(10, 0, 100, 1, 10, 1);

const donutCounterElement = document.querySelector(".donut-count");
const donutMultiplierElement = document.querySelector(".donuts-per-click");
const autoClickerCounterElement = document.querySelector(".autoclicker");
const costAutoClickerElement = document.querySelector(".autoclicker-cost");
const costDonutMultiplierElement = document.querySelector(
  ".donut-multiplier-cost"
);

const addDonutButton = document.querySelector(".add-donut");
const addAutoClickerButton = document.querySelector(".add-autoclicker");
const addDonutMultiplierButton = document.querySelector(
  ".add-donut-multiplier"
);

const aboutTheCompanyNav = document.querySelector(".about-company-nav");
const aboutTheDeveloperNav = document.querySelector(".about-filsan-nav");
const inspirationNav = document.querySelector(".inspiration-nav");
const aboutMeModal = document.querySelector(".about-me");
const aboutCompanyModal = document.querySelector(".about-company");
const cookieClickerModal = document.querySelector(".cookie-clicker");
const modal = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");

const updateDonutCounter = function () {
  donutCounterElement.innerHTML = filsanDonutMaker.getNumDonut();
  console.log("donuts");
};

const updateDonutMultiplier = function () {
  donutMultiplierElement.innerText = filsanDonutMaker.getDonutsPerClick();
};

const updateAutoClickerCounter = function () {
  autoClickerCounterElement.innerText = filsanDonutMaker.getNumAutoClicker();
};

const updateCostAutoClicker = function () {
  costAutoClickerElement.innerText = filsanDonutMaker.getCostAutoClicker();
};

const updateCostDonutMultiplier = function () {
  costDonutMultiplierElement.innerText =
    filsanDonutMaker.getCostDonutMultiplier();
};

addDonutButton.addEventListener("click", function () {
  filsanDonutMaker.addDonut();
  updateDonutCounter();
});

addAutoClickerButton.addEventListener("click", function () {
  filsanDonutMaker.addAutoClicker();
  updateDonutCounter();
  updateAutoClickerCounter();
  updateCostAutoClicker();
});

addDonutMultiplierButton.addEventListener("click", function () {
  filsanDonutMaker.addDonutMultiplier();
  updateDonutCounter();
  updateDonutMultiplier();
  updateCostDonutMultiplier();
});

aboutTheCompanyNav.addEventListener("click", function () {
  aboutCompanyModal.style.display = "block";
});

aboutTheDeveloperNav.addEventListener("click", function () {
  aboutMeModal.style.display = "block";
});

inspirationNav.addEventListener("click", function () {
  cookieClickerModal.style.display = "block";
});

close.forEach((btn) => {
  btn.addEventListener("click", function () {
    modal.forEach((modal) => {
      modal.style.display = "none";
    });
  });
});

window.addEventListener("click", function (event) {
  modal.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});

updateDonutCounter();
updateDonutMultiplier();
updateAutoClickerCounter();
updateCostAutoClicker();
updateCostDonutMultiplier();