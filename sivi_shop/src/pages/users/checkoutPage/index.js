import { memo } from "react";
import { formater } from "utils/formater";
import BreadCrumb from "../theme/breadcrumb";
import "./style.scss";

const CheckOutPage = () => {
  return (
    <div>
      <BreadCrumb name="thanh toán" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout_input">
              <label>
                Họ và tên: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
            <div className="checkout_input">
              <label>
                Địa chỉ: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className="checkout_input_group">
              <div className="checkout_input">
                <label>
                  Điện thoại: <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="checkout_input">
                <label>
                  Email: <span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập email" />
              </div>
            </div>
            <div className="checkout_input">
              <label>Ghi chú</label>
              <textarea rows={15} placeholder="Nhập số điện thoại" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout_order">
              <h3>Đơn hàng</h3>
              <ul>
                <li>
                  <span>Sản phẩm 1</span>
                  <b>{formater(100000)} (1)</b>
                </li>
                <li>
                  <span>Sản phẩm 2</span>
                  <b>{formater(50000)} (4)</b>
                </li>
                <li>
                  <span>Sản phẩm 3</span>
                  <b>{formater(100000)} (2)</b>
                </li>
                <li>
                  <h4>Mã giảm giá</h4>
                  <b>9DKCE5</b>
                </li>
                <li className="checkout_order_subtotal">
                  <h4>Tổng đơn</h4>
                  <b>{formater(500000)}</b>
                </li>
              </ul>
              <button className="button-submit" type="button">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CheckOutPage);
