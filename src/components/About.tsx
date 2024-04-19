import { useRef } from "react"

const About = () => {
  const name = document.querySelector(".name") as HTMLElement
  /* 
  name.addEventListener("mouseover", (e: MouseEvent) => {
    if (e.target instanceof Element) {
      let rect = e.target.getBoundingClientRect()
      let x = e.clientX - rect.left
      let y = e.clientY - rect.top
      name.style.setProperty("--x", x + "px")
      name.style.setProperty("--y", y + "px")
    }
  }) */

  return (
    <>
      <section className="text-lime-300 w-800 h-full flex justify-center items-center">
        <section className="space-y-8 intro-box ml-30">
          <section className="text-4xl p-10 h-auto font-marde name">
            <p className="text-7xl mb-5">JOEL</p>
            <p className="text-7xl mb-8">CRASTA</p>
            <p>Full Stack Developer</p>
          </section>
          <nav className="flex font-zector text-xl ml-10">
            <ul className="mr-10 space-y-2">
              <li>
                <a
                  href=""
                  className="w-36 border-1 rounded-3xl border-lime-300 flex justify-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="w-36 border-1 rounded-3xl border-lime-300 flex justify-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
                >
                  Technology
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="w-36 border-1 rounded-3xl border-lime-300 flex justify-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="w-36 border-1 rounded-3xl border-lime-300 flex justify-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  )
}

export default About
