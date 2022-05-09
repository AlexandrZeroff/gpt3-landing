import React from 'react'
import './brand.css';
import { google, slack, atlassian, dropbox, shopify } from './imports';

const Brand = () => {
  return (
    <div className='container mx-auto'>
      <div className='gpt3__brand-content px-8'>
        <div className='gpt3__brand-content__links mx-auto my-10 flex justify-center items-center flex-wrap'>
          <img src={google} alt='Google'/>
          <img src={slack} alt='Slack'/>
          <img src={atlassian} alt='Atlassian'/>
          <img src={dropbox} alt='Dropbox'/>
          <img src={shopify} alt='Shopify'/>
        </div>
      </div>
    </div>
  )
}

export default Brand