const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Ruby', 'Java', 'Python', 'Golang', 'C++'],
      color: 'blue',
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'Stimulus JS', 'Hotwire', 'Turbo Rails'],
      color: 'purple',
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Ruby on Rails', 'Ruby on Jets', 'RESTful APIs', 'GraphQL', 'gRPC'],
      color: 'pink',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'MSSQL', 'MySQL', 'Redis'],
      color: 'blue',
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Heroku', 'Docker', 'Terraform', 'Lambda', 'S3', 'EC2', 'Redshift', 'Kafka'],
      color: 'purple',
    },
    {
      category: 'Tools & Testing',
      skills: ['Git', 'RSpec', 'ActiveRecord', 'Sidekiq', 'BullMQ', 'Swagger'],
      color: 'pink',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-500/10 text-blue-400',
      purple: 'from-purple-500 to-purple-600 bg-purple-500/10 text-purple-400',
      pink: 'from-pink-500 to-pink-600 bg-pink-500/10 text-pink-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${getColorClasses(category.color)} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${getColorClasses(category.color)} border border-current/20 hover:scale-110 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto hover-lift">
            <h3 className="text-2xl font-bold text-gray-100 mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:scale-110 transition-transform duration-200">
                Urdu
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20 hover:scale-110 transition-transform duration-200">
                English
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
