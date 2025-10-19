import { Code2, MonitorSmartphone, Wrench } from "lucide-react";

export default function ServiceData() {
  const services = [
    {
      icon: <Code2 className="w-10 h-10 text-purple-900" />,
      title: "Web Development",
      description: "Building scalable, modern, and responsive web applications using React, Next.js, and Laravel.",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-purple-900" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and user-centered interfaces with clean, modern layouts.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-purple-900" />,
      title: "IT Consulting",
      description: "Helping businesses align technology with their goals through expert planning and strategy.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-20 shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Services</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          I offer professional digital solutions to help individuals and organizations achieve their goals efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
