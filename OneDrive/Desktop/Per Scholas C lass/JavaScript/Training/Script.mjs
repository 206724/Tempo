// // const str= "hello world";
// // for (let i =0;i<str.length;i++){
 
// // console.log(str[i])
// // }

// const str = "henllo world";
// for (const i in str){
//     console.log(str[i])
// }


// const student = {
//     name: "Monica",
//     class: 7,
//     age: 12,
// //   };
  
// //   for (let key in student) {
// //     console.log(`${key} *** ${student[key]}`);
// //   }
// let sum = 0;

// for (let i = 0; i < 5; i++) {

//   if (i % 2 === 0) continue;

//   sum += i;

// }

// const names = ["John", "Abagail", "Jerome", "Cynthia"];
// const greetings = [];

// for (let i = 0; i < names.length; i++) {
// 	greetings[i] = "Hello, " + names[i] + "!";
// 	console.log(greetings[i]);
// }
// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
// function getFields(input, field) {
//     var output = [];
//     for (var i=0; i < input.length ; ++i)
//         output.push(input[i][field]);
//     return output;
// }

// var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
// console.log(result)


let learnerSubmission =[{"learner_id" : 4,"assignment_id": number,"submission":{ "submitted_at": Date_string,"score": number}}]

learnerSubmission.forEach((row) => {
	row.forEach((object) => {
	  console.log(object.learner_id)

	});
});