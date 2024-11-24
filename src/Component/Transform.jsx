import React from 'react'
import tbg from '../images/tbg.svg'
import t1 from '../images/t1.png'
import tik from '../icons/tik.svg'
import tik2 from '../icons/tik2.svg'
import t2 from '../images/t2.png'
import tcardbg from '../images/tcardbg.svg'
import t3 from '../images/t3.png'

function Transform() {
  return (
    <>
      <section
        className="pt-10 md:pt-14 lg:pt-[110px] pb-[320px] relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tbg})` }}
      >
        <div className="cus-container">
          <div className="">
            <div className="heading lg:flex justify-between items-center">
              <div className="left">
                <h2 className="heading-text text-white lg:max-w-[483px] text-center lg:text-left">
                  Transform From WordPress Payments
                </h2>
                <p className="para-text text-white text-center lg:text-left mt-[10px] md:mt-[15px] lg:mt-7">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
              <div className="right md:space-x-[18px] flex flex-col items-center md:flex-row space-y-4 md:space-y-0 mt-5 lg:mt-0">
                <button className="myBtn font-medium font-inter text-white">
                  Recurring Payment
                </button>
                <button className="font-medium font-inter text-[#F7F7F7] myBtn2 ">
                  Single Payment
                </button>
                <button className="font-medium font-inter text-[#F7F7F7] myBtn2 ">
                  Donation Goal
                </button>
              </div>
            </div>

            <div className="mt-10 md:mt-16 lg:mt-[110px] lg:flex items-center justify-between">
              <div>
                <img src={t1} alt="" />
              </div>
              <div className="mt-[30px] lg:mt-0">
                <div>
                  <span className="text-[20px] font-medium font-inter text-white">
                    Information
                  </span>
                  <h2 className="heading-text text-white mt-2">
                    Recurring Payment
                  </h2>
                </div>
                <div className="mt-[20px] md:mt-[30px] lg:mt-[50px] space-y-5 lg:space-y-[35px]">
                  <div className="flex space-x-5">
                    <img src={tik} alt="" />
                    <p className="para-text text-white lg:max-w-[471px]">
                      We recommend that you arrive at least 15 minutes early to
                      your appointment to complete any paperwork that needs to
                      be filled out.
                    </p>
                  </div>
                  <div className="flex space-x-5">
                    <img src={tik} alt="" />
                    <p className="para-text text-white lg:max-w-[471px]">
                      As a courtesy to our other clients and our technicians, if
                      you arrive 10-15 min late for your appointment, we might
                      have to reschedule depending on availability.
                    </p>
                  </div>
                  <div className="flex space-x-5">
                    <img src={tik} alt="" />
                    <p className="para-text text-white lg:max-w-[471px]">
                      We do require 24 hours notice to cancel/reschedule your
                      appointment to avoid a cancellation fee.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 lg:mt-[160px] flex flex-col-reverse lg:flex-row justify-between items-center">
              <div className="left mt-10 lg:mt-0">
                <div>
                  <span className="text-[20px] font-medium font-inter text-white">
                    Information
                  </span>
                  <h2 className="heading-text text-white mt-2">
                    Single Payment
                  </h2>
                  <p className="para-text text-white lg:max-w-[500px] mt-[20px] lg:mt-[30px]">
                    Seamlessly collect donations from your attendees during the
                    ticketing & registration process by adding an option for
                    silent auctions, raffles, fund-a-need, online donations, or
                    text-to-give. Instantly push notifications to attendees to
                    begin donating or bidding during the event. Donors can also
                    bid on items within seconds via text message.
                  </p>
                </div>
                <div className="mt-5 lg:mt-10">
                  <span className="font-bold font-inter text-[18px] text-white">
                    Fundraising Pricing
                  </span>
                  <div className="flex space-x-4 items-start tbg w-fit py-[17px] px-[22px] mt-6">
                    <img className="mt-1" src={tik2} alt="" />
                    <p className="para-text text-white lg:max-w-[464px]">
                      $169 per auction, raffle, fund a need + $1 per person who
                      participates (eg. $1 for each bidder but they can bid on
                      an unlimited number of items)
                    </p>
                  </div>
                  <div className="flex space-x-4 items-start tbg w-fit py-[17px] px-[22px] mt-4">
                    <img className="mt-1" src={tik2} alt="" />
                    <p className="para-text text-white lg:max-w-[464px]">
                      $169 per auction, raffle, fund a need + $1 per person who
                      participates (eg. $1 for each bidder but they can bid on
                      an unlimited number of items)
                    </p>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={t2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:cus-container">
          <div className="max-lg:cus-container absolute -bottom-[450px] lg:-bottom-[13%]">
            <div
              className="bg-cover bg-center bg-no-repeat py-[39px] px-[30px] md:px-[40px] lg:px-[80px] rounded-[60px] lg:flex items-center justify-between lg:min-w-[1170px]"
              style={{ backgroundImage: `url(${tcardbg})` }}
            >
              <div className="mx-auto w-fit lg:mx-0">
                <img src={t3} alt="" />
              </div>
              <div className="mt-10 lg:mt-0">
                <h2 className="heading-text text-white text-center lg:text-left lg:max-w-[539px]">
                  The Premier WordPress Payment Solution
                </h2>
                <p className="para-text text-white text-center lg:text-left lg:max-w-[539px] mt-4 lg:mt-[25px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit,
                  lobortis sociosqu sagittis eros cras{" "}
                </p>
                <div className="mx-auto lg:mx-0 w-fit">
                  <button className="font-medium font-inter text-black bg-white py-4 px-[25px] rounded-[39px] mt-[20px] lg:mt-[45px]">
                    Buy Pro
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Transform
