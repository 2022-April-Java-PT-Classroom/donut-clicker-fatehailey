import DonutMaker from "./DonutMaker.js";

function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}




  const donutAmount = document.querySelector('.donutCount');
  const totalDonuts = document.querySelector('#donutClicker');
  const totalAuto = document.querySelector('#totalAutoClickers') ;
  const autoButton = document.querySelector('#addClicker');
  const totalMultiplier = document.querySelector('#totalMultipliers');
  const multiplierButton = document.querySelector('#addMultiplier');
  const valuePerClick = document.querySelector('#perClick');
  const resetButton = document.querySelector('#resetButton');

let myDonuts = new DonutMaker(0, 0, 100, 0, 10);

donutAmount.addEventListener("click", () => {
  myDonuts.addDonut();
  myDonuts.activateMultipliers();
  donutAmount.innerHTML = myDonuts.numDonuts;
});
