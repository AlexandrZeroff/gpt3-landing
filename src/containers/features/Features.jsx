import React from 'react'

const Features = () => {
  const Feature = ({ header, content }) => {
    return (
      <div className="gpt3__features-items__feature flex flex-wrap justify-between mb-8">
        <div className="flex-none">
          <div className="h-[3px] w-[38px] bg-gradient-to-r from-[#AE67FA] to-[#F49867]" />
          <h4 className="text-white max-w-[182px] leading-6 my-4">{header}</h4>
        </div>
        <p className="text-sm leading-6 text-[#81AFDD] font-normal flex-1 min-w-[260px] max-w-xs">
          {content}
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto" id='open-ai'>
      <div className="gpt3__features-content px-8 lg:flex lg:flex-row lg:items-start mt-32">
        <div className='lg:w-1/2 mb-16'>
          <h2 className="gradient__text max-w-[426px]">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h2>
          <p className="text-[#FF8A71] text-base my-4">
            <a href="#request_access">Request Early Access to Get Started</a>
          </p>
        </div>
        <div className="gpt3__features-items lg:w-1/2">
          <Feature
            header="Improving end distrusts instantly"
            content="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
          />
          <Feature
            header="Become the tended active"
            content="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
          />
          <Feature
            header="Message or am nothing"
            content="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
          />
          <Feature
            header="Really boy law county"
            content="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
          />
        </div>
      </div>
    </div>
  )
}

export default Features
