import Link from 'next/link';
import React from 'react';

function MyHome() {
    return (
        <section className="md:py-[8em] bg-[#000a1f]">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='p-[20px]'>
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 justify-center items-center">
                        <div className='mb-5 mt-3 md:mt-[50px] text-center'>
                            <h3 className='text-[#8492a6] text-lg md:text-[25px] 2xl:text-[30px] font-[Nunito-Regular] leading-[1.625em] mb-3'>I am</h3>
                            <h1 className='text-[#fff] text-[32px] md:text-[40px] lg:text-[50px] 2xl:text-[60px] font-[Nunito-Bold] leading-[1em] mb-3' data-aos="fade-right" data-aos-duration="1000">Gopika Gopakumar</h1>
                            <p className='w-full md:w-[60%] mx-auto text-md md:text-[16px] xl:text-[18px] 2xl:text-[26px] text-[#8492a6] font-[Nunito-Regular] md:mt-[20px] mb-[30px]'>A creative and focused UI/UX Developer and a tech enthusiast, interested into everything tech and keen to learn new ones. I am passionate about technology, innovation and big challenging tasks on my to do list!!!</p>
                            <Link href="/Gopika-Resume.pdf" download className='border-2 border-[#e43a19] hover:bg-[#e43a19] text-[#8492a6] hover:text-[#fff]  rounded-md pt-[5px] pb-[7px] px-[30px]'>Download CV</Link>
                        </div>
                        {/* <div className='mt-[50px] lg:mt-0 text-center'>
                            <div className='flex justify-center'>
                                <img src='/propic.jpeg' alt='image' className='w-[200px] 2xl:w-[300px] object-cover pt-[10px] pb-[20px] px-[20px]'/>
                            </div>
                            <div className=''>
                                <h1 className='text-[#fff] text-[20px] md:text-[22px] lg:text-[25px] 2xl:text-[40px] font-[Nunito-Bold] leading-[1em] mb-3'>Gopika Gopakumar</h1>
                                <h6 className='text-[#fff] text-base lg:text-[14px] 2xl:text-[20px] font-[Nunito-Regular] leading-[1em] mb-3'>UI/UX DEVELOPER</h6>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyHome;