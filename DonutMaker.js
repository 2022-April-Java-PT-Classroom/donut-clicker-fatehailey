class DonutMaker {

    constructor(numDonuts, numAutoclickers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.autoClickerCost = 0;
        this.donutMultipler = 0;
        
    }

    addDonut(){
        this.numDonuts ++;
    }

    addAutoclicker(){
        if(this.numDonuts >=100){
            this.numDonuts -= 100;
            tthis.autoClicker++;
        }
    }
    
    increaseAutoclickerCost(){
        if (this.numDonuts >= autoClickerCost) {
            this.numDonuts = this.numDonuts - autoClickerCost;
            autoClickerCost += Math.floor(autoClickerCost * 0.10);
          }
        }

    increaseDonutMutiplierCost(){
        if (this.numDonuts >= 10) {
            this.numDonuts -= 10;
            this.donutMultipler++;
          }
        }


}

export default DonutMaker;