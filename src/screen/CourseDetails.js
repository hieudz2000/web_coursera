import { Component } from "react";
import BannerCourse from "../component/courseDetails/banner/BannerCourse";
import CardBuyCourse from "../component/courseDetails/cardBuyCourse/CardBuyCourse";
import CourseInfo from "../component/courseDetails/courseInfo/CourseInfo";

class CourseDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="content" className="mb-4" style={{ marginTop: "75px" }}>
        <BannerCourse />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <CourseInfo />
            </div>
            <div className="col-4">
              <CardBuyCourse />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseDetails;
