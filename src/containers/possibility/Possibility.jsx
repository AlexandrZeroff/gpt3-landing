import React from 'react'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="container mx-auto">
      <div className="gpt3__possibility px-8 md:px-12">
        <div className="md:flex md:flex-row md:items-end">
          <div className='md:w-1/2'>
            <img src={possibility} alt="Features" />
          </div>
          <div className='md:w-1/2 md:pl-8'>
            <p className="text-[#71E5FF] text-base mt-16">
              <a href="#request_access">Request Early Access to Get Started</a>
            </p>
            <h2 className="gradient__text my-4">
              The possibilities are beyond your imagination
            </h2>
            <p className="text-sm leading-6 text-[#81AFDD] font-normal">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <p className="text-[#FF8A71] text-base my-8">
              <a href="#request_access">Request Early Access to Get Started</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Possibility
