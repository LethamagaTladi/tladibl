interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
  href?: string
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent"></span>
      </h2>
      {subtitle && <p className="text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
