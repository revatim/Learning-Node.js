const fs = require('fs');
const path =  require('path');

//Path to Data => products.json
const p = path.join(path.dirname(process.mainModule.filename),
                    "data", 
                    "cart.json");

function readProductsFile (cb) {
    console.log("Inside readProductsFile")
    fs.readFile(p, (err, fileContent) => {
        let cart = {products: [], totalPrice: 0};
        if (!err) {
            cart = JSON.parse(fileContent);
            cb(cart);
        }
        else {
            console.log("Empty cart.json")
            return cb(cart);
        }
    })
}
module.exports = class Cart {
    static addProduct(id, price) {
        //1. Fetch previous cart
        readProductsFile (cart => {
            //2. analyze cart => find existing products

            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            //3. If exists increase count

            if(existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products[existingProductIndex] = updatedProduct;
            }
            //4. Else add to cart
            else {
                updatedProduct = {
                    id: id,
                    qty: 1
                };
                cart.products = [...cart.products, updatedProduct];

            }
            cart.totalPrice = parseInt(cart.totalPrice) + parseInt(price);

            fs.writeFile(p, JSON.stringify(cart), err => {
                if(err)
                    console.log("error in writing to products", err);
            } );
        });
 
    }

    static getCartProducts(cb) {
        readProductsFile(cart => {
            cb(cart);
        });
    }
}