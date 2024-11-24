import React, { useState } from 'react'
import logo from '../images/logo.png'
import menu from '../icons/MenuOutline.svg'
import x from '../icons/X.svg'
import drop from '../icons/drop.svg'
import drop1 from "../icons/drop1.svg";

function Navbar() {
    const [clickToHide, setClickToHide] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <section className="bg-[#FFF9F4] relative">
          <div className="cus-container">
            <div className="flex items-center justify-between py-4">
              <div>
                <img src={logo} alt="" />
              </div>
              <div className={`${clickToHide ? "" : "hidden lg:block"}`}>
                <ul className="lg:flex lg:space-x-4 bg-black lg:bg-transparent py-5 px-5 lg:py-0 lg:px-0 space-y-4 lg:space-y-0 max-lg:absolute top-0 right-0 z-20">
                  <img
                    onClick={() => setClickToHide(false)}
                    className={`lg:hidden mb-4`}
                    src={x}
                    alt=""
                  />
                  <li>
                    <a
                      className="font-inter text-white lg:text-[#2D3340] hover:text-gray-400"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-inter text-white lg:text-[#2D3340] hover:text-gray-400"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-inter text-white lg:text-[#2D3340] hover:text-gray-400"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-inter text-white lg:text-[#2D3340] hover:text-gray-400"
                      href="#"
                    >
                      Integrations
                    </a>
                  </li>
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                   
                      className=" text-white lg:text-[#2D3340] flex items-center "
                    >
                      Resources
                      <img className="ml-2 hidden lg:block" src={drop} alt="" />
                      <img className="ml-2 lg:hidden" src={drop1} alt="" />
                    </button>

                    {isOpen && (
                      <div className="lg:absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          Blog
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        >
                          Contact Us
                        </a>
                      </div>
                    )}
                  </div>
                </ul>
              </div>
              <div className="hidden lg:block">
                <button className="font-inter text-white myBtn">
                  Grab Discount
                </button>
              </div>
              <div onClick={() => setClickToHide(true)} className="lg:hidden">
                <img src={menu} alt="" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Navbar
