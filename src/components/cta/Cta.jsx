import React from 'react'

const Cta = () => {
  return (
    <div className="container mx-auto" id='cta'>
      <div className="gpt3__cta-container px-8 my-24 sm:my-32">
        <div className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] rounded-xl py-8 px-8 sm:px-12 md:flex flex-row items-center min-h-[152px]">
          <div>
            <p className="text-xs font-medium leading-[30px]">
              Request Early Access to Get Started
            </p>
            <p className="text-xl font-bold">
              Register today & start exploring the endless possiblities.
            </p>
          </div>
          <button
            type="button"
            className="bg-black rounded-[40px] border-none text-white font-medium text-base md:text-lg text-center w-[144px] h-[48px] md:w-[190px] md:h-[60px] md:ml-auto mt-4 md:mt-0"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cta
