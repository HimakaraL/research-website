export default function Milestones() {
  const milestones = [
    {
      title: "Project Proposal",
      date: "Sep 2025",
      desc: "Idea validation and requirement analysis",
    },
    {
      title: "Progress Presentation 1",
      date: "Jan 2026",
      desc: "System design and early prototype",
    },
    {
      title: "Progress Presentation 2",
      date: "Mar 2026",
      desc: "ML models and implementation progress",
    },
    {
      title: "System Testing",
      date: "Apr 2026",
      desc: "Testing, debugging, and improvements",
    },
    {
      title: "Final Assessment & Viva",
      date: "May 2026",
      desc: "Complete system integration and presentation",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 py-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Project Timeline
          </h1>
          <p className="text-gray-600 mt-2">
            A clear view of the project progress and milestones
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />

          <div className="space-y-12">
            {milestones.map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />

                {/* CARD */}
                <div className="ml-12 sm:ml-0 sm:w-1/2">
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-6 border border-gray-100">
                    
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-blue-600 text-sm font-medium">
                        {item.date}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>

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