import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/product"
import Contact_page from "./components/contact_page"
import AboutPage from "./components/AboutPage"
import WarehousePage from "./components/WarehousePage";
import Newblog from "./components/newblog"
import Campain_header from "./components/campain/Campain_header"
import CampaignJinko from "./components/campain/Campain_jinkoheader"
export default function App() {
  const title=[
    { 
      
      name:"Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      para:"Posted on March 20,2022"
    },
    { 
    
      name:"Lorem ipsum dolor sit amet",
      para:"Posted on March 20,2023"
    },
    {
     
      name:"Lorem ipsum dolor sit amet,iasbdfishifhiknaxhikfieh",
      para:"Posted on March 20,2023"
    },
  ]
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/newblog" element={<Newblog/>}></Route>
        <Route path="/contact_page" element={<Contact_page />}></Route>
        <Route path="/AboutPage" element={<AboutPage/>}></Route>
        <Route path="/WarehousePage" element={<WarehousePage/>}></Route>
        <Route path="/Campain_header" element={<Campain_header/>}></Route>
        <Route path="/Campain_jinkoheader" element={<CampaignJinko/>}></Route>
        

      </Routes>
    </BrowserRouter>
    </>
  );
}