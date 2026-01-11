const Education = () => {
  return (
    <section id="education" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Education</h2>
        <p className="text-gray-600 mb-8">Academic background and qualifications</p>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900">University of Management And Technology</h3>
            <p className="text-lg text-blue-600 font-medium">BS in Computer Science</p>
            <p className="text-sm text-gray-600">Sept 2018 - Nov 2022 • GPA: 3.33/4.0</p>
          </div>

          <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h4 className="font-semibold text-gray-900 mb-2">Final Year Project</h4>
            <p className="text-gray-900 mb-2 font-medium">Pakistan Sign Language using Deep Learning Model</p>
            <p className="text-gray-700 text-sm">
              A research project using Deep Learning models to solve text translation problems of English to Pakistan sign language and Pakistan sign language to English. The deep learning models covered include LSTM, BILSTM, GRU, BIGRU, and Attention Mechanisms.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Deep Learning', 'Cloud Computing'].map((course, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-200">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
