export default function WhatIDo() {
  const skills = [
    {
      title: "User Experience (UX)",
      description:
        "I design holistic and engaging experiences by understanding user needs, conducting research, and creating workflows that enhance usability.",
    },
    {
      title: "User Interface (UI)",
      description:
        "I craft visually appealing and consistent interfaces, focusing on layout, color, and spacing to ensure a seamless and enjoyable user journey.",
    },
    {
      title: "Web Development",
      description:
        "I build responsive and high-performance web applications using modern technologies, ensuring scalability, stability, and maintainability.",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-20 shadow-sm">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What I do?</h2>
          <p className="text-gray-600 mb-6">
            I specialize in designing user experiences, creating engaging interfaces, and building robust web applications
            that deliver value and usability.
          </p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            My Works
          </button>
        </div>

        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
