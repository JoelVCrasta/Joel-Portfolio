interface ButtonProps {
  text: string
  href: string
}

const Button = (props: ButtonProps) => {
  const { text, href } = props
  return (
    <a
      href={href}
      className="w-36 md:w-44 lg:w-36 border-1 rounded-3xl border-lime-300 flex justify-center hover:bg-lime-300 hover:text-purple-900 transition-all duration-200"
    >
      {text}
    </a>
  )
}

export default Button
