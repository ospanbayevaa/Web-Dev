//task1
alert( "I'm JavaScript!" );
<script src="alert.js"></script>

//task2
let name = "John";
let admin = name;
alert(admin); 

let ourPlanetName = "Earth";
let currentUserName = "John";

const birthday = "18.04.1982";
const age = someCode(birthday);

//task3
let namee = "Ilya";

// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"namee"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${namee}` ); // hello Ilya

//task4
let nameee = prompt("What is your name?", "");
alert(nameee);

//task5
let a = 1, b = 1;

alert( ++a ); // 2, prefix form returns the new value
alert( b++ ); // 1, postfix form returns the old value

alert( a ); // 2, incremented once
alert( b ); // 2, incremented once
//a = 2, b = 2, c = 2, d = 1

//task6
let f = +prompt("First number?", 1);
let p = +prompt("Second number?", 2);

alert(f + p); // 3

//task7
5 > 4 //→ true
"apple" > "pineapple" //→ false
"2" > "12" //→ true
undefined == null //→ true
undefined === null //→ false
null == "\n0\n" //→ false
null === +"\n0\n" //→ false

//task8
if ("0") {
  alert( 'Hello' );
}

let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

let valuee = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (valuee < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

//task9
if (age >= 14 && age <= 90);

if (!(age >= 14 && age <= 90));

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );
// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );
// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );


let userName = prompt("Who's there?", '');
if (userName === 'Admin') {
  let pass = prompt('Password?', '');
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//task10
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//task11
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//task12
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//task13
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);