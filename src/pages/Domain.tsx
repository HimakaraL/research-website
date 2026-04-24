import type { ReactNode } from "react";

const Card = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 hover:shadow-md transition hover:-translate-y-1 duration-200">

    <h2 className="font-semibold text-base sm:text-lg text-primary mb-2">
      {title}
    </h2>

    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">
      {children}
    </p>

  </div>
);

export default function Domain() {
  return (
    <div className="px-3 sm:px-0 py-6">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

        <Card title="Literature Survey">
          Research on IoT healthcare systems and smart monitoring solutions.
        </Card>

        <Card title="Research Gap">
          Lack of real-time integrated emergency medical inventory systems.
        </Card>

        <Card title="Research Problem">
          Delayed response in first aid supply availability.
        </Card>

        <Card title="Objectives">
          Improve emergency response using IoT-based tracking and alerts.
        </Card>

        <Card title="Methodology">
          Sensor data collection → API → dashboard visualization.
        </Card>

        <Card title="Technologies">
          React, TypeScript, IoT Sensors, Node.js, MongoDB
        </Card>

      </div>
    </div>
  );
}