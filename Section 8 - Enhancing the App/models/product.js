const fs = require('fs');
const path = require('path');

const BASE_path = require('../util/path');
const p = path.join(BASE_path, 'data', 'products.json');

const getProductsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if(err) {
			cb([]);
		}
		else{
			cb(JSON.parse(fileContent));
		}
	});
}
module.exports = class Product {
	constructor(title, imageUrl, details, price) {
		this.title = title;
		this.imageUrl = imageUrl;
		this.details= details;
		this.price = price;
	}

	save() {
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log("Error while saving products file: ", err);
			});
		});
		
	}
	static fetchAll(cb) {
		getProductsFromFile(cb)
	}
}