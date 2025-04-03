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
    <div className="p-4 bg-white dark:bg-slate-900 dark:text-slate-200">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Your Schedule</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Week of May 6 - 10, 2024</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 flex items-center"
          >
            <Clock className="mr-1 h-3 w-3" />
            <span>{currentTime}</span>
          </Badge>
          <Button
            size="sm"
            variant="outline"
            className="rounded-full h-8 w-8 p-0 border-slate-200 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden border-slate-200 dark:border-slate-700">
        {/* Calendar Header */}
        <div className="grid grid-cols-6 border-b border-slate-200 dark:border-slate-700">
          <div className="p-2 text-center text-xs font-medium text-slate-500 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700"></div>
          {days.map((day, i) => (
            <div
              key={day}
              className="p-2 text-center text-xs font-medium text-slate-700 dark:text-slate-300 border-r last:border-r-0 border-slate-200 dark:border-slate-700"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Body */}
        <div className="grid grid-cols-6">
          {/* Time slots */}
          <div className="border-r border-slate-200 dark:border-slate-700">
            {hours.map((hour) => (
              <div
                key={hour}
                className="h-16 border-b last:border-b-0 text-xs text-slate-500 dark:text-slate-400 p-1 border-slate-200 dark:border-slate-700"
              >
                {hour}:00
              </div>
            ))}
          </div>

          {/* Days */}
          {Array.from({ length: 5 }, (_, dayIndex) => (
            <div key={dayIndex} className="relative border-r last:border-r-0 border-slate-200 dark:border-slate-700">
              {hours.map((hour) => (
                <div key={hour} className="h-16 border-b last:border-b-0 border-slate-200 dark:border-slate-700"></div>
              ))}

              {/* Events */}
              {events
                .filter((event) => event.day === dayIndex + 1)
                .map((event, i) => {
                  const top = (event.start - 9) * 64 // 16px * 4 (4 quarters per hour)
                  const height = event.duration * 64

                  let bgColor =
                    "bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
                  if (event.type === "meeting")
                    bgColor =
                      "bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
                  if (event.type === "personal")
                    bgColor =
                      "bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-300"
                  if (event.type === "focus")
                    bgColor =
                      "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-300"

                  return (
                    <div
                      key={i}
                      className={`absolute rounded border p-2 left-1 right-1 overflow-hidden ${bgColor}`}
                      style={{ top: `${top}px`, height: `${height - 2}px` }}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-medium truncate">{event.title}</span>
                        {event.ai && (
                          <Badge className="bg-gradient-to-r from-purple-500 to-teal-500 text-white text-[0.65rem] px-1 py-0 h-4">
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

      <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
          <div className="ml-2">
            <p className="text-xs font-medium text-purple-800 dark:text-purple-300">AI Suggestion</p>
            <p className="text-xs text-purple-700 dark:text-purple-400">
              I've scheduled 2 focus blocks for your project work based on your productivity patterns.
            </p>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="ml-auto h-6 text-xs text-purple-700 dark:text-purple-300 hover:text-purple-800 hover:bg-purple-100 dark:hover:bg-purple-800/50"
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

