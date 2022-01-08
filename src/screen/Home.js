import React from "react";
import Reasons from "../component/home/reason/Reasons";
import Menu from "../component/menu/Menu";
import Banner from "../component/home/banner/Banner";
import CoursesSection from "../component/course/Courses";
import TeacherItem from "../component/home/teacher/TeacherItem";
// fake data
import { bestSales, hotCourses, newCourses } from "../data/dynamic/category";

export default function Home() {
  return (
    <div id="home" className="container" style={{ marginTop: "100px" }}>
      <div id="content">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <Menu />
          </div>
          <div className="col-12 col-md-9 d-xs-none">
            <Banner />
          </div>
        </div>
      </div>
      <div id="main" style={{ marginTop: "30px" }}>
        <div className="mt-3">
          <CoursesSection category={bestSales} />
          <CoursesSection category={hotCourses} />
          <CoursesSection category={newCourses} />
        </div>
        <TeacherItem />
      </div>
      <div id="reason" className="mt-3">
        <h2 className="w-75 text-center m-auto">
          Bạn chưa tìm thấy khóa học mình quan tâm ?<br /> Unica có hơn 2.000
          khóa học đang chờ bạn khám phá
        </h2>
        <Reasons />
      </div>
    </div>
  );
}
