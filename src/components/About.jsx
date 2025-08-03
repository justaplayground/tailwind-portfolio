import { motion } from 'framer-motion'

export default function About() {
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
      y: 30,
      scale: 0.9
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

  const avatarVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-300 mb-6"
        >
          I'm a <motion.b 
            className="text-blue-500"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 10px rgba(59, 130, 246, 0.3)"
            }}
            transition={{ duration: 0.2 }}
          >
            Front-end Developer
          </motion.b> who loves intuitive, clean and modern UI design. I focus
          on creating beautiful, accessible, and performant web experiences.
        </motion.p>
        <motion.div 
          className="w-32 h-32 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 mb-4 flex items-center justify-center"
          variants={avatarVariants}
          whileHover="hover"
        >
          {/* Illustration or avatar goes here */}
          <motion.span 
            className="text-5xl"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  )
}
