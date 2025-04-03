"use client"

import { useState, useEffect } from "react"
import { X, Calendar, Clock, MapPin, Users, Repeat, Sparkles, Plus, Check, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function EventCreationModal({ isOpen = true, onClose = () => {} }) {
  const [activeTab, setActiveTab] = useState("form")
  const [useNaturalLanguage, setUseNaturalLanguage] = useState(false)
  const [naturalLanguageInput, setNaturalLanguageInput] = useState("")
  const [parsedEvent, setParsedEvent] = useState(null)
  const [showAiSuggestions, setShowAiSuggestions] = useState(true)

  // Form state
  const [eventTitle, setEventTitle] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [eventDescription, setEventDescription] = useState("")
  const [eventLocation, setEventLocation] = useState("")
  const [participants, setParticipants] = useState([
    { id: 1, name: "Emma Thompson", email: "emma@example.com", avatar: "/placeholder.svg?height=40&width=40" },
  ])
  const [isRecurring, setIsRecurring] = useState(false)
  const [recurringPattern, setRecurringPattern] = useState("weekly")

  // Simulate parsing natural language input
  useEffect(() => {
    if (naturalLanguageInput.length > 10) {
      // This would be replaced with actual NLP processing
      setTimeout(() => {
        setParsedEvent({
          title: "Meeting with Jane",
          date: "2024-05-15",
          startTime: "14:00",
          endTime: "15:00",
          participants: [
            { id: 2, name: "Jane Smith", email: "jane@example.com", avatar: "/placeholder.svg?height=40&width=40" },
          ],
          location: "Conference Room B",
          description: "Discuss project progress and next steps",
        })
      }, 500)
    } else {
      setParsedEvent(null)
    }
  }, [naturalLanguageInput])

  // Apply parsed event to form
  const applyParsedEvent = () => {
    if (parsedEvent) {
      setEventTitle(parsedEvent.title)
      setEventDate(parsedEvent.date)
      setStartTime(parsedEvent.startTime)
      setEndTime(parsedEvent.endTime)
      setParticipants([...participants, ...parsedEvent.participants])
      setEventLocation(parsedEvent.location)
      setEventDescription(parsedEvent.description)
      setUseNaturalLanguage(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-900">Create New Event</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="px-6 py-2 border-b border-slate-200">
          <div className="flex space-x-4">
            <TabButton active={activeTab === "form"} onClick={() => setActiveTab("form")}>
              Standard Form
            </TabButton>
            <TabButton active={activeTab === "templates"} onClick={() => setActiveTab("templates")}>
              Templates
            </TabButton>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === "form" && (
            <div className="space-y-6">
              {/* Natural Language Toggle */}
              <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-medium text-slate-700">Use Natural Language Input</span>
                </div>
                <Switch
                  checked={useNaturalLanguage}
                  onCheckedChange={setUseNaturalLanguage}
                  className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
                />
              </div>

              {/* Natural Language Input */}
              {useNaturalLanguage ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Textarea
                      placeholder="Type your event details naturally... e.g. 'Meeting with Jane about project tomorrow at 2pm'"
                      className="min-h-[100px] resize-none p-4 text-base"
                      value={naturalLanguageInput}
                      onChange={(e) => setNaturalLanguageInput(e.target.value)}
                    />
                    <div className="absolute bottom-3 right-3 text-xs text-slate-500 flex items-center">
                      <Sparkles className="h-3 w-3 mr-1 text-purple-500" />
                      AI-powered
                    </div>
                  </div>

                  {parsedEvent && (
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                          <Sparkles className="h-3 w-3 text-white" />
                        </div>
                        <div className="ml-2 flex-1">
                          <p className="text-sm font-medium text-purple-800">I understood this event:</p>
                          <div className="mt-2 space-y-1 text-sm text-purple-700">
                            <p>
                              <span className="font-medium">Title:</span> {parsedEvent.title}
                            </p>
                            <p>
                              <span className="font-medium">When:</span>{" "}
                              {parsedEvent.date.split("-").reverse().join("/")} at {parsedEvent.startTime}-
                              {parsedEvent.endTime}
                            </p>
                            <p>
                              <span className="font-medium">With:</span>{" "}
                              {parsedEvent.participants.map((p) => p.name).join(", ")}
                            </p>
                            <p>
                              <span className="font-medium">Where:</span> {parsedEvent.location}
                            </p>
                          </div>
                          <div className="mt-3">
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
                              onClick={applyParsedEvent}
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Use This Information
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Event Title</label>
                    <Input placeholder="Add title" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
                      <div className="relative">
                        <Input
                          type="date"
                          className="pl-10"
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                        />
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Start Time</label>
                      <div className="relative">
                        <Input
                          type="time"
                          className="pl-10"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                        />
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">End Time</label>
                      <div className="relative">
                        <Input
                          type="time"
                          className="pl-10"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Participants</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {participants.map((participant) => (
                        <Badge
                          key={participant.id}
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 pl-1 pr-2 py-1"
                        >
                          <div className="w-5 h-5 rounded-full overflow-hidden mr-1">
                            <img
                              src={participant.avatar || "/placeholder.svg"}
                              alt={participant.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {participant.name}
                          <button
                            className="ml-1 text-slate-400 hover:text-slate-700"
                            onClick={() => setParticipants(participants.filter((p) => p.id !== participant.id))}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                      <Button variant="outline" size="sm" className="h-7">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                    <div className="relative">
                      <Input
                        placeholder="Add location"
                        className="pl-10"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                    <Textarea
                      placeholder="Add description"
                      className="resize-none min-h-[80px]"
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                    />
                  </div>

                  {/* Recurring */}
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center">
                      <Repeat className="h-5 w-5 text-slate-600 mr-2" />
                      <span className="text-sm font-medium text-slate-700">Recurring Event</span>
                    </div>
                    <Switch
                      checked={isRecurring}
                      onCheckedChange={setIsRecurring}
                      className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
                    />
                  </div>

                  {/* Recurring Options */}
                  {isRecurring && (
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Repeats</label>
                        <select
                          className="w-full rounded-md border border-slate-200 py-2 px-3 text-sm"
                          value={recurringPattern}
                          onChange={(e) => setRecurringPattern(e.target.value)}
                        >
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="biweekly">Bi-weekly</option>
                          <option value="monthly">Monthly</option>
                          <option value="yearly">Yearly</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Ends</label>
                        <Input type="date" />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* AI Suggestions */}
              {showAiSuggestions && !useNaturalLanguage && (
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                      <Sparkles className="h-3 w-3 text-white" />
                    </div>
                    <div className="ml-2 flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-purple-800">AI Scheduling Suggestions</p>
                        <button
                          className="text-xs text-purple-600 hover:text-purple-800"
                          onClick={() => setShowAiSuggestions(false)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="text-xs text-purple-700 mt-1">
                        Based on participant availability and your preferences:
                      </p>

                      <div className="mt-3 space-y-2">
                        <SuggestionOption
                          day="Tomorrow"
                          date="15 May"
                          time="10:00 - 11:00"
                          reason="All participants available, during your focus hours"
                          recommended={true}
                        />
                        <SuggestionOption
                          day="Tomorrow"
                          date="15 May"
                          time="14:00 - 15:00"
                          reason="All participants available"
                        />
                        <SuggestionOption
                          day="Thursday"
                          date="16 May"
                          time="11:00 - 12:00"
                          reason="Better for Emma's schedule based on workload"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "templates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TemplateCard
                title="Team Meeting"
                duration="30 min"
                icon={<Users className="h-5 w-5 text-blue-600" />}
                color="blue"
              />
              <TemplateCard
                title="1:1 Meeting"
                duration="45 min"
                icon={<Users className="h-5 w-5 text-purple-600" />}
                color="purple"
              />
              <TemplateCard
                title="Focus Time"
                duration="2 hours"
                icon={<Sparkles className="h-5 w-5 text-teal-600" />}
                color="teal"
              />
              <TemplateCard
                title="Client Call"
                duration="1 hour"
                icon={<Users className="h-5 w-5 text-amber-600" />}
                color="amber"
              />
              <TemplateCard
                title="Project Review"
                duration="1 hour"
                icon={<Calendar className="h-5 w-5 text-indigo-600" />}
                color="indigo"
              />
              <TemplateCard
                title="Custom Template"
                duration="Create new"
                icon={<Plus className="h-5 w-5 text-slate-600" />}
                color="slate"
                isCustom={true}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
            Create Event
          </Button>
        </div>
      </div>
    </div>
  )
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      className={cn(
        "px-3 py-2 text-sm font-medium rounded-md transition-colors",
        active ? "bg-purple-100 text-purple-700" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function SuggestionOption({ day, date, time, reason, recommended = false }) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-2 rounded border",
        recommended ? "bg-white border-purple-200" : "bg-purple-100/50 border-purple-100",
      )}
    >
      <div>
        <div className="flex items-center">
          <span className="text-xs font-medium text-purple-900">
            {day}, {date}
          </span>
          {recommended && (
            <Badge className="ml-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-[0.65rem]">
              Recommended
            </Badge>
          )}
        </div>
        <div className="text-xs text-purple-700 flex items-center mt-0.5">
          <Clock className="h-3 w-3 mr-1" />
          {time}
        </div>
        <div className="text-[10px] text-purple-600 mt-0.5">{reason}</div>
      </div>
      <Button variant="ghost" size="sm" className="h-7 text-xs text-purple-700 hover:bg-purple-100">
        Select
      </Button>
    </div>
  )
}

function TemplateCard({ title, duration, icon, color, isCustom = false }) {
  let bgColor = "bg-slate-50"
  let hoverBgColor = "hover:bg-slate-100"
  let borderColor = "border-slate-200"
  let textColor = "text-slate-700"

  if (color === "blue") {
    bgColor = "bg-blue-50"
    hoverBgColor = "hover:bg-blue-100"
    borderColor = "border-blue-200"
    textColor = "text-blue-700"
  } else if (color === "purple") {
    bgColor = "bg-purple-50"
    hoverBgColor = "hover:bg-purple-100"
    borderColor = "border-purple-200"
    textColor = "text-purple-700"
  } else if (color === "teal") {
    bgColor = "bg-teal-50"
    hoverBgColor = "hover:bg-teal-100"
    borderColor = "border-teal-200"
    textColor = "text-teal-700"
  } else if (color === "amber") {
    bgColor = "bg-amber-50"
    hoverBgColor = "hover:bg-amber-100"
    borderColor = "border-amber-200"
    textColor = "text-amber-700"
  } else if (color === "indigo") {
    bgColor = "bg-indigo-50"
    hoverBgColor = "hover:bg-indigo-100"
    borderColor = "border-indigo-200"
    textColor = "text-indigo-700"
  }

  return (
    <button
      className={cn(
        "p-4 rounded-lg border text-left transition-all",
        bgColor,
        hoverBgColor,
        borderColor,
        isCustom ? "border-dashed" : "",
      )}
    >
      <div className="flex items-center mb-2">
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center mr-2", `bg-${color}-100`)}>
          {icon}
        </div>
        <span className={cn("font-medium", textColor)}>{title}</span>
      </div>
      <div className="text-xs text-slate-500 flex items-center">
        <Clock className="h-3 w-3 mr-1" />
        {duration}
      </div>
    </button>
  )
}

