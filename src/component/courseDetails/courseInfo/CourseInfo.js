import { Component } from "react";
import AboutCourse from "./aboutCourse/AboutCourse";
import CourseContent from "./courseContent/CourseContent";
import Rand from "./rand/Rand";
import Recomment from "./recomment/Recomment";
import Teacher from "./teacher/Teacher";

class CourseInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>
                <AboutCourse/>
                <CourseContent/>
                <Teacher/>
                <Rand/>
                <Recomment/>
            </div>
        );
    }
}

export default CourseInfo;