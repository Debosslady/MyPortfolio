import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return ( 
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-purple-50 via-white to-purple-100">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 pl-[96px]">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
          Hello, I&rsquo;m <span className="text-purple-900">Helen Miller</span>
        </h1>

        <p className="text-gray-600 md:text-lg">
          I&rsquo;m a passionate <strong>Software Developer</strong> and{" "}
          <strong>IT Consultant</strong> with a focus on crafting modern,
          efficient, and user-friendly web applications.  
          I love transforming ideas into real-world digital solutions through
          clean code and smart design.
        </p>

        <Link
          href="/contact"
          className="inline-block px-6 py-3 text-white bg-purple-900 hover:bg-purple-700 rounded-lg font-semibold transition duration-300"
        >
          Say Hello!
        </Link>

        {/* Experience Stats */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-10">
          <div className="bg-purple-100 text-center rounded-lg px-6 py-4 min-w-[100px]">
            <h3 className="text-2xl font-bold text-purple-700">3+ Y.</h3>
            <p className="text-gray-600 text-sm">Experience</p>
          </div>

          <div className="bg-purple-100 text-center rounded-lg px-6 py-4 min-w-[120px]">
            <h3 className="text-2xl font-bold text-purple-700">20+</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>

          <div className="bg-purple-100 text-center rounded-lg px-6 py-4 min-w-[120px]">
            <h3 className="text-2xl font-bold text-purple-700">15+</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="bg-gradient-to-br from-purple-200 to-white rounded-3xl p-6 shadow-lg">
          <Image
            src="/assets/images/profile3.jpg"
            alt="SoftwareQueen"
            width={350}
            height={350}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>  
  );
}
