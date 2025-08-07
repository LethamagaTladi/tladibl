"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  strings: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenStrings?: number
}

export default function TypingEffect({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenStrings = 1000,
}: TypingEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false)
        setIsDeleting(true)
      }, delayBetweenStrings)
      return () => clearTimeout(timeout)
    }

    const currentString = strings[currentIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === currentString) {
        setIsWaiting(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentString.slice(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex, isWaiting, strings, typingSpeed, deletingSpeed, delayBetweenStrings])

  return (
    <div className="inline-flex items-center">
      <span>{currentText}</span>
      <span className="typing-cursor"></span>
    </div>
  )
}
