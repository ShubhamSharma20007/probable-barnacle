import React, {  useState } from 'react'
import "../Navbar.css"
import "./product"
import "./blog"
import "./contact_page"
import WarehousePage from "../components/WarehousePage"
import oneklicklogo from "../images/oneklick-logo.webp"
import 'react-dropdown/style.css';
import "./campain/Campain_header"
import "./campain/Campain_jinkoheader"
import { Navbar } from 'rsuite'

const SideNavBar = () => {
  function open() {
    document.getElementById("sidebar").style.display = "block";
    
  }

  function close(){
    document.getElementById('sidebar').style.display = 'none'
  }
  

  function CloseNavbar() {
    const navbar_value = document.getElementById("sheet-redial-items");
    const prdbtn = document.getElementById('productbtn')
    const sidebar = document.getElementById('sidebar')
    if (navbar_value.style.display === "block") {
      navbar_value.style.display = "none";
      sidebar.style.display = "block";
     
    } else {
      navbar_value.style.display = "block";
      sidebar.style.display = "block"
     
      
    }
  }
 

  
 

const [isstart ,setstart ] = useState(false)

const [isopen , setisopen] = useState(false)

  
  return (
    <>
      <Navbar/>
      <nav id="firstNav" className=''>
        <div id='upperRow'>
          <ul >
            <a href='mailto:sales@oneklick.in'><li><i className="fa-thin fa-envelope"></i>&nbsp; <span>sales@oneklick.in</span></li></a>
           <a href='tel:+919511568993'> <li><i className="fa-solid fa-phone" style={{color:"wheat"}}></i>&nbsp;<span>+91–9511568993</span></li></a>
          </ul>
          <ul>
          <li ><a href="https://www.facebook.com/OneKlickTechnoRenewable"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li ><a href="https://twitter.com/OneklickTechno"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company/oneklicktechno"><i className="fa-brands fa-linkedin-in "></i></a></li>
            <li><a href="https://www.instagram.com/oneklicktechno/"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>

        </div>

        <div id='lowerRow'>

          <div ><a href="#"><img src={oneklicklogo} style={{width:"27%"}} alt="OneKlick Techno Renewable" title="Solar Panels, Solar Modules, Solar Inverter, Solar Structure, GI, Solar BOM, Sungrow, Solaredge" className="site-logo-image" /></a></div>
          <div >
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/AboutPage">ABOUT US</a></li>
              <li className='dropdown-toggle ' id= "dropdown-li" onClick={()=> {setisopen(!isopen)}}>PRODUCT</li>
              <li><a href="/WarehousePage">WAREHOUSE</a></li>
              <li><a href="/Contact_page">CONTACT US</a></li>
              <li><a href="/newblog">BLOG</a></li>
            </ul>
          </div>
         {isopen && (<div className="subemenu col-md-1 ">
           <div className="row ">
              <a href="./Campain_header"><h4>Jinko Solar</h4></a>
              <a href="./Campain_jinkoheader"><h4>Solex Solar</h4></a>
              <a href="./product"><h4>Datasheet</h4></a>
            </div>
          </div>
         )}
        </div>
      </nav>
      <nav id='secondNav' style={{ width: "100vw" }} className='bg-dark col-md-12'>
        <div id='upperRow'>
          <ul >
            <li> 
            <a href='mailto:sales@oneklick.in'><i className="fa-thin fa-envelope"></i>&nbsp; sales@oneklick.in</a>
            </li>
            <li><i className="fa-solid fa-phone"></i>&nbsp;<span>+91–9511568993</span></li>
          </ul>

        </div>
        <div id='secondRow1'>
          <div ><a href="#"><img src="https://oneklick.in/wp-content/uploads/2022/09/Oneklick_White_png_new_110.png" alt="OneKlick Techno Renewable" title="Solar Panels, Solar Modules, Solar Inverter, Solar Structure, GI, Solar BOM, Sungrow, Solaredge" className="site-logo-image" /></a></div>
          <div onClick={open} style={{ fontSize: '30px' }}><button><i style={{ color: "white" }} className="fa-solid fa-bars"></i></button></div>
        </div>

      </nav>
      <div id="sidebar"  className="sidebar">
        <i className="fa-solid fa-xmark" id='sidebarIcon' onClick={close}></i>
        <ul>
          <li><a href="/">HOME</a> </li>
          <li><a href="/AboutPage">ABOUT US</a></li>
          <li  onClick={CloseNavbar}style={{cursor:'pointer'}}><a style={{color:'white'}} className='dropdown-toggle navbar-sheet-title' id='productbtn'>PRODUCT </a></li>
         
         <div id='sheet-redial-items' style={{display:"none"}} >
              <a href="./Campain_header"><h4>Jinko Page</h4></a>
              <a href="./Campain_jinkoheader"><h4>Solex Page</h4></a>
              <a href="./product"><h4>DataSheet</h4></a>

         </div>
          <li><a href="/WarehousePage">WAREHOUSE</a></li>
          <li><a href="/Contact_page">CONTACT US</a></li>
          <li><a href="/newblog">BLOG</a></li>
        </ul>
        
      </div>
    </>
  )
}

export default SideNavBar;