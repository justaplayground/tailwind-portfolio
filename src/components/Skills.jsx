import { FaReact, FaCss3Alt, FaFigma } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiVercel } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'framer-motion'

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Skills & Tools
        </motion.h2>
        <motion.div 
          className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="flex flex-col items-center cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
            >
              <motion.div 
                className="text-4xl mb-2"
                variants={skillVariants}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
              <motion.span 
                className="text-sm text-gray-700 dark:text-gray-300"
                variants={skillVariants}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
