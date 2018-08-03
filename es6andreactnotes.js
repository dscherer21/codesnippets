//if you dont assign "new" to this, it will put into global variables.
var dog = new DigitalPal(true, false, false);

// .map function creates a new array using data from the old array altered by the callback function taht you give it.
var a = [1, 2, 3];


//A stateful app/component is a program that saves client data from the activities of one session for use in the next session. ... The operating systems that applications run on are also typically stateful. As HTTP is inherently stateless, if state is needed for web apps, it must be built into them.

//presentational/dumb components: Are concerned with how things look. May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own. Often allow containment via this.props.children. Have no dependencies on the rest of the app, such as Flux actions or stores.

//'props' is short for properties

//be sure to assign a key property when you are assigning props.

// Flux: A Pattern for Unidirectional Data Flow. As a complement to React, Facebook has proposed Flux as a starting point, though they describe it more as a pattern than a library, and at the recent ReactConf they already hinted at its impending deprecation.

//TypeScript syntax is a superset of JavaScript(Ecmascript). ... The biggest distinctive feature is that TypeScript supports optional types. But ES6 or ES2015 is a subset of TypeScript - anything you write in ES2015 is valid TS. So main differences are type annotations, interface support and some much more robust tooling.

// when importing  a component make sure to capitalize the first letter of the name of the component.

//const {name, value} = event.target this is the same as:
//const name = event.target.name  and
//const value = event.target.value

//The state function is what allows components to update live

//when using react-router-dom addon you have to use <link/> instead of <a/> tags.

// What is react?
    
//     JavaScript framework for UI

//     Single Page Application Framework

//     uses component architecture

//     $('#container')


// Why should we use react?
    
//     because as soon as you update the state, the document updates everywhere automatically

//     as opposed to html, css, jQuery where if a variable updates, you have to update it everywhere


// Why do we use es6, es7...

//     react works with classic JavaScript, but all of the documentation, stock over flow posts, they're all using es6

//     arrow functions

//         'this' inside the arrow function is the same outside the arrow function

{/* <button id="clickme">stuff</button>

function sayHi(x){
	alert(x);
}

//incorrect
	$('#clickme').on('click', sayHi('hi')) 

//classic js way correct
	$('#clickme').on('click', function(){
		sayHi('hi');
	})

//es6 way correct
	$('#clickme').on('click', () => sayHi('hi')) */}

// "proxy": "http://localhost:3001", 
// prepends all relative addresses to the localhost:3001 if on localhost.

// if your props are returning null values try check your database to see if your seed file was fully seeded.