import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaRocket, FaStar, FaCalendarAlt, FaBell } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ComingSoon() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      
      <main className="pt-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Icon */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ y: -20, rotate: -5 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <FaRocket className="text-white text-5xl" />
                </div>
                <motion.div
                  className="absolute -top-3 -right-3 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaStar className="text-white text-lg" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaStar className="text-white text-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl font-semibold text-purple-500 mb-4">
              Something amazing is brewing!
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're working hard to bring you something incredible. 
              This new feature will revolutionize your experience and we can't wait to share it with you!
            </p>
            
            {/* Progress indicator */}
            <motion.div
              className="w-full max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/"
                  className="inline-block bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition-colors duration-200 font-medium"
                >
                  Go Back Home
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                >
                  <FaBell className="inline mr-2" />
                  Get Notified
                </button>
              </motion.div>
            </div>
            
            {/* Additional info */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaCalendarAlt className="text-purple-500 text-xl" />
                <span>Launch Date: TBA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                <FaStar className="text-yellow-400 text-xl" />
                <span>Status: In Development</span>
              </div>
            </motion.div>
            
            {/* Fun message */}
            <motion.div
              className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-700"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm text-purple-700 dark:text-purple-300">
                💫 Good things come to those who wait... and we promise it'll be worth it!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ComingSoon

