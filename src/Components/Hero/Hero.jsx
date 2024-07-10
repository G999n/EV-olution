import './Hero.css'
import arrow_btn from "../../assets/arrow_btn.png"
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"

const Hero = ({setPlayStatus, heroData, setHeroCount, playStatus, heroCount}) => {
  return (
    <div className = 'hero'>
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt='arrow_button'/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={() => {setHeroCount(0); setPlayStatus(false);}} className={heroCount===0 && !playStatus ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => {setHeroCount(1); setPlayStatus(false);}} className={heroCount===1 && !playStatus ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => {setHeroCount(2); setPlayStatus(false);}} className={heroCount===2 && !playStatus ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=>{setPlayStatus(!playStatus)}}src={playStatus===true? pause_icon: play_icon}/>
          <p>{playStatus? "Pause the video!" : "Play the video!"}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
