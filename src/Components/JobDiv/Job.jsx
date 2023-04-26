import React from 'react'
import { BiTimeFive } from 'react-icons/bi';

import logo1 from '../../Assets/logo1.png';
import logo2 from '../../Assets/logo2.png';
import logo3 from '../../Assets/logo3.png';

const Data = [
    {
      id :1,
      image : logo1,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :2,
      image : logo2,
      title : 'Web Developer',
      time : '14 hr',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    {
      id :3,
      image : logo3,
      title : 'Web Developer',
      time : 'Now',
      location :'Canada',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat, libero repudiandae deleniti commodi esse quas maxime fugit ex at reprehenderit dolor unde nihil quaerat perferendis provident, corrupti accusantium debitis!',
      company : 'Nova Linus co . '
          
    },
    
    
]

function Job() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return(
                <div key={id} className='group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:Shadow-lg'>
                  <span  className='flex justify-between item-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textColor group:hover:text-white'> {title}</h1>
                    <span className='flex item-center text-[#ccc] gap-1'>
                      <BiTimeFive/> {time}
                    </span>
                  </span>
                  <h6 className='text-[#ccc]'>{location}</h6>
                  <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover: text-white'>
                    {desc}
                  </p>
                  <div className="company flex item-center gap-2">
                    <img src={image} alt="CompanyLogo" className='w-[10%]' />
                    <span className='text-[14px] py-[rem] block group-hover:text-white'>{company} </span>
                  </div>
                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white '>Apply Now</button>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Job