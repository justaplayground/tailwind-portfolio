export default function Contact() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-blue-600 transition-colors"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}
