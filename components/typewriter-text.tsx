"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
  multiLine?: boolean
}

export function TypewriterText({
  texts,
  speed = 100,
  delay = 1000,
  className = "",
  multiLine = false,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (multiLine) {
      const allText = texts.join("\n")

      if (isTyping) {
        if (currentText.length < allText.length) {
          const timeout = setTimeout(() => {
            setCurrentText(allText.slice(0, currentText.length + 1))
          }, speed)
          return () => clearTimeout(timeout)
        } else {
          setIsTyping(false)
        }
      }
    } else {
      const text = texts[currentTextIndex]

      if (isTyping) {
        if (currentText.length < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(text.slice(0, currentText.length + 1))
          }, speed)
          return () => clearTimeout(timeout)
        } else {
          if (currentTextIndex < texts.length - 1) {
            const timeout = setTimeout(() => {
              setIsTyping(false)
            }, delay)
            return () => clearTimeout(timeout)
          }
        }
      } else {
        if (currentText.length > 0) {
          const timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1))
          }, speed / 2)
          return () => clearTimeout(timeout)
        } else {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          setIsTyping(true)
        }
      }
    }
  }, [currentText, currentTextIndex, isTyping, texts, speed, delay, multiLine])

  if (multiLine) {
    return (
      <span className={className}>
        {currentText.split("\n").map((line, index) => (
          <span key={index} className="block">
            {line}
            {index === currentText.split("\n").length - 1 && <span className="animate-pulse">|</span>}
          </span>
        ))}
      </span>
    )
  }

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
