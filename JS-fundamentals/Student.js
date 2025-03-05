// Student class definition
class Student {
    // class variable
    age = 20;

    // getter for name
    get name() {
        return 'student';
    }

    // constructor
    constructor(first, last) {
        this.firstname = first;
        this.lastname = last;
    }

    // method to display full name
    fullName() {
        console.log("value ", this.firstname + " " + this.lastname);
    }
}

export default Student; // exporting the Student class
