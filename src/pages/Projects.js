import React from "react";

const ProjectCard = ({ title, description, demoLink, githubLink, tags }) => (
  <div className="bg-white shadow rounded-lg p-6 mb-6">
    <h3 className="text-xl font-semibold mb-2">
      <a
        href={demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        {title}
      </a>
    </h3>
    <p className="text-text-secondary mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-secondary text-text-secondary px-2 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    {githubLink && (
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary"
      >
        View on GitHub
      </a>
    )}
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Petshop-System",
      description:
        "Led iOS development for Customer App (UIKit) and Employee App (Swift) in a distributed Petshop system integrating Java, Go, and Apache Kafka.",
      githubLink: "https://github.com/petshop-system",
      tags: ["iOS", "UIKit", "Swift"],
    },
    {
      title: "Energisa Website",
      description:
        "Energisa is a eletric company in Brazil, this project is a website for the company and allow bill payments via PIX. I was part of the frontend team, reposible for the web and mobile version of the website.",
      demoLink: "https://www.energisa.com.br/",
      tags: ["Web", "Frontend", "PIX"],
    },
    {
      title: "Portal Recarga Vivo",
      description:
        "Vivo is a large telecommunication company in Brazil, this project is a portal for recharge your phone, I was part of the frontend team, reposible for the web and mobile version of the website.",
      demoLink: "https://portalrecarga.vivo.com.br",
      tags: ["Mobile", "Web", "Frontend", "React"],
    },
  ];

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
