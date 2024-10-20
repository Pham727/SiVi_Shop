import {memo} from 'react'
import BreadCrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from 'utils/router';
import { categories } from 'utils/data';

const ProductsPage = () => {
    const sorts = [
        "Gía thấp đến cao",
        "Gía cao đến thấp",
        "Mới đến cũ",
        "Cũ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá"
    ]

    return ( 
        <>
            <BreadCrumb name="Danh sách sản phẩm"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
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
                    <div className="col-lg-9">Danh sach</div>
                </div>
            </div>
        </>
     );
}
 
export default memo(ProductsPage);