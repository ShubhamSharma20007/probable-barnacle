import React from 'react'
import img9 from '../images/jinkosheet1.jpg'
import img10 from "../images/jinkosheet2.jpg"
import img11 from "../images/jinkosheet3.jpg"
import img12 from "../images/jinkosheet4.jpg"
import img13 from "../images/jinkosheet5.jpg"
import img14 from "../images/jinkosheet6.jpg"
import img15 from "../images/axitecsheet1.jpg"
import img16 from "../images/axitecsheet2.jpg"
import img17 from "../images/novasyssheet1.jpg"
import img18 from "../images/novasyssheet2.jpg"

const jinkosheetdata = [
    {
        imgSrc: img9,
        title: "Tiger Pro – 550 Wp"
    },
    {
        imgSrc: img10,
        title: "Tiger – 470 Wp"
    },
    {
        imgSrc: img11,
        title: "Tiger Neo Bifacial – 72 Cell N-type"
    },
    {
        imgSrc: img12,
        title: "Tiger Neo Mono – 78 Cell N-type"
    },
    {
        imgSrc: img13,
        title: "Tiger Neo Mono – 72 Cell N-type"
    },
    {
        imgSrc: img14,
        title: "Tiger Neo Bifacial – 78 Cell N-type"
    }

]

const axitecsheetdata = [
    {
        imgSrc: img15,
        title: "AXIworldpower – 335Wp NON-DCR"
    },
    {
        imgSrc: img16,
        title: "AXIworldpremium XXL HC – 550Wp"
    },
    {
        imgSrc: img15,
        title:  "AXIworldpower – 335Wp DCR"
    }
]

const novasyssheetdata = [
    {
        imgSrc: img17,
        title: "Vega Series – 335Wp DCR"
    },
    {
        imgSrc: img18,
        title: "Alpha Plus Series – 550Wp"
    },
    {
        imgSrc: img17,
        title: "Vega Series – 335Wp NON – DCR "
    }
]


export default function productsheet() {

    const handleDownload = (imgSrc) => {
        const link = document.createElement('a');
        link.href = imgSrc;
        link.download = 'image.jpg';
        link.click();
    };
    return (
        <div>
            <div className='productsheet'>
                <div className='section-title'>
                    <h1>Jinko Solar</h1>
                </div>
                <div className='section-content'>
                    <div className='container'>
                        <div className='row sheets'>
                            {jinkosheetdata.map((item, index) => (

                                <div className='col-md-4 sheet-col' key={index}>
                                    <img src={item.imgSrc}></img>
                                    <h3>{item.title}</h3>
                                    <a href='#' onClick={() => handleDownload(item.imgSrc)}><div className='download-btn'>Download DataSheet</div></a>
                                </div>
                            )
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className='section-title'>
                    <h1>AXITEC SOLAR</h1>
                </div>
                <div className='section-content'>
                    <div className='container'>
                        <div className='row sheets'>
                            {axitecsheetdata.map((item, index) => (

                                <div className='col-md-4 sheet-col' key={index}>
                                    <img src={item.imgSrc}></img>
                                    <h3>{item.title}</h3>
                                    <a href='#' onClick={() => handleDownload(item.imgSrc)}><div className='download-btn'>Download DataSheet</div></a>
                                </div>
                            )
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className='section-title'>
                    <h1>NOVASYS GREEN</h1>
                </div>
                <div className='section-content'>
                    <div className='container'>
                        <div className='row sheets'>
                            {novasyssheetdata.map((item, index) => (

                                <div className='col-md-4 sheet-col' key={index}>
                                    <img src={item.imgSrc}></img>
                                    <h3>{item.title}</h3>
                                    <a href='#' onClick={() => handleDownload(item.imgSrc)}><div className='download-btn'>Download DataSheet</div></a>
                                </div>
                            )
                            )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
