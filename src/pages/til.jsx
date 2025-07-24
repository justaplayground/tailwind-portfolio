import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

function TIL() {
  const tilPosts = [
    {
      title: 'CSS Grid vs Flexbox: When to Use Each',
      content: 'CSS Grid is perfect for two-dimensional layouts, while Flexbox excels at one-dimensional layouts. Use Grid for overall page structure and Flexbox for components.',
      date: '2024-01-15',
      tags: ['CSS', 'Layout']
    },
    {
      title: 'React Performance: useMemo vs useCallback',
      content: 'useMemo memoizes values, useCallback memoizes functions. Use useMemo for expensive calculations and useCallback for functions passed as props to prevent unnecessary re-renders.',
      date: '2024-01-14',
      tags: ['React', 'Performance']
    },
    {
      title: 'Tailwind CSS: Custom Configuration Best Practices',
      content: 'Extend the default theme instead of overriding it. Use CSS custom properties for dynamic values and create reusable component classes for complex patterns.',
      date: '2024-01-13',
      tags: ['Tailwind CSS', 'Configuration']
    },
    {
      title: 'JavaScript: Optional Chaining and Nullish Coalescing',
      content: 'Optional chaining (?.) safely accesses nested properties, while nullish coalescing (??) provides fallbacks only for null/undefined values, not falsy values.',
      date: '2024-01-12',
      tags: ['JavaScript', 'ES2020']
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
      <Header />
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Today I <span className="text-blue-500">Learned</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of things I learn each day while coding. Small discoveries that make a big difference.
            </p>
          </motion.div>

          <div className="space-y-8">
            {tilPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <time className="text-gray-500 dark:text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.content}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TIL 