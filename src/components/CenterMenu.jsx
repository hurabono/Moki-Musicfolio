import React from "react";

function CenterMenu() {
      const menuStyle = "mr-[3rem] hover:cursor-pointer"
      return (
            <div className="menu flex">
                  <ul className="flex w-[100%] justify-between">
                        <li className={menuStyle}>Home</li>
                        <li className={menuStyle}>Work</li>
                        <li className={menuStyle}>Commission</li>
                        <li className={menuStyle}>About</li>
                  </ul>
            </div>
      )
}

export default CenterMenu