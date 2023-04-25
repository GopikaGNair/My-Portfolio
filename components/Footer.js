import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function Footer() {
  return (
    <section className="md:pt-[4em] md:pb-[2em] py-[2em] my_works border-t-2 border-[#ffffff1a] ">
      <div className="container mx-auto lg:px-14 md:px-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <a href="/" className="text-[25px] font-[Nunito-Bold] text-[#fff]">
              g<span className="text-[#e43a19]">.</span>me
            </a>
            <h2 className="text-[#e43a19] text-[18px] md:text-[22px] mt-5">
              Gopika Gopakumar
            </h2>
            <p className="text-[#8492a6] text-sm">
              A creative and focused UI/UX Developer with <br /> 2+ years of
              experience
            </p>
            <ul className="flex gap-8 mt-5">
              <li className="bg-[#ffffff1a] w-[50px] h-[50px] rounded-full flex justify-center items-center text-center mb-3">
                <a href="www.linkedin.com/in/gopika-gopakumar-643b26233">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="w-[20px] h-[20px] text-[#fff] hover:text-[#e43a19]"
                  />
                </a>
              </li>
              <li className="bg-[#ffffff1a] w-[50px] h-[50px] rounded-full flex justify-center items-center text-center mb-3">
                <a herf="https://www.instagram.com/gopika_gnair/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-[20px] h-[20px] text-[#fff] hover:text-[#e43a19]"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#fff] text-[18px] mb-5">Links</h5>
            <ul>
              <li className="mb-3">
                <a href="" className="text-[#8492a6] hover:text-[#e43a19]">
                  Home
                </a>
              </li>
              <li className="mb-3">
                <Link  
                    activeClass="skills"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    href="" 
                    className="text-[#8492a6] hover:text-[#e43a19]">
                  Skills
                </Link>
              </li>
              <li className="mb-3">
                <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="" 
                    className="text-[#8492a6] hover:text-[#e43a19]">
                  Experience
                </Link>
              </li>
              <li className="mb-3">
                <Link  
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500} 
                    href="" 
                    className="text-[#8492a6] hover:text-[#e43a19]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#fff] text-[18px] mb-5">Works</h5>
            <ul>
              <li className="mb-3">
                <Link 
                    activeClass="active"
                    to="uiworks"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="" className="text-[#8492a6] hover:text-[#e43a19]">
                  UI Works
                </Link>
              </li>
              <li className="mb-3">
                <Link
                    activeClass="active"
                    to="uxworks"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href="" className="text-[#8492a6] hover:text-[#e43a19]">
                  UX Works
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-[40px]">
          <p className="text-sm text-[#fff6]">
            Copyright ©2023 All rights reserved my-portfolio-lac-nu.vercel.app
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
