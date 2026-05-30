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
        'Implemented real-time market data streaming via WebSocket, fetching live rates from external bridge API and broadcasting to all connected clients',
        'Integrated FIX protocol parser for institutional market data feeds and order processing workflows',
        'Designed and integrated BullMQ queues to handle background jobs such as transaction processing, email notifications, and data synchronization',
        'Integrated Stripe for secure payment processing and financial transaction management',
        'Implemented real-time user activity tracking using Socket.IO, enabling live updates for admin monitoring dashboards',
        'Optimized MongoDB performance by redesigning schemas, indexing critical fields, and using the Aggregation Pipeline for complex queries, achieving 45% faster dashboard load times',
        'Developed automated reports for trades, money transactions, and live transaction monitoring using optimized MongoDB aggregation pipelines',
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
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal-scale">
          <h2 className="section-title">Experience</h2>
          <div className="accent-bar mb-4" />
          <p className="section-subtitle mb-0">Professional software engineering experience</p>
        </div>

        <div className="space-y-10" data-stagger data-stagger-delay="160">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="stagger-item surface-card-hover pl-6 pr-6 py-6 border-l-4 border-l-violet-500 relative overflow-hidden"
            >
              <div className="card-glow" />
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-zinc-50">{exp.position}</h3>
                  <p className="text-lg text-violet-400 font-medium">{exp.company}</p>
                  <p className="text-sm text-zinc-500">
                    {exp.location} • {exp.period}
                  </p>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-zinc-400 flex items-start text-sm leading-relaxed">
                      <span className="mr-2 mt-2 w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0" />
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
