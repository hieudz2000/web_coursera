import React from "react";
import CourseItem from "../../component/course/CourseItem";
import "./category.scss";
//fake data
import { categoryItem } from "../../data/dynamic/category";
import { Breadcrumb } from "react-bootstrap";
export default function Category() {
  return (
    <div style={{ marginTop: "75px" }}>
      <div className="breadcrum-wapper">
        <Breadcrumb className="container">
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item active>Ngoại Ngữ</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="container">
        <div className="header-title">
          <h1>{categoryItem.title}</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {categoryItem.list.map((item) => (
            <CourseItem key={item.id} course={item} />
          ))}

          <button className="btn-loadMore">Xem tiếp</button>
        </div>
      </div>
    </div>
  );
}
