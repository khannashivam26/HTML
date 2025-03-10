class Product {
    constructor(itemName) {
        this.name = itemName;
    }
    getName() {
        return this.name + " is the product name";
    }
}

// Creating a subclass (extending a class or inheritance)
class Label extends Product {
    constructor(name) {
        super(name); // Pass name to the super class constructor
    }
    getName() {  // Override the method
        return this.name + " is the label";
    }

    // Method to call Product class's getName() method explicitly
    getProductName() {
        return super.getName(); // Call the parent class's method
    }
}

let label = new Label("Product A");

console.log(label.getName());        // Calls the overridden method in Label class
console.log(label.getProductName()); // Calls the method from the Product class
