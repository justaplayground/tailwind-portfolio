export default function About() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          I'm a <b>Front-end Developer</b> who loves intuitive, clean and modern UI design. I focus
          on creating beautiful, accessible, and performant web experiences.
        </p>
        <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 dark:bg-blue-900 mb-4 flex items-center justify-center">
          {/* Illustration or avatar goes here */}
          <span className="text-5xl">👋</span>
        </div>
      </div>
    </section>
  )
}
