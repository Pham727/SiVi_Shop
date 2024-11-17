import { memo } from "react";
import "./style.scss";

const Quantity =({ hasAddToCart = true }) => {
    return (
        <div className="quantity_container">
            <div className="quantity">
                <span className="quantity_btn">-</span>
                <input type="number" defaultValue={1}/>
                <span className="quantity_btn">+</span>
            </div>
            {
                hasAddToCart &&(
                    <button type ="submit" className="button-submit">Thêm giỏ hàng</button>
                )
            }
        </div>

    )
}

export default memo(Quantity);