import Link from 'next/link';
import React from 'react';

function MyWorks() {
    return (
        <section className="py-[4em] my_works">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='bg-[#fff] p-[20px] md:p-[50px] shadow-xl rounded-xl'>
                    <div className='text-center'>
                        <h3 className='text-[#000] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-[50px]'>Projects</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4  items-center">
                        <div className='nextjs_projects'>
                            <Link href="https://truckio-landing-page.vercel.app/" >
                                <div className="project-tile relative flex flex-col justify-end w-full h-[300px] m-auto overflow-hidden shadow-xl">
                                    <img src="./project1.svg" alt="" className='absolute w-full h-full object-cover z-[1]'/>
                                    <div className="overlay bg-[#a8858fe0] flex flex-col justify-end w-[0%] h-full text-[#fff] z-[2]">
                                    <div className="project-description leading-normal max-w[200px] m-[20px] absolute left-[-750px]">
                                        <h2 className='text-[#fff] text-[20px] font-[Nunito-Bold]'>Truckio</h2>
                                        <p className='text-[#fff] text-[16x] font-[Nunito-Regular]'>Fast and affordable truck service.</p>
                                    </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
}

export default MyWorks;