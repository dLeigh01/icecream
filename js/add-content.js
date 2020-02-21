function confirmation() {
  var question = confirm("Click okay if you like chocolate ice cream!");
  var advert;

  if (question == true) {
      advert = '<p id="chocolate">Click on our products page to check out our amazing chocolate ice cream!</p>'
  } else {
      advert = '';
  }

  return advert;
}

function printName() {
  var name = prompt("Please enter your name: ");
  var write;

  if (name === '') {
    while(name === '') {
      name = prompt("Please enter your name: ");
    }
  }
  if (name !== '') {
    write = ('<p>' + name + '</p>');
  }
    
  return write;
}

function printWelcome() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var greetWrite;

  if (hourNow > 18) {
      greeting = 'Good evening, ';
    } else if (hourNow > 12) {
      greeting = 'Good afternoon, ';
    } else if (hourNow > 0) {
      greeting = 'Good morning, ';
      } else {
      greeting = 'Welcome, ';
      }

  greetWrite = '<p id="welcome">' + greeting + '</p>';

  return greetWrite;
}

function purchase() {
  var amount = prompt('How many pints would you like?');
  var inCart;
  var adder = '';

  for(var i = 0; i < amount; i++) {
    inCart = '<p>+1 added to order</p>'
    adder += inCart;
  }

  return adder;
}