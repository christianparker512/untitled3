'use strict';

var filtered = [];

for (var i=0; i<products.length; i++){
  if (products[i].type ==='fruit'){
    filteredProducts.push(products[i]);
  }
}
filteredProducts;

products.filter(function(product){
  return product.type ==='vegetable';
});
