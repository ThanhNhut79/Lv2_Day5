import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div>
          <Link to="/">
            <img
              src="https://lifefitness.com.vn/wp-content/uploads/2023/02/new-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <ul>
            <li>GIỚI THIỆU</li>
            <li>CÂU LẠC BỘ</li>
            <li>DỊCH VỤ</li>
            <li>LEFITACADEMY</li>
            <li>TIN TỨC</li>
            <li>LÀM MỚI CUỘC SỐNG</li>
            <li>
              <Link to="/register">
                <button>Đăng Ký</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>Đăng Nhập</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
