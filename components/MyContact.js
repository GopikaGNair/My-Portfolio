import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos";

function MyContact() {
    useEffect(() => {
        AOS.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
          delay: 50,
        });
      });
    return (
        <section className="md:py-[3em] py-[2em]" id="contact">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='relative text-center mb-5 pb-5'>
					<h2 className='text-[#fff] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-4' data-aos="zoom-in" data-aos-duration="1000">Contact Me</h2>
					<p className="text-[#8492a6] text-sm">Please feel free to reach me for any works and queries</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 text-center mt-[40px]">
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff1a] w-[80px] h-[80px] rounded-full flex justify-center items-center text-center mb-3' data-aos="flip-right" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faLocationDot} className='w-[22px] h-[22px] text-[#e43a19]'/>
                            </div>
                        </div>
                        <h3 className='text-[#fff] text-[16px] md:text-[18px] mb-3'>Address</h3>
                        <p className='text-[#8492a6]'>Munnar,Idukki,Kerala</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff1a] w-[80px] h-[80px] rounded-full flex justify-center items-center text-center mb-3' data-aos="flip-right" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faPhone} className='w-[22px] h-[22px] text-[#e43a19]'/>
                            </div>
                        </div>
                        <h3 className='text-[#fff] text-[16px] md:text-[18px] mb-3'>Contact Number</h3>
                        <p className='text-[#8492a6]'>9497178832</p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#ffffff1a] w-[80px] h-[80px] rounded-full flex justify-center items-center text-center mb-3' data-aos="flip-right" data-aos-duration="2000">
                                <FontAwesomeIcon icon={faMailBulk} className='w-[24px] h-[24px] text-[#e43a19]'/>
                            </div>
                        </div>
                        <h3 className='text-[#fff] text-[16px] md:text-[18px] mb-3'>Email</h3>
                        <p className='text-[#8492a6]'>gopikagopakumar105@gmail.com</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default MyContact;