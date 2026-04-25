import type { ReactNode } from "react";
import img1 from "../assets/domainPage/img1.png";
import img2 from "../assets/domainPage/img2.png";

const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <h2 className="font-semibold text-lg text-gray-900 mb-3">{title}</h2>
    <div className="text-gray-600 text-[15px] leading-relaxed">{children}</div>
  </div>
);

export default function Domain() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">

        {/* HEADER */}
        <section className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Research & Domain</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Demonstrating the research foundation, identified gaps, and technical approach behind the system.
          </p>
        </section>

        {/* LITERATURE SURVEY */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Literature Survey</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-600">
              <p>
                Existing auditory-verbal therapy systems such as <strong>Angel Sound</strong>, <strong>LACE</strong>, and <strong>Hear Me Read</strong>
                provide structured training for hearing-impaired individuals.
              </p>
              <p>
                However, these systems are primarily designed for English-speaking users and lack
                localization for Sinhala language and cultural context.
              </p>
              <p>
                There is also limited integration of AI-driven personalization and emergency sound
                awareness in existing solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
              <img src={img2} alt="Comparison / Chart" className="w-full h-64 object-contain" />
            </div>
          </div>
        </section>

        {/* RESEARCH GAP */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Research Gap</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card title="Language Gap">
              No adaptive auditory-verbal therapy systems tailored for Sinhala-speaking users.
            </Card>

            <Card title="Emergency Awareness">
              No systems focusing on emergency sound recognition (sirens, alarms, alerts).
            </Card>

            <Card title="Analytics Missing">
              Lack of therapist dashboards for monitoring progress and performance.
            </Card>

            <Card title="Personalization">
              Existing tools lack AI-driven adaptive learning capabilities.
            </Card>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Problem Statement</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Hearing-impaired individuals lack personalized, language-specific, and emergency-aware
            auditory learning systems that support both daily communication and safety readiness.
          </p>
        </section>

        {/* OBJECTIVES */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Objectives</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Build adaptive auditory training system",
              "Improve emergency sound recognition",
              "Provide therapist analytics dashboard",
              "Enable Sinhala-based learning",
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* METHODOLOGY */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Methodology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-600">
              <p>
                Data collection was conducted using recorded audio samples and user responses gathered
                through interviews with hearing-impaired children.
              </p>
              <p>
                A deep learning model based on <strong>Wav2Vec 2.0</strong> was fine-tuned using a
                pretrained Facebook XLSR-300M model for speech understanding.
              </p>
              <p>
                A feedback loop continuously adapts difficulty levels based on user performance.
              </p>
              <p>
                Results are visualized through a therapist dashboard for monitoring progress.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
              <img src={img1} alt="AI Pipeline" className="w-full h-64 object-contain" />
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Technologies Used</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card title="Machine Learning">Adaptive learning models</Card>
            <Card title="Deep Learning">Audio and speech analysis</Card>
            <Card title="HCI">User-centered interaction design</Card>
            <Card title="Speech Processing">Librosa, PyAudio</Card>
            <Card title="Backend">FastAPI + PostgreSQL</Card>
            <Card title="Frontend & AI Hosting">React + HuggingFace</Card>
          </div>
        </section>

      </div>
    </div>
  );
}
