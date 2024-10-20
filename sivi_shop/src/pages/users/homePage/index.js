import { memo } from "react";
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./style.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { formater } from "utils/formater";
import cat1Img from "assets/users/images/categories/cat_1.jpg"
import cat2Img from "assets/users/images/categories/cat_2.jpg"
import cat3Img from "assets/users/images/categories/cat_3.jpg"
import cat4Img from "assets/users/images/categories/cat_4.jpg"
import cat5Img from "assets/users/images/categories/cat_5.jpg"

import banner1Img from "assets/users/images/banner/banner_1.jpg"
import banner2Img from "assets/users/images/banner/banner_2.jpg"

import featured1Img from "assets/users/images/featured/beef.jpg"
import featured2Img from "assets/users/images/featured/chicken.jpg"
import featured3Img from "assets/users/images/featured/pork.jpg"
import featured4Img from "assets/users/images/featured/chuoi.jpg"
import featured5Img from "assets/users/images/featured/dua_hau.jpg"
import featured6Img from "assets/users/images/featured/nhan.jpg"
import featured7Img from "assets/users/images/featured/kiwi.jpg"
import featured8Img from "assets/users/images/featured/xoai.jpg"
import featured9Img from "assets/users/images/featured/hambuger.jpg"

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const sliderItems = [
        {
            bgImg: cat1Img,
            name: "Cam tươi"
        },
        {
            bgImg: cat2Img,
            name: "Rau củ"
        },
        {
            bgImg: cat3Img,
            name: "Trái cây"
        },
        {
            bgImg: cat4Img,
            name: "Thịt tươi"
        },
        {
            bgImg: cat5Img,
            name: "Nước ép"
        },
    ]

    const featProducts = {
        all: {
            title: "Toàn bộ",
            products: [
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
        },
        freshMeat: {
            title: "Thịt tươi",
            products: [
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
                }
            ]
        },
        fruits: {
            title: "Trái cây",
            products: [
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
                }
            ]
        },
        fastFood: {
            title: "Thức ăn nhanh",
            products: [
                {
                    img: featured9Img,
                    name:"Hambuger",
                    price: 90000
                }
            ]
        }
    }

    const renderFeatureProducts = (data) => {
        const tabList=[];
        const tabPanels =[];

        Object.keys(data).forEach((key, index)=> {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = []
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
                        <div className="featured_item pl-pr-10">
                            <div className="featured_item_pic"
                            style={{
                                backgroundImage:`url(${item.img})`
                            }}
                            >
                                <ul className="featured_item_pic_hover">
                                    <li>
                                        <AiOutlineEye />
                                    </li>
                                    <li>
                                        <AiOutlineShoppingCart />
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="featured_item_text">
                                <h6>
                                    <Link to="">{item.name}</Link>
                                </h6>
                                <h5>{formater(item.price)}</h5>
                            </div>
                        </div>
                    </div>)
            });
            tabPanels.push(tabPanel);
        });
        
        return (
            <Tabs>
                <TabList>
                    {tabList}
                </TabList>
                {tabPanels.map((item, key) => (
                    <TabPanel key={key}>
                        <div className="row">{item}</div>
                    </TabPanel>
                ))}
            </Tabs>
        )
    }

    return <>
        {/* Categories begin */}
        <div className="container container_categories_slider">
            <Carousel responsive={responsive} className="categories_slider">
                {sliderItems.map((item, key) => (
                    <div 
                    key={key}
                    className="categories_slider_item"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                    >
                        <p>{item.name}</p>
                    </div>
                ))}
                
            </Carousel>
        </div>
        {/* Categories end */}

        {/* Featured begin */}
        <div className="container">
            <div className="featured">
                <div className="section-title">
                    <h2>Sản phẩm nổi bật</h2>
                </div>
                {renderFeatureProducts(featProducts)}
            </div>
        </div>
        {/* Featured end */}

        {/* Banner begin */}
        <div className="container">
            <div className="banner">
                <div className="banner_pic">
                    <img src={banner1Img} alt="banner"/>
                </div>
                <div className="banner_pic">
                    <img src={banner2Img} alt="banner"/>
                </div>
            </div>
        </div>
        {/* Banner end */}
    </> 
}

export default memo(HomePage);