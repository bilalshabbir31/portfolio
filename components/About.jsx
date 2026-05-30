const About = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Professional Expertise',
      description:
        'Specialized in full-stack development with Node.js, Express.js, Ruby on Rails, and React.js. Expert in building RESTful APIs, GraphQL, microservices architecture, and deploying scalable applications on AWS and Heroku. Proficient in PostgreSQL and MongoDB for database management.',
    },
    {
      icon: '💼',
      title: 'Proven Track Record',
      description:
        'Successfully delivered projects ranging from fintech trading platforms to email security solutions and big data analytics, consistently achieving significant performance improvements and business impact.',
    },
    {
      icon: '⚡',
      title: 'Technical Innovation',
      description:
        'Passionate about microservices architecture, real-time features with WebSocket and Socket.IO, serverless architectures with AWS Lambda, and optimizing database queries through strategic schema design, indexing, and aggregation pipelines.',
    },
  ];

  const stats = [
    { icon: '📅', value: '3+', label: 'Years Experience' },
    { icon: '✅', value: '10+', label: 'Major Projects' },
    { icon: '⚙️', value: '20+', label: 'Technologies' },
  ];

  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal-scale">
          <h2 className="section-title">About Me</h2>
          <div className="accent-bar mb-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="reveal-left">
              <h3 className="text-2xl font-bold gradient-text mb-4">Crafting Digital Excellence</h3>
              <div className="border-l-4 border-violet-400 pl-4 mb-6">
                <p className="text-muted leading-relaxed">
                  A passionate Full Stack Developer with over 3 years of experience building scalable, high-performance web applications that drive business results. Currently based in Dubai, UAE, specializing in modern web technologies, fintech systems, and cloud solutions.
                </p>
              </div>
            </div>

            <div className="space-y-4" data-stagger data-stagger-delay="100">
              {features.map((feature, index) => (
                <div key={index} className="stagger-item surface-card-hover p-5">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-ink mb-2">{feature.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6" data-stagger data-stagger-delay="150">
            {stats.map((stat, index) => (
              <div key={index} className="stagger-item surface-card-hover p-6 text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
