const About = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Professional Expertise',
      description: 'Specialized in full-stack development with Node.js, Express.js, Ruby on Rails, and React.js. Expert in building RESTful APIs, GraphQL, microservices architecture, and deploying scalable applications on AWS and Heroku. Proficient in PostgreSQL and MongoDB for database management.',
    },
    {
      icon: '💼',
      title: 'Proven Track Record',
      description: 'Successfully delivered projects ranging from gold trading platforms to email security solutions and big data analytics, consistently achieving significant performance improvements and business impact.',
    },
    {
      icon: '⚡',
      title: 'Technical Innovation',
      description: 'Passionate about microservices architecture, real-time features with Socket.IO and SSE, serverless architectures with AWS Lambda, and optimizing database queries through strategic schema design, indexing, and aggregation pipelines.',
    },
  ];

  const stats = [
    { icon: '📅', value: '3+', label: 'Years Experience' },
    { icon: '✅', value: '10+', label: 'Major Projects' },
    { icon: '⚙️', value: '20+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3 fade-in">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto slide-up"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Features */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Intro */}
            <div className="slide-up">
              <h3 className="text-2xl font-bold text-blue-600 mb-4 slide-up stagger-1">Crafting Digital Excellence</h3>
              <div className="border-l-4 border-blue-600 pl-4 mb-6 slide-up stagger-2">
                <p className="text-gray-700 leading-relaxed">
                  A passionate Full Stack Developer with over 3 years of experience building scalable, high-performance web applications that drive business results. Currently based in Dubai, UAE, specializing in modern web technologies and cloud solutions.
                </p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 slide-up stagger-${index + 1}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white border-2 border-gray-200 rounded-lg p-6 text-center hover:border-blue-600 hover:scale-105 transition-all duration-300 slide-up stagger-${index + 2}`}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
