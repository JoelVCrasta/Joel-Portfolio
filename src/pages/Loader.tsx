import { useState, useEffect } from "react"
import { useDevice } from "../utils/context"
import "../styles/loader.css"

const Loader = () => {
  const { loaded } = useDevice()
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [loaded])

  return (
    <section
      className={`flex justify-center items-center fixed inset-0 z-50 transition-opacity duration-700 gradient-bg ${
        loaded ? "opacity-0" : "opacity-100"
      } ${!visible && "hidden"}`}
    >
      <div className="flex justify-center items-center relative w-40 h-40 spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Loader
