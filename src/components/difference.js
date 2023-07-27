import React from 'react'
import  { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"
import Difference1 from "../images/Difference1.png"
import Difference2 from "../images/Difference2.png"
import Difference3 from "../images/Difference3.png"
import Difference4 from "../images/Difference4.png"
import Difference5 from "../images/Difference5.png"
import Difference6 from "../images/Difference6.png"

const differenceData = [
    {
        imgSrc: Difference1,
        title: "Customer Centric Approach",
        content: "We always put our customers first and work to provide the best possible experience. We’re constantly improving our process and service, and welcome feedback to help us grow. Our interaction with our clients is a great way to keep up with the latest news and announcements, as well as learn more about how we operate."
    },
    {
        imgSrc: Difference2,
        title: "Strong Distribution Network",
        content: "We have a strong distribution network that helps us get our products to our customers quickly and efficiently. We have a dedicated team of professionals who handle all aspects of the distribution process, from warehousing to transportation. This ensures that our products are delivered on time and in perfect condition."
    },
    {
        imgSrc: Difference3,
        title: "Team",
        content: "At OneKlick, we have a dedicated team of experienced professionals who are knowledgeable about the latest technology and have vast experience of decades having worked in Solar Industry. Our staff comprises of combination of youth and experience and our director of business development is an IIT Kharagpur alumnus."
    },
    {
        imgSrc: Difference4,
        title: "Affordable",
        content: "We are committed to providing affordable, reliable and clean energy to homes and businesses across India. We are constantly innovating and expanding our product range, so that we can offer you the latest and best technology available at the best prices. Our goal is to make going solar as easy and affordable as possible for everyone."
    },
    {
        imgSrc: Difference5,
        title: "Mission",
        content: "We are on a mission to provide renewable energy solutions that are affordable and reliable. We believe that solar energy is the key to a sustainable future, and we are committed to making it more accessible to everyone. Our team of experts are always available to guide and advise you on the best product for your project."
    },
    {
        imgSrc: Difference6,
        title: "Vision",
        content: "We at OneKlick Techno Renewable Pvt. Ltd strongly believe that solar energy is the future. We are committed to providing our customers with the best products and services in the solar industry and strive to be the leading solar module distributor in India.We are constantly innovating and expanding our business to better serve our customers."
    }
]

export default function Difference() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

    return (
        <div>
            <div className="differences">
                <div className="section-title" data-aos="zoom-in" data-aos-once="true">
                    <div className='introduction'>
                        <h5>WHY ONEKLICK    </h5>
                    </div>
                    <div class="header-title col-md-6" style={{width:'100%', display:'flex',justifyContent:"center"}}>
                    <h2>All you need is OneKlick</h2>
                    </div>
                    
                </div>
                <div className="section-content">
                    <div className='row col-md-11 ' style={{justifyContent:'space-around',margin:'auto'}}>
                        {differenceData.map((item, index) => (
                            <div className="col-md-4  " data-aos="flip-up" data-aos-once="true" key={index}>
                                <div className="product-imgs" id='product-hover'>
                                    <img src={item.imgSrc} width='100%' className='img-icon' alt='' />
                                    <div className='overlay'>
                                        <div className='text'>
                                        </div>
                                    </div>
                                    <h3>{item.title}</h3>
                                </div>

                                <p className='differnces'>{item.content}</p>

                            </div>
                        ))}



                    </div>
                </div>
            </div>
        </div>
    )
}
