import { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import "./aboutcourse.scss";
import "./../../common/style.css";
import Axios from "axios";
import api from "../../../../json/api.json";

function showsIntroduction(course) {
  console.log("hieu", course);
  return <p>{course[0].Course_description}</p>;
}

const AboutCourse = () => {
  const [gioi_thieu, setCourses] = useState(null);
  useEffect(() => {
    Axios.get(api.find((e) => e.pages === "khoa_hoc").api["khoa_hoc"]).then(
      (res) => {
        const data = res.data;
        setCourses(data);
        console.log("hh", data);
      }
    );
  }, []);
  return (
    <div className="mt-3">
      <iframe
        width="100%"
        height={400}
        src="https://www.youtube.com/embed/5kSG8VkGpIs"
        title="video"
      />

      <div id="introduct" className="box-shadow p-2 mt-1">
        <h4 className="pt-1 mb-0 pb-0">Giới thiệu khóa học</h4>
        <hr />

        <p className="p-2">
          {gioi_thieu === null ? "" : showsIntroduction(gioi_thieu)}
        </p>
      </div>
    </div>
  );
};
export default AboutCourse;
// class AboutCourse extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   render() {
//      return (
//       <div className="mt-3">
//         <iframe
//           width="100%"
//           height={400}
//           src="https://www.youtube.com/embed/5kSG8VkGpIs"
//           title="video"
//         />

//         <div id="introduct" className="box-shadow p-2 mt-1">
//           <h4 className="pt-1 mb-0 pb-0">Giới thiệu khóa học</h4>
//           <hr />
//           <p className="p-2">{this.showsIntroduction(this.props.course)}</p>
//         </div>
//       </div>
//     );
//   }
//   showsIntroduction(course) {
//     return course.map((list) => (
//       <p key={list.id + list.gioithieu}>{list.gioithieu}</p>
//     ));
//   }
// }
// const mapState = (state) => {
//   return {
//     course: state.course_content,
//   };
// };

// export default connect(mapState)(AboutCourse);
