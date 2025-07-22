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
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="block rounded-xl shadow-md bg-white dark:bg-gray-900 p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700 text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-500">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
