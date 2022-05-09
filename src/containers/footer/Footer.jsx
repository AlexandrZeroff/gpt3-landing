import React from 'react'
import logo from '../../assets/GPT-3-logo.svg'

const Footer = () => {
  return (
    <div className="bg-[#031B34]">
      <div className="gpt3__footer container mx-auto pt-24">
        <div className="gpt3__footer-container px-10 flex flex-col">
          <h1 className="gradient__text text-center max-w-[876px] mx-auto">
            Do you want to step in to the future before others
          </h1>
          <button
            type="button"
            className="w-[218px] h-[65px] text-white text-lg border border-white my-12 mx-auto"
          >
            Request Early Access
          </button>
          <div className='mt-16 lg:flex lg:flex-row lg:items-start'>
            <div className="gpt3__footer-container__logo mb-12 lg:w-2/5">
              <img src={logo} alt="logo" className="w-[118px]" />
              <p className="text-xs text-white max-w-[168px] my-4">
                Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
              </p>
            </div>
            <div className="gpt3__footer-container__links lg:w-3/5">
              <div className="gpt3__footer-container__links-block">
                <p className="text-base text-white font-bold">Links</p>
                <a>Overons</a>
                <a>Social Media</a>
                <a>Counters</a>
                <a>Contact</a>
              </div>
              <div className="gpt3__footer-container__links-block">
                <p className="text-base text-white  font-bold">Company</p>
                <a>terms & Conditions</a>
                <a>Privacy Policy</a>
                <a>Contact</a>
              </div>
              <div className="gpt3__footer-container__links-block">
                <p className="text-base text-white  font-bold">Get in touch</p>
                <a className="max-w-[116px]">
                  Crechterwoord K12 182 DK Alknjkcb
                </a>
                <a>085-132567</a>
                <a>info@payme.net</a>
              </div>
            </div>
          </div>
          <p className='text-xs text-white my-6 sm:mt-12 mx-auto'>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
