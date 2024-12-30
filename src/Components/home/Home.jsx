// import React , {useRef , useEffect } from 'react'
// // import TwoImageTransition from '../../experiments/TwoImageTransition'
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// const Home = () => {


   
    


//   return (

//     <>
//      <div className='w-full h-screen '>
//      <div className="relative">
//      <video className='z-[5] object-cover w-[100%] h-screen' loop muted autoPlay src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/3b4017bb-400d-4582-997a-7d7525fd5181/elementismp4.mp4"></video>
//       </div>
      
//       <div className="absolute  w-full h-screen top-0">
//         <h1>root</h1>
//      </div>
//      {/* <TwoImageTransition /> */}

//    </div>

//     </>
    
//   )
// }

// export default Home
// !----------------------------------------------


// import React, { useEffect, useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Splitting from "splitting";
// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import {useGSAP} from '@gsap/react'
// import { useLocation } from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const location = useLocation();
//   const mainRef = useRef(null);

//   useEffect(() => {
//     // Initialize Splitting
//     var pageMediaElements = mainRef.current.querySelectorAll(".page_media");
//     pageMediaElements.forEach((media) => {
//       Splitting({
//         target: media,
//         by: "cells",
//         rows: 40,
//         image: true,
//       });
//     });
//   }, []);

//   useGSAP(()=>{
//     // Initialize GSAP Timeline with ScrollTrigger
//     var pageMediaElements = mainRef.current.querySelectorAll(".page_media");

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: mainRef.current,
//         start: "top top",
//         end: "30% 0%%",
//         scrub: true,
//         // pin: true,
//         markers: true, // Remove markers in production
//       },
//     });

//     pageMediaElements.forEach((media, index) => {
//       const cells = media.querySelectorAll(".cell");
//       gsap.set(media, { zIndex: pageMediaElements.length - index });

//       if (index < pageMediaElements.length - 1) {
//         timeline.to(cells, {
//           scaleY: 0,
//           stagger: {
//             each: 0.02,
//             from: "end",
//             ease: "power2.inOut",
//           },
//         });
//       }
//     });

//     return () => {
//       gsap.killTweensOf(pageMediaElements);

//       // Kill all ScrollTriggers
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
    
//   }, [location.pathname])


//   return (
//     <div ref={mainRef} className="relative w-full h-[120vh] overflow-hidden">
//       {/* First Page */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="page_media absolute inset-0 w-full h-full">
//           <img
//             className="block w-full h-full object-cover"
//             src="https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Unsplash Image"
//           />
//         </div>
//       </div>

//       {/* Second Page */}
//       <div className="absolute inset-0 w-full h-full">
//         <div className="page_media absolute inset-0 w-full h-full bg-gradient-to-br from-pink-300 to-pink-500"></div>
//       </div>
//     </div>
//   );
// };
// export default Home;



// !-------------------------------------
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    // Initialize Splitting for the single page media
    const pageMedia = mainRef.current.querySelector(".page_media");
    Splitting({
      target: pageMedia,
      by: "cells",
      rows: 40,
      image: true,
    });

    // Initialize GSAP Timeline with ScrollTrigger for the page effect
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top", // Start animation when the page reaches the top
        end: "bottom top", // End animation when the bottom reaches the top of the viewport
        scrub: true, // Smoothly animate as you scroll
        markers: true, // Remove markers in production
      },
    });

    // Get the cells from the page media
    const cells = pageMedia.querySelectorAll(".cell");

    // Animate the cells
    timeline.to(cells, {
      scaleY: 0,
      stagger: {
        each: 0.02,
        from: "end",
        ease: "power2.inOut",
      },
    });

    // Cleanup function when component is unmounted
    return () => {
      gsap.killTweensOf(pageMedia);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div ref={mainRef} className="relative w-full h-[120vh] overflow-hidden">
      {/* Single Page */}
      <div className="absolute inset-0 w-full h-full">
        <div className="page_media absolute inset-0 w-full h-full">
          <img
            className="block w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Unsplash Image"
          />
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default Home;


// !---------------------------------
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import Splitting from 'splitting';
// import { useLocation } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const mainRef = useRef(null);
//   const pageRefs = useRef([]);
//   const location = useLocation(); // Use location hook to detect route changes

//   // Reset scroll position after page load or route change
//   useEffect(() => {
//     window.scrollTo(0, 0); // Reset to top on load or route change

//     // Ensure Splitting works after DOM is ready
//     pageRefs.current.forEach((media) => {
//       Splitting({
//         target: media,
//         by: 'cells',
//         rows: 50,
//         image: true,
//       });
//     });

//     // Refresh ScrollTrigger after Splitting initialization
//     ScrollTrigger.refresh();
//   }, [location]); // Runs on route change

//   useEffect(() => {
//     // Clear any existing ScrollTriggers before adding new ones
//     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//     // ScrollTrigger for each page_media
//     pageRefs.current.forEach((media, index) => {
//       const cells = media.querySelectorAll('.cell');

//       // Set z-index for proper stacking of images
//       gsap.set(media, { zIndex: pageRefs.current.length - index });

//       // Create gsap.to animation on each page's media
//       gsap.to(cells, {
//         scaleY: 0,
//         stagger: {
//           each: 0.02,
//           from: 'end',
//           ease: 'power2.inOut',
//         },
//         scrollTrigger: {
//           trigger: media,
//           start: 'top top',
//           end: '40% 0%',
//           scrub: true,
//           markers: true, // Enable debugging markers (remove in production)
//         },
//       });
//     });

//     // Cleanup function to kill all ScrollTriggers and stop window tweens
//     return () => {
//       ScrollTrigger.getAll().forEach((instance) => {
//         instance.kill(); // Kill all active ScrollTriggers
//       });
//       gsap.killTweensOf(window); // Kill any active GSAP tweens on the window object
//     };
//   }, [location]); // Re-run GSAP animations on route change

//   return (
//     <div ref={mainRef} className="main w-full h-[200vh] relative overflow-hidden">
//       {/* First Page with Image */}
//       <div className="page" ref={(el) => (pageRefs.current[0] = el)}>
//         <div className="page_media">
//           <img
//             className="page_image w-full h-full object-cover"
//             src="https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Background"
//           />
//         </div>
//       </div>

//       {/* Second Page with Gradient Color */}
//       <div className="page" ref={(el) => (pageRefs.current[1] = el)}>
//         <div className="page_media bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500"></div>
//       </div>
//     </div>
//   );
// };

// export default Home;









// // -----------------------------------------------------------------------------
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import Splitting from 'splitting';
// import { useLocation } from 'react-router-dom';

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => {
//   const mainRef = useRef(null);
//   const pageRefs = useRef([]);
//   const location = useLocation(); // Use location hook to detect route changes

//   // Initialize Splitting and GSAP animations
//   useEffect(() => {
//     // Ensure that Splitting is initialized after the component mounts
//     pageRefs.current.forEach((media) => {
//       Splitting({
//         target: media,
//         by: 'cells',
//         rows: 50,
//         image: true,
//       });
//     });

//     // Refresh ScrollTrigger with a slight delay after the component mounts
//     setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 50); // Refresh after 50ms

//   }, [location]); // Runs every time the route changes

//   useEffect(() => {
//     // ScrollTrigger for each page_media
//     pageRefs.current.forEach((media, index) => {
//       const cells = media.querySelectorAll('.cell');

//       // Set z-index for proper stacking of images
//       gsap.set(media, { zIndex: pageRefs.current.length - index });

//       // Create gsap.to animation on each page's media
//       gsap.to(cells, {
//         scaleY: 0,
//         stagger: {
//           each: 0.02,
//           from: 'end',
//           ease: 'power2.inOut',
//         },
//         scrollTrigger: {
//           trigger: media,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//           markers: true, // Enable debugging markers
//         },
//       });
//     });

//     // Cleanup the ScrollTrigger instance and refresh it when component unmounts or changes
//     return () => {
//       ScrollTrigger.refresh();
//     };
//   }, [location]); // Re-run GSAP animations on route change

//   return (
//     <div ref={mainRef} className="main w-full h-[200vh] relative overflow-hidden">
//       {/* First Page with Image */}
//       <div className="page" ref={(el) => (pageRefs.current[0] = el)}>
//         <div className="page_media">
//           <img
//             className="page_image w-full h-full object-cover"
//             src="https://images.unsplash.com/photo-1517672651691-24622a91b550?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Background"
//           />
//         </div>
//       </div>

//       {/* Second Page with Gradient Color */}
//       <div className="page" ref={(el) => (pageRefs.current[1] = el)}>
//         <div className="page_media bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500"></div>
//       </div>
//     </div>
//   );
// };

// export default Home;
