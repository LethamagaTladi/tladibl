import Image from "next/image"
import SectionTitle from "@/components/section-title"
import FadeIn from "@/components/fade-in"

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-xl scale-on-hover">
                <Image
                  src="/pp.png"
                  alt="Bokang Lethamaga Tladi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Bokang Lethamaga Tladi</h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Just completed a Diploma in Multimedia Computing with skills in Java, Kotlin, SQL, React, and Node.js.
                Game Dev intern at TUT. Co-Founder of Fortitude IT Solutions.
              </p>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold w-32 text-gray-800">Education:</span>
                  <span className="text-gray-600">Diploma in Multimedia Computing</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold w-32 text-gray-800">Experience:</span>
                  <span className="text-gray-600">Game Dev Intern at TUT</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold w-32 text-gray-800">Role:</span>
                  <span className="text-gray-600">CEO and FITS Co-Founder</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Kotlin", "SQL", "React", "Node.js", "Game Development", "Web Development"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
