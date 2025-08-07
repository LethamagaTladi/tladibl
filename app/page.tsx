import Link from "next/link"
import TypingEffect from "@/components/typing-effect"
import FadeIn from "@/components/fade-in"

export default function Home() {
  const professions = [
    "Game Developer",
    "Software Developer",
    "Web Developer",
    "CEO and FITS Co-Founder",
    "Multimedia Computing Specialist",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl w-full text-center">
          <FadeIn delay={0.2} duration={0.8}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Bokang Lethamaga Tladi</h1>
          </FadeIn>

          <FadeIn delay={0.6} duration={0.8}>
            <div className="text-xl md:text-3xl font-medium text-secondary mb-8">
              I am a{" "}
              <span className="text-accent">
                <TypingEffect strings={professions} typingSpeed={100} deletingSpeed={50} delayBetweenStrings={1500} />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={1} duration={0.8}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-accent text-white rounded-md hover:bg-sky-400 transition-colors duration-300 shadow-md"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Contact Me
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="py-8 text-center text-gray-500 text-sm">
        <FadeIn direction="up">
          <p>© {new Date().getFullYear()} Bokang Lethamaga Tladi. All rights reserved.</p>
        </FadeIn>
      </div>
    </div>
  )
}
