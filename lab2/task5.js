"use strict";
class OnlineCourse {
    constructor(courseName, duration) {
        this.courseName = courseName;
        this.duration = duration;
        this.arrayStudents = [];
    }
    registerStudent(student) {
        if (!this.isStudentRegistered(student)) {
            this.arrayStudents.push(student);
            console.log(`Student ${student} has been registered for the course ${this.courseName}.`);
        }
        else {
            console.log(`Student ${student} is already registered for the course ${this.courseName}.`);
        }
    }
    isStudentRegistered(student) {
        return this.arrayStudents.includes(student);
    }
}
class CourseManager {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`Course ${course.courseName} has been added.`);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(course => course.courseName !== courseName);
        console.log(`Course ${courseName} has been removed.`);
    }
    findCourse(courseName) {
        return this.courses.find(course => course.courseName === courseName);
    }
    listCourses() {
        this.courses.forEach(course => {
            console.log(`Course: ${course.courseName}, Duration: ${course.duration} hours, Students: ${course.arrayStudents.join(', ')}`);
        });
    }
}
const courseManager = new CourseManager();
const course1 = new OnlineCourse("TypeScript", 20);
const course2 = new OnlineCourse("Java", 20);
const course3 = new OnlineCourse("C#", 10);
const course4 = new OnlineCourse("Python", 22);
courseManager.addCourse(course1);
courseManager.addCourse(course2);
courseManager.addCourse(course3);
courseManager.addCourse(course4);
course1.registerStudent("Alice");
course1.registerStudent("Anna");
course2.registerStudent("Vitalina");
course2.registerStudent("Petro");
course3.registerStudent("Sasha");
course3.registerStudent("Oleg");
//const foundCourse =  courseManager.findCourse("Java");
const foundCourse = courseManager.findCourse("Ruby");
// courseManager.listCourses();
if (foundCourse) {
    console.log(`Found course: ${foundCourse.courseName} with duration ${foundCourse.duration} hours.`);
}
else {
    console.log("Course not found.");
}
courseManager.removeCourse("Python");
courseManager.listCourses();
//# sourceMappingURL=task5.js.map