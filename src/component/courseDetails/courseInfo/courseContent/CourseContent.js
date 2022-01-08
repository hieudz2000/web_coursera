import { Component } from "react";
import "./about.scss";
import "./../../common/style.css";
import About from "./About";
class CourseContent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="list-video" className="box-shadow mt-2 p-2">
        <h4 className="pt-1 mb-0 pb-0">Nội dung khóa học</h4>
        <hr />
        <div>
          <About />
        </div>
      </div>
    );
  }
}

export default CourseContent;
