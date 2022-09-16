class DonutMaker {
    constructor(
      numDonuts,
      numAutoClickers,
      costAutoClicker,
      numDonutMultiplier,
      costDonutMultiplier,
      donutsPerClick
    ) {
      this.numDonuts = numDonuts;
      this.numAutoClickers = numAutoClickers;
      this.costAutoClicker = costAutoClicker;
      this.numDonutMultiplier = numDonutMultiplier;
      this.costDonutMultiplier = costDonutMultiplier;
      this.donutsPerClick = donutsPerClick;
    }
  
    getNumDonut() {
      return Number(this.numDonuts.toFixed(2));
    }
  
    addDonut() {
      if (this.numDonutMultiplier >= 1) this.numDonuts += this.donutsPerClick;
      else this.numDonuts += 1;
    }
  
    getDonutsPerClick() {
      return this.donutsPerClick;
    }
  
    increaseDonutsPerClick() {
      this.donutsPerClick = +Math.pow(1.2, this.numDonutMultiplier).toFixed(2);
    }
  
    getNumAutoClicker() {
      return this.numAutoClickers;
    }
  
    getCostAutoClicker() {
      return Number(this.costAutoClicker.toFixed(2));
    }
  
    addDonutByAutoClicker() {
      this.numDonuts += this.numAutoClickers;
    }
  
    addAutoClicker() {
      if (this.numDonuts >= this.costAutoClicker) {
        if (this.numDonutMultiplier >= 1) {
          this.numAutoClickers += +Math.pow(1.2, this.numDonutMultiplier).toFixed(
            2
          );
        } else {
          this.numAutoClickers++;
        }
        this.numDonuts -= Math.round(this.costAutoClicker);
        this.costAutoClicker = Math.round(this.costAutoClicker);
        this.costAutoClicker *= 1.1;
      }
    }
  
    getNumDonutMultiplier() {
      return this.numDonutMultiplier;
    }
  
    getCostDonutMultiplier() {
      return Number(this.costDonutMultiplier.toFixed(2));
    }
  
    addDonutMultiplier() {
      if (this.numDonuts >= this.costDonutMultiplier) {
        this.numDonuts -= Math.round(this.costDonutMultiplier);
        this.numDonutMultiplier += 1;
        this.costDonutMultiplier += this.costDonutMultiplier * 1.1;
        this.increaseDonutsPerClick();
      }
    }
  
    activateAutoClicker() {
      if (this.numAutoClickers > 0) {
        this.numDonuts += this.numAutoClickers * 1;
      }
    }
  }
  export default DonutMaker;