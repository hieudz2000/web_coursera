import { Component } from "react";
import { connect } from "react-redux";
import { Accordion } from "react-bootstrap";
import "./about.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
  MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
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
                    <div>
                      <div
                        class="modal fade"
                        id={"h" + id1 + id3}
                        aria-hidden="true"
                        aria-labelledby="exampleModalToggleLabel"
                        tabindex="-1"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5
                                class="modal-title"
                                id="exampleModalToggleLabel"
                              >
                                <li key={id3 + id1} className="nav-item">
                                  <i className="fa fa-play-circle"></i>
                                  {list3.ten}: {list3.noidung}
                                </li>
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <iframe
                                width="100%"
                                height={400}
                                src={list3.link}
                                title="video"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        class="btn "
                        data-bs-toggle="modal"
                        href={"#" + "h" + id1 + id3}
                        role="button"
                      >
                        <i className="fa fa-play-circle"></i>
                        {list3.ten}: {list3.noidung}
                      </a>
                      {/* 
         <li key={id3} className="nav-item">
            //{" "}
            <a
            href="https://www.youtube.com/embed/5kSG8VkGpIs"
            className="nav-link h"
            style={{ fontSize: 15 }}
            >
            {" "}
            <i className="fa fa-play-circle"></i>
            {list3.ten}: {list3.noidung}
            </a>
            //{" "}
         </li>
         */}
                    </div>
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
