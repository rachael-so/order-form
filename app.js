'use strict';

var products = ['select', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'metro', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var allOrders = [];

var form = document.getElementById('form');
var selectEl = document.getElementById('dropbox');

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
    allOrders.push(this);
  }

  if(localStorage.lsOrders) {
    allOrders = JSON.parse(localStorage.lsOrders);
  }

  form.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    // console.log('test2');
    event.preventDefault();
    var product = event.target.product.value;
    var quant = event.target.quant.value;
    var userName = event.target.userName.value;
    var street = event.target.street.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;
    var digits = event.target.digits.value;
    var ccard = event.target.ccard.value;

    new Order(product, quant, userName, street, city, state, zip, digits, ccard);
    localStorage.lsOrders = JSON.stringify(allOrders);

    clearForm();
  }

function clearForm() {
  event.target.product.value = null;
  event.target.quant.value = null;
  event.target.userName.value = null;
  event.target.street.value = null;
  event.target.city.value = null;
  event.target.state.value = null;
  event.target.zip.value = null;
  event.target.digits.value = null;
  event.target.ccard.value = null;
}
