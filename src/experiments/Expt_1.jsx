import React, { useEffect } from 'react';
import Splitting from 'splitting';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';


gsap.registerPlugin(ScrollTrigger);

const Expt_1 = () => {
    useEffect(() => {
        const innovation = {
            Element: document.querySelector(".innovation"),
            bgMedia: document.querySelectorAll(".innovation_bg_media")
        };

        const card = {
            thumbnail: document.querySelectorAll(".innovation_card_thumbnail > img")
        };

            
    }, []);

    return (
        <main className="app">
            <div id="page1" className="w-full h-screen bg-red-500"></div>
            <div className="innovation relative w-full h-screen overflow-hidden">
                <div className="innovation_wrapper">
                    <div className="innovation_side flex justify-between items-center h-screen">
                        <span>Ecletiv Harmony</span>
                        <span>scroll</span>
                    </div>
                    <div className="innovation_card absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[48rem] h-[64rem] bg-gray-300">
                        <div className="innovation_card_container flex flex-col gap-7 p-10">
                            <div className="innovation_card_heading text-center overflow-hidden">
                                <div className="innovation_card_heading_container">
                                    <h1>root</h1>
                                    <h1>root ek tha rajaa</h1>
                                    <h1>root ki thi ek rani</h1>
                                    <h1>root use ke sath baith ke code krta</h1>
                                </div>
                            </div>
                            <div className="innovation_card_thumbnail relative w-full h-[24rem]">
                                <img src="https://images.unsplash.com/photo -1727472261593-280e6e3aca17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute left-0 top-0 w-full h-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1597879995289-a5ef25133718?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute left-0 top-0 w-full h-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1677655754771-284347c13297?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute left-0 top-0 w-full h-full object-cover" />
                                <img src="https://images.unsplash.com/photo-1716476691018-7b698f2f0bc4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute left-0 top-0 w-full h-full object-cover" />
                            </div>
                            <div className="innovation_card_paragraph overflow-hidden">
                                <div className="innovation_card_paragraph_container h-[12rem]">
                                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam officiis hic voluptatem quasi quam provident quae dolores dolorum magni iste fugit ipsam molestiae libero sequi error repellat voluptatibus, alias nulla!</p>
                                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam officiis hic voluptatem quasi quam provident quae dolores dolorum magni iste fugit ipsam molestiae libero sequi error repellat voluptatibus, alias nulla!</p>
                                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam officiis hic voluptatem quasi quam provident quae dolores dolorum magni iste fugit ipsam molestiae libero sequi error repellat voluptatibus, alias nulla!</p>
                                    <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam officiis hic voluptatem quasi quam provident quae dolores dolorum magni iste fugit ipsam molestiae libero sequi error repellat voluptatibus, alias nulla!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="innovation_bg absolute top-0 left-0 w-full h-full z-[-1]">
                    <div className="innovation_bg_media absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="innovation_bg_figure">
                            <img className="innovation_bg_image w-full h-full object-cover" src="https://images.unsplash.com/photo-1727201390622-c5c0584fd795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div className="innovation_bg_media absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="innovation_bg_figure">
                            <img className="innovation_bg_image w-full h-full object-cover" src="https://images.unsplash.com/photo-1601841592130-061c0b5f544e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8f ```jsx
8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div className="innovation_bg_media absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="innovation_bg_figure">
                            <img className="innovation_bg_image w-full h-full object-cover" src="https://images.unsplash.com/photo-1651587267104-64f8439c42c3?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                    <div className="innovation_bg_media absolute top-0 left-0 w-full h-full overflow-hidden">
                        <div className="innovation_bg_figure">
                            <img className="innovation_bg_image w-full h-full object-cover" src="https://images.unsplash.com/photo-1597206758328-38ab48f36bd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="page2" className="w-full h-screen bg-red-500"></div>
        </main>
    );
};

export default Expt_1;