import "./style.scss";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const LoginAdPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTERS.ADMIN.ORDERS);
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">TRUY CẬP HỆ THỐNG QUẢN TRỊ</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-group">
            <lable htmlFor="username" className="login__lable">
              Tên đăng nhập
            </lable>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="login__form-group">
            <lable htmlFor="password" className="login__lable">
              Mật khẩu
            </lable>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login__button">
            Đăng Nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginAdPage);
