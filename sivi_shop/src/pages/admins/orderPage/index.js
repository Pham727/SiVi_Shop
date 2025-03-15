import "./style.scss";
import { memo, useState, useEffect } from "react";
import { formater } from "utils/formater";

const STATUS = {
  ORDERED: {
    key: "ORDERED",
    lable: "Đã đặt",
    className: "orders__dropdown-item",
  },

  PERPARING: {
    key: "PERPARING",
    lable: "Lên đơn",
    className: "orders__dropdown-item",
  },

  DIVIVERED: {
    key: "DIVIVERED",
    lable: "Đã giao hàng",
    className: "orders__dropdown-item",
  },

  CANCELLED: {
    key: "CANCELLED",
    lable: "Hủy đơn",
    className: "orders__dropdown-item orders__dropdown-item--danger",
  },
};
const OrderAdPage = () => {
  const orders = [
    {
      id: 1,
      total: 2000000,
      customerName: "John",
      date: "02/03/2000",
      status: "Đang lên đơn",
    },
    {
      id: 2,
      total: 3000000,
      customerName: "John",
      date: "01/03/2000",
      status: "Đang lên đơn",
    },
  ];

  const [activedDropdown, setActivedDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdown = event.target.closest(".orders__dropdown");
      if (!isDropdown) {
        setActivedDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container">
      <div className="orders">
        <h2>Quản lý đơn hàng:</h2>
        <div className="orders__content">
          <table className="orders__table">
            <thead>
              <tr>
                <th>Mã đơn hàng</th>
                <th>Tổng đơn</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, i) => (
                <tr key={i}>
                  <td>
                    <span>{item.id}</span>
                  </td>
                  <td>{formater(item.total)}</td>
                  <td>{item.customerName}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  <td>
                    <div className="orders__dropdown">
                      <button
                        className={`orders__action-button`}
                        onClick={() => setActivedDropdown(item.id)}
                      >
                        Đã đặt
                        <span className="arrow">▽</span>
                      </button>
                      {activedDropdown === item.id && (
                        <div className="orders__dropdown-menu">
                          {Object.values(STATUS).map((status) => (
                            <button
                              key={status.id}
                              className={status.className}
                              onClick={() => setActivedDropdown(null)}
                            >
                              {status.lable}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="orders__footer">
          <div className="orders__pagination">
            <div className="orders__page-numbers">
              <button className="orders__page-btn">←</button>
              <button className="orders__page-btn orders__page-btn--active">
                1
              </button>
              <button className="orders__page-btn">2</button>
              <button className="orders__page-btn">3</button>
              <button className="orders__page-btn">4</button>
              <button className="orders__page-btn">5</button>
              <button className="orders__page-btn">→</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderAdPage);
