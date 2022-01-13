import { Component } from "react";
import Footer from "./component/layout/footer/Footer";
import Header from "./component/layout/header/Header";
import Home from "./screen/Home";
import TeacherDetails from "./screen/TeacherDetails";
import CourseDetails from "./screen/CourseDetails";
import Cart from "./screen/Cart";
import Category from "./screen/category/Category";
import { Route, Routes } from "react-router-dom";
import { initMenu } from "./redux/actions/menus";
import { connect } from "react-redux";
import { initCourses } from "./redux/actions/course";
import User from "./screen/user/User";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="header">
          <Header />
        </div>
        <div id="main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/courseDetail" element={<CourseDetails />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/teachers" element={<TeacherDetails />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initMenu: (menus) => {
      dispatch(initMenu(menus));
    },
    initCourses: (courses) => {
      dispatch(initCourses(courses));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
