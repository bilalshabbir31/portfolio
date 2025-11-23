const Projects = () => {
  const projects = [
    {
      title: 'Save in Gold',
      period: 'Jan 2025 - Nov 2025',
      label: 'Save in Gold',
      description: 'A comprehensive gold trading platform enabling users to purchase physical gold and trade online with real-time pricing. Built a full-stack admin panel and REST APIs for mobile app integration.',
      tech: ['React.js', 'Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'Mongoose', 'Redis', 'SSE', 'BullMQ', 'Tailwind CSS', 'AWS'],
      highlights: [
        'Real-time gold price updates using Server-Sent Events (SSE)',
        'Full-stack admin panel for managing users, transactions, and inventory',
        'RESTful APIs for mobile app integration',
        'Optimized database queries for improved performance',
        'BullMQ queue for background processing jobs',
        'Detailed reports of all user live transactions with export functionality',
        'Complete transaction history tracking system',
        'Comprehensive stats and analytics dashboard',
      ],
    },
    {
      title: 'E-commerce Store',
      period: 'Sep 2024 - Dec 2024',
      label: 'Personal Project',
      description: 'A microservices-based e-commerce platform built with 3 independent microservices. Features user-friendly product browsing, secure order placement, and comprehensive payment processing capabilities.',
      tech: ['React.js', 'Express.js', 'gRPC', 'Kafka', 'Mongoose', 'MongoDB', 'Stripe API', 'Cloudinary', 'Redis'],
      highlights: [
        '3 microservices architecture with gRPC communication',
        'Event-driven architecture using Kafka for message queuing',
        'Secure payment processing with Stripe',
        'Admin panel for product and order management',
      ],
    },
    {
      title: 'DMARCReport',
      period: 'Feb 2024 - Aug 2024',
      label: 'Amrood Labs',
      description: 'A web application that leverages DMARC, SPF, and DKIM protocols to protect domains from phishing, fraud, and impersonation. Developed by DuoCircle, this project serves a large user base with extensive reporting data.',
      tech: ['PostgreSQL', 'Sidekiq', 'Sidekiq Cron', 'AWS EC2', 'Lambda', 'S3', 'Terraform', 'Zoho Billing', 'CanCan', 'ActiveAdmin', 'RSpec', 'RuboCop', 'Redis'],
      highlights: [
        'DMARC, SPF, and DKIM protocol implementation',
        'Large-scale user base with extensive reporting',
        'AWS infrastructure with Terraform',
      ],
    },
    {
      title: 'BentPixels',
      period: 'Jan 2023 - Jan 2024',
      label: 'Amrood Labs',
      description: 'Led the development of a project leveraging serverless big data technologies. The goal was to fetch 100+ million YouTube records monthly for each report. Optimized data ingestion into Redshift using S3, benefiting from scalability and cost-effectiveness.',
      tech: ['Ruby on Rails', 'Ruby on Jets', 'PostgreSQL', 'AWS Redshift', 'S3', 'Lambda', 'ActiveAdmin', 'Swagger', 'Redis'],
      highlights: [
        'Processed 100+ million records monthly',
        'Serverless architecture with AWS Lambda',
        'Power BI dashboard for data visualization',
      ],
    },
    {
      title: 'Sludge Reducing Bacteria',
      period: 'Nov 2022 - Jan 2024',
      label: 'Amrood Labs',
      description: 'Designed and developed this platform from the ground up, delivering a proven solution for reducing sludge and optimizing wastewater treatment. Features an integrated e-commerce function and a custom-built dosage calculator.',
      tech: ['Ruby on Rails', 'PostgreSQL', 'Tailwind CSS', 'Heroku', 'ActiveAdmin', 'SuckerPunch', 'SendGrid', 'WickedPdf', 'Hotwire', 'Turbo stream', 'Stimulus JS'],
      highlights: [
        'Custom dosage calculator with PDF generation',
        'E-commerce integration for product purchasing',
        'Built from ground up',
      ],
    },
  ];

  const getLabelColor = (label) => {
    const colors = {
      'Save in Gold': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Amrood Labs': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Personal Project': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    };
    return colors[label] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover-lift animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400 font-medium">{project.period}</span>
                  {project.label && (
                    <span className={`text-xs px-2 py-1 rounded border ${getLabelColor(project.label)}`}>
                      {project.label}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-100 mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs"
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
