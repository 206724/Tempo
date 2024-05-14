let number;
let Date_string ;


let CourseInfo= {"id":number,"name": String };
let AssignmentInfo = {"id":number,"name": String,"due_at" : Date_string,"points_possible": number}
let AssignmentGroup={"id": number,"name": String,"course_id" : number,"group_weight" : number,"assignment" : [AssignmentInfo]}
let LearnerSubmissions ={"learner_id":number,assignment_id: number,"submission":{"submitted_at": Date_string,"scrore":number}}



function getLearnerData(course, AssignmentGroup, submissions) {
  // here, we would process this data to achieve the desired result.
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150)
      1: 0.94, // 47 / 50
      2: 1.0 // 150 / 150
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150)
      1: 0.78, // 39 / 50
      2: 0.833 // late: (140 - 15) / 150
    }
  ];

  return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);

                          


