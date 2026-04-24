const members = [
  { name: "Member 1", email: "email@example.com" },
  { name: "Member 2", email: "email@example.com" },
];

export default function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">

      {members.map((m, i) => (
        <div
          key={i}
          className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition"
        >

          <img
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${m.name}`}
            className="w-14 sm:w-16 mx-auto mb-3"
            alt={m.name}
          />

          <h3 className="font-semibold text-base sm:text-lg">
            {m.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500 break-all">
            {m.email}
          </p>

        </div>
      ))}

    </div>
  );
}