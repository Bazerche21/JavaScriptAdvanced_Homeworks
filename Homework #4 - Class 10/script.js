function Academy(name, start, end) {
    this.name = name,
        this.students = [],
        this.subjects = [],
        this.start = start,
        this.end = end,
        this.numberOfClasses = this.subjects.length * 10,

        Academy.prototype.printStudents = function () {
            console.log("Students in", this.name + ":");
            this.students.forEach(student => console.log(student.firstName, student.lastName));
        }

    Academy.prototype.printSubjects = function () {
        console.log("Subjects in", this.name + ":");
        this.subjects.forEach(subject => console.log(subject.title));
    };
}

function Subject(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];

    Subject.prototype.overrideClasses = function (number) {
        if (number >= 3) {
            this.numberOfClasses = number;
            console.log("Number of classes overridden to", number);
        } else {
            console.error("Number of classes cannot be smaller than 3.");
        }
    };

}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    Student.prototype.StartAcadmy = function (academy) {
        this.academy = academy;
        academy.students.push(this);
    };

    Student.prototype.startSubject = function (subject) {
        if (this.academy !== null && this.academy.subjects.includes(subject)) {
            if (this.currentSubject !== null) {
                this.completedSubjects.push(this.currentSubject);
            }
            this.currentSubject = subject;
            subject.students.push(this);
            console.log(this.student + " started " + subject.title);
        }
        else {
            console.error("Error: Student must be enrolled in an academy and subject must exist in the academy.");
        }
    };
}