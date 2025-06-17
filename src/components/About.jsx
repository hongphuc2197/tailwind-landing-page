import React from 'react';

const About = () => {
  const highlights = [
    "Adept at working in Agile/Scrum environments with consistent client collaboration and on-time delivery",
    "Strong understanding of RESTful APIs, GraphQL, Apollo Client/Server, and state management libraries",
    "Solid experience with monolithic architecture using NestJS, MongoDB, and WebSocket",
    "Experienced with writing unit tests using Jest for maintaining code quality",
    "Excellent soft skills including effective communication and time management",
    "Worked with multiple international teams across various domains"
  ];

  const education = {
    degree: "Bachelor of Information Technology",
    school: "HCMC University of Education"
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Profile Summary
        </h2>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <div className="space-y-6">
            <div className="space-y-4">
              {highlights.map((point, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                    <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="ml-4 text-gray-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
          <div className="space-y-2">
            <p className="text-gray-900 font-medium">{education.degree}</p>
            <p className="text-gray-600">{education.school}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 