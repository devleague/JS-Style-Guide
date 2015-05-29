// --------- Follows Styleguide ---------

if ( condition ) {
  // statements
}

if ( true ) {
  // statements
} else {
  // statements
}

while ( condition ) {
  // statements
}

for ( var i = 0; i < 100; i++ ) {
  // statements
}

var i;
var length = 100;

for ( i = 0; i < length; i++ ) {
  // statements
}

var prop;

for ( prop in object ) {
  // statements
}

// Variables
var foo = 'bar';
var baz = 1;
var qux;

var array = [];
var object = {};

function foo() {
  var bar = '';
  var baz;

  // all statements after variable declarations
}

foo();
foo( 1, 2, 3 );

// es6, let at top of containing block
function foo() {
  let bar;
  if ( condition ) {
    let baz = '';
    // statements
  }
}

function square( number ) {
  return number * number;
}

function cube( number, callback ) {
  callback( number * number * number );
}

square( 10 );

cube( 10, function( cubed ) {
  // callback statements
});

var factorial = function factorial( number ) {
  if ( number < 2 ) {
    return 1;
  }

  return number * factorial( number - 1 );
};

function FooBar( options ) {
  this.options = options;
}

var fooBar = new FooBar({ a : 'alpha' });

var a = fooBar.options;

foo(function() {
  // statements
});

foo([ 'alpha', 'beta' ]);

foo({
  a : 'alpha',
  b : 'beta'
});

foo( 'single literal string argument' );

if ( !( 'foo' in obj ) ) {
  // statements
}

// -------------- BAD Style -----------------

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();

var foo = "";
var bar = "";
var qux;

var i,
  length = 100;

var array = [],
  object = {};

var foo = "",
  bar = "",
  qux;

var
  foo = "",
  bar = "",
  qux;

foo ();
foo(1,2,3);
foo(1, 2, 3);  