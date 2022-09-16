import DonutMaker from "./DonutMaker";

describe("The creation of DonutMaker", () => {
  test("Does it add a donut?", () => {
    const underTest = new DonutMaker(0, 0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });
  test("Can it purchase an autoclicker AND remove spent donuts?", () => {
    const underTest = new DonutMaker(100, 0, 100);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(1);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("Should not allow autoclicker purchase with 99 Donuts", () => {
    const underTest = new DonutMaker(99, 0);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(0);
  });
  test("Will add donuts increase by the amount of autoclickers present when fired", () => {
    const underTest = new DonutMaker(110, 2);
    underTest.activateAutoClicker();
    expect(underTest.numDonuts).toEqual(112);
  });
  test("Should allow for purchase of Donut Multiply", () => {
    const underTest = new DonutMaker(100, 0, 100, 0, 10);
    underTest.addDonutMultiplier();
    expect(underTest.getNumDonutMultiplier()).toEqual(1);
  });
  test("Should be able to add 10 donut with Donut Multiplier is fired", () => {
    const underTest = new DonutMaker(0, 10, 100, 0, 10);
    underTest.addDonutByAutoClicker();
    expect(underTest.getNumDonut()).toEqual(10);
  });
  test("Should be able to substract the autoclicker cost from the donuts", () => {
    const underTest = new DonutMaker(100, 10, 100, 0, 10);
    underTest.addAutoClicker();
    expect(underTest.getNumDonut()).toEqual(0);
  });
  test("Should be able to substract the donut multiplier cost from the donuts", () => {
    const underTest = new DonutMaker(10, 10, 100, 0, 10);
    underTest.addDonutMultiplier();
    expect(underTest.getNumDonut()).toEqual(0);
  });
  test("Ensure that there are enough donuts to buy first donut multiplier", () => {
    const underTest = new DonutMaker(0, 10, 100, 0, 10);
    underTest.addDonutMultiplier();
    expect(underTest.getNumDonutMultiplier()).toEqual(0);
  });
  test("After first donut multiplier the value of the clicks will increase by 1.2x", () => {
    const underTest = new DonutMaker(0, 10, 100, 1, 10);
    underTest.addDonutMultiplier();
    underTest.addDonut();
    expect(underTest.getNumDonut()).toEqual(1.2);
  });
  test("Should increase the donut multiplier to 1.2 to the xth power, where x is the amount of donut multiplier", () => {
    const underTest = new DonutMaker(0, 10, 100, 5, 10);
    underTest.addDonut();
    expect(underTest.getNumDonut()).toEqual(2.49);
  });
  test("Should add 2.5 autoclickers with 5 donut multipliers", () => {
    const underTest = new DonutMaker(100, 0, 100, 5, 10);
    underTest.addAutoClicker();
    expect(underTest.getNumAutoClicker()).toEqual(2.49);
  });
});