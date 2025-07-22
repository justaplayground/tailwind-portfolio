import { FaGithub, FaTwitter, FaFigma } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="background-grid background-grid--fade-out min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
        Hi! I'm <span className="text-blue-500">Dan Dan</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        A <b>Front-End Developer</b> who loves intuitive, clean and modern UI design.
      </p>
      <div className="flex gap-6 justify-center">
        <a href="#" aria-label="GitHub" className="hover:text-blue-500 text-2xl">
          <FaGithub />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-500 text-2xl">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Figma" className="hover:text-blue-500 text-2xl">
          <FaFigma />
        </a>
      </div>
    </section>
  )
}
