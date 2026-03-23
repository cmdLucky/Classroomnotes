"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Edit3, Save, X } from "lucide-react"

interface EditableTextProps {
  initialText: string
  className?: string
  placeholder?: string
  onSave?: (text: string) => void
  multiline?: boolean
}

export function EditableText({
  initialText,
  className = "",
  placeholder = "点击编辑文字...",
  onSave,
  multiline = false,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(initialText)
  const [tempText, setTempText] = useState(initialText)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.select()
    }
  }, [isEditing])

  const handleSave = () => {
    setText(tempText)
    setIsEditing(false)
    onSave?.(tempText)
  }

  const handleCancel = () => {
    setTempText(text)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline && !e.shiftKey) {
      e.preventDefault()
      handleSave()
    }
    if (e.key === "Escape") {
      handleCancel()
    }
  }

  if (isEditing) {
    return (
      <div className="relative group">
        <Textarea
          ref={textareaRef}
          value={tempText}
          onChange={(e) => setTempText(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${className} min-h-[100px] resize-none`}
          placeholder={placeholder}
        />
        <div className="flex gap-2 mt-2">
          <Button size="sm" onClick={handleSave} className="h-8">
            <Save className="w-3 h-3 mr-1" />
            保存
          </Button>
          <Button size="sm" variant="outline" onClick={handleCancel} className="h-8 bg-transparent">
            <X className="w-3 h-3 mr-1" />
            取消
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${className} relative group cursor-pointer hover:bg-muted/20 rounded-md p-2 transition-colors`}
      onClick={() => setIsEditing(true)}
    >
      <div className="whitespace-pre-wrap">{text}</div>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
      >
        <Edit3 className="w-3 h-3" />
      </Button>
    </div>
  )
}
