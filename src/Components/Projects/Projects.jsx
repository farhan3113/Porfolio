import React, { useState } from 'react';

const projects = [
  {
    title: "TeamLancer",
    short: "A platform to create and manage freelance teams.",
    description:
      "Designed and implemented responsive user interfaces using React.js and Tailwind CSS. Integrated RESTful APIs for real-time updates, handled password setup, and collaborated with UI/UX designers to bring Figma designs to life.",
    tech: ["React", "Tailwind CSS", "Chakra UI", "Plus UI"],
    github: "https://github.com/yourusername/teamlancer",
    live: "#",
  },
  {
    title: "Murshed Extension",
    short: "A Chrome extension with custom sidebar functionality.",
    description:
      "Built a Chrome extension from scratch using HTML, CSS, JavaScript, and Tailwind CSS. Modified and optimized the extension for performance and usability while working with the latest Manifest V3 structure.",
    tech: ["JavaScript", "Tailwind CSS", "Manifest V3"],
    github: "https://github.com/yourusername/murshed-extension",
    live: "#",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section id="Projects" className="py-12 px-4 md:px-12 bg-black\30 text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
        I have worked on impactful projects focusing on UI/UX design, API integration, and real-time user interactions. With technologies like React.js, Tailwind CSS, and JavaScript, I aim to deliver responsive and efficient web experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black/45 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-2">{project.short}</p>

            {expandedIndex === index && (
              <p className="text-gray-400 mb-4">{project.description}</p>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-white/10 text-white px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <a
                href={project.github}
                className="text-blue-400 hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  className="text-green-400 hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-400  hover:underline text-sm ml-auto"
              >
                {expandedIndex === index ? "Less" : "More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
