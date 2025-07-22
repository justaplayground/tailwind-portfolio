import { FaReact, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiVercel } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skills = [
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Framer Motion', icon: <SiFramer className="text-pink-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-white" /> },
  { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
  { name: 'Figma', icon: <FaFigma className="text-purple-500" /> },
  { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
]

export default function Skills() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
