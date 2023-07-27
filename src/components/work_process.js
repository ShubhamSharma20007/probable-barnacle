import React, { useEffect } from 'react'
import img5 from '../images/Query.png'
import AOS from "aos";
import "aos/dist/aos.css"

export default function Work_process() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className='warehouse'>
        <div className='section-title' data-aos="zoom-in" data-aos-once="true">
        <div className='introduction'>
           <h5>WORK PROCESS</h5>
           </div>
          <div class="header-title col-md-6" style={{width:'100%', display:'flex',justifyContent:"center"}}>
          <h2>Simplicity and Efficiency Defined:
          OneKlick's Streamlined Work Process</h2>
          </div>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-7 text-center'>
              <img src={img5} className='img-fluid' data-aos="fade-left" data-aos-once="true"></img>
            </div>
            <div className='col-md-4 pt-5'>
              <div className="progress"  style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "15%", backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Query-15%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "25%", backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Discussion - 25%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "50%", backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Order Confirmation - 50%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "60%",backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Warehouse - 60%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "70%",backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Logistics - 70%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "80%",backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Transport - 80%</span></div>
              </div>
              <div className="progress" style={{backgroundColor:"#ACC5EB"}}>
                <div className="progressbar progress-bar-striped progress-bar-animated" data-aos="fade-right" data-aos-once="true" role="progressbar" style={{width: "100%",backgroundColor:"#32367B"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"><span>Order Delivered - 100%</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
