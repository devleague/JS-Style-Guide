# JavaScript Syle Guide v0.1.0
## Official DevLeague JavaScript Style Guide

Table of Contents

1. [Whitespace](#whitespace)
  2. [Parens, Braces, Linebreaks](#parens-braces-linebreaks)
  2. [Assignments, Declarations, Functions ( Named, Expression, Constructor )](#assignments-declarations-functions--named-expression-constructor-)
  2. [Naming](#naming)
  2. [Comments](#comments)
  2. [Example](example.js)
1. [JSCS](#jscs)
  2. [install jscs for SublimeText 3](#install-jscs-for-sublime-text-3)
  2. [install SublimeLinter3 package](#install-sublimelinter3-package)
  2. [install SublimeLinter-jscs package](#install-sublimelinter-jscs-package)
  2. [install Official DevLeague .jscsrc config](#install-official-devleague-jscsrc-config)

# Style Guide

## Whitespace

- Never mix spaces and tabs.
- Indent size is two spaces.
- Set editor to use spaces for tabs, and to "show invisibles".
- Enforces consistency
- Eliminating end of line whitespace
- Eliminating blank line whitespace


## Parens, Braces, Linebreaks

no shortcuts or "one liners"

```
// bad style

if(condition) doSomething();

while(condition) iterating++;


for(var i=0;i<100;i++) someIterativeFn();
```

use line breaks and whitespace
easier to read and refactor
never use more than one line break

```
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
```

_enhancement_ declare temporary variables outside of for loop

```
var i;
var length = 100;

for ( i = 0; i < length; i++ ) {
  // statements
}

var prop;

for ( prop in object ) {
  // statements
}
```

## Assignments, Declarations, Functions ( Named, Expression, Constructor )

- each variable declaration uses the var keyword
- easier to read and refactor for learning purposes
- strings use 'single quotes'

```
// inconsistent style
var foo = "",
  bar = "",
  qux;
```

```
// follows style guide

// Variables
var foo = 'bar';
var baz = 1;
var qux;

// Literal notations
var array = [];
var object = {};
```

`var` (_and `const` and `let` for es6_) statements are declared in the beginning of their respective scope
reads closer to how JavaScript interprets the code and hoisting order

```
// bad style
function foo() {

  // some statements here

  var bar = "",
    baz;
}

// es6
function foo() {
  let foo,
    bar;
  if ( condition ) {
    bar = "";
    // statements
  }
}
```

```
// follows style guide

function foo() {
  var bar = '';
  var baz;

  // all statements after variable declarations
}

// es6, let at top of containing block
function foo() {
  let foo;
  if ( condition ) {
    let bar = '';
    // statements
  }
}
```

Named Function Declarations do not have a space between the function name and parenthesis

```
function square( number ) {
  return number * number;
}

function cube( number, callback ) {
  callback( number * number * number );
}
```

Invoking functions

Arguments have a space between each argument and the enclosing parenthesis

```
square( 10 );

cube( 10, function( cubed ) {
  // callback statements
});
```

Function Expression
end with a semicolon

```
var square = function( number ) {
  return number * number;
};
```

Function Expression with Identifier

This preferred form has the added value of being able to call itself and have an identity in stack traces

```
var factorial = function factorial( number ) {
  if ( number < 2 ) {
    return 1;
  }

  return number * factorial( number - 1 );
};
```

Constructor Declaration
Pascal cased
```
function FooBar( options ) {
  this.options = options;
}
```

Instantiating

```
var fooBar = new FooBar({ a : 'alpha' });
```

Functions with callbacks
```
foo(function() {
  // Note there is no extra space between the first paren
  // of the executing function call and the word "function"
});
```

Function accepting an array, no space
```
foo([ 'alpha', 'beta' ]);
```

Function accepting an object
```
foo({
  a : 'alpha',
  b : 'beta'
});
```

Single argument string literal requires space

```
foo( 'single literal string argument' );
```

Inner grouping parens require space

```
if ( !( 'foo' in obj ) ) {

}
```

**Type Checking**

- **String**: `typeof variable === "string"`
- **Number**: `typeof variable === "number"`
- **Boolean**: `typeof variable === "boolean"`
- **Object**: `typeof variable === "object"`

**Array**:

```
Array.isArray( arrayLikeObject )
(wherever possible)
```

- **Node**: `elem.nodeType === 1`
- **null**: `variable === null`
- **null or undefined**: `variable == null`
- **global undefined**: `typeof variable === "undefined"`
- **local undefined**: `variable === undefined`

**Properties**:

```
object.prop === undefined
object.hasOwnProperty( prop )
"prop" in object
```

## Naming

- use full descriptive variable and function names
- never use a generic lowercase version of a data type
- `string`, `data`, `obj`, `object`, `ar`, `number` etc. are all *bad* names

```
// bad naming
var str = "lorem";
var num;
function a( b, c ){}
ar.reduce(function(p,c,i,a){

});
```

- `i` is an allowed short name for `index`
- `prev` is an allowed short name for `previous`
- `cur` is an allowed short name for `current`
- single values or objects should be singular `user`
- collections (arrays) should be plural `users`

```
var userName = "lorem";
var age;
function add( base, increment ){
  return base + increment;
}
books.reduce(function( prev, cur, i, books){

});
```

- multiple word names for variables and functions should be camelCased `userName`, `powerGlove`
- multiple word names for a classes, interfaces, and enums should be PascalCased `VideoGame`, `SmartPhone`
- constants and const shoud be UPPER_SNAKE_CASED `FRAMES_PER_SECOND`, `API_VERSION`

## Comments

- comments on code appear directly above the relevant code
- single and multiline comments are ok
- comments at the end of code lines are prohibited

## Example

see [example.js](example.js)

# JSCS

Use jscs to make adhering to this style guide much easier

## Install jscs for Sublime Text 3

install `jscs` globally with `npm`

```
npm install -g jscs
```

## Install SublimeLinter3 package

_if it's not already installed_

#### using Package Control
Within Sublime Text, bring up the Command Palette and type `install`. Among the commands you should see `Package Control: Install Package`. If that command is not highlighted, use the keyboard or mouse to select it. There will be a pause of a few seconds while Package Control fetches the list of available plugins.

When the plugin list appears, type `sublimelinter`. Among the entries you should see `SublimeLinter`. If that entry is not highlighted, use the keyboard or mouse to select it.

![Install SublimeLinter3 Package with Package Control](http://i.imgur.com/4YKUejC.png)

## Install SublimeLinter-jscs package

Use Package Control again to install another package.

When the plugin list appears, type `jscs`. Among the entries you should see `SublimeLinter-jscs`. If that entry is not highlighted, use the keyboard or mouse to select it.

![Install SublimeLinter-jscs Package with Package Control](http://i.imgur.com/fFgmlBQ.png)

### Not Working?

[Check the docs ](http://sublimelinter.readthedocs.org/en/latest/troubleshooting.html#finding-a-linter-executable)

## Install Official DevLeague .jscsrc config

jscs will search for a `.jscsrc` file in the current working directory, if not found, will search in each parent directory until one is found.
execute this command to install the official DevLeague `.jscsrc` file to be applied to all projects.

    curl -L https://raw.github.com/DevLeague/JS-Syle-Guide/master/.jscsrc -o ~/.jscsrc

_this command also works to update the code style config_

the code styleguide can be overridden on a per project basis by including a `.jscsrc` file in the project root directory.
