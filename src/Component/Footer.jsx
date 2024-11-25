import React from 'react'
import logo1 from '../images/logo1.png'
import f from '../icons/f.svg'
import t from "../icons/t.svg"
import y from "../icons/y.svg"
import i from "../icons/i.svg";

function Footer() {
  return (
    <>
      <section className="bg-[#351250] pt-10 lg:pt-[60px] pb-10 lg:pb-[80px]">
        <div className="cus-container">
          <div className="">
            <div className="lg:flex justify-between items-center">
              <div>
                <img src={logo1} alt="" />
                <p className="font-inter leading-[24px] text-white opacity-60 max-w-[254px] mt-5">
                  This is the team that specializes in making sure in the find
                  it.
                </p>
              </div>
              <div className="md:flex items-center subbg py-[15px] px-[20px] lg:py-[35px] lg:px-[42px] md:space-x-[50px] lg:space-x-[110px] mt-8 lg:mt-0 w-fit">
                <div>
                  <h3 className="font-inter font-semibold text-[32px] text-white leading-[36px]">
                    Subscribe to our email
                  </h3>
                  <p className="para-text text-white opacity-60 mt-[12px] lg:mt-[22px] max-w-[321px]">
                    Your information will never be shared with anyone outside
                    the law firm.
                  </p>
                </div>
                <button className="myBtn font-inter text-white mt-4 md:mt-0">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="bg-[#FBFBFB] opacity-10 h-[1px] mt-[40px] lg:mt-[55px]"></div>

            <div className="mt-[40px] lg:mt-[55px] lg:flex justify-between">
              <div>
                <h4 className="ftext font-inter">Social Media</h4>
                <div className="flex space-x-[15px] mt-[25px]">
                  <img src={f} alt="" />
                  <img src={t} alt="" />
                  <img src={y} alt="" />
                  <img src={i} alt="" />
                </div>
              </div>
              <div className="grid-res-cols lg:gap-[70px] mt-12 lg:mt-0">
                {[
                  {
                    id: 1,
                    title: "Payment Methods",
                    link1: "Stripe",
                    link2: "Paypal",
                    link3: "Mollie",
                    link4: "Rezorpay",
                    link5: "Fluttrwave",
                  },
                  {
                    id: 2,
                    title: "Get help",
                    link1: "Docs",
                    link2: "API Docs",
                    link3: "Blogs",
                    link4: "Support",
                    link5: "Privacy Policy",
                  },
                  {
                    id: 3,
                    title: "Integrations",
                    link1: "FluentCRM",
                    link2: "Mailchimp",
                    link3: "Slack",
                    link4: "Telegram",
                    link5: "Google Sheets",
                  },
                ].map(({ id, title, link1, link2, link3, link4, link5 }) => {
                  return (
                    <div key={id} className="grid-card-3 lg:ml-12">
                      <div>
                        <h4 className="ftext font-inter">{title}</h4>
                        <ul className="mt-5 space-y-3">
                          <li>
                            <a
                              className="font-inter text-white opacity-60 hover:opacity-100"
                              href="#"
                            >
                              {link1}
                            </a>
                          </li>
                          <li>
                            <a
                              className="font-inter text-white opacity-60 hover:opacity-100"
                              href="#"
                            >
                              {link2}
                            </a>
                          </li>
                          <li>
                            <a
                              className="font-inter text-white opacity-60 hover:opacity-100"
                              href="#"
                            >
                              {link3}
                            </a>
                          </li>
                          <li>
                            <a
                              className="font-inter text-white opacity-60 hover:opacity-100"
                              href="#"
                            >
                              {link4}
                            </a>
                          </li>
                          <li>
                            <a
                              className="font-inter text-white opacity-60 hover:opacity-100"
                              href="#"
                            >
                              {link5}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#2F0B4B] py-4">
        <p className="font-inter text-white text-center leading-[26px]">
          Copyright © 2024 Paymentss.. All Rights Reserved{" "}
        </p>
      </div>
    </>
  );
}

export default Footer
