import SectionTitle from "@/components/section-title"
import FadeIn from "@/components/fade-in"
import { Gamepad2, Code, Globe, PenTool } from "lucide-react"

const services = [
  {
    title: "Game Development",
    description: "Creating engaging and interactive gaming experiences across multiple platforms.",
    icon: Gamepad2,
  },
  {
    title: "Software Development",
    description: "Building robust and scalable software solutions tailored to your specific needs.",
    icon: Code,
  },
  {
    title: "Web Development",
    description: "Designing and developing responsive, modern websites and web applications.",
    icon: Globe,
  },
  {
    title: "Graphic Design",
    description: "Creating visually appealing designs that effectively communicate your brand message.",
    icon: PenTool,
  },
]

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title="My Services" subtitle="What I can do for you" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={0.2 * index} className="h-full">
              <div className="service-card bg-white rounded-lg p-6 shadow-md h-full flex flex-col">
                <div className="mb-4 text-accent">
                  <service.icon size={48} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>

                <p className="text-gray-600 flex-grow">{service.description}</p>

                <button className="mt-6 text-accent font-medium hover:underline focus:outline-none">Learn More</button>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} className="mt-16">
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Need a custom service?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              If you have a specific project in mind that doesn't fit into these categories, I'm always open to
              discussing custom solutions tailored to your unique requirements.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-sky-400 transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
