import React, { useEffect } from 'react';
import AOS from "aos";

function MyAchievements() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          delay: 50,
        });
      });
    return (
        <section className="md:py-[3em] py-[2em] my_works">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3">
                    <div className='bg-[#e43a19] p-[35px] rounded-lg text-center'>
                        <h2 className='text-[#fff] text-[20px] md:text-[32px] font-[Nunito-Bold]' data-aos="flip-right" data-aos-duration="2000">2+</h2>
                        <h6 className='text-[#fff] text-[16px] md:text-[18px] font-[Nunito-Regular]'>Years of Experience</h6>
                    </div>
                    <div className='bg-[#e43a19] p-[35px] rounded-lg text-center'>
                        <h2 className='text-[#fff] text-[20px] md:text-[32px] font-[Nunito-Bold]' data-aos="flip-right" data-aos-duration="2000">20+</h2>
                        <h6 className='text-[#fff] text-[16px] md:text-[18px] font-[Nunito-Regular]'>Completed</h6>
                    </div>
                    <div className='bg-[#e43a19] p-[35px] rounded-lg text-center'>
                        <h2 className='text-[#fff] text-[20px] md:text-[32px] font-[Nunito-Bold]' data-aos="flip-right" data-aos-duration="2000">3+</h2>
                        <h6 className='text-[#fff] text-[16px] md:text-[18px] font-[Nunito-Regular]'>Freelance Works</h6>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default MyAchievements;