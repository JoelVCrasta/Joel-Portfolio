import { useState, useEffect } from "react"
import "../styles/portfolio.css"

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  const MarqueeText = ({ num }: { num: number }) => {
    return (
      <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
        <p className={`portfolio${num} text-transparent`}>portfolio&nbsp;</p>
      </div>
    )
  }

  return (
    <>
      <section className={`fade-in ${isVisible ? "visible" : ""}`}>
        {[...Array(8)].map((_, idx) => (
          <MarqueeText key={idx} num={idx & 1 ? 2 : 1} />
        ))}
      </section>
    </>
  )
}

export default Portfolio
