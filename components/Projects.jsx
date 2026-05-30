const Projects = () => {
  const projects = [
    {
      title: 'Save in Gold — Fintech Trading Platform',
      period: 'Dec 2024 - Present',
      description:
        'A fintech platform enabling users to buy, sell, and manage precious metals online with real-time market data and secure payment processing.',
      highlights: [
        'Built high-performance admin dashboard using React.js and Tailwind CSS with responsive layouts and reusable UI components',
        'Architected scalable backend services with Node.js and Express.js, implementing secure RESTful APIs with JWT authentication',
        'Implemented real-time market rate updates by fetching live data from external bridge API and broadcasting to all connected clients via WebSocket',
        'Integrated FIX protocol parser for institutional-grade market data ingestion and order flow processing',
        'Designed and integrated BullMQ queues for background jobs (transaction processing, email notifications, data synchronization)',
        'Implemented real-time user activity tracking using Socket.IO for live admin monitoring dashboards',
        'Integrated Stripe for secure payment processing and transaction management',
        'Optimized MongoDB performance achieving 45% faster dashboard load times through schema redesign and aggregation pipelines',
        'Developed automated reports for trades, money transactions, and live transaction monitoring',
        'Deployed and managed cloud infrastructure on AWS ensuring high availability and scalable performance',
      ],
      tech: [
        'React.js',
        'Node.js',
        'Express.js',
        'TypeScript',
        'MongoDB',
        'Redis',
        'BullMQ',
        'WebSocket',
        'Socket.IO',
        'FIX Parser',
        'Stripe',
        'Fintech',
        'Tailwind CSS',
        'AWS',
      ],
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
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">Projects</h2>
          <div className="accent-bar mb-4" />
          <p className="section-subtitle mb-0">Key projects demonstrating full-stack development expertise</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 md:p-8 relative overflow-hidden reveal"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <span className="text-sm text-cyan-400 whitespace-nowrap bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {project.period}
                  </span>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-slate-400 text-sm flex items-start">
                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-200 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
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
