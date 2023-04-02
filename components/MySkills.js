import Link from 'next/link';
import React from 'react';

function MySkills() {
    return (
        <section className="py-[4em] skills_section">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='bg-[#fff] p-[20px] md:p-[50px] shadow-xl rounded-xl'>
                        <div className='text-center'>
                            <h3 className='text-[#000] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-3' data-aos="fade-right" data-aos-duration="1000">Skills</h3>
                            <p className='text-md md:text-[16px] xl:text-[18px] 2xl:text-[26px] text-[#535353] font-[Nunito-Regular] md:mt-[10px] mb-5'>Technologies I have been working with...</p>
                        </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4  items-center">
                            <div className='mb-5 bg-[#f2f4f7] p-[20px] md:p-[30px] rounded-xl text-center'>
                                <h1 className='text-[#000] text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[35px] font-[Nunito-Bold] leading-[1em] mb-[30px]'>Hard Skills</h1>
                                <div className='skills_list font-[Nunito-Regular]'>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">HTML</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">CSS</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">BOOTSTRAP</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">JAVASCRIPT</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">RESPONSIVE DESIGN</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">SCSS</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">TAILWIND CSS</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">REACT JS</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">NEXT JS</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">MYSQL</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">GITLAB</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  items-center">
                            <div className='md:h-[200px] mb-5 bg-[#f2f4f7] p-[20px] md:p-[30px] rounded-xl text-center'>
                                <h1 className='text-[#000] text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[35px] font-[Nunito-Bold] leading-[1em] mb-[30px]'>Tools</h1>
                                <div className='skills_list font-[Nunito-Regular]'>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">ADOBE XD</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">FIGMA</div>
                                </div>
                            </div>
                            <div className='md:h-[200px]  mb-5 bg-[#f2f4f7] p-[20px] md:p-[30px] rounded-xl text-center'>
                                <h1 className='text-[#000] text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[35px] font-[Nunito-Bold] leading-[1em] mb-[30px]'>Soft Skills</h1>
                                <div className='skills_list font-[Nunito-Regular]'>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">SELF ORGANIZATION</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">COMMUNICATION</div>
                                    <div className="bg-[#6d6567] text-[#fff] inline-block py-[5px] pr-[10px] pl-[25px] rounded-tl-[90px] rounded-tr-[30px] rounded-br-[30px] rounded-bl-[90px] relative mt-0 mr-[10px] mb-[10px] ml-0">TEAMWORK</div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MySkills;