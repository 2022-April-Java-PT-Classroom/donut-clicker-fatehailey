import DonutMaker from "./DonutMaker";

describe("DonutMaker", ()=>{

    test("should be able to add a donut and retrieve the total count", ()=> {
        //Arrange
        const underTest = new DonutMaker(0,0,0,0,0);
        //Act
        underTest.addDonut();
        //Assert
        expect(underTest.numDonuts).toEqual(1);
    });
    test("should be able to add a autoclicker with 100 donuts and take away spent donuts", ()=> {
        //Arrange
        const underTest = new DonutMaker(100, 0, 100, 10);
        //Act
        underTest.addAutoclicker();
        //Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoclickers).toEqual(1);
    });
    test("should NOT be able to purchase an autoclicker with 99 donuts", ()=>{
        const underTest = new DonutMaker(99, 0);
        underTest.addAutoclicker();
        expect(underTest.numDonuts).toEqual(99);
        expect(underTest.numAutoclickers).toEqual(0);
    });
    test("should be able to increase 2nd autoclicker by 10%", ()=>{
        const underTest = new DonutMaker(200,1, 100, 0, 10);
        underTest.addAutoclicker();
        expect(underTest.autoClickerCost).toEqual(110);
    });
    test("should not be able to purchase a multipler with 9 donuts", ()=>{
        const underTest = new DonutMaker(9, 0, 100, 0, 10);
        underTest.addMultiplier();
        expect(underTest.multiplierNum).toEqual(0);
    });
    test("should be able to increase 2nd multiplier by 10%", ()=>{
        const underTest = new DonutMaker(200, 1, 100, 0, 10);
        underTest.addMultiplier();
        expect(underTest.multiplierCost).toEqual(11);
    });
               
});