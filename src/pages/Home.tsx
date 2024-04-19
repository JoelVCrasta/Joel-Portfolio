import { useRef, useEffect } from "react"
import Keyboard from "../canvas/Keyboard"
import About from "../components/About"
import { gsap } from "gsap"
import Portfolio from "../components/Portfolio"
import Particles from "../canvas/Particles"

const Page1 = () => {
  return (
    <div className="gradient-bg">
      <div className="absolute w-full h-full flex justify-center items-center">
        {/* outline-box */}
        <div className="outline-box absolute"></div>
        <Portfolio />
      </div>
      <Keyboard />
      <About />
    </div>
  )
}

export default Page1
