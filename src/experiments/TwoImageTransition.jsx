import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
// import './App.css';
// import Another from "./Another";
// import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger);

function TwoImageTransition() {


  const mainRef = useRef(null);

  useEffect(() => {
    // Splitting Initialization
    const pageMedia = mainRef.current.querySelectorAll(".page_media");
    console.log(pageMedia); 

    pageMedia.forEach((media) => {
      Splitting({
        target: media,
        by: "cells",
        rows: 40,
        image: true,
      });
    });

    // Scroll Animation with GSAP
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "40% 0%",
        scrub: true,
        pin: true,
       markers:true,
      },
    });

    pageMedia.forEach((media, index) => {
      const cells = media.querySelectorAll(".cell");
      console.log(cells); // Log to ensure .cell elements are found

      gsap.set(media, { zIndex: pageMedia.length - index });

      if (index < pageMedia.length - 1) {
        timeline.to(cells, {
          scaleY: 0,
          stagger: {
            each: 0.02,
            from: "end",
            ease: "power2.inOut",
          },
        });
      }
    });

    // Cleanup ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
    
   <div className="parentOfFirst">
   <div ref={mainRef} className="main">
      {/* First Page with Image */}
      <div className="page">
        <div className="page_media">
          <img
            className="page_image"
            src="https://images.unsplash.com/photo-1672410581893-4c1678494d4a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background 1"
          />
        </div>
      </div>
      {/* Second Page with Gradient */}
      <div className="page">
        
      </div>
    </div>
    
   </div>
    
    </>
  );
}

export default TwoImageTransition;
