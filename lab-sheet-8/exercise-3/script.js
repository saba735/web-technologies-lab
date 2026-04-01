// ES6 Class
class Course {
    constructor(courseName, instructor) {
        this.courseName = courseName;
        this.instructor = instructor;
    }

    displayCourse() {
        return `Course: ${this.courseName}, Instructor: ${this.instructor}`;
    }
}

function enroll() {

    let courseName = document.getElementById("course").value;
    let instructor = document.getElementById("instructor").value;
    let seatsAvailable = document.getElementById("seats").value === "true";

    let course1 = new Course(courseName, instructor);

    let output = course1.displayCourse();

    // Promise
    let enrollCourse = new Promise((resolve, reject) => {

        if (seatsAvailable) {
            resolve("Enrollment Successful");
        } else {
            reject("Course Full");
        }
    });

    enrollCourse
        .then(msg => {
            document.getElementById("output").innerHTML = `
                ${output} <br><br> ${msg}
            `;
        })
        .catch(err => {
            document.getElementById("output").innerHTML = `
                ${output} <br><br> ${err}
            `;
        });
}
