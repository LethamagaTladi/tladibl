import Image from "next/image"
import Link from "next/link"
import SectionTitle from "@/components/section-title"
import FadeIn from "@/components/fade-in"

const portfolioItems = [
	{
		title: "BP Majobe Poultry Farm",
		category: "Company Website",
		description: "A responsive website for a local poultry farm showcasing their products and services.",
		imageSrc: "/Majobe.jpeg",
		href: "https://bpmpoultry.co.za",
	},
	{
		title: "CafeQuick",
		category: "E-commerce WebApp",
		description: "A cross-platform website and admin dashboard.(Under Development)",
		imageSrc: "/CafeQuick.jpeg",
		href: "#",
	},
	{
		title: "Local Farm Fresh ",
		category: "E-commerce WebApp",
		description: "A fully responsive e-commerce platform with payment integration.",
		imageSrc: "/LLF.jpeg",
		href: "https://fortitudeitsolutions.co.za/assets/Projects/Local_Farm_Fresh/login.php",
	},
	{
		title: "EduSchelf",
		category: "WebApp Development",
		description: "An online learning platform with study materials and hints",
		imageSrc: "/EduShelf.jpeg",
		href: "https://fortitudeitsolutions.co.za/assets/Projects/EduShelf/index.php",
	},
	{
		title: "Fortitude IT Solutions.",
		category: "Company Website",
		description: "A showcase of the services offered by Fortitude IT Solutions.",
		imageSrc: "/FITS.png",
		href: "https://fortitudeitsolutions.co.za",
	},
	{
		title: "Fortitude IT Solutions",
		category: "Company Projects",
		description: "View my other projects I am part of at Fortitude IT Solutions.",
		imageSrc: "/FITS.png",
		href: "https://fortitudeitsolutions.co.za/#portfolio",
	},
]

export default function Portfolio() {
	return (
		<div className="min-h-screen pt-24 pb-16 px-4">
			<div className="container mx-auto max-w-6xl">
				<SectionTitle title="My Portfolio" subtitle="Check out some of my recent work" />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{portfolioItems.map((item, index) => (
						<FadeIn key={item.title} delay={0.1 * index} className="h-full">
							<div className="portfolio-item bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
								<div className="relative h-48 w-full">
									<Image
										src={item.imageSrc || "/placeholder.svg"}
										alt={item.title}
										fill
										className="object-cover"
									/>
								</div>

								<div className="p-6 flex flex-col flex-grow">
									<span className="text-sm text-accent font-medium mb-2">{item.category}</span>

									<h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>

									<p className="text-gray-600 mb-4 flex-grow">{item.description}</p>

									<Link
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-accent font-medium hover:underline"
									>
										View Hosted Demo
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-4 w-4 ml-2"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											/>
										</svg>
									</Link>
								</div>
							</div>
						</FadeIn>
					))}
				</div>
			</div>
		</div>
	)
}
