const products = ["laptop","phone","headphones","monitor"];

function logFirstProduct(){
    console.log(products[0]);
}
function addProduct(productName){
    products.push(productName);

}
function updateProductName(index,newName){
     debugger
    products[index]=newName;
   

}
function removeLastProduct(products){
    debugger
    products.pop();
}
logFirstProduct();
addProduct("Ipad");
updateProductName(0,"Macbook");
console.log(products);
console.log(products.pop())
  



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
