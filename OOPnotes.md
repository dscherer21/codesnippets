1.The four core concepts of Object Oriented Programming(OOP) are: Encapsulation, Abstraction, Inheritance, and Polymorphism.

2. 'Spaghetti Code' is the use the same function in multiple places. Because of so much interdependancy between these functions, typically, making a change to one will cause several others to break.

3. Encapsulation is taking variables and a function and making them into an object such as: 

let employee ={
	baseSalary: 30_000,
	overtime: 10,
	rate:20,
	getWage: function() {
		return this.baseSalary + (this.overtime * this.rate);
	}
}

4. Setting up functions in this also allows for less parameters to be passed into the function, making it more manageable. The fewer the parameters passed into the function the better.

5.Abstraction is the concept of hiding properties and methods from the outside.

6. Abstraction's benefits are: It has a simpler interface, and it reduces the impact of changes.

7. Inheritance is a mechanism that allows you to eliminate redundant code.

8. Polymorphism is a technique that allows you to get rid long if/else and switch case statements.