import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      skills: ["Next.js", "Gatsby", "ReactJS", "React Native", "NestJS", "NodeJS"]
    },
    {
      title: "Libraries & Tools",
      skills: [
        "Apollo Client",
        "Apollo Server",
        "React-sweet-state",
        "CSS-in-JS",
        "Jest Testing",
        "Unit Testing",
        "Typeform",
        "WebSocket"
      ]
    },
    {
      title: "Database & APIs",
      skills: [
        "MongoDB",
        "GraphQL",
        "RESTful APIs",
        "Jest Testing",
        "Apollo Server"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 