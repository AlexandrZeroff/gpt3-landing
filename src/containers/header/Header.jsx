import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './header.css'

const Header = () => {
  return (
    <div className="container mx-auto scale-up-center lg:flex lg:items-center">
      <div className="gpt3__header-content px-8 lg:w-1/2">
        <h1 className="gradient__text my-12 sm:leading-75">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="text-base lg:text-xl font-normal text-[#81AFDD] my-4">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input
            type="text"
            placeholder="Your Email Adress"
            className="gpt3__header-content__input-text"
          ></input>
          <button
            type="button"
            className="bg-[#FF4820] w-36 h-12 border-0 rounded-r font-medium text-white text-base"
          >
            Get Started
          </button>
        </div>
        <div className="gpt-3__header-content__people flex items-center my-8">
          <div className="shrink-0">
            <img src={people} alt="people" className="max-w-[120px]" />
          </div>
          <span className="text-white text-xs ml-4">
            1,600 people requested access a visit in last 24 hours
          </span>
        </div>
      </div>
      <div className="gpt3__header-content__image lg:w-1/2">
        <img src={ai} alt="AI" className="w-full" />
      </div>
    </div>
  )
}

export default Header
