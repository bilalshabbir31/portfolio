const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">About</h2>
        <p className="text-gray-600 mb-8">Professional background and expertise</p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              I'm a Full-Stack Developer with 3 years of experience designing and building scalable, high-performance web applications. I specialize in both front-end and back-end development using technologies like Node.js, Express.js, Ruby on Rails, React.js, and AWS services.
            </p>

            <p>
              I'm a strong problem-solver with expertise in developing full-stack SaaS applications, serverless big data solutions, RESTful APIs, microservices architecture, and deploying scalable applications on AWS and Heroku. My experience spans from building responsive user interfaces to architecting robust backend systems and optimizing database performance.
            </p>

            <div className="pt-6 border-t border-gray-200 mt-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-gray-900 font-semibold">Dubai, United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
