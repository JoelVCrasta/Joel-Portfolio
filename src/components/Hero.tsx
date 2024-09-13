import Button from "./Button.tsx"

const About = () => {
  const navbar: string[] = ["About", "Technology", "Projects", "Contact"]
  const href: string[] = ["", "", "", ""]

  return (
    <section className="flex justify-center items-end lg:justify-start lg:items-center w-full h-full pb-6 md:pb-24 lg:pb-0 text-lime-300">
      <section className="space-y-8 md:mx-[8%] intro-box">
        {/* Name section  */}
        <section className="h-auto w-auto font-marde tracking-widest">
          <div className="md:flex lg:block">
            <p className="mb-2 md:mb-5 md:mr-2 lg:mr-0 text-4xl md:text-6xl lg:text-7xl">
              JOEL
            </p>
            <p className="mb-4 lg:mb-8 text-4xl md:text-6xl lg:text-7xl">
              CRASTA
            </p>
          </div>
          <p className="text-xl md:text-3xl lg:text-4xl md:text-center ">
            Some Developer
          </p>
        </section>

        {/* Navbar */}
        <nav className="flex justify-center font-zector text-xl lg:text-xl ">
          <ul className="mr-4 md:mr-10 space-y-2">
            <li>
              <Button text={navbar[0]} href={href[0]} />
            </li>
            <li>
              <Button text={navbar[1]} href={href[1]} />
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <Button text={navbar[2]} href={href[2]} />
            </li>
            <li>
              <Button text={navbar[3]} href={href[3]} />
            </li>
          </ul>
        </nav>
      </section>
    </section>
  )
}

export default About
