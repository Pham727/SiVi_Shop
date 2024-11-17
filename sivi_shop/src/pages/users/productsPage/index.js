import {memo} from 'react'
import BreadCrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from 'utils/router';
import { categories } from 'utils/data';
import { ProductCard } from "component"

import featured1Img from "assets/users/images/featured/beef.jpg"
import featured2Img from "assets/users/images/featured/chicken.jpg"
import featured3Img from "assets/users/images/featured/pork.jpg"
import featured4Img from "assets/users/images/featured/chuoi.jpg"
import featured5Img from "assets/users/images/featured/dua_hau.jpg"
import featured6Img from "assets/users/images/featured/nhan.jpg"
import featured7Img from "assets/users/images/featured/kiwi.jpg"
import featured8Img from "assets/users/images/featured/xoai.jpg"
import featured9Img from "assets/users/images/featured/hambuger.jpg"

const ProductsPage = () => {
    const sorts = [
        "Gía thấp đến cao",
        "Gía cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá"
    ]

    const products = [
        {
            img: featured1Img,
            name:"Thịt bò",
            price: 120000
        }, 
        {
            img: featured3Img,
            name:"Thịt heo",
            price: 65000
        },
        {
            img: featured2Img,
            name:"thịt gà",
            price: 75000
        },
        {
            img: featured4Img,
            name:"Chuối",
            price: 15000
        },
        {
            img: featured5Img,
            name:"Dưa hấu",
            price: 25000
        },
        {
            img: featured6Img,
            name:"Nhãn",
            price: 50000
        },
        {
            img: featured7Img,
            name:"Kiwi",
            price: 105000
        },
        {
            img: featured8Img,
            name:"Xoài",
            price: 55000
        },
        {
            img: featured9Img,
            name:"Hambuger",
            price: 90000
        }
    ]
    
    return ( 
        <>
            <BreadCrumb name="Danh sách sản phẩm"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="sidebar_item">
                                <h2>Tìm kiếm</h2>
                                <input type="text"/>
                            </div>
                            <div className="sidebar_item">
                                <h2>Mức giá</h2>
                                <div className="price_range_wrap">
                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0}/>
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" min={0}/>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                    {sorts.map((item, key)=>(
                                        <div key={key} className={`tag ${key === 0 ? "active" : ""}`}>
                                            {item}
                                        </div>
                                    ))}                                 
                                </div>
                            </div>
                            <div className="sidebar_item">
                                <h2>Thể loại</h2>
                                <ul>
                                    {categories.map((category, key)=>(
                                        <li key={key} >
                                            <Link to={ROUTERS.USER.PRODUCTS}>{category}</Link>
                                        </li>
                                    ))}                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-sm-12 col-xs-12">
                        <div className="row">
                            {products.map((item, key) =>(
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12" key={key}>
                                    <ProductCard img = {item.img} name = {item.name} price = {item.price} />
                                </div>)
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default memo(ProductsPage);