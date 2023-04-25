import React, { useEffect } from 'react';
import AOS from "aos";

function MyUXWorks() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          delay: 50,
        });
      });
    return (
        <section className="md:py-[3em] py-[2em] my_works" id="uxworks">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='relative text-center mb-5 pb-5' data-aos="fade-up" data-aos-duration="1000">
					<h2 className='text-[#fff] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-4'>My UX Works</h2>
					<p className="text-[#8492a6] text-sm">These are the links to some of my UX Design works</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-2 items-start mt-[30px] mb-16">
                    <div className="flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://xd.adobe.com/view/132a4821-d3f6-4147-8623-e9b45a58dca7-4679/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img className="w-full h-[15rem] object-cover rounded-md" src="/MobileUX-1.svg"/>
                        </a>
                        <div className="w-full mt-5">
                            <div className="flex projects-center justify-between">
                                <a href="https://xd.adobe.com/view/132a4821-d3f6-4147-8623-e9b45a58dca7-4679/" target="_blank">
                                    <h3 className="text-lg text-[#fff] font-[Nunito-Bold]">Medistacks - Mobile App</h3>
                                </a>
                            </div>
                            <p className="text-[#8492a6] text-left text-sm">Platform that will be a premier and authentic gateway to the Ayurvedic experience</p>
                        </div>
                    </div>
                    <div className="flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://xd.adobe.com/view/12116510-4553-423a-a6cb-467ff3e4fbf2-4742/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img className="w-full h-[15rem] object-cover rounded-md" src="/WebUX-1.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://xd.adobe.com/view/12116510-4553-423a-a6cb-467ff3e4fbf2-4742/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Medistacks - Web</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">Platform that will be a premier and authentic gateway to the Ayurvedic experience</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-2 items-start mb-16">
                    <div class="flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://xd.adobe.com/view/e0132b25-0991-44ee-9153-d56df5aa33b0-b540/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[15rem] object-cover rounded-md" src="/MobileUX-2.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://xd.adobe.com/view/e0132b25-0991-44ee-9153-d56df5aa33b0-b540/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Mobile App Template</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">Mobile App template layout.</p>
                        </div>
                    </div>
                    <div class="flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://www.figma.com/file/qh6WvsxAxgO9X5dFHDwSls/Blackcopper?node-id=0%3A1&t=Gb28cDR1Z0oJXgKk-1" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[15rem] object-cover rounded-md" src="/MobileUX-3.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://www.figma.com/file/qh6WvsxAxgO9X5dFHDwSls/Blackcopper?node-id=0%3A1&t=Gb28cDR1Z0oJXgKk-1" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Blackcopper</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All services in one app!!!</p>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
}

export default MyUXWorks;