'use strict';

var ulEl = document.getElementById('orderList');
var allOrders = JSON.parse(localStorage.lsOrders);
var liEl;
var buttonEl;
var makeOrder = function() {
  for (var i = 0; i < allOrders.length; i++) {
    liEl = document.createElement('li');
    liEl.id = allOrders[i].digits;
    liEl.textContent = allOrders[i].product + ' ' + allOrders[i].quantity + ' ' + allOrders[i].name + ' ' + allOrders[i].street + ' ' + allOrders[i].city + ' ' + allOrders[i].state + ' ' + allOrders[i].zip + ' ' + allOrders[i].digits;

    buttonEl = document.createElement('button');
    buttonEl.textContent = 'Order Filled';
    liEl.appendChild(buttonEl);

    ulEl.appendChild(liEl);

    buttonEl.addEventListener('click', clickHandler);
    console.log('ul ' + ulEl);
  }
};

makeOrder();

function clickHandler(event) {
  console.log('This should clear the filled');
  for(var i = 0; i < allOrders.length; i++) {
    if(liEl.id === allOrders[i].digits){
      allOrders.splice(i, 1);
      localStorage.lsOrders = JSON.stringify(allOrders);
    }
  }
}
