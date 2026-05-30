const Education = () => {
  return (
    <section id="education" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center mb-12 reveal-scale">
          <h2 className="section-title">Education</h2>
          <div className="accent-bar mb-4" />
          <p className="section-subtitle mb-0">Academic background and qualifications</p>
        </div>

        <div className="surface-card-hover p-6 md:p-8 reveal-flip">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-zinc-50">University of Management And Technology</h3>
            <p className="text-lg text-violet-400 font-medium">BS in Computer Science</p>
            <p className="text-sm text-zinc-500">Sept 2018 - Nov 2022 • GPA: 3.33/4.0</p>
          </div>

          <div className="mb-4 highlight-box">
            <h4 className="font-semibold text-zinc-100 mb-2">Final Year Project</h4>
            <p className="text-zinc-300 mb-2 font-medium">Pakistan Sign Language using Deep Learning Model</p>
            <p className="text-zinc-400 text-sm">
              A research project using Deep Learning models to solve text translation problems of English to Pakistan sign language and Pakistan sign language to English. The deep learning models covered include LSTM, BILSTM, GRU, BIGRU, and Attention Mechanisms.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-100 mb-2">Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Deep Learning', 'Cloud Computing'].map((course, idx) => (
                <span key={idx} className="tech-badge">
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
