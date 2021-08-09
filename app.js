'use strict';


// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// let container = document.getElementById('container');
// let Seattle	= {
//   name: 'Seattle',
//   MinOfCustomers: 23,
//   MaxOfCustomers: 65,
//   avgOfCookies: 6.3,
//   soldCookiesPerHour:[],
//   total: 0,
//   genrate: function () {
//     for(let i=0; i<hours.length;i++){
//       let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
//       this.soldCookiesPerHour.push(random);
//       this.total += this.soldCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2EL = document.createElement('h2');
//     h2EL.textContent = this.name;
//     container.appendChild(h2EL);
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total: ${this.total} cookies`;
//   }
// };



// let Tokyo	= {
//   name: 'Tokyo',
//   MinOfCustomers: 3,
//   MaxOfCustomers: 24,
//   avgOfCookies: 1.2,
//   soldCookiesPerHour:[],
//   total: 0,
//   genrate: function () {
//     for(let i=0; i<hours.length;i++){
//       let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
//       this.soldCookiesPerHour.push(random);
//       this.total += this.soldCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.name;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total: ${this.total} cookies`;
//   }
// };


// let Dubai	= {
//   name: 'Dubai',
//   MinOfCustomers: 11,
//   MaxOfCustomers: 38,
//   avgOfCookies: 3.7,
//   soldCookiesPerHour:[],
//   total: 0,
//   genrate: function () {
//     for(let i=0; i<hours.length;i++){
//       let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
//       this.soldCookiesPerHour.push(random);
//       this.total += this.soldCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.name;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total: ${this.total} cookies`;
//   }
// };


// let Paris	= {
//   name: 'Paris',
//   MinOfCustomers: 20,
//   MaxOfCustomers: 38,
//   avgOfCookies: 2.3,
//   soldCookiesPerHour:[],
//   total: 0,
//   genrate: function () {
//     for(let i=0; i<hours.length;i++){
//       let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
//       this.soldCookiesPerHour.push(random);
//       this.total += this.soldCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.name;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total: ${this.total} cookies`;
//   }
// };


// let Lima	= {
//   name: 'Lima',
//   MinOfCustomers: 2,
//   MaxOfCustomers: 16,
//   avgOfCookies: 4.6,
//   soldCookiesPerHour:[],
//   total: 0,
//   genrate: function () {
//     for(let i=0; i<hours.length;i++){
//       let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
//       this.soldCookiesPerHour.push(random);
//       this.total += this.soldCookiesPerHour[i];
//     }
//   },
//   render: function() {
//     let h2El = document.createElement('h2');
//     container.appendChild(h2El);
//     h2El.textContent = this.name;
//     let ulEl = document.createElement('ul');
//     container.appendChild(ulEl);
//     for (let i = 0; i < hours.length; i++) {
//       let liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
//     }
//     let totalEl = document.createElement('li');
//     ulEl.appendChild(totalEl);
//     totalEl.textContent = `Total: ${this.total} cookies`;
//   }
// };



// function getRandom(MinOfCustomers, MaxOfCustomers){
//   return Math.floor(Math.random() * (MaxOfCustomers - MinOfCustomers + 1) + MinOfCustomers);

// }

// Seattle.genrate();
// Seattle.render();


// Tokyo.genrate();
// Tokyo.render();


// Dubai.genrate();
// Dubai.render();


// Paris.genrate();
// Paris.render();


// Lima.genrate();
// Lima.render();


//--------------------------------------------------------------------------------------------------------------------------------


let Shops = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
function Shop(name, MinOfCustomers, MaxOfCustomers, avgOfCookies) {
  this.name = name;
  this.MinOfCustomers = MinOfCustomers;
  this.MaxOfCustomers = MaxOfCustomers;
  this.avgOfCookies = avgOfCookies;
  this.hours = hours;
  this.total = 0;
  this.soldCookiesPerHour = [],
  Shops.push(this);
}
Shop.prototype.generateCustomersPerHour = function () {
  for(let i=0; i<hours.length;i++){
    let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
    this.soldCookiesPerHour.push(random);
    this.total += this.soldCookiesPerHour[i];
  }
};
Shop.prototype.render = function () {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);


  let tdEl4 = document.createElement('td');
  tdEl4.textContent = this.name;
  trEl.appendChild(tdEl4);


  for(let b=0;b<this.soldCookiesPerHour.length;b++){
    let tdEl5 = document.createElement('td');
    tdEl5.textContent = this.soldCookiesPerHour[b];
    trEl.appendChild(tdEl5);
  }

  let tdEl6 = document.createElement('td');
  tdEl6.textContent = this.total;
  trEl.appendChild(tdEl6);
};

function createTableHeader() {
  let trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  let thEl1 = document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent = 'ShopName';

  for(let i=0; i<hours.length+1-1;i++){
    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = hours[i];
  }

  let thEl2 = document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent = 'Daily Location Total';

}

function createTableFooter() {
  let TDaily = 0;
  let total = 0;
  let trEl = document.createElement('tr');
  let thEl9 = document.createElement('th');
  trEl.appendChild(thEl9);
  thEl9.textContent = 'total';
  tableEl.appendChild(trEl);
  for(let i=0; i<hours.length;i++){
    TDaily = 0;
    for(let k=0; k<Shop.length;k++){
      total += Shop[k].soldCookiesPerHour[i];
      TDaily += Shop[k].soldCookiesPerHour[i];

    }
    let trEl7 = document.createElement('th');
    trEl.appendChild(trEl7);
    trEl7.textContent = TDaily;
  }
  let thEl10 = document.createElement('th');
  trEl.appendChild(thEl10);
  thEl10.textContent = total;

}

createTableHeader();

let Seattle = new Shop('Seattle', 23, 65, 4.6);
Seattle.generateCustomersPerHour(23, 65);
Seattle.render();

let Tokyo = new Shop('Tokyo', 3, 24, 1.2);
Tokyo.generateCustomersPerHour(3, 24);
Tokyo.render();

let Dubai	 = new Shop('Dubai', 11, 38, 3.7);
Dubai	.generateCustomersPerHour(11, 38);
Dubai	.render();

let Paris = new Shop('Paris', 20, 38, 2.3);
Paris.generateCustomersPerHour(20, 38);
Paris.render();

let Lima = new Shop('Lima', 2, 16, 4.6);
Lima.generateCustomersPerHour(2, 16);
Lima.render();

createTableFooter();
// console.log(Shop);


function getRandom(MinOfCustomers, MaxOfCustomers){
  return Math.floor(Math.random() * (MaxOfCustomers - MinOfCustomers + 1) + MinOfCustomers);

}
