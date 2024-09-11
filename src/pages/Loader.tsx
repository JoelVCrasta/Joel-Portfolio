import { useState, useEffect } from "react"
import "../styles/loader.css"

interface LoaderProps {
  isDoneLoading: boolean
}

const Loader = (props: LoaderProps) => {
  const { isDoneLoading } = props
  const [visible, setVisible] = useState<boolean>(true)

  useEffect(() => {
    if (isDoneLoading) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [isDoneLoading])

  return (
    <section
      className={`flex justify-center items-center fixed inset-0 z-50 transition-opacity duration-700 gradient-bg ${
        isDoneLoading ? "opacity-0" : "opacity-100"
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
