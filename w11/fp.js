class FP {
  constructor(fname, lname, houseMembers, houseSize, foodChoice) {
    this.fname = fname;
    this.lname = lname;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.calcSizePts();
    this.calcMembersPts();
    this.calcFoodPts();
    this.calculateTotal();
  }

  calcSizePts() {
    if (this.houseSize === "large") {
      this.houseSizePts = 12;
    } else if (this.houseSize === "medium") {
      this.houseSizePts = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePts = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePts = 2;
    }
  }

  calcMembersPts() {
    if (this.houseMembers <= 6) {
      this.householdPts = 16 - this.houseMembers * 2;
    } else {
      this.householdPts = 2;
    }
  }

  calcFoodPts() {
    if (this.foodChoice === "meat daily") {
      this.foodChoicePts = 10;
    } else if (this.foodChoice === "meat weekly") {
      this.foodChoicePts = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePts = 4;
    } else if (this.foodChoice === "vegan") {
      this.foodChoicePts = 2;
    }
  }

  calculateTotal() {
    this.total = this.houseSizePts + this.householdPts + this.foodChoicePts;
  }
}
export { FP };
