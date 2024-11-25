import React from 'react'
import s1 from '../icons/s1.svg'
import s2 from "../icons/s2.svg";
import s3 from "../icons/s3.svg";
import s4 from "../icons/s4.svg";
import s from '../icons/s.svg'

function UserExperience() {
  return (
    <>
      <section className="bg-[#FFF0E4] pt-[500px] lg:pt-[370px] pb-14 md:pb-20 lg:pb-[120px]">
        <div className="cus-container">
          <div className="">
            <div>
              <h2 className="heading-text text-center">
                Seamless User Experience
              </h2>
              <p className="para-text text-center mt-3 lg:mt-5">
                Lorem ipsum dolor sit amet consectetur adipiscing elit,
                suspendisse montes
              </p>
            </div>

            <div className="grid-res-cols mx-auto max-sm:w-fit  md:ml-[45px] mt-10 lg:mt-16">
              {[
                {
                  id: 1,
                  icon: s1,
                  title: "Versatility",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
                },
                {
                  id: 2,
                  icon: s2,
                  title: "Value for Money",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
                },
                {
                  id: 3,
                  icon: s3,
                  title: "UI that Talks",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
                },
                {
                  id: 4,
                  icon: s4,
                  title: "Made for Progress",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec",
                },
              ].map(({ id, icon, title, text }) => {
                return (
                  <div key={id} className="grid-card-4">
                    <div className="relative">
                      <img className="relative z-10 ml-8" src={icon} alt="" />
                      <h4 className="font-semibold font-inter text-[22px] text-[#202222] leading-[27px] mt-6 relative z-10">
                        {title}
                      </h4>
                      <p className="font-inter text-[14px] leading-[22px] text-[#585C67] mt-[10px] max-w-[198px] relative z-10">
                        {text}
                      </p>
                      <div className="absolute top-5 -left-[45px] z-0">
                        <img src={s} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserExperience
