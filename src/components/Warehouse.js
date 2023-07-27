import React, { useEffect } from 'react'
import img7 from "../images/mapimage.png"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Warehouse() {

  useEffect(
    ()=>{
      AOS.init({duration:1000})
    }
  )
  return (
    <div>
      <div className='warehouse fade-in'>
        <div className='section-title' data-aos="zoom-in" data-aos-once='true'>
        <div className='introduction '>
        <h5>Our Warehouse</h5>
        </div>
        <div class="header-title col-md-6" style={{width:'100%', display:'flex',justifyContent:"center"}}>
          <h2>Efficiency from Warehouses to Your Doorstep:
          Trust Our Safe & Timely Solar Deliveries!</h2>
          </div>
        
        </div>
        <div className='row sort-content' style={{ margin: 0, flexDirection:'row-reverse', justifyContent:'center',marginTop:"75px"}}>
          <div className='col-md-7 warehouse-map'>
            <img src={img7}  data-aos="fade-down-right" data-aos-once='true'></img>
          </div>
          <div className='col-md-4 our-warehouses' data-aos="zoom-in" data-aos-once='true' style={{display:'flex',alignItems:"start",flexDirection:"column",padding:"60px"}}>
            <h3 className='warehouse-detail'><strong>Empowering Solar Energy Nationwide:</strong></h3>
            <p className='warehouse-detail'>Unveiling Our Extensive Solar Panel Warehouses Across India</p>
            <ul className='warehouse-list'>
              <strong><li><h4>Ludhiana</h4></li></strong>
              <strong><li><h4>Alwar</h4></li></strong>
              <strong><li><h4>Jaipur</h4></li></strong>
              <strong><li><h4>Ahemdabad</h4></li></strong>
              <strong><li><h4>Bhiwandi</h4></li></strong>
              <strong><li><h4>Hyderabad</h4></li></strong>
              <strong><li><h4>Chennai</h4></li></strong>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}



