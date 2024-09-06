// Define the Employee Class
class EmpClass {
    constructor(name, email, address) {
        this._name = name;
        this._email = email;
        this._address = address;
    }
}

// Instructor Class inherits from EmpClass
class InstructorClass extends EmpClass {
    constructor(name, email, address, track, courseList) {
        super(name, email, address);
        this._track = track;
        this._courseList = courseList;
    }
}

export {InstructorClass};