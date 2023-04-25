import React, { useEffect } from 'react';
import AOS from "aos";

function MyExperience() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          delay: 50,
        });
      });
    return (
        <section className="md:py-[4em] py-[2em] skills_section" id="experience">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  items-center">
                    <div className='text-left'>
                        <h3 className='text-[#fff] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-3' data-aos="fade-right" data-aos-duration="1000">My Experience</h3>
                    </div>
                    <div>
                        <ol class="relative border-l border-gray-200 dark:border-gray-700"> 
                            <li class="mb-10 ml-4">
                                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2021</time>
                                    <h3 class="md:text-lg text-[20px] font-[Nunito-Bold] text-[#e43a19] dark:text-white">ARMIA SYSTEMS</h3>
                                    <h6 class="text-base font-normal text-white dark:text-gray-400">UI/UX Developer</h6>
                                    <h6 class="text-base font-normal text-gray-500 dark:text-gray-400">Kochi,Kerala</h6>
                                    <p className='mt-3 text-sm font-normal text-gray-400'>Developing and conceptualizing and a comprehensive UI/UX design strategy for various clients using HTML,CSS,SCSS,Next Js,React Js and producing high-quality UX design solutions through wireframes using Adobe XD and Figma</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>            
        </section>
    );
}

export default MyExperience;