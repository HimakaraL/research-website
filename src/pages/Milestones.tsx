export default function Milestones() {
  const data = [
    ["Proposal", "Jan 2026", "10%"],
    ["Progress 1", "Feb 2026", "20%"],
    ["Progress 2", "Mar 2026", "20%"],
    ["Final", "Apr 2026", "50%"],
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">

      <h2 className="text-lg font-semibold mb-5 text-primary">
        Project Milestones
      </h2>

      {/* MOBILE VIEW (Cards) */}
      <div className="space-y-3 md:hidden">

        {data.map((row, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{row[0]}</h3>
              <span className="text-primary font-medium">{row[2]}</span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {row[1]}
            </p>

          </div>
        ))}

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block">

        <table className="w-full text-sm">

          <thead className="text-left text-gray-500 border-b">
            <tr>
              <th className="py-2">Milestone</th>
              <th>Date</th>
              <th>Marks</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3">{row[0]}</td>
                <td>{row[1]}</td>
                <td className="font-medium text-primary">{row[2]}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}