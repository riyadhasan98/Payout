import React from "react";
import p from "../icons/p.png";
import p1 from "../icons/p1.svg";
import p2 from "../icons/p2.svg";
import p3 from "../icons/p3.svg";
import p4 from "../icons/p4.svg";
import Lmore from "../icons/Lmore.svg";

function Paymattic() {
  return (
    <>
      <section className="bg-[#FFF0E4] pt-32 md:pt-40 lg:pt-56 pb-10 md:pb-20 lg:pb-20">
        <div className="cus-container">
          <div className="">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="left">
                <h2 className="heading-text text-center lg:text-left lg:max-w-[365px] lg:leading-[52px]">
                  Paymattic Made for You
                </h2>
                <p className="para-text text-center lg:text-left lg:max-w-[426px] mt-3 lg:mt-10">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  suspendisse montes potenti nunc ante. montes potenti nunc
                  ante. Lorem ipsum dolor. Lorem ipsum dolor sit amet
                  consectetur adipiscing elit, suspendisse montes potenti nunc
                  ante. montes potenti nunc ante. Lorem ipsum dolor..
                </p>
                <div className="w-fit mx-auto lg:mx-0">
                  <a
                    href="#"
                    class="relative inline-flex items-center justify-center px-7 py-[16px] overflow-hidden font-medium text-[#3D424D] transition duration-300 ease-out border-[1px] border-[#FF7519] rounded-full  group hover:border-none mt-6 lg:mt-[60px]"
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
                    <span class="absolute flex items-center justify-center w-full h-full text-[#FF7519] transition-all duration-300 transform group-hover:translate-x-full ease">
                      Learn More
                    </span>
                    <span class="relative invisible">Learn More</span>
                  </a>
                </div>
              </div>
              <div className="right mt-10 md:mt-32 lg:mt-0 bg-cover bg-no-repeat bg-center">
                <div
                  className="md:grid-res-cols  space-y-5 md:space-y-0 bg-no-repeat bg-center max-sm:!bg-none"
                  style={{
                    backgroundImage: `url(${p})
                    ` }}
                >
                  {[
                    {
                      id: 1,
                      icon: p1,
                      title: "Paymattic business",
                      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    },
                    {
                      id: 2,
                      icon: p2,
                      title: "Paymattic eLearning",
                      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    },
                    {
                      id: 3,
                      icon: p3,
                      title: "Paymattic for profits",
                      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    },
                    {
                      id: 4,
                      icon: p4,
                      title: "Paymattic member",
                      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
                    },
                  ].map(({ id, icon, title, text }) => {
                    return (
                      <div
                        key={id}
                        className={`md:grid-card-2 ${
                          id === 1 ? "md:-mb-[72px]" : ""
                        } ${id === 3 ? "md:!mt-[72px]" : ""}${
                          id === 2 ? "md:!-mt-[72px]" : ""
                        }${id === 4 ? "md:!mb-[72px]" : ""}`}
                      >
                        <div
                          className={`bg-white rounded-[28px] py-7 px-6 w-fit`}
                        >
                          <img src={icon} alt="" />
                          <h4 className="text-[24px] font-semibold font-inter text-[#171B26] mt-8">
                            {title}
                          </h4>
                          <p className="para-text mt-3 leading-[26px] max-w-[260px]">
                            {text}
                          </p>
                          <button className="font-inter font-medium text-[#2D3340] mt-8 flex items-center">
                            Learn More{" "}
                            <img className="ml-1" src={Lmore} alt="" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Paymattic;
