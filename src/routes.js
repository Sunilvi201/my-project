
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Materials from "./pages/materials";
// import Resources from "./pages/resources";
import Services from "./pages/services";
import Homepage from "./pages/homepage";

function RouteConfig() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Homepage/>}/>
         <Route exact path="/service" element={<Services/>}/>
         <Route exact path="/about" element={<About/>}/>
         <Route exact path="/material" element={<Materials/>}/>
         {/* <Route exact path="/resource" element={<Resources/>}/> */}
         <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default RouteConfig;
