import Link from 'next/link';
import React from 'react';

function MyUIWorks() {
    return (
        <section className="md:py-[3em] py-[2em] my_works">
            <div className="container mx-auto lg:px-14 md:px-6 px-4">
                <div className='relative text-center mb-5 pb-5'>
					<h2 className='text-[#fff] text-[26px] md:text-[30px] lg:text-[40px] 2xl:text-[50px] font-[Nunito-Bold] leading-[1em] mb-4'>My UI Works</h2>
					<p className="text-[#8492a6] text-sm">These are the links to some of my UI Design works</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mt-[30px] mb-16">
                    <div className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://www.dreemly.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img className="w-full h-[11rem] object-cover rounded-md" src="/project-1.svg"/>
                        </a>
                        <div className="w-full mt-5">
                            <div className="flex projects-center justify-between">
                                <a href="https://www.dreemly.com/" target="_blank">
                                    <h3 className="text-lg text-[#fff] font-[Nunito-Bold]">Dreemly</h3>
                                </a>
                            </div>
                            <p className="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">React Js</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://truckio-landing-page.vercel.app/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img className="w-full h-[11rem] object-cover rounded-md" src="/project-2.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://truckio-landing-page.vercel.app/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Truckio</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://truckio-landing-page.vercel.app/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-3.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://truckio-landing-page.vercel.app/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Code Ventures</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">CSS</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mb-16">
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d2fb75mfhz08x6.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-4.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d2fb75mfhz08x6.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">ParkCity</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">React Js</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d26kmubcneee8d.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-5.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d26kmubcneee8d.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Checkr</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Tailwind CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d264lh7lbs9sde.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-6.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d264lh7lbs9sde.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Upword</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Tailwind CSS</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start mb-16">
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d3nfhsmfuzou9i.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-7.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d3nfhsmfuzou9i.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">GetHost</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">React Js</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Tailwind CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d2ck8e05pyu7ua.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-8.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d2ck8e05pyu7ua.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Apland</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Tailwind CSS</div></li>
                            </ul>
                        </div>
                    </div>
                    <div class="max-w-sm mx-auto flex flex-col projects-center md:projects-start md:justify-center">
                        <a href="https://staging.d20u3htfo5u4xe.amplifyapp.com/" target="_blank" class="w-full relative rounded-xl transition hover:-translate-y-2 hover:opacity-75 hover:border-fun-pink">
                            <img class="w-full h-[11rem] object-cover rounded-md" src="/project-9.svg"/>
                        </a>
                        <div class="w-full mt-5">
                            <div class="flex projects-center justify-between">
                                <a href="https://staging.d20u3htfo5u4xe.amplifyapp.com/" target="_blank">
                                    <h3 class="text-lg text-[#fff] font-[Nunito-Bold]">Mosto</h3>
                                </a>
                            </div>
                            <p class="text-[#8492a6] text-left text-sm">All the resources you will need to get a boost into economics.</p>
                            <ul class="flex flex-wrap items-center mt-2 -ml-2 list-none">
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Next JS</div></li>
                                <li><div class="m-1 rounded-lg text-sm bg-[#8492a6] py-1 px-2 cursor-pointer hover:opacity-75">Tailwind CSS</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
        </section>
    );
}

export default MyUIWorks;