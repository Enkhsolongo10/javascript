const product1 = {
    name: "Macbook",
    price: 1500,
};

const product2 = {
    name: "iphone",
    price: 2000,
};

const product3 = {
    name: "iMac",
    price: 2800,
}

const products = [product1, product2, product3]; //item geed bgaa n 0 1 2 gj toologdono 
// console.log(products)
// console.log(products[1].price)
let totalPrices = 0;
for( let i=0; i<products.length; i++) {
    console.log(products[i].name)
}
