import React from 'react'
import CenterMenu from './CenterMenu'

function Header() {
      const buttonStyle = "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px] mr-[1rem]"
      return (
            <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
                  {/*Moki logo (๑╹ω╹๑ ) */}
                  <img src={require("../img/logo.png")} alt="moki_logo" className='logo w-[55px]  h-[55px]' />
                  {/*Moki side menu (๑╹ω╹๑ ) */}
                  <CenterMenu />
                  {/*url buttons (๑╹ω╹๑ ) */}
                  <div className='buttons flex'>
                        <button className={` bg-[#232a4e] ` + buttonStyle}>Twitter</button>
                        <button className={` bg-[#232a4e] ` + buttonStyle}>Co-Fi</button>
                  </div>
            </div>
      )
}

export default Header