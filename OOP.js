// Create a Basic JavaScript Object
let dog = {
    name: 'Bernie',
    numLegs: 4
}
// Use Dot Notation to Acess the Properties of an Object
console.log(dog.name, dog.numLegs)

// Create a Method on an Object
let dog = {
    name: 'Bernie',
    numLegs: 4
    sayLegs: function(){
        return "This dog has " + dog.numLegs + " legs."
    }
}
dog.sayLegs()

// Make Code More Reusable with this Keyword
// This. refers to the object that the method is associated with

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

// Define a Constructor Function
    // Constructors are functions that create new objects
        // Define properites and behaviors that belong to new objects
        
        // Defined with a capital name
        // Use this. to set properties of new objects they create
        // Do not return values
        // Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
        
function Dog(){
    this.name = 'Bernie'
    this.color = 'orange'
    this.numLegs = 3
}

// Use a Constructor to creat Objects 
    // this. always refers to object being created
    // new -> calling a constructor
// Use the Dog constructor from the last lesson to create a new instance of Dog, assigning it to a variable hound.

function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  let hound = new Dog()

// Extend Constructor to Recive Arguments
    // You can design Constructors to accept parameters
    // gives new instance of
    // Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.

function Dog(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 4
}
      
let terrier = new Dog("Bernie", "blue")

// Verify an Object's Constructor with instanceof
    // compares an object to a constructor, returning true or false
    // Based on weather that object was created in that construtor
    // Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. Then, use instanceof to verify that it is an instance of House.

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
      
    // Only change code below this line
let myHouse = new House(4)
myHouse instanceof House

// Understand Own Properties
    // properities inside the constructor -> own properties 
    // Creates own copies for each new instance

    function Bird(name) {
        this.name = name;
        this.numLegs = 2;
      }
      
      let canary = new Bird("Tweety");
      let ownProps = [];
      // Only change code below this line
      for(let property in canary) {
        if(canary.hasOwnProperty(property)){
          ownProps.push(property)
        }
      }
      console.log(ownProps)

// Use Prototype Properties to Reduce Duplicate Code
    // properties in the prototype are shared to all instances
    // Add a numLegs property to the prototype of Dog

    function Dog(name) {
        this.name = name;
      }
      
      
      Dog.prototype.numLegs = 4;
      // Only change code above this line
      let beagle = new Dog("Snoopy");
