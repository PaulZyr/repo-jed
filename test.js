// console.profile("prf");
// var test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
//   },
// };
//
// console.log(test.func());
// console.table(test);
//
// // this global
// console.log(this.document === document);
// console.log(this === window);
// this.a = 37;
// console.log(window.a);
// // console.log(a);
//
// console.group('without use strict');
// // this function context
// function f1(){
//   return this;
// }
// // В браузере
// console.log((f1() === window) + " - return this from function f1()\n\t\there this === window  => f1() === window return true");
// console.groupEnd('without use strict');
//
// console.group('use strict');
//  // see strict mode
// function f2(){
//   "use strict";
//   return this;
// }
//
// console.log((f2() === window) + " - return this from function f2() with strict \n\t\there this === undefined => f2() === window return false");
// console.log((f2() === undefined) + " - return this from function f2() with strict \n\t\there this === undefined  => f2() === undefined return true");
//
// console.groupEnd('use strict');
// console.profileEnd("prf");
//
//
//
//
//
// console.log();


// ################################################
// ###	https://gomakethings.com/state-based-ui-with-vanilla-js/?mc_cid=5536f33758&mc_eid=cb15690327
// ################################################
// // Data State
// var data = {
// 	listItems: []
// };
//
// // UI Template
// var template = function () {
//
// 	// If there are no list items
// 	if (data.listItems.length < 1) return '<p><em>You do not have any list items yet. Try adding one with the form above.</em></p>';
//
// 	// If there are
// 	return '<ul>' + data.listItems.map(function (item) {
// 		return '<li>' + item + '</li>';
// 	}).join('') + '</ul>';
//
// };
//
// // Function to render the UI into the DOM
// var render = function () {
//
// 	// Render the UI
// 	var list = document.querySelector('#list');
// 	if (!list) return;
// 	list.innerHTML = template();
//
// 	// Save to localStorage
// 	localStorage.setItem('list', JSON.stringify(data));
//
// };
//
// // Check for saved list items
// var savedData = localStorage.getItem('list');
// if (savedData) {
// 	data = JSON.parse(savedData);
// }
//
// // Render the UI
// render();
//
// /*!
//  * Sanitize and encode all HTML in a user-submitted string
//  * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
//  * @param  {String} str  The user-submitted string
//  * @return {String} str  The sanitized string
//  */
// var sanitizeHTML = function (str) {
// 	var temp = document.createElement('div');
// 	temp.textContent = str;
// 	return temp.innerHTML;
// };
//
// // Listen for form submissions
// document.addEventListener('submit', function (event) {
//
// 	// Make sure the submitted form was for our list items
// 	if (!event.target.matches('#add-to-list')) return;
//
// 	// Stop the form from submitting
// 	event.preventDefault();
//
// 	// Get the list item
// 	var item = event.target.querySelector('#list-item');
// 	if (!item || item.length < 1) return;
//
// 	// Update the data and UI
// 	data.listItems.push(sanitizeHTML(item.value));
// 	render();
//
// 	// Clear the field and return to focus
// 	item.value = '';
// 	item.focus();
//
// }, false);

// ###################################
// ###
// ###################################
var items = [
    {id: 1, title: 'iPhone 5se', count: 1, price: 500},
    {id: 2, title: 'iPhone 6se', count: 1, price: 600},
    {id: 3, title: 'iPhone 7se', count: 1, price: 920}
];

var cartSum = 0;

var cart = [];

cart.reduce(function (sum, acc){
    return cartSum += acc.count * acc.price
}, cartSum);

var container = document.getElementById('items');

function show(item) {
    var n = item.id;

    var div = document.createElement('div');
    div.className = 'item';

    div.setAttribute('data-id', n);

    var title = document.createElement('h2');
    title.innerText = item.title;

    var price = document.createElement('p');
    var priceB = document.createElement('b');
    priceB.innerText = item.price + ' ' + 'грн.';
    price.appendChild(priceB);

    var button = document.createElement('button');
    button.setAttribute('data-btn', n);
    button.innerText = 'Добавить в корзину';
    button.addEventListener('click', clickButton);

    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(button);

    function clickButton() {
        var none = document.getElementById('none');
        none.style.display = 'none';

        if (cart.includes(item)){
            item.count++;
            // let my = this.getAttribute('data-btn');
            // or
            let my = this.dataset.btn;
            var numCount = document.querySelector(`.cartItem[data-id="${my}"] p`);
            console.log(this, item, item.id, my, numCount );

            numCount.innerText = item.count;
            // item.count.innerText = item.count;
        } else {
            cart.push(item);
            var cartBlock = document.getElementById('cart');
            var cartItems = document.getElementById('cartItems');
            cartItems.className = 'cartItems';
            var cartItem = document.createElement('div');
            cartItem.className = 'cartItem';
            cartItem.setAttribute('data-id', n);
            var title = document.createElement('h4');
            title.innerText = item.title;

            var count = document.createElement('p');
            count.innerText = item.count;
            count.id = 'countNumb';

            var price = document.createElement('p');
            var priceB = document.createElement('b');
            priceB.innerText = item.price + ' ' + 'грн.';
            price.appendChild(priceB);

            cartBlock.appendChild(cartItems);
            cartItems.appendChild(cartItem);
            cartItem.appendChild(title);
            cartItem.appendChild(count);
            cartItem.appendChild(price);
            price.appendChild(priceB);
        }
    }

    return div;
}

function showItems(items) {
    items.map(function (item) {
        var div = show(item);

        container.appendChild(div);
    })
}
showItems(items);
//
//
//
//
//
function iCantThinkOfAName(num, obj) {
  // Это массив переменных, вместе с 2 параметрами, передаваемых
  // "захваченными" в замкнутую функцию 'doSomething'
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log('num: ' + num);
    console.log('array: ' + array);
    console.log('obj.value: ' + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // замыкание #1
var bar = iCantThinkOfAName(6, referenceObject); // замыкание #2

foo(2);
/*
  num: 4
  array: 1,2,3,4
  obj.value: 10
*/

bar(2);
/*
  num: 8
  array: 1,2,3,8
  obj.value: 10
*/

referenceObject.value++;

foo(4);
/*
  num: 8
  array: 1,2,3,4,8
  obj.value: 11
*/

bar(4);
/*
  num: 12
  array: 1,2,3,8,12
  obj.value: 11
*/
