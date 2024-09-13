import Keyboard from "../canvas/Keyboard"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"

const Home = () => {
  return (
    <section className="gradient-bg">
      {/* Backgroung marquee animation */}
      <div className="flex justify-center items-center w-full h-full fixed">
        <Portfolio />
      </div>

      {/* outline-box */}

      <div className="rounded-lg lg:rounded-xl absolute inset-3 md:inset-6 outline-box"></div>

      <section className="h-[100vh] content-wrapper">
        <Keyboard />
        <Hero />
      </section>
    </section>
  )
}

export default Home
