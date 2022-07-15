class DonutMaker {

    constructor(numDonuts, numAutoclickers, autoClickerCost, multiplierNum, multiplierCost){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoClickerCost = autoClickerCost;
        this.multiplierNum = multiplierNum;
        this.multiplierCost = multiplierCost;
        
    }

    addDonut(){
        this.numDonuts ++;
    }

    addAutoclicker(){
        if(this.numDonuts >= this.autoClickerCost){
            this.numAutoclickers++;
            this.numDonuts -= this.autoClickerCost;
            this.autoClickerCost = this.autoClickerCost / 10 + this.autoClickerCost;
        }
    }
    
    addMultiplier(){
        if(this.numDonuts >= this.multiplierCost)
        this.multiplierNum ++;
        this.numDonuts -= this.multiplierCost;
        this.multiplierCost = this.multiplierCost / 10 + this.multiplierCost;
    }

    activateMultiplier() {
        if (this.numMultipliers > 0) {
            this.numDonuts += Math.pow(1.2, this.numMultipliers);
            Math.round(this.numDonuts);
        }
    }

    activateAutoClicker() {
        if (this.numAutoClickers > 0) {
          this.numDonuts += this.numAutoClickers * 1;
        }
        activateMultipliers();
      }
}

export default DonutMaker;