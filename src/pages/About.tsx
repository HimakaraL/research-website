import logo from "../assets/about/sliit.png";

// member images
import m1 from "../assets/about/m1.png";
import m2 from "../assets/about/m2.png";
import m3 from "../assets/about/m3.png";
import m4 from "../assets/about/m4.png";

const members = [
  {
    name: "T.L. Samarasekara",
    id: "IT22337726",
    role: "Data Science",
    work: "Auditory Training Module",
    desc: "Developed adaptive learning system for auditory exercises using AI-based personalization.",
    image: m1,
  },
  {
    name: "H.H. Liyanage",
    id: "IT22550262",
    role: "Data Science",
    work: "Pronunciation Coach",
    desc: "Built ML-based speech feedback system for pronunciation improvement.",
    image: m2,
  },
  {
    name: "W.A.T.R. Wijesekara",
    id: "IT22586148",
    role: "Data Science",
    work: "Emergency Sound Detection",
    desc: "Implemented audio classification system to detect emergency sounds.",
    image: m4,
  },
  {
    name: "W.D.T.N. Weerasinghe",
    id: "IT22322630",
    role: "Data Science",
    work: "Gamified Learning",
    desc: "Designed interactive learning modules with engaging UI/UX.",
    image: m3,
  },
];

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-12 -mx-6 px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <img src={logo} alt="SLIIT" className="h-14 mx-auto" />
          <h1 className="text-5xl sm:text-5xl font-bold">Meet Our Team</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A passionate team of Data Science undergraduates from <strong>SLIIT</strong>, working on AI-driven solutions for accessibility and healthcare.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-12 space-y-16">

        {/* TEAM GRID */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center">👥 Team Members</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {members.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="flex justify-center pt-8">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-6 text-center space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    ID: {member.id}
                  </p>

                  <p className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                    {member.role}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-blue-600 text-sm font-semibold">
                      {member.work}
                    </p>

                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT TEAM BREAKDOWN */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-center">🎯 Roles & Contributions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <p className="text-3xl mb-2">🎵</p>
              <p className="font-semibold text-blue-900">Auditory Training Module</p>
              <p className="text-sm text-blue-700 mt-2">Adaptive learning system for auditory exercises using AI-based personalization</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <p className="text-3xl mb-2">🗣️</p>
              <p className="font-semibold text-purple-900">Pronunciation Coach</p>
              <p className="text-sm text-purple-700 mt-2">ML-based speech feedback system for pronunciation improvement</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
              <p className="text-3xl mb-2">🚨</p>
              <p className="font-semibold text-red-900">Emergency Sound Detection</p>
              <p className="text-sm text-red-700 mt-2">Audio classification system to detect emergency sounds</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <p className="text-3xl mb-2">🎮</p>
              <p className="font-semibold text-green-900">Gamified Learning</p>
              <p className="text-sm text-green-700 mt-2">Interactive learning modules with engaging UI/UX design</p>
            </div>
          </div>
        </section>

        {/* CONTACT & SOCIAL */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white p-10 rounded-3xl text-center space-y-6">
          <h2 className="text-3xl font-bold">📬 Connect With Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or want to know more about our project? Reach out to us through the contact page.
          </p>
          <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get in Touch →
          </a>
        </section>
      </div>
    </div>
  );
}
