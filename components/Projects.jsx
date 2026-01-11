const Projects = () => {
  const projects = [
    {
      title: 'Save in Gold - Gold Trading Platform',
      period: 'Dec 2024 - Present',
      description: 'A comprehensive gold trading platform enabling users to purchase physical gold and trade online with real-time pricing.',
      highlights: [
        'Built high-performance admin dashboard using React.js and Tailwind CSS with responsive layouts and reusable UI components',
        'Architected scalable backend services with Node.js and Express.js, implementing secure RESTful APIs with JWT authentication',
        'Designed and integrated BullMQ queues for background jobs (transaction processing, email notifications, data synchronization)',
        'Implemented real-time user activity tracking using Socket.IO for live admin monitoring dashboards',
        'Optimized MongoDB performance achieving 45% faster dashboard load times through schema redesign and aggregation pipelines',
        'Developed automated reports for gold trades, money transactions, and live transactions',
        'Deployed and managed cloud infrastructure on AWS ensuring high availability and scalable performance',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Mongoose', 'Redis', 'BullMQ', 'Socket.IO', 'Tailwind CSS', 'AWS'],
    },
    {
      title: 'E-commerce Microservices System',
      period: 'Oct 2024 - Dec 2024',
      description: 'Scalable e-commerce platform using microservices architecture with independently deployed services.',
      highlights: [
        'Designed microservices architecture with Product, Order, and Auth services',
        'Implemented PostgreSQL with Prisma ORM for efficient relational data management',
        'Built event-driven workflow using Apache Kafka for reliable inter-service communication',
        'Integrated robust order tracking system with event streams',
        'Used gRPC for high-performance inter-service communication',
        'Developed frontend using React for fast and user-friendly shopping experience',
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Apache Kafka', 'gRPC', 'Redis'],
    },
    {
      title: 'DMARCReport - Email Security Platform',
      period: 'Feb 2024 - Aug 2024',
      description: 'Web application leveraging DMARC, SPF, and DKIM protocols to protect domains from phishing, fraud, and impersonation.',
      highlights: [
        'Maintained platform serving large user base with extensive reporting data',
        'Developed new features for domain protection and monitoring',
        'Implemented DMARC, SPF, and DKIM protocol integrations',
        'Built comprehensive reporting dashboards for security analytics',
        'Managed AWS infrastructure with Terraform for scalability',
      ],
      tech: ['PostgreSQL', 'Sidekiq', 'AWS EC2', 'Lambda', 'S3', 'Terraform', 'Zoho Billing', 'CanCan', 'ActiveAdmin', 'RSpec', 'Redis'],
    },
    {
      title: 'BentPixels - Big Data Analytics Platform',
      period: 'Jan 2023 - Jan 2024',
      description: 'Serverless big data solution processing 100+ million YouTube records monthly.',
      highlights: [
        'Led development leveraging Ruby on Jets, AWS Lambda, Redshift, and S3',
        'Optimized data ingestion into Redshift using S3 for scalability and cost-effectiveness',
        'Created optimized summaries enabling efficient querying and analysis',
        'Developed intuitive Power BI dashboard for interactive data exploration',
        'Delivered robust solution for large-scale data handling, processing, and visualization',
      ],
      tech: ['Ruby on Rails', 'Ruby on Jets', 'PostgreSQL', 'AWS Redshift', 'S3', 'Lambda', 'ActiveAdmin', 'Swagger', 'Redis'],
    },
    {
      title: 'Sludge Reducing Bacteria - E-commerce Platform',
      period: 'Nov 2022 - Jan 2024',
      description: 'Platform for wastewater treatment solutions with integrated e-commerce and dosage calculator.',
      highlights: [
        'Designed and developed platform from ground up for sludge reduction solutions',
        'Built integrated e-commerce function for product purchasing',
        'Created custom dosage calculator with PDF generation using WickedPdf',
        'Implemented real-time updates using Hotwire and Turbo Stream',
        'Deployed on Heroku with background job processing using SuckerPunch',
      ],
      tech: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS', 'Heroku', 'ActiveAdmin', 'SuckerPunch', 'SendGrid', 'WickedPdf', 'Hotwire', 'Turbo Stream', 'Stimulus JS'],
    },
    {
      title: 'News API - Personal Project',
      period: 'Sep 2024 - Oct 2024',
      description: 'RESTful API with authentication, user management, and news CRUD operations.',
      highlights: [
        'Built Express.js API with user registration and authentication',
        'Implemented news management system with full CRUD functionality',
        'Integrated BullMQ for background processing',
        'Used Prisma ORM for PostgreSQL database management',
        'Added logging, caching, and rate limiting for performance and security',
      ],
      tech: ['Express.js', 'Node.js', 'Node Mailer', 'BullMQ', 'Redis', 'Prisma', 'PostgreSQL'],
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Projects</h2>
        <p className="text-gray-600 mb-8">Key projects demonstrating full-stack development expertise</p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-0">{project.title}</h3>
                <span className="text-sm text-gray-500 whitespace-nowrap bg-blue-50 px-3 py-1 rounded-full">{project.period}</span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                <ul className="space-y-1.5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-md border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
