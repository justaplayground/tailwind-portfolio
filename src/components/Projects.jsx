import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    description: 'A modern web app built with React and Tailwind CSS.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A beautiful portfolio site with animations and clean UI.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A performant landing page using Next.js and Framer Motion.',
    link: '#',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
          Projects
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="block rounded-xl shadow-md bg-white dark:bg-gray-900 p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 text-left"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
            >
              <motion.h3 
                className="text-xl font-semibold mb-2 text-blue-500"
                whileHover={{ 
                  color: "#1D4ED8",
                  scale: 1.02
                }}
                transition={{ duration: 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-700 dark:text-gray-300 text-sm"
                whileHover={{ 
                  color: "#374151"
                }}
                transition={{ duration: 0.2 }}
              >
                {project.description}
              </motion.p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
