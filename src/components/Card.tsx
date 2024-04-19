import { useRef, useEffect } from "react"
import "../styles/card.css"

const Card = () => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current

    const mousePos = (e: MouseEvent) => {
      if (!card) return

      const x = e.clientX - card.offsetLeft
      const y = e.clientY - card.offsetTop

      card.style.setProperty("--x", `${x}px`)
      card.style.setProperty("--y", `${y}px`)
    }

    card?.addEventListener("mousemove", mousePos)

    return () => {
      card?.removeEventListener("mousemove", mousePos)
    }
  }, [])

  return (
    <>
      <section className="h-screen flex justify-center items-center ">
        <section
          ref={cardRef}
          className="w-[80%] h-[80%] rounded-3xl before:rounded-3xl opacity-blur "
        ></section>
      </section>
    </>
  )
}

export default Card
