import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const initialState = {
    userName: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { userName, password } = userData;

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
        <h3>Đăng nhập</h3>
        <div className="mb-4">
          <input
            type="email"
            className="form-control"
            placeholder="Nhập số điện thoại hoặc email"
            name="userName"
            value={userName}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control"
            placeholder="Nhập mật khẩu"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-4 pt-4">
          <button className="btn-account-submit" type="submit">
            Đăng nhập
          </button>
        </div>

        <div className="text center">
          <span>Bạn chưa có tài khoản?</span>
          <a href="/register">Đăng ký mới</a>
          <br />
          <a href="/">Quên mật khẩu</a>
        </div>
      </form>
    </div>
  );
}
