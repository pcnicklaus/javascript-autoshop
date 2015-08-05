// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

var Car = function(make, model, year, state, color, previous_owners, current_owner, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.state = 'off';
  this.color = color;
  this.previous_owners = [];
  this.current_owner = 'manufacturer';
  this.passengers = [];
  this.pickUp = function (name) {
    if ( this.state === 'on') {
      this.passengers.push(name);
      console.log("Driving to pick up " + name + ".");

    }
    else {
      console.log('The car is off. You need to start it first to go anywhere!');
    }
  };
  this.dropOff = function (name) {
    if (this.state === 'on') {
      for (var i = 0; i <= this.passengers.length; i++ ) {
        if (this.passengers[i] === name) {
          var x = this.passengers.indexOf(this.passengers[i]);
          this.passengers.splice(x,1);
          console.log('You dropped off ' + name + '. He waves goodbye as you speed away!');
          break;
        }
        else {
          console.log("the passenger isn't in the car");
          break;
        }
      }
    }
    else {
      console.log('The car is not on');
    }
  };



};


Car.prototype.sale = function(new_owner) {
  this.previous_owners.push(this.current_owner);
  this.current_owner = new_owner;
};

Car.prototype.paint = function(new_color) {
  this.color = new_color;
};

Car.prototype.start = function() {
  this.state = 'on';
};

Car.prototype.driveTo = function(destination) {
  if (this.state === 'on') {
    console.log("Driving to " + destination + ".");
  }
  else {
    console.log("Sorry, this car is off.");
  }
};

Car.prototype.park = function() {
  if (this.state === 'off') {
    console.log("Parked!");
  }
  else {
    console.log("Sorry, the cat is on. On the streets. Clap your hands, to the beat, because the cat is!!!")
  }
};


