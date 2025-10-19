import { Code, Lightbulb, Monitor, Rocket } from "lucide-react";

export default function WorkProcess() {
  const processes = [
    {
      icon: <Lightbulb className="text-purple-900 w-6 h-6" />,
      title: "1. Research & Strategy",
      description:
        "I analyze business challenges, user needs, and technology trends to create strategic solutions that align with growth and innovation goals.",
    },
    {
      icon: <Monitor className="text-purple-900 w-6 h-6" />,
      title: "2. System Design",
      description:
        "I design scalable, user-focused systems with clean architecture — ensuring every feature is intuitive, efficient, and reliable.",
    },
    {
      icon: <Code className="text-purple-900 w-6 h-6" />,
      title: "3. Development",
      description:
        "Using modern frameworks and tools, I build robust applications that deliver real value — from web platforms to enterprise-grade systems.",
    },
    {
      icon: <Rocket className="text-purple-900 w-6 h-6" />,
      title: "4. Deployment & Support",
      description:
        "I handle deployment, performance optimization, and continuous improvement — ensuring long-term stability and top-notch user experience.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Work Process
        </h2>

        <p className="text-gray-600 mb-12 max-w-3xl">
          Driven by design and powered by code, I create digital solutions that
          perform seamlessly and deliver measurable results. My process blends
          research, design thinking, and technology to craft impactful
          experiences that help businesses grow and thrive.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
