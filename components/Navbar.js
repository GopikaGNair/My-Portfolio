import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navShadow, setnavShadow] = useState("none");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10
      ? setnavShadow("0 4px 20px 0 rgb(0 0 0 / 10%)")
      : setnavShadow("none");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const [navbar, setNavbar] = useState(false);
  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 0.3s",
        boxShadow: navShadow,
      }}
      className="fixed w-full z-[100] shadow top-0"
    >
      <div className="container lg:px-14 md:px-6 px-4 py-4 md:py-0 mx-auto">
        <div className="md:items-center md:flex justify-between">
            <div className="left">
                <div className="flex items-center justify-between md:py-5 md:block">
                    <a href="/" className="text-[25px] font-[Nunito-Bold]">g<span className="text-[#e43a19]">.</span>me</a>
                    <div className="md:hidden">
                    <button
                        className="p-2 bg-[#e43a19] text-gray-700 rounded-md outline-none"
                        onClick={() => setNavbar(!navbar)}
                    >
                        {navbar ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            />
                        </svg>
                        ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        )}
                    </button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div
                    className={`bg-[#f2f4f7] md:bg-transparent flex-1 justify-self-center py-3 px-5 mt-4 md:block  md:mt-0 ${
                    navbar ? "block" : "hidden"
                    }`}
                >
                    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                        <Link href="#" className="text-[#151e2e] hover:text-[#ff6a00] font-[Nunito-Bold] text-sm md:text-base px-2 py-2.5 text-center inline-flex items-center">HOME</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#151e2e] hover:text-[#ff6a00] font-[Nunito-Bold] text-sm md:text-base px-2 py-2.5 text-center inline-flex items-center">SKILLS</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#151e2e] hover:text-[#ff6a00] font-[Nunito-Bold] text-sm md:text-base px-2 py-2.5 text-center inline-flex items-center">PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#151e2e] hover:text-[#ff6a00] font-[Nunito-Bold] text-sm md:text-base px-2 py-2.5 text-center inline-flex items-center">EXPERIENCE</Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#151e2e] hover:text-[#ff6a00] font-[Nunito-Bold] text-sm md:text-base px-2 py-2.5 text-center inline-flex items-center">CONTACT</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
