import React, { useEffect, useState } from 'react';
// import firstimg from '../Images/Download_The_New_App.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import '../App.css'
import success from '../Images/Value_their_Success.png'
import perfectgift from '../Images/THE_PERFECT_GIFT.png'
import hiddentreasure from '../Images/Hidden_Treasures.png'
import newarrivals from '../Images/New_Arrivals.png'
import { Carousel } from 'react-bootstrap';
import a1img from '../Images/A+_supplies.png'
import allinone from '../Images/4in1.png'
import dishwash from '../Images/Dish_wash.png'
import fourinone from '../Images/4in1-1.png'
import eightinone from '../Images/8inone.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import blog from '../Images/Blog.png'
import dollarttreeapp from '../Images/DollTreeApp.png'
import DescriptionPage from './DescriptionPage';
import { Link } from 'react-router-dom';
// import ExampleCarouselImage from './ExampleCarouselImage';


const Home = () => {
    const [products, setProducts] = useState([]);

    const getDataFromServer = () => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                console.log(res)
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getDataFromServer();
    }, []);

    return (
        <div>

            {/* <img src={firstimg} alt="App Download" style={{ marginLeft: '65px' }} /> */}

            {/* SLIDER */}
            <Container className="col-12" style={{ marginTop: '20px' }}>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.dollartree.com/file/general/w_hero_bts_1250x400_20240707.jpg" className="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.dollartree.com/file/general/w_hero_storage_organization_1250x400_20240707.jpg" className="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://www.dollartree.com/file/general/w_hero_summer_fun_1250x400_20240707.jpg" className="d-block w-100" alt="..." style={{ height: '300px' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </Container>


            {/* ICONS */}
            <div className="container mt-5">
                <div className="icons_img d-flex justify-content-around">
                    <div className="firsticon">
                        <img src="https://www.dollartree.com/file/general/w_store_icon_3a_ad_20210829.png" alt="" style={{ height: '90px', cursor: 'pointer' }} />
                        <p>Local Ad</p>
                    </div>
                    <div className="secondicon">
                        <img src="https://www.dollartree.com/file/general/specials_icon_20220610.png" alt="" style={{ cursor: 'pointer' }} />
                        <p>In Store Specials</p>
                    </div>
                    <div className="thirdicon">
                        <img src="https://www.dollartree.com/file/general/Hidden-Treasures-Icon_20230320.png" alt="" style={{ cursor: 'pointer' }} />
                        <p>Hidden Treasures</p>
                    </div>
                    <div className="fourticon">
                        <img src="https://www.dollartree.com/file/general/DT-Gif-Card-Icon_20231124.png" alt="" style={{ cursor: 'pointer' }} />
                        <p>Gift Cards</p>
                    </div>
                </div>
            </div>


            {/* NORMAL FETCHDATA incomplete */}
            <div className="container">
                {/*      */}
            </div>


            {/* THREE BLUE CIRCLES WITH IMG INSIDE incomplete */}
            <div className="snacks">
                <h1 style={{ marginLeft: '500px', marginTop: '30px' }}>Snack, Sip & Save</h1>
                <div className="conatiner d-flex justify-content-around">
                    <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
                        <div className="cont1">
                            <div className="round-container-1 col-3 bg-dark">
                                <img src="https://www.dollartree.com/file/general/w_3a_snacks_400x400_20240707.jpg" alt="" />
                            </div>
                            <p className='roundinfo-1'>Snacks</p>
                        </div>
                    </Link>
                    <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
                        <div className="cont2">
                            <div className="round-container-2 col-3">
                                <img src="https://www.dollartree.com/file/general/w_3a_package_food_400x400_20240707.jpg" alt="" />
                            </div>
                            <p className='roundinfo-2'>Packaged Dinners</p>
                        </div>
                    </Link>
                    <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
                        <div className="cont3">
                            <div className="round-container-3 col-3">
                                <img src="https://www.dollartree.com/file/general/w_3a_beverages_400x400_20240707.jpg" alt="" />
                            </div>
                            <p className='roundinfo-3'>Drinks</p>

                        </div>
                    </Link>
                </div>
            </div>


            <img src={success} alt="Value of Success" style={{ marginLeft: '65px' }} />


            <h1 style={{ marginLeft: '500px', marginTop: '30px' }}>Customer-Favorites</h1>

            {/* JSON DATA SLIDER */}
            <div className="container">
                <Carousel>

                    <Carousel.Item>
                    <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
                    <div className="container d-flex">
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v7072849840236637890/products/162354.jpg&height=100&width=200" alt="" style={{ marginLeft: '45px' }} />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Clear Glass Cylinder Vases, 7.25x3.25 in.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v6395506494265448128/products/271909.jpg&height=100&width=200" alt="" style={{ marginLeft: '45px' }} />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Gold Plastic Charger Plates with Beaded Rims, 13 in.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v5323431035768057505/products/189954.jpg&height=300&width=100" alt="" style={{ marginLeft: '45px' }} />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}>Tapered Glass Champagne Flutes, 6.25 oz.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v1324843820376940926/products/363596.jpg&height=300&width=100" alt="" style={{ marginLeft: '45px' }} />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Marcel's Modern Pantry Whole Milk, 32-oz.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                        </div>
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item>
                    <Link to={`DescriptionPage.id`} style={{textDecoration: 'none'}}><div className="container d-flex">
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v2227811505625504227/products/319863.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Swan 70% Isopropyl Alcohol, 16-oz.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v3849672046150627030/products/809955.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Readi-Board White Foam Boards, 20x30 in.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v6840692778165526468/products/127853.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Nature's House Creamy Peanut Butter, 10-oz. Containers</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v6187709886056964464/products/10534.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> 2-Ply Paper Towels, Custom Sheet Size, 140-Sheet Rolls</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                        </div>
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item>
                    <Link to={`ProductPage`} style={{textDecoration: 'none'}}><div className="container d-flex">
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v4258837669759771170/products/163082.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> Assorted Stacking Plastic Laundry Baskets, 17x11.5 in.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                            <div className="col-3">
                                <img src="https://www.dollartree.com/ccstore/v1/images/?source=/file/v4009487684024437812/products/224590.jpg&height=300&width=100" alt="" />
                                <h6 style={{ textAlign: 'center', color: '#12823B' }}> 9 Lives Super Supper Meaty Pate Wet Cat Food, 13-oz.</h6>
                                <p style={{ textAlign: 'center', color: '#12823B' }}>  ★★★  </p>
                                <p style={{ textAlign: 'center', color: '#2D4DC3' }}>Free In-Store Pickup!</p>
                            </div>
                        </div>
                        </Link>
                    </Carousel.Item>

                </Carousel>

            </div>

            <img src={perfectgift} alt="" style={{ marginLeft: '76px', marginTop: '30px' }} />

            {/* TWO BOXS */}
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}><div className="container col-12 d-flex justify-content-between mt-4">
                <div className="col-6 box-1">
                    <img src={hiddentreasure} alt="" style={{ width: '530px' }} />
                    <h3 style={{ textAlign: 'center', marginTop: '5px' }}>It’s the Thrill of the Hunt</h3>
                    <p style={{ fontSize: '18px', fontFamily: 'sans-serif', textAlign: 'center' }}>You never know what deals you’ll find at Dollar Tree. Shop items specially curated for you.</p>
                    <button className='btn-1' style={{ padding: '10px 20px', border: '2px solid black', outline: 'none', backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: '20px', borderRadius: '5px', marginLeft: '200px' }}>Shop Now</button>
                </div>
                <div className="col-6 box-2">
                    <img src={newarrivals} alt="" style={{ width: '530px' }} />
                    <h3 style={{ textAlign: 'center', marginTop: '5px' }}>New Arrivals</h3>
                    <p style={{ fontSize: '18px', fontFamily: 'sans-serif', textAlign: 'center' }}>We have new items online and in stores every week, so come shop our newest deals.</p>
                    <button style={{ padding: '10px 20px', border: '2px solid black', outline: 'none', backgroundColor: 'black', color: 'white', fontWeight: 'bold', fontSize: '20px', borderRadius: '5px', marginLeft: '200px' }}>Shop Now</button>
                </div>
            </div>
            </Link>


            <Link to={`ProductPage`} style={{textDecoration: 'none'}}><div className="container col-12 d-flex justify-content-between mt-5">
                <div className="col-6 imgbox1" style={{ cursor: 'pointer' }}>
                    <img src={a1img} alt="" style={{ height: '500px', width: '500px' }} />
                </div>
                <div className="col-6 imgbox2" style={{ cursor: 'pointer' }}>
                    <img src={allinone} alt="" style={{ height: '500px', width: '500px' }} />
                </div>
            </div>
            </Link>


            <div className="container col-12 d-flex justify-content-between mt-5" style={{ marginTop: '10px' }}>
                <div className="col-6 imgbox3" style={{ cursor: 'pointer' }}>
                    <img src={dishwash} alt="" style={{ height: '500px', width: '500px' }} />
                </div>
                <div className="col-6 imgbox4" style={{ cursor: 'pointer' }}>
                    <img src={fourinone} alt="" style={{ height: '500px', width: '500px' }} />
                </div>
            </div>

            <h2 style={{ marginLeft: '400px', marginTop: '150px' }}>Inspiring & Affordable Summer Ideas</h2>

            <div className="container mt-5">
                <div className="icons_img d-flex justify-content-around">
                    <div className="fifthicon">
                        <img src="https://www.dollartree.com/file/general/w_blog_three_outdoor_painting_ideas_summer_20240707.jpg" alt="" style={{ height: '200px', cursor: 'pointer' }} />
                        <p className='mt-2' style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>3 Outdoor Painting Ideas</p>
                    </div>
                    <div className="sixthicon">
                        <img src="https://www.dollartree.com/file/general/w_blog_diy_spring_crafting_decor_mini_flower_20240707.jpg" alt="" style={{ cursor: 'pointer', height: '200px' }} />
                        <p className='mt-2' style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>DIY Mini Flower Cart Décor</p>
                    </div>
                    <div className="seventhicon">
                        <img src="https://www.dollartree.com/file/general/w_blog_diy_welcome_sign_20240707.jpg" alt="" style={{ cursor: 'pointer', height: '200px' }} />
                        <p className='mt-2' style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>DIY Wedding Welcome Sign</p>
                    </div>
                    <div className="eighticon">
                        <img src="https://www.dollartree.com/file/general/w_blog_diy_hand_Painted_candles_20240707.jpg" alt="" style={{ cursor: 'pointer', height: '200px' }} />
                        <p className='mt-2' style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>Easy Hand-Painted Candles</p>
                    </div>
                </div>
            </div>

            <h1 style={{ marginLeft: '570px', marginTop: '150px', color: '#62B33C' }}>#DollarTree</h1>
            <h1 style={{ textAlign: 'center' }}>Share your Finds & Creations!</h1>


            <div className="container">
                <img src={eightinone} alt="" style={{ marginLeft: '60px', marginTop: '20px', cursor: 'pointer' }} />
            </div>

            {/* <div className="co ntainer-fluid" style={{ backgroundColor: '#CA92EC' }}>
                <div className="container col-12 d-flex justify-content-evenly">
                    <div className="col-6">
                        <div className="socialicons">
                            <FaInstagram />
                            <FaFacebook />
                            <FaXTwitter />
                            <BsTiktok />
                            <FaPinterest />
                        </div>
                        <div className="valueseekers">
                            <p> Value Seekers<img src={blog} alt="" style={{ height: '45px' }} /></p>
                        </div>
                        <div className="dollartree">
                            <img src={dollarttreeapp} alt="" style={{ height: '45px' }} />
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-evenly">
                        <div className="CustomService">
                            <p style={{fontWeight: 'bold', fontSize: '15px'}}>Customer Service</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Catalog Quick Order</p>                       
                            <p style={{fontSize: '12px', color: 'green'}}>Contact Us / Help Center</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Forgot Password</p>
                            <p style={{fontSize: '12px', color: 'green'}}>In-Store Pickup</p>
                            <p style={{fontSize: '12px', color: 'green'}}>My Account</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Order Status</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Placing Tax-Exempt Orders</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Recall Information</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Privacy Requests</p>
                        </div>
                        <div className="DollarTreeStore">
                            <p style={{fontWeight: 'bold', fontSize: '15px'}}>Dollar Tree Stores</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Gift Cards</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Reloadable Debit Cards</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Store Locator</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Store Careers</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Weekly Ad</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Value Seekers Blog</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Dollar Tree Canada </p>
                            <p style={{fontSize: '12px', color: 'green'}}>Coronavirus Response</p>
                        </div>
                        <div className="CompanyInfo">
                            <p style={{fontWeight: 'bold', fontSize: '15px'}}>Campany Info</p>
                            <p style={{fontSize: '12px', color: 'green'}}>About Us</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Affiliates</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Associates</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Careers</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Investor Relations</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Real Estate Partners</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Sustainability Report</p>
                            <p style={{fontSize: '12px', color: 'green'}}>Vendor Partners</p>
                            <p style={{fontSize: '12px', color: 'green'}}>W2 Information</p>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}

export default Home;
