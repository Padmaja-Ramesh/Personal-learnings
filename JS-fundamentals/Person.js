import Student from './Student.js'; // Importing the Student class

// Person class inherits from Student class
class Person extends Student {
    // getter for name
    get name() {
        return 'person';
    }

    // constructor
    constructor(first, last) {
        // calling the parent (Student) constructor
        super(first, last);
    }
}

export default Person; // exporting the Person class
