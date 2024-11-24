import React from 'react'
import navTop from '../images/nav-top-bg.png'
import offer from '../images/offer.png'

function NavTop() {
  return (
    <>
      <section className="bg-cover bg-center bg-no-repeat py-1" style={{backgroundImage: `url(${navTop})`}}>
        <div className="cus-container">
          <div className="w-fit mx-auto">
            <img src={offer} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default NavTop
