import { memo, useState } from 'react';
import "./style.scss";
import { ROUTERS } from 'utils/router';
import { formater } from "utils/formater";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineShoppingCart, AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom"

const Header = () => {
    const [isShowCategories, setShowCategories] =useState(true);
    const [menu, setMenu] = useState([
        {
            name:"Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name:"Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name:"Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child:[
                {
                    name:"Thịt",
                    path: "",
                },
                {
                    name:"Rau củ",
                    path: "",
                },
                {
                    name:"Thức ăn nhanh",
                    path: "",
                },
            ]
        },
        {
            name:"Bài viết",
            path: "",
        },
        {
            name:"Liên hệ",
            path: "",
        },

    ]);
    return (
        <>
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left ">
                            <ul>
                                <li><AiOutlineMail />ngocha.pham1202@gmail.com
                                </li>
                                <li>Mien phi ship don hang tu {formater(200000)}</li>
                            </ul>
                        </div>
                        <div className="col-6 header_top_right">
                            <ul>
                                <li> 
                                    <Link to={""}>
                                        <FaFacebook />
                                    </Link>
                                </li>
                                <li> 
                                    <Link to={""}>
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li> 
                                    <Link to={""}>
                                        <FaLinkedin />
                                    </Link>
                                </li>
                                <li> 
                                    <Link to={""}>
                                        <FaTwitter />
                                    </Link>
                                </li>
                                <li> 
                                    <Link to={""}>
                                        <FaRegUser />
                                    </Link>
                                    <span>Dang nhap</span>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3">
                        <div className="header_logo">
                            <h1>SiVi SHOP</h1>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <nav className="header_menu">
                            <ul>
                                {menu.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                        <Link to={menu.path}>{menu.name}</Link>
                                        {
                                            menu.child && (
                                                <ul className="header_menu_dropdown">
                                                    {menu.child.map((childItem, childKey) => (
                                                        <li key={`${menuKey} - ${childKey}`}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-xl-3">
                        <div className="header_cart">
                            <div className="header_cart_price">
                                <span>{formater(1001230)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShoppingCart /><span>5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 hero_categories">
                        <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh mục sản phẩm
                        </div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to="">Thịt tươi</Link>
                            </li>
                            <li>
                                <Link to="">Rau củ</Link>
                            </li>
                            <li>
                                <Link to="">Trái cây</Link>
                            </li>
                            <li>
                                <Link to="">Hải sản</Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <div className="col-lg-9 hero_search_container">
                        <div className="hero_search">
                            <div className="hero_search_form">
                                <form>
                                    <input type="text" placeholder="Bạn đang tìm gì?"/>
                                    <button type="submit">Tìm kiếm</button>
                                </form>
                            </div>
                            <div className="hero_search_phone">
                                <div className="hero_search_phone_icon">
                                    <AiOutlinePhone/>
                                </div>
                                <div className="hero_search_phone_text">
                                    <p>0396.665.399</p>
                                    <span>Hỗ trợ 24/7</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero_item">
                            <div className="hero_text">
                                <span>Trái cây tươi</span>
                                <h2>Rau quả <br/>
                                    sạch 100%
                                </h2>
                                <p>Miễn phí giao hàng tận nơi</p>
                                <Link to="" className="primary-btn">Mua ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
}

export default memo(Header);