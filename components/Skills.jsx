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
      skills: ['Git', 'RSpec', 'Sidekiq', 'BullMQ', 'Swagger'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title fade-in">Technical Skills</h2>
        <p className="section-subtitle fade-in">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white border border-gray-200 rounded-lg p-5 shadow-sm card-hover slide-up stagger-${Math.min(index + 1, 4)}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-200"
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
