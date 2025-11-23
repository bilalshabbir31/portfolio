const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 md:p-12 hover-lift animate-slide-up">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              University of Management And Technology
            </h3>
            <p className="text-xl text-gray-200 mb-2">BS in Computer Science</p>
            <p className="text-gray-400 mb-6">Sept 2018 - Nov 2022 | GPA: 3.33 / 4.0</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">Final Year Project</h4>
              <p className="text-gray-300 leading-relaxed">
                <span className="font-semibold text-blue-400">Pakistan Sign Language using Deep Learning Model</span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                A research project using Deep Learning models to solve text translation problems of English to Pakistan sign language 
                and Pakistan sign language to English. The deep learning models covered to achieve translation goals are LSTM, BILSTM, 
                GRU, BIGRU, and Attention Mechanisms.
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-gray-200 mb-3">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-lg text-sm border border-purple-500/20">
                  Deep Learning
                </span>
                <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-lg text-sm border border-pink-500/20">
                  Cloud Computing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

