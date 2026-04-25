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
    name: " W.D.T.N. Weerasinghe",
    id: "IT22322630",
    role: "Data Science",
    work: "Gamified Learning",
    desc: "Designed interactive learning modules with engaging UI/UX.",
    image: m3,
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <img src={logo} alt="SLIIT" className="h-12 mx-auto" />
          <h1 className="text-3xl sm:text-4xl font-bold">Our Team</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate team of Data Science undergraduates from SLIIT, working on AI-driven solutions for accessibility and healthcare.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {members.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* IMAGE */}
{/* IMAGE */}
<div className="flex justify-center pt-6">
  <img
    src={member.image}
    alt={member.name}
    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition duration-300"
  />
</div>

              {/* CONTENT */}
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {member.id} • {member.role}
                </p>

                <div className="text-blue-600 text-sm font-medium">
                  {member.work}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* GROUP PHOTO (IMPORTANT) */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold">Our Team in Action</h2>

          <div className="bg-white rounded-3xl shadow-sm p-4 border border-gray-100">
            <img
              src={m1} 
              alt="Team Group"
              className="w-full h-72 object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
}