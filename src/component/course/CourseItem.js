import { Component } from "react";
import { Link } from "react-router-dom";
import "./courseItem.scss";
class CourseItem extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
        <Link to="/courseDetail">
          <div className="card h-100 shadow-sm bg-body rounded">
            <img
              alt="Quản trị cảm xúc - Phạm Thành Long"
              className="img-responsive"
              src={this.props.course.img}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.course.title}</h5>
              <div className="row">
                <div className="col-6">
                  <div className="text-start mt-1">
                    <p className="m-0 p-0">Ten giang vien</p>
                    <ul className="nav justify-align-content-start">
                      <li className="nav-item">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li className="nav-item">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li className="nav-item">
                        <i className="fa fa-star" aria-hidden="true"></i>
                      </li>
                      <li className="nav-item">
                        <i className="far fa-star" aria-hidden="true"></i>
                      </li>
                      <li className="nav-item">
                        <i className="far fa-star" aria-hidden="true"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-end mt-1">
                    <p className="p-0 m-0 d-block position-relative">
                      290.000 <sub className="d-block position-absolute">đ</sub>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CourseItem;
