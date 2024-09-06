// Class representing a course with various attributes
export class CoursesClass {
    constructor(coursName, Durations, topics, coursType, _track) {
        this.coursName = coursName;
        this.Durations = Durations;
        this.topics = topics;
        this.coursType = coursType;
        this._track = _track;
    }
}