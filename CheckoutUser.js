// Define the pricing rules for the items
const pricingRules = {
	
  A: { unitPrice: 50, specialPrice: { count: 3, price: 130 } },
  B: { unitPrice: 30, specialPrice: { count: 2, price: 45 } },
  C: { unitPrice: 20 },
  D: { unitPrice: 15 }
};

var items = {};

function addToBasket(){
	

	var itemValue = document.getElementById("item").value;
	
	// to add the item to the items object
	this.items[itemValue] = (this.items[itemValue] || 0) + 1;
			
	total()
}

  
function total(){
    let total = 0;
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
    document.getElementById("total").innerHTML = total;
    //return total;
  }

function count(itemValue) {
    return this.items[itemValue] || 0;
 }
