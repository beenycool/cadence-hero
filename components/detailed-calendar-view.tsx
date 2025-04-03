"use client"

import { useState } from "react"
import {
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Filter,
  Clock,
  Users,
  MapPin,
  Trash2,
  Edit,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function DetailedCalendarView() {
  const [viewMode, setViewMode] = useState("week")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showEventDetails, setShowEventDetails] = useState(false)

  // Get current month and year
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const currentMonth = monthNames[selectedDate.getMonth()]
  const currentYear = selectedDate.getFullYear()

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-6 w-6 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
            Cadence
          </span>
        </div>

        <div className="flex items-center w-96">
          <Search className="h-4 w-4 text-slate-400 absolute ml-3" />
          <Input placeholder="Search events..." className="pl-10 bg-slate-50 border-slate-200 focus:bg-white" />
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Calendar Controls */}
      <div className="border-b border-slate-200 py-4 px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-slate-900">
              {currentMonth} {currentYear}
            </h1>

            <div className="flex space-x-1">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                Today
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex border border-slate-200 rounded-lg overflow-hidden">
              <button
                className={cn(
                  "px-3 py-1 text-sm font-medium",
                  viewMode === "day" ? "bg-purple-600 text-white" : "text-slate-600 hover:bg-slate-50",
                )}
                onClick={() => setViewMode("day")}
              >
                Day
              </button>
              <button
                className={cn(
                  "px-3 py-1 text-sm font-medium",
                  viewMode === "week" ? "bg-purple-600 text-white" : "text-slate-600 hover:bg-slate-50",
                )}
                onClick={() => setViewMode("week")}
              >
                Week
              </button>
              <button
                className={cn(
                  "px-3 py-1 text-sm font-medium",
                  viewMode === "month" ? "bg-purple-600 text-white" : "text-slate-600 hover:bg-slate-50",
                )}
                onClick={() => setViewMode("month")}
              >
                Month
              </button>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Main Calendar Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Mini Month Navigator */}
        <div className="w-64 border-r border-slate-200 p-4">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium text-slate-900">May 2024</h3>
              <div className="flex space-x-1">
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>

            {/* Mini Calendar */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                <div key={day} className="text-xs text-slate-500 font-medium">
                  {day}
                </div>
              ))}

              {Array.from({ length: 35 }, (_, i) => {
                const dayNumber = i - 2 // Offset to start month on correct day
                const isCurrentMonth = dayNumber > 0 && dayNumber <= 31
                const isToday = dayNumber === 10 // Assuming today is the 10th
                const hasEvents = [10, 12, 15, 20, 25].includes(dayNumber)

                return (
                  <div
                    key={i}
                    className={cn(
                      "text-xs rounded-full w-6 h-6 flex items-center justify-center cursor-pointer",
                      isToday ? "bg-purple-600 text-white" : "hover:bg-slate-100",
                      !isCurrentMonth && "text-slate-300",
                      hasEvents && !isToday && "font-bold",
                    )}
                  >
                    {isCurrentMonth ? dayNumber : ""}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Event Categories */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-slate-900 mb-2">Categories</h3>
            <div className="space-y-2">
              <CategoryItem color="blue" label="Meetings" count={8} />
              <CategoryItem color="purple" label="Focus Time" count={5} />
              <CategoryItem color="amber" label="Personal" count={3} />
              <CategoryItem color="red" label="Important" count={2} />
              <CategoryItem color="green" label="External" count={4} />
            </div>
          </div>

          {/* AI Assistant */}
          <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                <SparklesIcon className="h-3 w-3 text-white" />
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-purple-800">AI Assistant</p>
                <p className="text-xs text-purple-700">
                  You have 3 meetings scheduled back-to-back on Thursday. Would you like me to add buffer time?
                </p>
                <div className="mt-2 flex space-x-2">
                  <button className="text-xs bg-white border border-purple-200 text-purple-700 px-2 py-1 rounded hover:bg-purple-50">
                    No
                  </button>
                  <button className="text-xs bg-gradient-to-r from-purple-600 to-teal-500 text-white px-2 py-1 rounded">
                    Yes, Please
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Week View */}
        <div className="flex-1 overflow-auto">
          {viewMode === "week" && (
            <div className="min-w-[800px]">
              {/* Days Header */}
              <div className="grid grid-cols-8 border-b border-slate-200">
                <div className="p-2 text-center text-xs font-medium text-slate-500 border-r border-slate-200 w-16"></div>
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const isToday = i === 2 // Assuming Wednesday is today
                  return (
                    <div
                      key={day}
                      className={cn(
                        "p-2 text-center border-r border-slate-200 last:border-r-0",
                        isToday ? "bg-purple-50" : "",
                      )}
                    >
                      <div className="text-xs font-medium text-slate-700">{day}</div>
                      <div
                        className={cn(
                          "text-sm font-semibold mt-1 w-8 h-8 rounded-full flex items-center justify-center mx-auto",
                          isToday ? "bg-purple-600 text-white" : "text-slate-900",
                        )}
                      >
                        {i + 8} {/* Assuming dates start from 8th */}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Time Grid */}
              <div className="relative">
                {/* Time Labels */}
                <div className="absolute top-0 left-0 w-16 h-full border-r border-slate-200">
                  {Array.from({ length: 12 }, (_, i) => {
                    const hour = i + 8 // 8 AM to 7 PM
                    return (
                      <div
                        key={hour}
                        className="h-20 border-b border-slate-200 last:border-b-0 text-xs text-slate-500 p-1"
                      >
                        {hour}:00
                      </div>
                    )
                  })}
                </div>

                {/* Events Grid */}
                <div className="ml-16 grid grid-cols-7">
                  {/* Monday */}
                  <div className="relative">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                    <WeekViewEvent
                      title="Team Standup"
                      time="9:00 - 9:30"
                      category="meeting"
                      top={20}
                      height={30}
                      onClick={() => setShowEventDetails(true)}
                    />
                    <WeekViewEvent
                      title="Client Presentation"
                      time="13:00 - 14:30"
                      category="important"
                      top={260}
                      height={90}
                    />
                  </div>

                  {/* Tuesday */}
                  <div className="relative">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                    <WeekViewEvent
                      title="Deep Work"
                      time="10:00 - 12:00"
                      category="focus"
                      top={80}
                      height={120}
                      aiSuggested={true}
                    />
                  </div>

                  {/* Wednesday (Today) */}
                  <div className="relative bg-purple-50/30">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                    <WeekViewEvent
                      title="Product Review"
                      time="11:00 - 12:00"
                      category="meeting"
                      top={140}
                      height={60}
                    />
                    <WeekViewEvent
                      title="Lunch with Alex"
                      time="12:30 - 13:30"
                      category="personal"
                      top={210}
                      height={60}
                    />
                    <WeekViewEvent
                      title="Email Catchup"
                      time="15:00 - 16:00"
                      category="focus"
                      top={340}
                      height={60}
                      aiSuggested={true}
                    />
                  </div>

                  {/* Thursday */}
                  <div className="relative">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                    <WeekViewEvent
                      title="1:1 with Manager"
                      time="9:00 - 10:00"
                      category="meeting"
                      top={20}
                      height={60}
                    />
                    <WeekViewEvent
                      title="Strategy Planning"
                      time="11:00 - 12:30"
                      category="meeting"
                      top={140}
                      height={90}
                    />
                    <WeekViewEvent
                      title="Buffer Time"
                      time="12:30 - 13:00"
                      category="buffer"
                      top={210}
                      height={30}
                      aiSuggested={true}
                    />
                  </div>

                  {/* Friday */}
                  <div className="relative">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                    <WeekViewEvent
                      title="Project Development"
                      time="9:00 - 12:00"
                      category="focus"
                      top={20}
                      height={180}
                    />
                    <WeekViewEvent title="Team Lunch" time="12:30 - 14:00" category="personal" top={210} height={90} />
                  </div>

                  {/* Saturday */}
                  <div className="relative bg-slate-50/50">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200"></div>
                    ))}
                  </div>

                  {/* Sunday */}
                  <div className="relative bg-slate-50/50">
                    {Array.from({ length: 12 }, (_, i) => (
                      <div key={i} className="h-20 border-b border-r border-slate-200 last:border-r-0"></div>
                    ))}
                    <WeekViewEvent title="Family Time" time="10:00 - 16:00" category="personal" top={80} height={360} />
                  </div>
                </div>

                {/* Current Time Indicator */}
                <div className="absolute left-16 right-0 top-[200px] flex items-center z-10">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="flex-1 h-px bg-red-500"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Event Details Sidebar */}
        {showEventDetails && (
          <div className="w-80 border-l border-slate-200 p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Event Details</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowEventDetails(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Team Standup</h3>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Meeting</Badge>
              </div>

              <div className="space-y-3">
                <DetailItem
                  icon={<Clock className="h-4 w-4 text-slate-500" />}
                  label="Monday, 8 May"
                  value="9:00 - 9:30 (30 min)"
                />

                <DetailItem
                  icon={<Users className="h-4 w-4 text-slate-500" />}
                  label="Attendees"
                  value="You + 5 others"
                />

                <DetailItem
                  icon={<MapPin className="h-4 w-4 text-slate-500" />}
                  label="Location"
                  value="Conference Room A / Zoom"
                />
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h4 className="text-sm font-medium text-slate-900 mb-2">Description</h4>
                <p className="text-sm text-slate-600">
                  Weekly team standup to discuss progress, blockers, and upcoming work. Please come prepared with your
                  updates.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <h4 className="text-sm font-medium text-slate-900 mb-2">AI Insights</h4>
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                      <SparklesIcon className="h-3 w-3 text-white" />
                    </div>
                    <div className="ml-2">
                      <p className="text-xs text-purple-700">
                        This meeting has been running 10 minutes over schedule for the past 3 weeks. Consider extending
                        the calendar invite to 40 minutes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CategoryItem({ color, label, count }) {
  let bgColor = "bg-slate-100"
  let textColor = "text-slate-700"

  if (color === "blue") {
    bgColor = "bg-blue-100"
    textColor = "text-blue-700"
  } else if (color === "purple") {
    bgColor = "bg-purple-100"
    textColor = "text-purple-700"
  } else if (color === "amber") {
    bgColor = "bg-amber-100"
    textColor = "text-amber-700"
  } else if (color === "red") {
    bgColor = "bg-red-100"
    textColor = "text-red-700"
  } else if (color === "green") {
    bgColor = "bg-green-100"
    textColor = "text-green-700"
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full ${bgColor} mr-2`}></div>
        <span className="text-sm text-slate-700">{label}</span>
      </div>
      <Badge className={`${bgColor} ${textColor} hover:${bgColor}`}>{count}</Badge>
    </div>
  )
}

function WeekViewEvent({ title, time, category, top, height, aiSuggested = false, onClick = () => {} }) {
  let bgColor = "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700"

  if (category === "meeting") {
    bgColor = "bg-blue-50 hover:bg-blue-100 border-blue-300 text-blue-700"
  } else if (category === "focus") {
    bgColor = "bg-purple-50 hover:bg-purple-100 border-purple-300 text-purple-700"
  } else if (category === "personal") {
    bgColor = "bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-700"
  } else if (category === "important") {
    bgColor = "bg-red-50 hover:bg-red-100 border-red-300 text-red-700"
  } else if (category === "buffer") {
    bgColor = "bg-teal-50 hover:bg-teal-100 border-teal-300 text-teal-700"
  }

  return (
    <div
      className={`absolute left-1 right-1 rounded border ${bgColor} p-2 overflow-hidden cursor-pointer transition-all duration-150 hover:shadow-md`}
      style={{ top: `${top}px`, height: `${height}px` }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="font-medium text-xs truncate">{title}</div>
        {aiSuggested && (
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-0.5">
            <SparklesIcon className="h-2 w-2 text-white" />
          </div>
        )}
      </div>
      <div className="text-[10px] mt-1 flex items-center">
        <Clock className="h-2 w-2 mr-1" />
        {time}
      </div>
    </div>
  )
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="ml-3">
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-sm font-medium text-slate-900">{value}</div>
      </div>
    </div>
  )
}

function SparklesIcon({ className }: { className?: string }) {
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

