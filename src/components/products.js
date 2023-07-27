import React, { useEffect } from 'react';
import img6 from "../images/jinkosolar.png";
import img7 from "../images/novasys.png";
import img8 from "../images/axit.png";
import Solex from "../images/solex.png";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Products() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className='products'>
        <div className='section-title  ' data-aos="zoom-in" data-aos-once="true" >
          <div className='introduction'>
            <h5>Our Products</h5>
          </div>
          <div class="header-title col-md-6" style={{width:'100%', display:'flex',justifyContent:"center"}}>
          <h2>Explore our Extensive Range of High-Quality Solar Modules
           for Industries &  Residential Projects</h2>
          </div>
        </div>
        <div className='section-content'>
          <div className='row prastuti-row-1'>
            <div className='col-md-6' data-aos="flip-left" data-aos-once='true'>
              <a href="#" id='product-hover' className='product-imgs'>
                <img src={img6} className='image' alt='Jinko Solar'/>
                <div className='overlay'>
                  <div className='text'></div>
                </div>
                <h3>JINKO SOLAR</h3>
              </a>
              <ul className='products-list'>
                <li>Presence in <strong>over 140 countries</strong></li>
                <li><strong>100 GW Highest shipment</strong> in the industry</li>
                <li><strong>RE100</strong> – First Solar Company</li>
                <li><strong>Top Performer</strong> – PVEL’s 2022 Reliability Scorecard for the 8th Consecutive Time</li>
                <li>“ <strong>Top Brand</strong> PV USA 2021″ by EUPD Research</li>
                <li>“Overall <strong>High Achiever</strong>” in RETC’s PV Module Index Report for Third Consecutive Year</li>
              </ul>
            </div>
            <div className='col-md-6' data-aos="flip-right" data-aos-once='true'> 
              <a href="#" id='product-hover' className='product-imgs'>
                <img src={Solex} className='image' alt='Solex'></img>
                <div className='overlay'>
                  <div className='text'></div>
                </div>
                <h3>SOLEX</h3>
              </a>
              <ul className='products-list'>
                <li><strong>National Stock Exchange Listed</strong> Company</li>
                <li>Fully <strong>Automatic</strong> Production facility</li>
                <li>High Efficiency up to <strong>21.3%</strong></li>
                <li>Ultra Clear PID free <strong>EVA</strong></li>
                <li><strong>UV Protected</strong> backsheet</li>
                <li>Best in class Temp Co-efficient</li>
              </ul>
            </div>
            <div className='col-md-6' data-aos="flip-left" data-aos-once='true' >
              <a href="#" id='product-hover' className='product-imgs'>
                <img src={img8} className='image' alt='Axitec'></img>
                <div className='overlay'>
                  <div className='text'></div>
                </div>
                <h3>AXITEC</h3>
              </a>
              <ul className='products-list'>
                <li><strong>German</strong> Quality | <strong>Indian</strong> Reliability</li>
                <li><strong>15 years</strong> product warranty</li>
                <li><strong>85%</strong> Performance warranty</li>
                <li><strong>Largest European</strong> Solar Module Brand</li>
                <li>Installed base in over <strong>81 countries</strong></li>
                <li>Experience of <strong>German engineering</strong> in the selection of materials</li>
              </ul>
            </div>
            <div className='col-md-6' data-aos="flip-right" data-aos-once='true'>
              <a href="#" id='product-hover' className='product-imgs'>
                <img src={img7} className='image' alt='Novasys Green'></img>
                <div className='overlay'>
                  <div className='text'></div>
                </div>
                <h3>NOVASYS GREEN</h3>
              </a>
              <ul className='products-list'>
                <li><strong>A+A+A+ Class sun simulator</strong> to produce defect-free modules</li>
                <li>Advanced <strong>Automated Robotic Production</strong> line to avoid human errors</li>
                <li>Consistent <strong>quality</strong> and committed <strong>deliveries</strong></li>
                <li><strong>Highest grade</strong> raw materials from international suppliers</li>
                <li><strong>Automatic Stringer</strong> from team Technik, <strong>Germany</strong> used for excellent stringing</li>
              </ul>
            </div>
            <a href='#' className='view' data-aos="zoom-in" data-aos-once="true">
              View more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
