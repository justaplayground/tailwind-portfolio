import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaTools, FaCog, FaWrench } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Maintain() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      
      <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <FaTools className="text-white text-4xl" />
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaCog className="text-white text-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Under Maintenance
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-blue-500 mb-4">
              We're working on something awesome!
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We're currently performing some maintenance to improve your experience. 
              This won't take long, and we'll be back with exciting new features soon!
            </p>
            
            {/* Status indicator */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-8"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Maintenance in progress
            </motion.div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  Go Back Home
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => window.location.reload()}
                  className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                >
                  <FaWrench className="inline mr-2" />
                  Check Again
                </button>
              </motion.div>
            </div>
            
            {/* Estimated time */}
            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              Estimated completion: Soon™
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Maintain

