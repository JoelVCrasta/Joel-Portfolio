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

  return (
    <>
      <section className={`fade-in ${isVisible ? "visible" : ""}`}>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio1 text-transparent">portfolio&nbsp;</p>
        </div>
        <div className="flex w-full h-full overflow-hidden text-huge font-led portfolio-container">
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
          <p className="portfolio2 text-transparent">portfolio&nbsp;</p>
        </div>
      </section>
    </>
  )
}

export default Portfolio
