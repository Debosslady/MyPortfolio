import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/profile3.jpg"
              alt="Helen Miller - Software Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Hi, I&rsquo;m <span className="font-semibold text-purple-900">Helen Miller</span>, 
            a passionate <strong>Software Developer</strong> and 
            <strong> IT Consultant</strong> dedicated to delivering smart, scalable, 
            and user-friendly digital solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            I specialize in creating innovative web applications, managing IT infrastructures,
            and helping businesses embrace modern technology with ease. 
            Whether it&rsquo;s a startup idea or a large-scale project, 
            I bring clarity, structure, and technical excellence to every line of code.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Beyond coding, I&rsquo;m also passionate about tech training and helping others grow in 
            software development and digital skills — empowering people to build the future 
            they dream of through technology.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-purple-900 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-300"
          >
            Let&rsquo;s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
