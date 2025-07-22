import { FaGithub, FaTwitter, FaFigma } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#" aria-label="GitHub" className="hover:text-blue-500 text-xl">
          <FaGithub />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-500 text-xl">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Figma" className="hover:text-blue-500 text-xl">
          <FaFigma />
        </a>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()}, Your Name</p>
    </footer>
  )
}
