import React from 'react'

function NavBar() {
  return (
    <div className='navBar flex justify-between item-center p-[3rem]'>
      <div className="logDiv">
        <h1 className='logo text-[25px] text-blueColor'>
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">Jobs</li>
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">Company</li>
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">About</li>
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">Contact</li>
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">Blog</li>
        <li className="menuList text-[#6f6f6f] hover: text-blueColor">Register </li>

      </div>

    </div>
  )
}

export default NavBar