// promise

function getProducts() {
	return new Promise((resolve, reject) => {
		let produt;
		setTimeout(() => {
			produt = [1, 8, 4, 9, 0];
			if (produt) {
				resolve(produt);
			} else {
				reject("Promise rejected!");
			}
		}, 1000);
	});
}

function getProductsDetails(produtId) {
	return new Promise((resolve, reject) => {
		let details;
		setTimeout(() => {
			details = { id: produtId, name: "Product1", price: 100 };
			if (details) {
				resolve(details);
			} else {
				reject("Promise rejected!");
			}
		}, 1000);
	});
}

getProducts()
	.then((data) => {
		return getProductsDetails(data[0]);
     }).then((details) => {
          console.log(details);
     }).catch((error) => {
		console.log(error);
	});
