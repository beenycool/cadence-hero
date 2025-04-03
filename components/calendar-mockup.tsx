"use client"

import { useState, useEffect } from "react"
import { Check, Clock, Plus, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CalendarMockup() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const hours = Array.from({ length: 9 }, (_, i) => i + 9) // 9am to 5pm

  const events = [
    { day: 1, start: 9, duration: 1, title: "Team Standup", type: "meeting" },
    { day: 1, start: 13, duration: 1, title: "Lunch with Alex", type: "personal" },
    { day: 2, start: 11, duration: 2, title: "Product Review", type: "meeting" },
    { day: 3, start: 10, duration: 1, title: "Client Call", type: "meeting" },
    { day: 3, start: 14, duration: 2, title: "Deep Work", type: "focus", ai: true },
    { day: 4, start: 9, duration: 2, title: "Strategy Planning", type: "meeting" },
    { day: 4, start: 15, duration: 1, title: "1:1 with Manager", type: "meeting" },
    { day: 5, start: 12, duration: 1, title: "Lunch Break", type: "personal" },
    { day: 5, start: 13, duration: 3, title: "Project Development", type: "focus", ai: true },
  ]

  return (
    <div className="p-4 bg-background text-foreground">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Your Schedule</h3>
          <p className="text-sm text-muted-foreground">Week of May 6 - 10, 2024</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 dark:border-primary/30 flex items-center"
          >
            <Clock className="mr-1 h-3 w-3" />
            <span>{currentTime}</span>
          </Badge>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full h-8 w-8 p-0 border-border text-muted-foreground hover:bg-accent"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden border-border">
        {/* Calendar Header */}
        <div className="grid grid-cols-6 border-b border-border">
          <div className="p-2 text-center text-xs font-medium text-muted-foreground border-r border-border"></div>
          {days.map((day, i) => (
            <div
              key={day}
              className="p-2 text-center text-xs font-medium text-foreground border-r last:border-r-0 border-border"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="grid grid-cols-6">
          {/* Time slots */}
          <div className="border-r border-border">
            {hours.map((hour) => (
              <div
                key={hour}
                className="h-16 border-b last:border-b-0 text-xs text-muted-foreground p-1 border-border"
              >
                {hour}:00
              </div>
            ))}
          </div>

          {/* Days */}
          {Array.from({ length: 5 }, (_, dayIndex) => (
            <div key={dayIndex} className="relative border-r last:border-r-0 border-border">
              {hours.map((hour) => (
                <div key={hour} className="h-16 border-b last:border-b-0 border-border"></div>
              ))}

              {/* Events */}
              {events
                .filter((event) => event.day === dayIndex + 1)
                .map((event, i) => {
                  const top = (event.start - 9) * 64 // 16px * 4 (4 quarters per hour)
                  const height = event.duration * 64

                  let bgColor = "bg-muted border-border text-muted-foreground"
                  if (event.type === "meeting")
                    bgColor =
                      "bg-blue-100/50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800/50 dark:text-blue-300"
                  if (event.type === "personal")
                    bgColor =
                      "bg-amber-100/50 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800/50 dark:text-amber-300"
                  if (event.type === "focus")
                    bgColor =
                      "bg-emerald-100/50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800/50 dark:text-emerald-300"

                  return (
                    <div
                      key={i}
                      className={`absolute rounded border p-2 left-1 right-1 overflow-hidden ${bgColor}`}
                      style={{ top: `${top}px`, height: `${height - 2}px` }}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-medium truncate">{event.title}</span>
                        {event.ai && (
                          <Badge className="bg-gradient-to-r from-primary to-teal-500 text-primary-foreground text-[0.65rem] px-1 py-0 h-4">
                            <Sparkles className="h-2 w-2 mr-0.5" />
                            AI
                          </Badge>
                        )}
                      </div>
                      {event.duration > 1 && (
                        <div className="flex items-center mt-1 text-[0.65rem]">
                          <User className="h-2 w-2 mr-1" />
                          <span>You</span>
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 p-3 bg-primary/10 dark:bg-primary/20 rounded-lg border border-primary/20 dark:border-primary/30">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-gradient-to-r from-primary to-teal-500 rounded-full p-1 mt-0.5">
            <Sparkles className="h-3 w-3 text-primary-foreground" />
          </div>
          <div className="ml-2">
            <p className="text-xs font-medium text-primary">AI Suggestion</p>
            <p className="text-xs text-primary/90 dark:text-primary/80">
              I've scheduled 2 focus blocks for your project work based on your productivity patterns.
            </p>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto h-6 text-xs text-primary hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20"
          >
            <Check className="h-3 w-3 mr-1" />
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}

function Sparkles({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v5m4-2-3 3m-2 4v5m-4-2 3 3m10-10-3 3m-2-6V3m-4 2 3 3m2 4v5m4-2-3 3M3 9l3 3m2-6V3" />
    </svg>
  )
}
