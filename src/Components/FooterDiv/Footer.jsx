import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className="logDiv">
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Job</strong>Search
          </h1> 
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. I
        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company  
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'> Feature</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FQA</li>
        </div>

      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources  
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'> Support Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Facebok</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>

      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support  
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'> Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>

      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info  
        </span>
        <div>
          <small className='text-[14px] text-white'>
            jobsearch@gmail.com         
          </small>
          <div className='icons flex gap-4 py-[1rem]'> 
          <AiOutlineInstagram className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          <BsFacebook className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          <AiOutlineTwitter className='bg-white p-[18px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer