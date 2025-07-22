import { useState, useEffect } from 'react'
import {
  FaGithub,
  FaTwitter,
  FaChevronRight,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { CgTrello } from 'react-icons/cg'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWorkMenuOpen, setIsWorkMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = (
    <>
      <a
        href="/projects"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        Projects
      </a>
      <a
        href="/blog"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        Blog
      </a>
      <a
        href="/til"
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        T.I.L
      </a>
      <div className="relative">
        <button
          onClick={() => setIsWorkMenuOpen(!isWorkMenuOpen)}
          className="lg:hidden px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center"
        >
          Work <FaChevronRight className="w-3 h-3 ml-1 transform" />
        </button>
        {isWorkMenuOpen && (
          <div className="lg:hidden absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <a
                href="/work/skills-and-tools"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                Skills & Tools
              </a>
              <a
                href="/work/experience"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                Experience
              </a>
              <a
                href="/work/studio"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                Studio
              </a>
              <a
                href="/work/contact"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                role="menuitem"
              >
                Contact
              </a>
            </div>
          </div>
        )}
        <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
          <span className="font-medium">Work</span>
          <FaChevronRight className="w-3 h-3" />
          <a
            href="/work/skills-and-tools"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Skills & Tools
          </a>
          <span>·</span>
          <a
            href="/work/experience"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Experience
          </a>
          <span>·</span>
          <a
            href="/work/studio"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Studio
          </a>
          <span>·</span>
          <a
            href="/work/contact"
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  )

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md'
          : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-violet-500 bg-violet-500">
                  <div className="h-4 w-1 rotate-12 rounded-full bg-white"></div>
                </div>
                <div className="hidden text-xl font-bold sm:block">
                  <span className="text-slate-900 dark:text-slate-200">enji</span>
                  <span className="text-violet-500">dev</span>
                </div>
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">{navLinks}</div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:flex items-center">
              <a
                href="https://twitter.com/enjidev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/enjidev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <div className="mx-2 h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md bg-gray-200/50 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300/70 dark:bg-gray-800/50 dark:text-gray-100 dark:hover:bg-gray-700/50"
            >
              <CgTrello className="h-5 w-5" />
              <div className="hidden items-center gap-2 text-xs font-bold xl:flex dark:font-normal">
                Quick Access
                <kbd className="rounded border border-b-2 border-gray-400 bg-gray-300 px-1 py-0.5 font-mono dark:border-gray-500 dark:bg-gray-900">
                  Q
                </kbd>
              </div>
            </button>
            <div className="sm:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {isMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">{navLinks}</div>
        </div>
      )}
    </header>
  )
}

export default Header 