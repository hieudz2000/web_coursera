import React from "react";
import CourseItem from "./CourseItem";

export default function CoursesSection({ category }) {
  return (
    <div className="mb-2 mt-4">
      <h4
        className="text-uppercase"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        {category.title}
      </h4>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {category.list.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
}
