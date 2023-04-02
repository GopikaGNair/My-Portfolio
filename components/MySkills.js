import Link from 'next/link';
import React from 'react';

function MySkills() {
    return (
        <section className="py-[4em] skills_section">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4  items-center">
                    <div className='text-left'>
                        <h3 className='text-[#fff] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-3' data-aos="fade-right" data-aos-duration="1000">Skills</h3>
                        <p className='text-md md:text-[16px] xl:text-[18px] 2xl:text-[26px] text-[#8492a6] font-[Nunito-Regular] md:mt-[10px] mb-5'>Here is my toolbelt for success.</p>
                    </div>
                    <div className="relative max-w-lg w-full mx-auto md:mx-none grid gap-x-8 gap-y-12 sm:gap-8 md:gap-20 grid-cols-3 sm:grid-cols-6 items-center place-content-center">
                        <div title="HTML" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">HTML</p>
                        </div>
                        <div title="CSS" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">CSS</p>
                        </div>
                        <div title="Bootstrap" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="/bootstrap.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Bootstrap</p>
                        </div>
                        <div title="Javascript" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Javascript</p>
                        </div>
                        <div title="Sass" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Sass</p>
                        </div>
                        <div title="TailwindCSS" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">TailwindCSS</p>
                        </div>
                        <div title="React" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">React</p>
                        </div>
                        <div title="NextJS" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" style={{ filter: 'invert(1)' }} className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">NextJS</p>
                        </div>
                        <div title="Git" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Git</p>
                        </div>
                        <div title="Photoshop" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="/photoshop.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Adobe Photoshop</p>
                        </div>
                        <div title="Xd" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="/xd.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Adobe Xd</p>
                        </div>
                        <div title="Figma" className="w-14 mx-auto flex items-center flex-col justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className='hover:scale-125 transition-all duration-500'/>
                            <p className="text-xs text-[#fff] font-[Nunito-Bold] mt-3 opacity-80">Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MySkills;