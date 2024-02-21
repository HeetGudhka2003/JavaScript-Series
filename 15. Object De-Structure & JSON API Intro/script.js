// Object De-Structuring

const course = {

    courseName: "JavaScript in Hindi",

    price: 999,

    courseInstructor: "Hitesh Choudhary"
}

// console.log(course.courseInstructor);

const { courseInstructor: instructor, courseName, price } = course;

console.log("Course Name: " + courseName);

console.log("Course Instructor: " + instructor);