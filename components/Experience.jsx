const Experience = () => {
  const experiences = [
    {
      company: 'Save in Gold',
      location: 'Dubai, UAE',
      position: 'Software Engineer',
      period: 'Jan 2025 - Nov 2025',
      achievements: [
        'Developed a high-performance admin dashboard using React.js and Tailwind CSS, implementing responsive layouts and custom components.',
        'Developed scalable backend architecture using Node.js and Express.js, creating secure RESTful APIs with JWT authentication.',
        'Implemented Redis caching strategy for API responses, reducing query response times by 60% in production environment.',
        'Engineered Fintech solutions for secure transactions, payment processing, real-time market data integration, and identity verification.',
        'Designed and implemented MongoDB database schemas using Mongoose ODM, optimizing queries and achieving 45% faster dashboard load times.',
        'Deployed and managed application infrastructure on AWS, ensuring high availability and scalable performance.',
      ],
    },
    {
      company: 'Amrood Labs',
      location: 'Lahore, Pakistan',
      position: 'Software Engineer',
      period: 'Sep 2022 - Aug 2024',
      achievements: [
        'Developed and maintained Full-stack web applications using Node.js, Express.js, Ruby on Rails, Hotwire Stimulus JS and React.js.',
        'Designed and implemented RESTful APIs, maintaining code consistency and best practices across multiple projects.',
        'Optimized background processing using Sidekiq with Redis, improving system performance and task handling efficiency.',
        'Performed test-driven development (TDD) using RSpec and ActiveRecord, ensuring high-quality code and reducing defects.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.position}</h3>
                  <p className="text-xl text-gray-200 font-semibold">{exp.company}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

