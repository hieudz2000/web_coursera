import React from "react";
import { usercourses } from "../../../data/dynamic/usercourse";
import UserCourseItem from "./UserCourseItem";
import "./usercourse.scss";

export default function UserCourse() {
  return (
    <div>
      <h3>Khóa học của tôi</h3>
      <div className="my-course-wrapper">
        {usercourses.map((item) => (
          <UserCourseItem key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
}
