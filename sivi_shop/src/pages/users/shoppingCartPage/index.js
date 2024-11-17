import { memo } from "react";
import { formater } from "utils/formater";
import { AiOutlineClose } from "react-icons/ai";
import BreadCrumb from "../theme/breadcrumb";
import "./style.scss";
import featured1Img from "assets/users/images/featured/beef.jpg";
import { Quantity } from "component";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";

const ShoppingCartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <BreadCrumb name="Giỏ hàng" />
      <div className="container">
        <div className="table_cart">
          <table>
            <thead>
              <tr>
                <th>Tên</th>
                <th>Gía</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="shopping_cart_item">
                  <img src={featured1Img} alt="Product-pic" />
                  <h4>Tên sản phẩm</h4>
                </td>
                <td>{formater(200000)}</td>
                <td>
                  <Quantity hasAddToCart={false} />
                </td>
                <td>{formater(400000)}</td>
                <td className="icon_close">
                  <AiOutlineClose />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shooping_continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping_discount">
                <input type="text" placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping_checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>
                  Số lượng: <span>{5}</span>
                </li>
                <li>
                  Thành tiền: <span>{formater(500000)}</span>
                </li>
              </ul>
              <button
                className="button-submit"
                type="button"
                onClick={() => navigate(ROUTERS.USER.CHECK_OUT)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ShoppingCartPage);
