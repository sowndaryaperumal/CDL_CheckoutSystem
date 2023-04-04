// Define the pricing rules for the items
const pricingRules = {
	
  A: { unitPrice: 50, specialPrice: { count: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { count: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 }
};

// Define the object to hold the added items
var items = {};

// Define the function to be triggered with Add to Basket button click action
function addToBasket(){
	
	var itemValue = document.getElementById("item").value;
	
	// to add the item to the items object
	this.items[itemValue] = (this.items[itemValue] || 0) + 1;
		
	// invokes the total function to calculate the running total
	total()
}

// Define the total calculation functionality
function total(){
    let total = 0;
    
    //Loop through each item in the object
    for (let itemValue in this.items) {
      const count = this.count(itemValue);
      const { unitPrice, specialPrice } = pricingRules[itemValue];
      if (specialPrice) {
        const specialPriceCount = Math.floor(count / specialPrice.count);
        const remainingCount = count % specialPrice.count;
        total += specialPriceCount * specialPrice.price;
        total += remainingCount * unitPrice;
      } else {
        total += count * unitPrice;
      }
    }
    total = total/100;
    document.getElementById("total").innerHTML = total;
    
  }

//Define the count for the items added in the basket
function count(itemValue) {
    return this.items[itemValue] || 0;
 }
