import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaPinterest, FaBlogger } from 'react-icons/fa';
// import dollartreeapp from './path_to_dollartreeapp_image';
import 'bootstrap/dist/css/bootstrap.min.css';
import dollarttreeapp from '../Images/DollTreeApp.png'
import blog from '../Images/Blog.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>


      <hr style={{ width: '980px', marginLeft: '180px', marginTop: '150px' }} />

      <div className="container d-flex justify-content-evenly">
        <Link to={`Login`} style={{textDecoration: 'none', color: 'black'}}><h6>Email Sign Up</h6></Link>
        <p style={{ fontSize: '16px' }}>Be the first to know about new arrivals online, in-store specials & events, fun ideas & inspiration, and more!</p>
        <Link to={`Login`} style={{}}><button className='emial-btn' style={{ padding: '5px 10px', border: 'none', outline: 'none', backgroundColor: '#1e62c1', color: 'white', borderRadius: '5px' }}>Sign Up</button></Link>
      </div>

      <div className='mt-3' style={{ backgroundColor: '#DDD1FF' }}>
        <Container className="py-4">
          <Row>
            <Col md={6} className="d-flex flex-column align-items-center">
              <div className="mb-3">
                <a href="https://www.instagram.com/dollartree/" style={{textDecoration: 'none', color: 'black'}}><FaInstagram className="mx-2" size="2em" style={{cursor: 'pointer'}}/></a>
                <a href="https://www.facebook.com/dollartree" style={{textDecoration: 'none', color: 'black'}}><FaFacebook className="mx-2" size="2em" style={{cursor: 'pointer'}}/></a>
                <a href="https://x.com/dollartree" style={{textDecoration: 'none', color: 'black'}}><FaTwitter className="mx-2" size="2em" style={{cursor: 'pointer'}}/></a>
                <a href="https://www.tiktok.com/@dollartree" style={{textDecoration: 'none', color: 'black'}}><FaTiktok className="mx-2" size="2em" style={{cursor: 'pointer'}}/></a>
                <a href="https://in.pinterest.com/dollartree/" style={{textDecoration: 'none', color: 'black'}}><FaPinterest className="mx-2" size="2em" style={{cursor: 'pointer'}}/></a>
              </div>
              <div className="mb-3">
                <p style={{cursor: 'pointer'}}>Value Seekers <img src={blog} alt="" style={{ height: '45px' }} /></p>
              </div>
              <div>
                <img src={dollarttreeapp} alt="Dollar Tree App" style={{ height: '45px', cursor: 'pointer'}} />
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-evenly">
              <div className="text-center">
                <p style={{ fontWeight: 'bold', fontSize: '15px', cursor: 'pointer'}}>Customer Service</p>
                {['Catalog Quick Order', 'Contact Us / Help Center', 'Forgot Password', 'In-Store Pickup', 'My Account', 'Order Status', 'Placing Tax-Exempt Orders', 'Recall Information', 'Privacy Requests'].map((item, index) => (
                  <p key={index} style={{ fontSize: '12px', color: 'green', cursor: 'pointer'}}>{item}</p>
                ))}
              </div>
              <div className="text-center">
                <p style={{ fontWeight: 'bold', fontSize: '15px', cursor: 'pointre'}}>Dollar Tree Stores</p>
                {['Gift Cards', 'Reloadable Debit Cards', 'Store Locator', 'Store Careers', 'Weekly Ad', 'Value Seekers Blog', 'Dollar Tree Canada', 'Coronavirus Response'].map((item, index) => (
                  <p key={index} style={{ fontSize: '12px', color: 'green', cursor: 'pointer'}}>{item}</p>
                ))}
              </div>
              <div className="text-center">
                <p style={{ fontWeight: 'bold', fontSize: '15px', cursor: 'pointer'}}>Company Info</p>
                {['About Us', 'Affiliates', 'Associates', 'Careers', 'Investor Relations', 'Real Estate Partners', 'Sustainability Report', 'Vendor Partners', 'W2 Information'].map((item, index) => (
                  <p key={index} style={{ fontSize: '12px', color: 'green', cursor: 'pointer'}}>{item}</p>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      <p style={{ fontSize: '12px', textAlign: 'center', marginTop: '20px' }}>Privacy Policy | Consumer Health Data | <img src="https://www.dollartree.com/file/general/privacyoptions.svg" alt="" style={{ height: '8px' }} /> Your Privacy Choices | Legal Policies | Accessibility Statement | Terms & Conditions | Site Map | CA Cleaning Products Right to Know Act</p>



      <hr style={{ width: '980px', marginLeft: '180px', marginTop: '20px' }} />

      <div className="container col-12 d-flex justify-content-evenly" style={{ marginLeft: '200px' }}>
        <div className="col-6">
          <p style={{ fontSize: '12px' }}>Copyright © 2024 Dollar Tree, Inc. <a href="https://github.com/patilharish1211" style={{ color: 'black', fontWeight: 'bold' }}>Patil Harish</a> |</p>
        </div>
        <div className="col-6">
          <p style={{ fontSize: '12px' }}>Prices and availability may vary between stores and online.</p>
        </div>
      </div>

    </>
  );
};

export default Footer;
