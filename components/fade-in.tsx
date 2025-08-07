"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = "",
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getDirectionStyles = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-10"
        case "down":
          return "opacity-0 -translate-y-10"
        case "left":
          return "opacity-0 translate-x-10"
        case "right":
          return "opacity-0 -translate-x-10"
        case "none":
          return "opacity-0"
        default:
          return "opacity-0 translate-y-10"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionProperty: "opacity, transform",
      }}
      data-visible={isVisible}
    >
      <div className={`${getDirectionStyles()}`}>{children}</div>
    </div>
  )
}
