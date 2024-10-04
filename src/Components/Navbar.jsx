import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FaLocationDot } from "react-icons/fa6";
import firstimg from "../Images/First_Nav_Images.png"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoBookOutline } from 'react-icons/io5';
import { HiOutlinePhone } from 'react-icons/hi';
import { LuClock } from 'react-icons/lu';
import { AiOutlineInbox } from 'react-icons/ai';
import dollartreelogoname from '../Images/Dollartree_logo_name.png'
import morechoicesimg from '../Images/more_choices_img.png'
import { VscSearch } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';
import downloadimg from '../Images/Download_The_New_App.png';

const linkStyle = ({ isActive }) => ({
  color: isActive ? 'white' : '#FFFFF3', // Ensuring correct hex code format
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none'
});


const Navbar = () => {
  return (

    <div>
      <div className="navbar d-flex justify-content-around" style={{ height: '70px', alignItems: 'center', backgroundColor: '#12823B', color: 'white' }}>
        <div className="nav-item d-flex align-items-center">
          <FaMapMarkerAlt style={{ marginTop: '-12px', fontSize: '18px' }} /> &nbsp;
          <p style={{ fontSize: '13px' }}>Your Store: Set a Store</p>
        </div>
        <div className="nav-item d-flex align-items-center">
          <IoBookOutline style={{ marginTop: '-12px', fontSize: '18px' }} /> &nbsp;
          <p style={{ fontSize: '13px' }}>Catalog Quick Order</p>
        </div>
        <div className="nav-item d-flex align-items-center">
          <HiOutlinePhone style={{ marginTop: '-12px', fontSize: '18px' }} /> &nbsp;
          <div className="flexing">
            <p style={{ fontSize: '13px' }}>Order By Phone 1-877-530-TREE</p>
            <p style={{ fontSize: '10px', marginTop: '-10px' }}>.Call Center Hours.</p>
          </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="nav-item d-flex align-items-center">
          <LuClock style={{ marginTop: '-12px', fontSize: '18px' }} /> &nbsp;
          <p style={{ fontSize: '13px' }}>Same-Day Delivery</p>
        </div>
        <div className="nav-item d-flex align-items-center">
          <AiOutlineInbox style={{ marginTop: '-12px', fontSize: '18px' }} /> &nbsp;
          <p style={{ fontSize: '13px' }}>Track Orders</p>
        </div>
        <div className="nav-item">
          <img src={firstimg} alt="Family Dollar" style={{ height: '30px', width: '193px' }} />
        </div>
      </div>


      {/* <div className="second d-flex justify-content-around">
        <img src={dollartreelogoname} alt="" style={{height: '65px', width: '270px'}}/>
        <input type="text" 
          placeholder='Search DollarTree.com'
        /><VscSearch />
        <img src={morechoicesimg} alt="" style={{height: '45px', width: '45px'}}/>
        <div className="account">
        <FaRegUser />
        <p>Account</p>
        </div>
        <div className="cart">
        <IoCartOutline />
        <p>Cart</p>
        </div>
      </div> */}


      <div className="navbar d-flex justify-content-around align-items-center mt-2" style={{ height: '65px' }}>
        <NavLink style={linkStyle} to="/"><img src={dollartreelogoname} alt="Dollar Tree" style={{ height: '40px', width: '270px' }} /></NavLink>

        <div className="search-bar d-flex align-items-center">
          <input type="text" placeholder="Search DollarTree.com" style={{ height: '30px', width: '300px' }} />
          <VscSearch style={{ marginLeft: '-25px' }} />
        </div>

        <div className="insideit d-flex justify-content-evenly">
          <NavLink style={linkStyle} to="/MoreChoices"><img src={morechoicesimg} alt="More Choices" style={{ height: '45px', width: '45px' }} /></NavLink>

          <div className="account d-flex align-items-center" style={{ marginLeft: '80px' }}>
            <NavLink style={linkStyle} to="/Login">
              <FaRegUser style={{ color: '#12823B', marginLeft: '25px' }} /> &nbsp;
              <p style={{ margin: '0 0 0 5px', color: '#12823B', marginBottom: '0px' }}>Account</p>
            </NavLink>
          </div> &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="cart d-flex align-items-center">
            <NavLink style={linkStyle} to="/AddtoCart">
              <IoCartOutline style={{ color: '#12823B', marginLeft: '15px' }} /> &nbsp;
              <p style={{ margin: '0 0 0 5px', color: '#12823B', marginTop: '1px' }}>Cart</p>
            </NavLink>
          </div>
        </div>

      </div>


      <div className="DropDowns d-flex justify-content-around mt-3">
        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            All Departments
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
            <Dropdown.Item href="#/action-1">MORE CHOICES</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Extreme Value & New Arrivals</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Holidays</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Arts & Crafts Supplies</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Kitchen & Dining</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Floral & Home Decor</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Foods, Candy and Drinks</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Party Supplies</Dropdown.Item>
            <Dropdown.Item href="#/action-9">Office & School Supplies</Dropdown.Item>
            <Dropdown.Item href="#/action-10">Health & Beauty Supplies</Dropdown.Item>
            <Dropdown.Item href="#/action-11">Toys, Books, Puzzles & Games</Dropdown.Item>
            <Dropdown.Item href="#/action-12">Household & Pet Supplies</Dropdown.Item>
            <Dropdown.Item href="#/action-13">Cleaning & Storage</Dropdown.Item>
            <Dropdown.Item href="#/action-14">Seasons & Occasions</Dropdown.Item>
            <Dropdown.Item href="#/action-15">Clothing & Accessories</Dropdown.Item>
            <Dropdown.Item href="#/action-16">Care Packages</Dropdown.Item> <hr />
            <Dropdown.Item href="#/action-17" style={{ color: '#12823B' }}>Value Seekers Blog</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Holidays, Seasons & Celebrations
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ display: 'flex' }}>
          
            <div className="first">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-0"><h5 style={{ marginleft: '3px' }}>HOLIDAYS</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-1">Christmas</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Hanukkah</Dropdown.Item>
              <Dropdown.Item href="#/action-3">New Year's Eve Party Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Mardi Gras</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Valentine's Day</Dropdown.Item>
              <Dropdown.Item href="#/action-6">Easter Shop</Dropdown.Item>
              <Dropdown.Item href="#/action-7">St. Patrick's Day</Dropdown.Item>
              <Dropdown.Item href="#/action-8">Patriotic Party Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Halloween Shop</Dropdown.Item>
              <Dropdown.Item href="#/action-10"><a href="" style={{ fontSize: '12px', color: 'black' }}>See All Holidays ›</a>
              </Dropdown.Item>
            </Link>
            </div>
            <div className="seconds">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-00"><h5 style={{ marginleft: '3px' }}>SEASONS & OCCASIONS</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-11">Fall & Harvest</Dropdown.Item>
              <Dropdown.Item href="#/action-12">Garden Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-13">Back to Campus</Dropdown.Item>
              <Dropdown.Item href="#/action-14">Back to School</Dropdown.Item>
              <Dropdown.Item href="#/action-15">Shore Living</Dropdown.Item>
              <Dropdown.Item href="#/action-16">Summer Fun</Dropdown.Item>
              <Dropdown.Item href="#/action-17">Graduation Headquarters</Dropdown.Item>
              <Dropdown.Item href="#/action-18">Travel-Size Items</Dropdown.Item>
              <Dropdown.Item href="#/action-19">Breast Cancer Awareness</Dropdown.Item>
              <Dropdown.Item href="#/action-190"><a href="" style={{ fontSize: '12px', color: 'black' }}>See All Seasons & Occasions ›</a></Dropdown.Item>
              </Link>
            </div>
            <div className="third">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-000"><h5 style={{ marginleft: '3px' }}>PARTY SUPPLIES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-20">Catering Supplies & Serveware</Dropdown.Item>
              <Dropdown.Item href="#/action-21">Gift Wrap, Bags & Accessories</Dropdown.Item>
              <Dropdown.Item href="#/action-22">Solid Color Party Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-23">Birthday & Party Themes</Dropdown.Item>
              <Dropdown.Item href="#/action-24">Disposable Tableware</Dropdown.Item>
              <Dropdown.Item href="#/action-25">Baby Showers</Dropdown.Item>
              <Dropdown.Item href="#/action-26">Wedding & Bridal Showers</Dropdown.Item>
              <Dropdown.Item href="#/action-27">Streamers & Party Decorations</Dropdown.Item>
              <Dropdown.Item href="#/action-28">Party Favors & Games</Dropdown.Item>
              <Dropdown.Item href="#/action-280"><a href="" style={{ fontSize: '12px', color: 'black' }}>Sea all Party Supplies ›</a></Dropdown.Item>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>



        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Toys & Crafts
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ display: 'flex' }}>
            <div className="one">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>TOYS</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Stuffed Animals & Dolls</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Action Figures & Cars</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Novelty Toys & Gag Gifts</Dropdown.Item>
              <Dropdown.Item href="#/action-33">Active Play</Dropdown.Item>
              <Dropdown.Item href="#/action-34">Dress-Up & Pretend Play</Dropdown.Item>
              <Dropdown.Item href="#/action-35">Glow-in-the-Dark Toys</Dropdown.Item>
              <Dropdown.Item href="#/action-36">Activity Dough, Putty & Slime</Dropdown.Item>
              <Dropdown.Item href="#/action-37">Beach & Pool Toys</Dropdown.Item>
              <Dropdown.Item href="#/action-38">Bubbles, Balls & Chalk</Dropdown.Item>
              <Dropdown.Item href="#/action-39"><a href="" style={{ fontSize: '12px', color: 'black' }}>See all Toys ›</a></Dropdown.Item>
              </Link>
            </div>
            <div className="two">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>ARTS & CRAFTS SUPPLIES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Stuffed Animals & Dolls</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Action Figures & Cars</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Novelty Toys & Gag Gifts</Dropdown.Item>
              <Dropdown.Item href="#/action-33">Active Play</Dropdown.Item>
              <Dropdown.Item href="#/action-34">Dress-Up & Pretend Play</Dropdown.Item>
              <Dropdown.Item href="#/action-35">Glow-in-the-Dark Toys</Dropdown.Item>
              <Dropdown.Item href="#/action-36">Activity Dough, Putty & Slime</Dropdown.Item>
              <Dropdown.Item href="#/action-37">Beach & Pool Toys</Dropdown.Item>
              <Dropdown.Item href="#/action-38">Bubbles, Balls & Chalk</Dropdown.Item>
              <Dropdown.Item href="#/action-39"><a href="" style={{ fontSize: '12px', color: 'black' }}>See all Arts & Crafts Supplies ›</a></Dropdown.Item>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Kitchen & Home Décor
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ display: 'flex' }}>
            <div className="1">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>KITCHEN & DINING</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Dinnerware</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Glasses & Drinkware</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Food Storage</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Cookware & Bakeware</Dropdown.Item>
              <Dropdown.Item href="#/action-31">BBQ Tools & Picnic Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Kitchen Tools & Gadgets</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Kitchen & Table Linens</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Catering Supplies & Serveware</Dropdown.Item>
              </Link>
            </div>
            <div className="2">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>FLORAL & HOME DECOR</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Dinnerware</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Glasses & Drinkware</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Food Storage</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Cookware & Bakeware</Dropdown.Item>
              <Dropdown.Item href="#/action-31">BBQ Tools & Picnic Supplies</Dropdown.Item>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Home & Office
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ display: 'flex' }}>
            <div className="one-1">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>HOUSEHOLD & PET SUPPLIES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Paper Towels & Napkins</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Bed & Bath</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Auto Care & Maintenance</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Home Improvement</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Trash Bags</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Pet Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Pest Control</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Lighters & Matches</Dropdown.Item>
              </Link>
            </div>
            <div className="two-2">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>CLEANING & STORAGE</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Cleaners</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Cleaning Tools</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Laundry Care</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Storage & Organization</Dropdown.Item>
              </Link>
            </div>
            <div className="three-3">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>OFFICE & SCHOOL SUPPLIES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Writing Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Binders & Accessories</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Notebooks & Notepads</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Paper</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Poster Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Dry-Erase Boards & Accessories</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Office Basics</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Filing & Folders</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Calendars & Planners</Dropdown.Item>
              <Dropdown.Item href="#/action-39"><a href="" style={{ fontSize: '12px', color: 'black' }}>See all Arts & Crafts Supplies ›</a></Dropdown.Item>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>



        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Health & Personal Care
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ display: 'flex' }}>
            <div className="ek-1">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>HEALTH & BEAUTY SUPPLIES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Oral Care</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Bath & Body</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Deodorants</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Razors & Shaving Cream</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Hair Care</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Makeup & Cosmetics</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Facial Tissues</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Skincare</Dropdown.Item>
              <Dropdown.Item href="#/action-39"><a href="" style={{ fontSize: '12px', color: 'black' }}>See all Health & Beauty Supplies ›</a></Dropdown.Item>
              </Link>
            </div>
            <div className="don-2">
            <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
              <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>CARE PACKAGES</h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
              <Dropdown.Item href="#/action-30">Personal Care</Dropdown.Item>
              <Dropdown.Item href="#/action-31">Boxes, Baskets & Bins</Dropdown.Item>
              <Dropdown.Item href="#/action-32">Apparel</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Cleaning Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Toys & Activities</Dropdown.Item>
              <Dropdown.Item href="#/action-31">School Supplies</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Hardware & Auto Care</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Books, Games & Puzzles</Dropdown.Item>
              <Dropdown.Item href="#/action-30">Food & Snacks</Dropdown.Item>
              <Dropdown.Item href="#/action-39"><a href="" style={{ fontSize: '12px', color: 'black' }}>See all Care Packages ›</a></Dropdown.Item>
              </Link>
            </div>
          </Dropdown.Menu>
        </Dropdown>


        <Dropdown>
          <Dropdown.Toggle variant="#12823B" id="dropdown-basic">
            Food, Candy & Drinks
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Link to={`ProductPage`} style={{textDecoration: 'none'}}>
            <Dropdown.Item href="#/action-29"><h5 style={{ marginLeft: '3px' }}>FOOD, CANDY & DRINKS </h5></Dropdown.Item> <hr style={{ width: "200px", margin: 'auto', backgroundColor: 'green' }} />
            <Dropdown.Item href="#/action-30">Food</Dropdown.Item>
            <Dropdown.Item href="#/action-31">Drinks</Dropdown.Item>
            <Dropdown.Item href="#/action-32">Candy & Gums</Dropdown.Item>
            <Dropdown.Item href="#/action-30">Snakes</Dropdown.Item>
            <Dropdown.Item href="#/action-30">Care Packages Ideas</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>

      </div>
      <hr />




      {/* <div style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '20px', backgroundColor: '#DDA15E', height: '80px', alignItems: 'center' }}>
      <NavLink style={linkStyle} to="/">Home</NavLink>
      <NavLink style={linkStyle} to="/Login">Login</NavLink>
      <NavLink style={linkStyle} to="/AddtoCart">Add To Cart</NavLink>
      <NavLink style={linkStyle} to="/MoreChoices">More Choices </NavLink>
      
    </div> */}


      <NavLink style={linkStyle} to="/Productpage">
        <img src={downloadimg} alt="App Download" style={{ marginLeft: '65px' }} />
      </NavLink>
      {/* <Link style={linkStyle} to="/Productpage">
        <img src={downloadimg} alt="" />
      </Link> */}

    </div>

  )
}

export default Navbar
