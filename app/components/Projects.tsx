const projectData = [
  {
    title: "Project Title 1",
    description: "Short description about this project goes here. This is just a placeholder for now.",
    techStack: "HTML, CSS, JS",
  },
  {
    title: "Project Title 2",
    description: "Another placeholder project description. Replace this with real content when ready.",
    techStack: "React, Tailwind",
  },
  // add more projects here...
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-0 pb-20 bg-[#0f0f0f] text-white"
      style={{ fontFamily: "'Poppins Regular', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-pink-400 mb-10 text-center"
          style={{ fontFamily: "'Poppins SemiBold', sans-serif" }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map(({ title, description, techStack }, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-pink-500/30 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-300">{title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{description}</p>
              <span className="text-xs text-gray-500">Tech Stack: {techStack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
