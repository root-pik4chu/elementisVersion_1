import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import './App.css';

import LocomotiveScroll from 'locomotive-scroll';
import Innovation from "./experiments/Innovation";
import Expt_1 from "./experiments/Expt_1";
import InnovationSections from "./experiments/InnovationSections";
import RouteData from "./Components/Router/RouteData";
import NavBar from "./Components/NavBar/NavBar";


gsap.registerPlugin(ScrollTrigger);

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  
  return (
    <> 
    <div className="first w-100% h-screen bg-zinc-900 text-white">
      {/* <Expt_1 /> */}
      
      <RouteData />
      
    </div>
  
    </>
  );
}

export default App;
