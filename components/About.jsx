const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 hover-lift animate-slide-up">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with 3 years of experience 
              designing and building scalable, high-performance web applications. I specialize in both front-end and back-end 
              development using technologies like <span className="text-purple-400 font-semibold">Node.js</span>, 
              <span className="text-purple-400 font-semibold"> Express.js</span>, 
              <span className="text-purple-400 font-semibold"> Ruby on Rails</span>, 
              <span className="text-purple-400 font-semibold"> React.js</span>, and <span className="text-purple-400 font-semibold">AWS services</span>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a strong problem-solver with expertise in developing full-stack SaaS applications, serverless big data solutions, 
              RESTful APIs, microservices architecture, and deploying scalable applications on AWS and Heroku. My experience spans 
              from building responsive user interfaces to architecting robust backend systems and optimizing database performance.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Location</h3>
              <p className="text-gray-300">📍 Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
