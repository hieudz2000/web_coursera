import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, phone, email, password, cf_password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <div className="account-form">
      <div className="text-center mb-3">
        <span className="">
          <Link to="/">
            <img src="https://id.unica.vn/images/logo.png" alt="logo" />
          </Link>
        </span>
      </div>

      <form className="wrap-form" onSubmit={handleSubmit}>
        <h3>Đăng Ký Tài Khoản</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Họ và tên"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Nhập email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nhập số điện thoại"
            name="phone"
            value={phone}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập lại mật khẩu"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3 pt-4">
          <button className="btn-account-submit" type="submit">
            Đăng ký
          </button>
        </div>
        <div className="text center">
          <span>Bạn có tài khoản?</span>
          <a href="/login">Đăng nhập</a>
          <br />
        </div>
      </form>
    </div>
  );
}
