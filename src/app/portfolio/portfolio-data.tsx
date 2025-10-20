import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Web Application Dashboard",
      category: "Fullstack Development",
      image: "/assets/images/card3-code.png",
    },
    {
      title: "Business Website Design",
      category: "Frontend Development",
      image: "/assets/images/card-ui-ux.png",
    },
    {
      title: "Portfolio Platform",
      category: "UI/UX + ReactJS",
      image: "/assets/images/card-2.png",
    },
  ];

  return (
    <section className="py-20 bg-white px-6 md:px-20 shadow-md">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A selection of my recent projects — blending creativity, usability, and performance to deliver top-notch web experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <div className="mt-4">
              <p className="text-sm text-purple-900 uppercase font-semibold">
                {project.category}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mt-1">{project.title}</h3>
              {/* <button className="mt-3 px-4 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-700 transition">
                View Project →
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
