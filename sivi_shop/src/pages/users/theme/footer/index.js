import { memo } from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_about">
                            <h1 className="footer_about_logo">SiVi SHOP</h1>
                            <ul>
                                <li>Địa chỉ: số 10 Phổ Quang, Tân Bình</li>
                                <li>Phone: 0977-232-555</li>
                                <li>Email: fujinet@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer__widget">
                            <h6>Cửa hàng</h6>
                            <ul>
                                <li>
                                    <Link to="">Liên hệ</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin về chúng tôi</Link>
                                </li>
                                <li>
                                    <Link to="">Sản phẩm kinh doanh</Link>
                                </li>
                                
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="">Giỏ hàng</Link>
                                </li>
                                <li>
                                    <Link to="">Danh sách ưa thích</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="footer__widget">
                            <h6>Khuyến mãi & ưu đãi</h6>
                            <p>Đăng kí nhận thông tin tại đây</p>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" placeholder="Nhập email"/>
                                    <button type="submit" className="button-submit">
                                        Đăng ký
                                    </button>
                                </div>
                                <div className="footer_widget_social">
                                    <div> 
                                        <AiOutlineFacebook />
                                    </div>
                                    <div> 
                                        <AiOutlineInstagram />
                                    </div>
                                    <div> 
                                        <AiOutlineTwitter />
                                    </div>
                                    <div> 
                                        <AiOutlineLinkedin />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default memo(Footer);