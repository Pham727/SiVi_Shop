import { memo, useState } from 'react';
import "./style.scss";
import { ROUTERS } from 'utils/router';
import { formater } from "utils/formater";
import { BiUser } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaRegUser } from "react-icons/fa";
import { AiOutlineMail, AiOutlineShoppingCart, AiOutlineMenu, AiOutlinePhone, AiOutlineDownCircle, AiOutlineUpCircle, AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom"

const Header = () => {
    const [isShowCategories, setShowCategories] =useState(true);
    const [isShowHumberger, setShowHumberger] =useState(false);
    const [menus, setMenus] = useState([
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

    const categories = [
        "Thịt tươi",
        "Rau củ",
        "Nước trái cây",
        "Trái cây",
        "Hải sản"
    ]

    return (
        <>
            <div className={`humberger_menu_overlay${
                isShowHumberger ? " active" :""}`}
                onClick={() => setShowHumberger(false)}
            />
            <div className={`humberger_menu_wrapper${isShowHumberger ? " show" :""}`}>
                <div className="header_logo">
                    <h1>SiVi SHOP</h1>
                </div>
                <div className="humberger_menu_cart">
                    <ul>
                        <li>
                            <Link to={""}>
                                <AiOutlineShoppingCart/> <span>1</span>
                            </Link>
                        </li>
                    </ul>
                    <div className ="humberger_cart_price">
                        Giỏ hàng: <span>{formater(101569)}</span>
                    </div>
                </div>
                <div className="humberger_menu_widget">
                    <div className="humberger_top_right_auth">
                        <Link to={""}>
                            <BiUser/> Đăng nhập
                        </Link>
                    </div>
                </div>
                <div className="humberger_menu_nav">
                    <ul>
                       {menus.map((menu, menuKey) => (
                            <li key={menuKey}>
                                <Link to={menu.path}
                                    onClick ={() => {
                                        const newMenus = [...menus];
                                        newMenus[menuKey].isShowSubmenu = !newMenus[menuKey].isShowSubmenu;
                                        setMenus(newMenus);
                                    }}>
                                    {menu.name}
                                    {menu.child && (menu.isShowSubmenu ? (
                                        <AiOutlineDownCircle />
                                    ) : (
                                        <AiOutlineUpCircle />
                                    ))}
                                </Link>
                                {menu.child && (
                                    <ul className={`header_menu_dropdown ${
                                        menu.isShowSubmenu ? "show_menus" : ""
                                    }`}>
                                        {menu.child.map((childItem, childKey) => (
                                            <li key={childKey}>
                                                <Link to={childItem.path}>{childItem.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                       ))}
                    </ul>
                </div>
                <div className="humberger_top_right_social">
                    <ul>
                        <Link to={""}>
                            <FaFacebook />
                        </Link>
                        <Link to={""}>
                            <FaInstagram />
                        </Link>
                        <Link to={""}>
                            <FaLinkedin />
                        </Link>
                        <Link to={""}>
                            <FaTwitter />
                        </Link>
                    </ul>
                </div>
                <div className="humberger_menu_contact">
                    <ul>
                        <li>
                            <AiFillMail /><i>sivishop@gmail.com</i>
                        </li>
                        <li>Miễn phí đơn hàng từ {formater(200000)}</li>
                    </ul>
                </div>
            </div>
            
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header_top_left ">
                            <ul>
                                <li><AiOutlineMail />ngocha.pham1202@gmail.com
                                </li>
                                <li>Miễn phí ship đơn hàng từ {formater(200000)}</li>
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
                                    <span>Đăng nhập</span>

                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header_logo">
                            <h1>SiVi SHOP</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header_menu">
                            <ul>
                                {menus.map((menu, menuKey) => (
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
                    <div className="col-lg-3">
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
                        <div className="humberger_open">
                            <AiOutlineMenu 
                                onClick={() => setShowHumberger(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row hero_categories_container">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 hero_categories">
                        <div className="hero_categories_all" onClick={() => setShowCategories(!isShowCategories)}>
                            <AiOutlineMenu/>
                            Danh mục sản phẩm
                        </div>
                        {isShowCategories && (
                            <ul className={isShowCategories ? "" : "hidden"}>
                                {categories.map((category, key)=>(
                                    <li>
                                        <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12 hero_search_container">
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