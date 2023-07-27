import React, { useEffect, useRef } from "react";
import '../styles.css';

import Axitec from "../images/Axitec copy.png";

import jinko from "../images/jinko (1).png";
import Novasys from "../images/Novasys copy.png";
import solex from "../images/solex copy.png";

const Video1 = () => {
  const videoEl = useRef(null);
  const observer = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoEl.current.play();
        }
        else {
           videoEl.current.pause();
       }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, options);
    observer.current.observe(videoEl.current);

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <>
      <div className="App">
        <div style={{ position: "relative" }}>
          <video
            id="myVideo"
            style={{ width: "100%", margin: "0 auto" }}
            ref={videoEl}
            loop
           muted
          >
            <source src={require("../images/smallVideo.mp4")} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <section className="deneb_cta">
        <div className="container">
          <div className="cta_wrapper new-cta" style={{ transform: "translateY(-104px)" }}>
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="cta_content new-tuti">
                  <div className="col-md-3 distributor">
                    <img className="img-fluid" src={img1} alt="" style={{ width: "180%" }} />
                  </div>
                  <div className="col-md-3 distributor">
                    <img className="img-fluid" src={img2} alt="" style={{ width: "180%" }} />
                  </div>
                  <div className="col-md-3 distributor">
                    <img className="img-fluid" src={img3} alt="" style={{ width: "180%" }} />
                  </div>
                  <div className="col-md-3 distributor">
                    <img className="img-fluid" src={Solex} alt="" style={{ width: "180%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div
        className=" container-fluid d-flex"
        style={{
        
          borderRadius:"20px",
          width: "85%",
          marginBottom: "30px",
          marginTop: "30px",
          justifyContent: "space-evenly",
          backgroundColor: "#282438",
        }}
      >
        <img
          className="img-fluid"
          src={jinko}
          alt="jinko"
          style={{ width: "14%" }}
        />
        <img
          className="img-fluid"
          src={solex}
          alt="solex"
          style={{ width: "14%" }}
        />
        <img
          className="img-fluid"
          src={Novasys}
          alt="Novasys"
          style={{ width: "14%" }}
        />
        <img
          className="img-fluid"
          src={Axitec}
          alt="Axitec"
          style={{ width: "14%" }}
        />
      </div>
    
      </>
  );
}

export default Video1;
