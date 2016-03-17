function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'Jackie'
	};

	callback(data);
}

greet(data => {
	console.log('The callback was invoked!');
	console.log(data);
});

greet(data => {
	console.log('A different callback was invoked!');
	console.log(data.name);
});
