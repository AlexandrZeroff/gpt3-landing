import React from 'react'

const WhatGPT3 = () => {
  const ColumnFeature = ({ header, content }) => {
    return (
      <div className='mt-8'>
        <div className="h-[3px] w-[38px] bg-gradient-to-r from-[#AE67FA] to-[#F49867]" />
        <h3 className="leading-[75px] text-white">{header}</h3>
        <p className="text-base font-normal text-[#81AFDD] leading-[30px] lg:mt-8 max-w-[75vw] sm:max-w-none">
          {content}
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto" id="whgpt3">
      <div className="gpt3__whatgpt3-feature gradient__bg-span mx-[5vw] md:mx-[3vw] my-20 py-10 lg:py-14 px-8 lg:px-12">
        <div className="h-[3px] w-[38px] bg-gradient-to-r from-[#AE67FA] to-[#F49867]" />
        <div className="gpt3__whatgpt3-feature__whatis md:flex flex-row items-start">
          <h3 className="leading-[75px] text-white flex-none md:mr-16">
            What is GPT-3
          </h3>
          <p className="text-base font-normal leading-[30px] text-[#81AFDD] max-w-[620px] md:ml-auto md:mt-4">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="gpt3__whatgpt3-feature__haeding md:flex md:items-center my-16 lg:my-24">
          <h2 className="gradient__text max-w-md">
            The possibilities are beyond your imagination
          </h2>
          <p className="text-[#FF8A71] text-base hidden md:inline-flex md:ml-auto flex-none">
            <a href="#explore">Explore The Library</a>
          </p>
        </div>
        <div className="gpt3__whatpgt3-feature__content">
          <ColumnFeature
            header="Chatbots"
            content="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          />
          <ColumnFeature
            header="Knowledgebase"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
          <ColumnFeature
            header="Education"
            content="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          />
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3
