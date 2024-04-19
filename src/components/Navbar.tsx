const Navbar = () => {
  return (
    <>
      <nav className="flex justify-center align-center my-5">
        <ul className="text-base font-zector flex gap-32 px-12 py-3 rounded-xl bg-white text-white opacity-blur">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Technology</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
