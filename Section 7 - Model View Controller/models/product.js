const fs = require('fs');
const path = require('path');

const BASE_path = require('../util/path');
const p = path.join(BASE_path, 'data', 'products.json');

const getProductsFromFile = (cb) => {
	// have to use callback function because this takes time to execute
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
	constructor(title) {
		this.title = title
	}

	save() {
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), (err) => {
				console.log("Error while saving products file: ", err);
			});
		});
		
	}
	// can call directly on class and don't need to make object
	static fetchAll(cb) {
		getProductsFromFile(cb)
	}
}