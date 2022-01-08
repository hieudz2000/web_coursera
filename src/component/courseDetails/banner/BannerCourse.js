import { Component } from "react";
import { Link } from "react-router-dom";
import "./bannerCourse.scss";
class BannerCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="banner-course" className="p-2">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Unica</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Phong cách sống</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Học đệm hát Guitar cùng Haketu</Link>
                  </li>
                </ol>
              </nav>
              <h2>Học đệm hát Guitar cùng Haketu</h2>
              <p className="mb-3">
                Hãy đến với "Học đệm hát cùng Haketu" - Guitarist nổi tiếng Việt
                Nam, nhanh chóng làm chủ cây đàn guitar trong tay với kỹ thuật
                chơi guitar cực đỉnh, học guitar cơ bản đệm hát điêu luyện để
                cùng bạn bè người yêu nghêu ngao hòa mình vào âm nhạc
              </p>
              <div className="row">
                <div className="col-2">
                  <img
                    src="https://static.unica.vn/uploads/haketu@gmail.com/December620171133am_ha-ke-tu_thumb.jpg"
                    alt=""
                    className="d-inline-block"
                  />
                  <span>Hà Kế Tú</span>
                </div>
                <div className="col-3">
                  <div className="d-inline-block">
                    <ul className="nav">
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
                  <span>162 đánh giá</span>
                </div>
                <div className="col-4">
                  <i className="fas fa-users"></i>
                  <span>1775 học viên</span>
                </div>
                <div className="offset-2 col-1">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="heart-circle"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="svg-inline--fa fa-heart-circle fa-w-16 fa-3x"
                  >
                    <path
                      fill="currentColor"
                      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm123.5 272.3L260.9 394.5c-7.1 7.4-18.7 7.4-25.9 0L124.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8 31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8z"
                      className=""
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerCourse;
