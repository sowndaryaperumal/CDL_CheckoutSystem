function pricingRules()   
 {   
var itemName = document.getElementById("item-name").value;
var unitPrice = document.getElementById("item-unit-price").value;
var specialPriceQuantity = document.getElementById("item-special-price-quantity").value;
var specialPrice = document.getElementById("item-special-price").value;


var pricingRule = {itemName: {unitPrice,specialPriceQuantity,specialPrice}};

console.log(pricingRule.itemName);

}
