import React from 'react'
import { FaPlay } from "react-icons/fa6";
import '../App.css'

const MoreChoices = () => {
  return (
    <div>
      <p style={{ fontSize: '11px', marginLeft: '65px', color: '#12823B', marginTop: '20px' }}>Home &nbsp;&nbsp;&nbsp;&nbsp;<FaPlay style={{ fontSize: '8px', color: 'gray' }} /> &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#12823B' }}>MORE CHOICES</span></p>



      <div className="container col-12 d-flex justify-content-evenly">
        <div className="col-4">
          <h4 style={{ color: '#12823B', fontWeight: '400' }}>MORE CHOICES</h4>
          <hr style={{ width: '220px' }} />
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Seasons & Holidays</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Party Supplies</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Toys & Games</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Home Decore</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Craft Supplies</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '15px' }}>MORE Household, Cleaning & <br /> Storage</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Kitchen & Dinning</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Apparel</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Electronics & Hardware </p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Food, candy & Drinks</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Health & Beauty</p>
          <p style={{ fontSize: '13px', color: 'gray', lineHeight: '9px' }}>MORE Office & School Supplies</p>
        </div>
        <div className="col-8" style={{}}>
          <h2>Dollar Tree is Now Offering More Choices</h2>
          <img src="https://www.dollartree.com/file/general/dt_more_landing_page_hero_phase_1_text_included_20240216.jpg" alt="" style={{ height: '700px', marginTop: '25px', cursor: 'pointer'}}/>
        </div>
      </div>


      <div className="container">
        <p style={{textAlign: 'center', marginLeft: '270px', fontWeight: '400px', fontFamily: 'sans-serif'}}>Now introducing a new world of variety and value at Dollar Tree, shop our new <br /> expanded range of more choices, popular brands, and favorites beyond $1.25— <br /> giving you more possibilities to discover!</p>
        <p style={{textAlign: 'center', marginLeft: '270px', fontWeight: '400px', fontFamily: 'sans-serif'}}>Our expanded range gives us the ability to offer you more choices, providing a <br /> larger variety of quality items at great value. Including our existing $3 and $5 <br /> items, you can explore new hidden treasures for every day, season, and occasion <br /> —from pet supplies to snacks from brands you love.</p>
        <p style={{textAlign: 'center', marginLeft: '270px', fontWeight: '400px', fontFamily: 'sans-serif'}}>Enjoy the thrill of the hunt for new items, more choices, and great value. Shop in <br /> select stores now!</p>
      </div>

      <div className="container">
        <img src="https://www.dollartree.com/file/general/dt_more_landing_page_categories_20240216.jpg" alt="" style={{ height: '550px', marginTop: '20px', marginLeft: '380px', cursor: 'pointer'}}/>
      </div>


      <div className="container">
        <img src="https://www.dollartree.com/file/general/dt_mp_store_pb_930px_2_20240209.jpg" alt="" style={{height: '200px', marginTop: '15px', marginLeft: '380px', cursor: 'pointer'}}/>
      </div>


      
      <br />









    </div>
  )
}

export default MoreChoices
