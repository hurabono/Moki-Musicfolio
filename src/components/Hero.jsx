import React from 'react'
import GotoSpotify from './GotoSpotify'

function Hero() {
      return (
            <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
                  {/*Left side hero banner  ٩(๑❛ワ❛๑)و  */}
                  <div className="titles flex flex-col items-start justify-center h-[100%] text-[3rem] z-10">
                        <span>Multimokia</span>{" "}
                        <span><b>Orchestral Composer</b></span>
                        <span className='text-[15px] text-[#525d6e] '>
                              COMMISSIONS OPEN: DM HERE OR ON DISCORD multimokia#0007 TO INQUIRE
                        </span>
                        {/*go to spotify  ٩(๑❛ワ❛๑)و  */}
                        <div>
                              <GotoSpotify />
                        </div>
                  </div>
                  {/*right side hero banner  ٩(๑❛ワ❛๑)و  */}
                  <div className="images">
                        <img src={require("../img/bg-path.png")} alt="music-path" className='absolute top-[-8rem] left-[19rem] z-0' />
                  </div>
            </div>
      )
}

export default Hero