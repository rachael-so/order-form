'use strict';

var products = ['select', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'metro', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var selectEl = document.getElementById('dropbox');
var buyButton = document.getElementById('buy');

for (var i = 0; i < products.length; i++) {
  var optionEl = document.createElement('option');
  optionEl.textContent = products[i];
  selectEl.appendChild(optionEl);
}

function Order(product, quantity, name, street, city, state, zip, digits, ccard) {
  this.product = product;
  this.quantity = quantity;
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.digits = digits;
  this.ccard = ccard;
}

Order.prototype.createLS = function () {
  localStorage.data = JSON.stringify(this);
};

buyButton.addEventListener('submit', handleSubmit);

function handleSubmit() {
  
}
