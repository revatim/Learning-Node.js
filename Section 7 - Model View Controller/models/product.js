const fs = require('fs');
const path = require('path');

const products = [];
const BASE_path = require('../util/path');

module.exports = class Product {
	constructor(title) {
		this.title = title
	}

	save() {
		products.push(this);
		// save to a file
		const p = path.join(BASE_path, 'data', 'products.json');
		fs.readFile(p, (err, fileContent) => {
			
		}); // dont use for big files - createREadStream

	}
	// can call directly on class and don't need to make object
	static fetchAll() {
		return products;
	}
}