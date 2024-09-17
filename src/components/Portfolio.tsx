import { useState, useEffect } from "react"
import { useDevice } from "../utils/context"
import "../styles/portfolio.css"

const Portfolio = () => {
  const { loaded } = useDevice()

  useEffect(() => {
    if (loaded) {
      const fadeIn: NodeListOf<Element> = document.querySelectorAll(".fade-in")
      fadeIn.forEach((element) => {
        element.classList.add("visible")
      })
    }
  }, [loaded])

  const MarqueeText = ({ num }: { num: number }) => {
    return (
      <div className="flex w-full h-full overflow-hidden text-huge_sm lg:text-huge font-led portfolio-container">
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
      </div>
    )
  }

  return (
    <>
      <section className={`fade-in ${loaded ? "visible" : ""}`}>
        {[...Array(10)].map((_, idx) => (
          <MarqueeText key={idx} num={idx & 1 ? 2 : 1} />
        ))}
      </section>
    </>
  )
}

export default Portfolio
