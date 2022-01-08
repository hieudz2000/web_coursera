import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-brand">
            <Link to="/">
              <img src="https://unica.vn/media/img/logo-unica.svg" alt="" />
            </Link>
          </div>
          <div className="search-form">
            <form className="d-flex">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="Tìm khóa học, giáo viên"
                  />
                  <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="nav-actions-btn">
            <a href="/" className="btn btn-active-course">
              <span>Kích hoạt khóa học</span>
              <i className="fas fa-unlock"></i>
            </a>
            <Link to="/cart" className="btn btn-cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
          <div className="nav-user-action">
            <Link to="./login" className="btn btn-login">
              Đăng nhập
            </Link>
            <Link to="./register" className="btn btn-register">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
