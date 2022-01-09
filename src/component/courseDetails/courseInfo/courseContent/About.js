import { Component } from "react";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";
import "./about.scss";
class About extends Component {
  render() {
    return (
      <div>
        <Accordion defaultActiveKey="0">
          {this.showsIntroduct(this.props.course)}
        </Accordion>
      </div>
    );
  }

  showsIntroduct(course) {
    return course.map((list, id) => {
      return list.noi_dung.map((list1, id1) => {
        return (
          <Accordion.Item
            eventKey={id1}
            style={{ border: "none", borderBottom: "1px solid gray" }}
          >
            <Accordion.Header style={{ fontSize: 18 }}>
              {list1.chuong}:{list1.noidung}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="nav flex-column">
                {list1.bai.map((list3, id3) => {
                  return (
                    <li key={id3} className="nav-item">
                      <a
                        href="/"
                        className="nav-link h"
                        style={{ fontSize: 15 }}
                      >
                        <i className="fa fa-play-circle"></i>
                        {list3.ten}: {list3.noidung}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        );
      });
    });
  }
}
const mapState = (state) => {
  return {
    course: state.course_content,
  };
};

export default connect(mapState)(About);
