var address = {
	Street: 'Main',
	Number: 100,
	Apartment:
	{
		Floor: 3,
		Number: 301
	}
};

var person = {
	firstname: 'hao-kuang',
	lastname: 'Han',
	greet: function() {
		console.log(`Hello, ${this.firstname} ${this.lastname}`);
	}
};
person.greet();

console.log(person['firstname']);
