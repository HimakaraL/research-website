import type { ReactNode } from "react";
import { BookOpen, Lightbulb, Target, Zap, Code, Database, Palette, Volume2, Server, Rocket } from "lucide-react";
import img1 from "../assets/domainPage/img1.png";
import img2 from "../assets/domainPage/img2.png";

const Card = ({ title, children, icon: Icon }: { title: string; children: ReactNode; icon?: any }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    {Icon && (
      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4">
        <Icon className="text-green-600" size={24} />
      </div>
    )}
    <h2 className="font-semibold text-lg text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-600 text-[15px] leading-relaxed">{children}</div>
  </div>
);

export default function Domain() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-green-50 py-10 sm:py-12 -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">Research & Domain</h1>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Comprehensive analysis of literature, identified gaps, objectives, methodology, and technical approach.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-20">

        {/* LITERATURE SURVEY */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <BookOpen className="text-green-600" size={28} />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Literature Survey</h2>
              <p className="text-gray-600 mt-1">Comprehensive review of existing auditory-verbal therapy systems</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Existing auditory-verbal therapy systems such as <strong>Angel Sound</strong>, <strong>LACE</strong>, and <strong>Hear Me Read</strong>
                provide structured training for hearing-impaired individuals.
              </p>
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded space-y-3">
                <p className="font-semibold text-gray-900">Key Findings:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Systems primarily designed for <strong>English-speaking</strong> users</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Limited Sinhala</strong> language support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Lack of <strong>AI-driven personalization</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>No <strong>emergency sound awareness</strong> features</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">Systems Analyzed</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Papers Reviewed</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <img src={img2} alt="Comparison / Chart" className="w-full h-72 object-contain rounded-lg" />
              <p className="text-sm text-gray-600 text-center mt-4">System Comparison Analysis</p>
            </div>
          </div>
        </section>

        {/* RESEARCH GAP */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="text-red-600" size={28} />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Research Gap</h2>
              <p className="text-gray-600 mt-1">Identified limitations in existing solutions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card title="Language Gap" icon={BookOpen}>
              No adaptive auditory-verbal therapy systems tailored for Sinhala-speaking users with cultural context.
            </Card>

            <Card title="Emergency Awareness">
              Absence of systems focusing on emergency sound recognition (sirens, alarms, critical alerts).
            </Card>

            <Card title="Therapist Analytics">
              Lack of comprehensive dashboards for monitoring progress, performance, and personalization metrics.
            </Card>

            <Card title="Personalization">
              Existing tools lack sophisticated AI-driven adaptive learning and difficulty progression.
            </Card>
          </div>
        </section>

        {/* PROBLEM STATEMENT */}
        <section className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 rounded-3xl p-10 space-y-6 border-2 border-red-200">
          <div className="flex items-center gap-3">
            <span className="text-4xl"></span>
            <h2 className="text-4xl font-bold">Problem Statement</h2>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed max-w-3xl">
            <strong>Hearing-impaired individuals</strong> lack <strong>personalized, language-specific, and emergency-aware</strong>
            auditory learning systems that support both daily communication and safety readiness. Existing solutions are primarily 
            English-based, lack AI personalization, and don't address emergency sound recognition needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm"><span className="font-bold">Target Users:</span> Sinhala-speaking hearing-impaired individuals</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm"><span className="font-bold">Scope:</span> Education & safety awareness</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm"><span className="font-bold">Context:</span> Sri Lankan healthcare</p>
            </div>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <Target className="text-green-600" size={28} />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Research Objectives</h2>
              <p className="text-gray-600 mt-1">Key goals to address identified gaps</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Adaptive Training", desc: "Build adaptive auditory training system with progressive difficulty" },
              { title: "Sound Recognition", desc: "Improve emergency sound recognition accuracy and response time" },
              { title: "Analytics", desc: "Provide therapist analytics dashboard for progress tracking" },
              { title: "Sinhala Support", desc: "Enable Sinhala-based learning and cultural adaptation" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition">
                <h3 className="text-gray-900 font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Zap className="text-purple-600" size={28} />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Methodology</h2>
              <p className="text-gray-600 mt-1">Research approach and implementation steps</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-lg font-bold text-purple-600 flex-shrink-0">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Data Collection</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">Recorded audio samples and user responses gathered through interviews with hearing-impaired children and adults. Collected Sinhala speech data for model training.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-lg font-bold text-purple-600 flex-shrink-0">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Model Training</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">Wav2Vec 2.0 fine-tuned using pretrained Facebook XLSR-300M model for Sinhala speech understanding. Trained on collected dataset with augmentation.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center text-lg font-bold text-purple-600 flex-shrink-0">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Adaptive Loop</h4>
                  <p className="text-gray-600 mt-2 leading-relaxed">Feedback loop continuously adapts difficulty levels based on user performance. Real-time personalization based on accuracy and response time.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <img src={img1} alt="AI Pipeline" className="w-full h-80 object-contain rounded-lg" />
              <p className="text-sm text-gray-600 text-center mt-4">AI Processing Pipeline Architecture</p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Code className="text-orange-600" size={28} />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Technologies Used</h2>
              <p className="text-gray-600 mt-1">Technical stack and tools for implementation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Machine Learning" icon={Database}>Advanced adaptive learning models with personalization algorithms</Card>
            <Card title="Deep Learning" icon={Zap}>Audio and speech analysis using neural networks</Card>
            <Card title="HCI Design" icon={Palette}>User-centered interaction design for accessibility</Card>
            <Card title="Audio Processing" icon={Volume2}>Librosa, PyAudio, FFmpeg, WebAudio API</Card>
            <Card title="Backend Stack" icon={Server}>FastAPI, PostgreSQL, Redis, Python</Card>
            <Card title="Frontend & Hosting" icon={Rocket}>React, TypeScript, HuggingFace, Vercel</Card>
          </div>
        </section>

      </div>
    </div>
  );
}
