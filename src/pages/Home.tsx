import Keyboard from "../canvas/Keyboard"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"

const Page1 = () => {
  return (
    <section className="gradient-bg">
      {/* Backgroung marquee animation */}
      <div className="flex justify-center items-center w-full h-full absolute">
        <Portfolio />
      </div>

      {/* outline-box */}
      <div className="flex justify-center items-center w-full h-full absolute p-3 md:p-6">
        <div className="w-full h-full rounded-lg lg:rounded-xl outline-box"></div>
      </div>

      <Keyboard />
      <Hero />
    </section>
  )
}

export default Page1
