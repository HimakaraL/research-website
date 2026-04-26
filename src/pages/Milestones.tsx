import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Milestones() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const milestones = [
    {
      title: "Project Proposal",
      date: "Sep 2025",
      desc: "Idea validation and requirement analysis",
      marks: "10/10",
      status: "Completed",
      details: [
        "Problem statement and research objectives defined",
        "Literature survey completed",
        "System architecture proposed",
        "Team roles and responsibilities assigned",
      ],
    },
    {
      title: "Progress Presentation 1",
      date: "Jan 2026",
      desc: "System design and early prototype",
      marks: "15/15",
      status: "Completed",
      details: [
        "Design document finalized with UI/UX mockups",
        "Database schema and API specifications completed",
        "Initial prototype developed and demonstrated",
        "Technical stack finalized (React, FastAPI, PostgreSQL)",
      ],
    },
    {
      title: "Progress Presentation 2",
      date: "Mar 2026",
      desc: "ML models and implementation progress",
      marks: "15/15",
      status: "Completed",
      details: [
        "Wav2Vec 2.0 model trained for audio recognition",
        "Speech processing pipeline implemented",
        "Therapist dashboard 80% complete",
        "Gamified learning modules functional",
      ],
    },
    {
      title: "System Testing",
      date: "Apr 2026",
      desc: "Testing, debugging, and improvements",
      marks: "10/10",
      status: "Completed",
      details: [
        "Unit testing and integration testing in progress",
        "Performance optimization underway",
        "User acceptance testing scheduled",
        "Security audit preparation",
      ],
    },
    {
      title: "Viva",
      date: "May 2026",
      desc: "Final viva-voce presentation and defense",
      marks: "",
      status: "Upcoming",
      details: [
        "Live demonstration of the complete system",
        "Defense of project methodology and findings",
        "Q&A session with evaluators",
        "Project evaluation and feedback",
      ],
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-slate-100 py-12 -mx-6 px-6 mb-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl sm:text-5xl font-bold">📅 Project Timeline</h1>
          <p className="text-gray-600 text-lg">Track project progress across key milestones</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-12">

        {/* SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 text-center">
            <div className="text-3xl font-bold text-green-600">4</div>
            <div className="text-sm text-gray-700 mt-1">Completed Milestones</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200 text-center">
            <div className="text-3xl font-bold text-yellow-600">1</div>
            <div className="text-sm text-gray-700 mt-1">Upcoming Assessment</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center">
            <div className="text-3xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-700 mt-1">Total Marks</div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />

          <div className="space-y-8">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* DOT */}
                <div className={`absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow transition ${
                  item.status === "Completed" ? "bg-green-500" : item.status === "In Progress" ? "bg-yellow-500" : "bg-gray-400"
                }`} />

                {/* CARD */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 cursor-pointer">
                  <div
                    onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6 border border-gray-100 group"
                  >
                    
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                          expandedIdx === i ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* HEADER INFO */}
                    <div className="flex items-center gap-4 mb-3 flex-wrap">
                      <span className="text-blue-600 text-sm font-semibold bg-blue-50 px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        item.status === "Completed" ? "bg-green-50 text-green-700" :
                        item.status === "In Progress" ? "bg-yellow-50 text-yellow-700" :
                        "bg-blue-50 text-blue-700"
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* EXPANDED DETAILS */}
                    {expandedIdx === i && (
                      <div className="mt-5 pt-5 border-t border-gray-100 space-y-3 animate-in fade-in">
                        <h4 className="font-semibold text-gray-700 text-sm">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>
                </div>

                {/* spacing */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}