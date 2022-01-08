import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./teacher.scss";
import { Link } from "react-router-dom";
//fake data
import { typicalTeacher } from "../../../data/dynamic/teacher";

export default function TeacherItem() {
  return (
    <div className="typical-teacher">
      <h3>Giảng viên tiêu biểu</h3>
      <OwlCarousel className="owl-theme" loop nav margin={8}>
        {typicalTeacher.map((teacher) => (
          <Link to="/teachers">
            <div key={teacher.id} className="item">
              <div className="card">
                <img className="card-img-top" src={teacher.img} alt="" />
              </div>
              <div className="card-body">
                <h3 className="name">{teacher.name}</h3>
                <p className="text">{teacher.subjects}</p>
              </div>
            </div>
          </Link>
        ))}
      </OwlCarousel>
    </div>
  );
}
