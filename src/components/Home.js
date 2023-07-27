import { useState, CSSProperties, useEffect } from "react";
import MoonLoader from "react-spinners/FadeLoader";
import "../App.css";
import Navbar from "./Navbar";
import Video from "./Video1";
import Section2 from "./section2";
import About from "./about_us";
import Warehouse from "./Warehouse";
import Products from "./products";
import Work_process from "./work_process";
import Partner from "./Partner";
import Contact from "./contact";
import CustomModal from "./CustomModal";
import Difference from "./difference";
import Footer from "./footer";
// import img1 from "../images/axitec.png"
// import img2 from "../images/Jinko.png"
// import img3 from "../images/Nova.png"
// import img4 from "../images/solex.png"

const WarehousePage = () => <h1>Welcome to the Home Page</h1>;
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };


  // const values =[
  //   {
  //     image1:img1,
  //   },
  //   {
  //     image1:img2,
  //   },
  //   {
  //     image1:img3,
  //   },
  //   {
  //     image1:img4,
  //   },
  //   {
  //     image1:img1,
  //   },
  //   {
  //     image1:img2,
  //   },
  //   {
  //     image1:img3,
  //   },
  //   {
  //     image1:img4,
  //   }

  // ]

  

  return (
    <>
          <Navbar />
          <Video />
          <Section2 />
          <Products />
          <Warehouse component={WarehousePage} />
          <Partner />
          <Work_process />
          <Difference />
          <Contact />
          <Footer />

        </>
  )
  };
export default App;
