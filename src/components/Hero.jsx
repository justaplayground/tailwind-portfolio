import { FaGithub, FaTwitter, FaFigma } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <section className="background-grid background-grid--fade-out min-h-screen flex flex-col justify-center items-center text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Hi! I'm <motion.span 
            className="text-blue-500"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ duration: 0.2 }}
          >
            Dan Dan
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          A <motion.b 
            whileHover={{ 
              color: "#3B82F6",
              scale: 1.02
            }}
            transition={{ duration: 0.2 }}
          >
            Front-End Developer
          </motion.b> who loves intuitive, clean and modern UI design.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a 
            href="#" 
            aria-label="GitHub" 
            className="hover:text-blue-500 text-2xl"
            variants={socialVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Twitter" 
            className="hover:text-blue-500 text-2xl"
            variants={socialVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="#" 
            aria-label="Figma" 
            className="hover:text-blue-500 text-2xl"
            variants={socialVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FaFigma />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
