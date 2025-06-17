import React from 'react';

const Experience = () => {
  const projects = [
    {
      title: "Starbucks Singapore",
      company: "Kyanon Digital & Ascentis",
      period: "Recent",
      description: "The Starbucks® Singapore app is a comprehensive mobile platform designed to enhance customer convenience and engagement.",
      techStack: ["ReactJS", "Javascript"],
      teamSize: 8,
      responsibilities: [
        "Worked as a Frontend Developer",
        "Developed project features based on requirements",
        "Participated in daily meetings with the client",
        "Handled bug fixing during development"
      ]
    },
    {
      title: "Continuing Medical Education (CME)",
      company: "Medical Education Platform",
      period: "8 months",
      description: "Top online platform connecting learners with courses and enabling instructors to manage lessons and student groups efficiently.",
      techStack: ["TypeScript", "Typeform", "MongoDB", "NestJS", "Apollo Server", "Apollo Client", "ReactJS", "GraphQL", "Jest Testing"],
      teamSize: 10,
      responsibilities: [
        "Delivered the CME project within 8 months",
        "Developed the front-end using ReactJS",
        "Built the back-end with NestJS"
      ]
    },
    {
      title: "KOI Thé",
      company: "Mobile App Development",
      period: "Recent",
      description: "Mobile app ordering system allowing users to order drinks, use vouchers, payment by OxPay, and manage profile Koi cards.",
      techStack: ["React Native", "JavaScript", "HTML"],
      teamSize: 6,
      responsibilities: [
        "Worked as a Mobile Developer",
        "Developed new features based on change requests (CRs)",
        "Released the app to app stores",
        "Adjusted and updated the app UI"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-blue-600">{project.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="text-gray-500">{project.period}</span>
                  <p className="text-sm text-gray-500">Team Size: {project.teamSize}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 