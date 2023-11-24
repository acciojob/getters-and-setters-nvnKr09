//complete this code
class Person {
	constructor(name, age){
		this.__name = name;
	    this._age = age;
	}
	get name(){
		return this._name;
	}
	set age(myAge){
		this._age = myAge;
	}
}

class Student extends Person {
	constructor(name, age) {
		super(name, age); // Call the constructor of the parent class
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age) {
		super(name, age); // Call the constructor of the parent class
	}
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
