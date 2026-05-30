const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Golang', 'Ruby', 'Python', 'Java', 'C++'],
      icon: '💻',
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Redux', 'Zustand', 'RTK Query', 'Tailwind CSS', 'Stimulus JS', 'Hotwire', 'Turbo Rails'],
      icon: '🎨',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Ruby on Rails', 'RESTful APIs', 'GraphQL', 'gRPC'],
      icon: '⚙️',
    },
    {
      category: 'Fintech & Real-time',
      skills: ['WebSocket', 'FIX Parser', 'Stripe', 'Fintech', 'Socket.IO', 'BullMQ'],
      icon: '💳',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'MSSQL', 'MySQL', 'Redis', 'Kafka'],
      icon: '🗄️',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform', 'Lambda', 'S3', 'EC2', 'Heroku', 'Vercel', 'Ansible'],
      icon: '☁️',
    },
    {
      category: 'Tools & Testing',
      skills: ['Git', 'RSpec', 'Sidekiq', 'Swagger'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal-flip">
          <h2 className="section-title">Technical Skills</h2>
          <div className="accent-bar mb-4" />
          <p className="section-subtitle mb-0">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" data-stagger data-stagger-delay="120">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="stagger-item surface-card-hover p-5"
              data-stagger-badges="true"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-ink">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="tech-badge badge-pop-item">
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
