import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Blog() {
  const blogPosts = [
    {
      title: 'Building Modern UIs with React and Tailwind CSS',
      excerpt: 'Learn how to create beautiful, responsive user interfaces using React and Tailwind CSS. This guide covers best practices and advanced techniques.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Development',
      slug: 'building-modern-uis'
    },
    {
      title: 'The Power of Framer Motion in React Applications',
      excerpt: 'Discover how Framer Motion can transform your React applications with smooth animations and delightful user experiences.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Animation',
      slug: 'framer-motion-power'
    },
    {
      title: 'Optimizing Performance in Modern Web Applications',
      excerpt: 'Explore various techniques to improve the performance of your web applications, from code splitting to lazy loading.',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Performance',
      slug: 'optimizing-performance'
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
              My <span className="text-blue-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, design, and technology.
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-200">
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <time className="text-gray-500 dark:text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    Read more →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Blog 