// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }
    volume() {
        console.log (this.length)*(this.width)*(this.height);
    };
    surfaceArea() {
      console.log (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    };
  };

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(attrsCM){
        super(attrsCM);
    }
};
const cubes = new CubeMaker({
    length: 3,
    width: 4,
    heigth: 5,
});

console.log(cubes.volume());