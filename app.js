'use strict';


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let container = document.getElementById('container');
let Seattle	= {
  name: 'Seattle',
  MinOfCustomers: 23,
  MaxOfCustomers: 65,
  avgOfCookies: 6.3,
  soldCookiesPerHour:[],
  total: 0,
  genrate: function () {
    for(let i=0; i<hours.length;i++){
      let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
      this.soldCookiesPerHour.push(random);
      this.total += this.soldCookiesPerHour[i];
    }
  },
  render: function() {
    let h2EL = document.createElement('h2');
    h2EL.textContent = this.name;
    container.appendChild(h2EL);
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total: ${this.total} cookies`;
  }
};



let Tokyo	= {
  name: 'Tokyo',
  MinOfCustomers: 3,
  MaxOfCustomers: 24,
  avgOfCookies: 1.2,
  soldCookiesPerHour:[],
  total: 0,
  genrate: function () {
    for(let i=0; i<hours.length;i++){
      let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
      this.soldCookiesPerHour.push(random);
      this.total += this.soldCookiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total: ${this.total} cookies`;
  }
};


let Dubai	= {
  name: 'Dubai',
  MinOfCustomers: 11,
  MaxOfCustomers: 38,
  avgOfCookies: 3.7,
  soldCookiesPerHour:[],
  total: 0,
  genrate: function () {
    for(let i=0; i<hours.length;i++){
      let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
      this.soldCookiesPerHour.push(random);
      this.total += this.soldCookiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total: ${this.total} cookies`;
  }
};


let Paris	= {
  name: 'Paris',
  MinOfCustomers: 20,
  MaxOfCustomers: 38,
  avgOfCookies: 2.3,
  soldCookiesPerHour:[],
  total: 0,
  genrate: function () {
    for(let i=0; i<hours.length;i++){
      let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
      this.soldCookiesPerHour.push(random);
      this.total += this.soldCookiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total: ${this.total} cookies`;
  }
};


let Lima	= {
  name: 'Lima',
  MinOfCustomers: 2,
  MaxOfCustomers: 16,
  avgOfCookies: 4.6,
  soldCookiesPerHour:[],
  total: 0,
  genrate: function () {
    for(let i=0; i<hours.length;i++){
      let random = Math.floor(getRandom(this.MinOfCustomers, this.MaxOfCustomers) * this.avgOfCookies);
      this.soldCookiesPerHour.push(random);
      this.total += this.soldCookiesPerHour[i];
    }
  },
  render: function() {
    let h2El = document.createElement('h2');
    container.appendChild(h2El);
    h2El.textContent = this.name;
    let ulEl = document.createElement('ul');
    container.appendChild(ulEl);
    for (let i = 0; i < hours.length; i++) {
      let liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] + ':' +' '+ this.soldCookiesPerHour[i] +' '+ 'cookies';
    }
    let totalEl = document.createElement('li');
    ulEl.appendChild(totalEl);
    totalEl.textContent = `Total: ${this.total} cookies`;
  }
};



function getRandom(MinOfCustomers, MaxOfCustomers){
  return Math.floor(Math.random() * (MaxOfCustomers - MinOfCustomers + 1) + MinOfCustomers);

}

Seattle.genrate();
Seattle.render();


Tokyo.genrate();
Tokyo.render();


Dubai.genrate();
Dubai.render();


Paris.genrate();
Paris.render();


Lima.genrate();
Lima.render();

