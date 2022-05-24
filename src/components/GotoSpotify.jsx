import React from 'react'

function GotoSpotify() {
      const imgStyle = " h-[4rem] w-[70%] mt-[1rem] ml-[10px] z-10"
      return (
            <div className="spotify">
                  <div className="buttons flex">
                        <img src={require("../img/youtube.png")} alt="youtube" className={imgStyle} />
                        <img src={require("../img/spotify.png")} alt="spotify" className={imgStyle} />
                  </div>
            </div>
      )
}

export default GotoSpotify


