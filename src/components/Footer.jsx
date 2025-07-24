import { FaGithub, FaTwitter, FaFigma } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
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

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      color: "#3B82F6",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  }

  return (
    <footer className="py-8 text-center bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div 
        className="flex justify-center gap-6 mb-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.a 
          href="#" 
          aria-label="GitHub" 
          className="hover:text-blue-500 text-xl"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaGithub />
        </motion.a>
        <motion.a 
          href="#" 
          aria-label="Twitter" 
          className="hover:text-blue-500 text-xl"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaTwitter />
        </motion.a>
        <motion.a 
          href="#" 
          aria-label="Figma" 
          className="hover:text-blue-500 text-xl"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaFigma />
        </motion.a>
      </motion.div>
      <motion.p 
        className="text-gray-500 text-sm"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        © {new Date().getFullYear()}, Your Name
      </motion.p>
    </footer>
  )
}
