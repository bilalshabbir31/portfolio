const Experience = () => {
  const experiences = [
    {
      company: 'Save in Gold',
      location: 'Dubai, UAE',
      position: 'Software Engineer',
      period: 'Dec 2024 - Present',
      achievements: [
        'Built a high-performance admin dashboard using React.js and Tailwind CSS, delivering responsive layouts, reusable UI components, and enhanced data visualization',
        'Architected and maintained scalable backend services with Node.js and Express.js, implementing secure RESTful APIs with JWT authentication and role-based access control',
        'Designed and integrated BullMQ queues to handle background jobs such as transaction processing, email notifications, and data synchronization',
        'Implemented real-time user activity tracking using Socket.IO, enabling live updates for admin monitoring dashboards',
        'Optimized MongoDB performance by redesigning schemas, indexing critical fields, and using the Aggregation Pipeline for complex queries, achieving 45% faster dashboard load times',
        'Developed automated reports for gold trades, money transactions, and live transactions using optimized MongoDB aggregation pipelines',
        'Deployed and managed cloud infrastructure on AWS ensuring high availability, secure data handling, and scalable performance',
      ],
    },
    {
      company: 'Amrood Labs',
      location: 'Lahore, Pakistan',
      position: 'Software Engineer',
      period: 'Sep 2022 - Aug 2024',
      achievements: [
        'Developed and maintained Full-stack web applications using Node.js, Express.js, Ruby on Rails, Hotwire Stimulus JS and React.js',
        'Designed and implemented RESTful APIs, maintaining code consistency and best practices across multiple projects',
        'Optimized background processing using Sidekiq with Redis, improving system performance and task handling efficiency',
        'Performed test-driven development (TDD) using RSpec and ActiveRecord, ensuring high-quality code and reducing defects in production',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title fade-in">Experience</h2>
        <p className="section-subtitle fade-in">Professional software engineering experience</p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white border-l-4 border-blue-600 pl-6 pr-6 py-6 rounded-r-lg shadow-sm card-hover relative overflow-hidden slide-up ${index === 0 ? 'stagger-1' : 'stagger-2'}`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50"></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-600">{exp.location} • {exp.period}</p>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="mr-2 mt-2 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
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
