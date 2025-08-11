// object assign

const courseDetails = {
	courseName: "js",
	courseDuration: "4 weeks",
	courseOwner: "constructor",
};

function course(obj) {
	let defaultVal = {
		courseName: "default",
		courseDuration: "default",
		courseOwner: "default",
	};
	Object.assign(defaultVal, obj);
	console.log(defaultVal.courseName + ", ");
	console.log(defaultVal.courseDuration + ", ");
	console.log(defaultVal.courseOwner);
}

course(courseDetails);
