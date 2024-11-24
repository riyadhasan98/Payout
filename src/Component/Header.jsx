import React from 'react'
import main from '../images/main.png'
import fedex from '../images/FedEx Logo.png'
import airbnb from '../images/Airbnb Logo.png'
import hubspot from '../images/Hubspot Logo.png'
import google from '../images/Google Logo.png'
import microsoft from '../images/Microsoft Logo.png'
import walmart from '../images/Walmart Logo.png'

function Header() {
  return (
    <>
      <section className="bg-[#FFF9F4]">
        <div className="cus-container relative">
          <div className="py-10 lg:flex items-center justify-between lg:pb-28">
            <div className="left">
              <h1 className="text-[28px] md:text-[38px] lg:text-[53px] text-center lg:text-left lg:w-[569px] font-inter font-extrabold text-[#171B26]">
                Master the Art of WordPress Payments and Donations
              </h1>
              <p className="text-[16px] md:text-[18px] font-inter text-[#3D424D] text-center lg:text-left lg:w-[516px] mt-4">
                The Ideal Lightweight Payment and Donation Plugin for Your Small
                Business or Fundraiser
              </p>
              <div className="space-x-4 mt-8 mx-auto w-fit lg:mx-0">
                <button className="myBtn text-white">Buy Pro</button>
                <a
                  href="#"
                  class="relative inline-flex items-center justify-center p-4 px-7 py-[14px] overflow-hidden font-medium text-[#3D424D] transition duration-300 ease-out border-[1px] border-[#3D424D] rounded-full  group hover:border-none"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full myBtn group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-[#3D424D] transition-all duration-300 transform group-hover:translate-x-full ease">
                    Start For Free
                  </span>
                  <span class="relative invisible">Start For Free</span>
                </a>
              </div>
            </div>
            <img className="mt-10 lg:mt-0" src={main} alt="" />
          </div>
          <div className='absolute -bottom-20'>
            <div className="flex bg-white py-7 md:py-[60px] px-[69px] rounded-[28px] space-x-[68px]">
              <img className='w-[10] md:w-16 lg:w-full' src={fedex} alt="" />
              <img className='w-[10] md:w-16 lg:w-full' src={airbnb} alt="" />
              <img className='w-[10] md:w-16 lg:w-full hidden md:block' src={hubspot} alt="" />
              <img className='w-[10] md:w-16 lg:w-full hidden md:block' src={google} alt="" />
              <img className='w-[10] md:w-16 lg:w-full hidden lg:block' src={microsoft} alt="" />
              <img className='w-[10] md:w-16 lg:w-full hidden lg:block' src={walmart} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header
