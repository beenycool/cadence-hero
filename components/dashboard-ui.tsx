"use client"

import { useState } from "react"
import {
  Calendar,
  CheckSquare,
  BarChart3,
  Settings,
  Search,
  Bell,
  User,
  ChevronDown,
  Plus,
  Clock,
  Filter,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function DashboardUI() {
  const [activeTab, setActiveTab] = useState("calendar")

  return (
    <div className="bg-white min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 flex flex-col">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <Calendar className="h-6 w-6 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              Cadence
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <SidebarItem
              icon={<Calendar className="h-5 w-5" />}
              label="Calendar"
              active={activeTab === "calendar"}
              onClick={() => setActiveTab("calendar")}
            />
            <SidebarItem
              icon={<CheckSquare className="h-5 w-5" />}
              label="Tasks"
              active={activeTab === "tasks"}
              onClick={() => setActiveTab("tasks")}
              badge="5"
            />
            <SidebarItem
              icon={<BarChart3 className="h-5 w-5" />}
              label="Analytics"
              active={activeTab === "analytics"}
              onClick={() => setActiveTab("analytics")}
            />
            <SidebarItem
              icon={<Settings className="h-5 w-5" />}
              label="Settings"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />
          </ul>

          <div className="mt-8">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Team Members</h3>
            <ul className="space-y-1">
              <TeamMember name="Emma Thompson" avatar="/placeholder.svg?height=32&width=32" status="online" />
              <TeamMember name="James Wilson" avatar="/placeholder.svg?height=32&width=32" status="busy" />
              <TeamMember name="Sarah Chen" avatar="/placeholder.svg?height=32&width=32" status="offline" />
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200">
          <Button variant="outline" className="w-full justify-start">
            <User className="h-4 w-4 mr-2" />
            <span>Your Profile</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <header className="h-16 border-b border-slate-200 flex items-center justify-between px-6">
          <div className="flex items-center w-96">
            <Search className="h-4 w-4 text-slate-400 absolute ml-3" />
            <Input placeholder="Search..." className="pl-10 bg-slate-50 border-slate-200 focus:bg-white" />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>

            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Alex Morgan</span>
                <ChevronDown className="h-4 w-4 ml-1 text-slate-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Calendar View */}
        <main className="flex-1 flex overflow-hidden">
          <div className="flex-1 p-6 overflow-auto">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Calendar</h1>
                <p className="text-slate-500">May 2024</p>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                  <button className="px-3 py-1 text-sm font-medium bg-purple-600 text-white">Day</button>
                  <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">Week</button>
                  <button className="px-3 py-1 text-sm font-medium text-slate-600 hover:bg-slate-50">Month</button>
                </div>

                <div className="flex space-x-1">
                  <Button variant="outline" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              {/* Days of Week */}
              <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-200">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="py-2 text-center text-sm font-medium text-slate-600">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 auto-rows-fr">
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNumber = i - 2 // Offset to start month on correct day
                  const isCurrentMonth = dayNumber > 0 && dayNumber <= 31
                  const isToday = dayNumber === 10 // Assuming today is the 10th

                  return (
                    <div
                      key={i}
                      className={cn(
                        "min-h-[120px] p-1 border-r border-b border-slate-200 last:border-r-0",
                        !isCurrentMonth && "bg-slate-50",
                      )}
                    >
                      <div className="h-full">
                        <div className="flex justify-between items-center p-1">
                          <span
                            className={cn(
                              "text-sm font-medium w-6 h-6 flex items-center justify-center rounded-full",
                              isToday ? "bg-purple-600 text-white" : "text-slate-600",
                            )}
                          >
                            {isCurrentMonth ? dayNumber : ""}
                          </span>
                          {isCurrentMonth && dayNumber % 7 === 3 && (
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Plus className="h-3 w-3" />
                            </Button>
                          )}
                        </div>

                        {/* Calendar Events */}
                        {isCurrentMonth && (
                          <div className="space-y-1 mt-1">
                            {dayNumber === 10 && (
                              <>
                                <CalendarEvent title="Team Meeting" time="10:00 - 11:00" category="meeting" />
                                <CalendarEvent title="Lunch with Client" time="13:00 - 14:00" category="personal" />
                              </>
                            )}
                            {dayNumber === 11 && (
                              <CalendarEvent title="Project Review" time="14:00 - 15:30" category="meeting" />
                            )}
                            {dayNumber === 12 && (
                              <CalendarEvent
                                title="Deep Work"
                                time="09:00 - 12:00"
                                category="focus"
                                aiSuggested={true}
                              />
                            )}
                            {dayNumber === 15 && (
                              <CalendarEvent title="Quarterly Planning" time="All day" category="important" />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* AI Insights Panel */}
          <div className="w-80 border-l border-slate-200 p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">AI Insights</h2>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <InsightCard
                title="Productivity Score"
                value="85%"
                change="+12%"
                description="Your focus time has improved this week"
                icon={<Zap className="h-5 w-5 text-purple-600" />}
              />

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-slate-900 mb-2">Suggested Time Blocks</h3>
                <div className="space-y-2">
                  <SuggestedTimeBlock
                    day="Tomorrow"
                    time="09:00 - 11:00"
                    activity="Deep Work"
                    reason="Based on your productivity patterns"
                  />
                  <SuggestedTimeBlock
                    day="Thursday"
                    time="14:00 - 15:00"
                    activity="Email Catchup"
                    reason="Before your afternoon meetings"
                  />
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-4">
                <h3 className="text-sm font-medium text-slate-900 mb-2">Optimisation Recommendations</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-xs font-medium text-purple-700">1</span>
                    </div>
                    <span>
                      Consider rescheduling your Friday meetings to Thursday afternoon for a meeting-free Friday.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5 mr-2">
                      <span className="text-xs font-medium text-purple-700">2</span>
                    </div>
                    <span>
                      You have 3 overlapping tasks on Wednesday. Would you like me to suggest a better arrangement?
                    </span>
                  </li>
                </ul>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Apply Recommendations
                </Button>
              </div>

              <div className="border border-slate-200 rounded-lg p-4 bg-purple-50">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                    <SparklesIcon className="h-3 w-3 text-white" />
                  </div>
                  <div className="ml-2">
                    <p className="text-xs font-medium text-purple-800">AI Assistant</p>
                    <p className="text-xs text-purple-700">
                      I've noticed you often work late on Tuesdays. Would you like me to schedule a later start on
                      Wednesdays?
                    </p>
                    <div className="mt-2 flex space-x-2">
                      <button className="text-xs bg-white border border-purple-200 text-purple-700 px-2 py-1 rounded hover:bg-purple-50">
                        No Thanks
                      </button>
                      <button className="text-xs bg-gradient-to-r from-purple-600 to-teal-500 text-white px-2 py-1 rounded">
                        Yes, Please
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active, onClick, badge = null }) {
  return (
    <li>
      <button
        className={cn(
          "flex items-center w-full space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          active ? "bg-purple-100 text-purple-900" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100",
        )}
        onClick={onClick}
      >
        <span className={active ? "text-purple-600" : "text-slate-500"}>{icon}</span>
        <span>{label}</span>
        {badge && <Badge className="ml-auto bg-purple-600 hover:bg-purple-700">{badge}</Badge>}
      </button>
    </li>
  )
}

function TeamMember({ name, avatar, status }) {
  let statusColor = "bg-slate-300"
  if (status === "online") statusColor = "bg-green-500"
  if (status === "busy") statusColor = "bg-red-500"

  return (
    <li className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-100">
      <div className="relative flex-shrink-0">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div
          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-white ${statusColor}`}
        ></div>
      </div>
      <span className="text-sm font-medium text-slate-700 truncate">{name}</span>
    </li>
  )
}

function CalendarEvent({ title, time, category, aiSuggested = false }) {
  let bgColor = "bg-slate-100 hover:bg-slate-200 text-slate-700"
  let borderColor = "border-l-slate-400"

  if (category === "meeting") {
    bgColor = "bg-blue-50 hover:bg-blue-100 text-blue-700"
    borderColor = "border-l-blue-400"
  } else if (category === "personal") {
    bgColor = "bg-amber-50 hover:bg-amber-100 text-amber-700"
    borderColor = "border-l-amber-400"
  } else if (category === "focus") {
    bgColor = "bg-purple-50 hover:bg-purple-100 text-purple-700"
    borderColor = "border-l-purple-400"
  } else if (category === "important") {
    bgColor = "bg-red-50 hover:bg-red-100 text-red-700"
    borderColor = "border-l-red-400"
  }

  return (
    <div className={`px-2 py-1 rounded text-xs border-l-2 ${bgColor} ${borderColor} cursor-pointer`}>
      <div className="font-medium truncate flex items-center">
        {title}
        {aiSuggested && (
          <span className="ml-1 inline-flex items-center">
            <SparklesIcon className="h-2 w-2 text-purple-600" />
          </span>
        )}
      </div>
      <div className="text-[10px] flex items-center">
        <Clock className="h-2 w-2 mr-1" />
        {time}
      </div>
    </div>
  )
}

function InsightCard({ title, value, change, description, icon }) {
  const isPositive = change.startsWith("+")

  return (
    <div className="border border-slate-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-sm font-medium text-slate-900">{title}</h3>
        {icon}
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        <span className={`ml-2 text-xs font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>{change}</span>
      </div>
      <p className="text-xs text-slate-500 mt-1">{description}</p>
    </div>
  )
}

function SuggestedTimeBlock({ day, time, activity, reason }) {
  return (
    <div className="flex items-center justify-between p-2 bg-purple-50 rounded border border-purple-100">
      <div>
        <div className="flex items-center">
          <SparklesIcon className="h-3 w-3 text-purple-600 mr-1" />
          <span className="text-xs font-medium text-purple-900">{activity}</span>
        </div>
        <div className="text-[10px] text-purple-700 flex items-center mt-0.5">
          <Clock className="h-2 w-2 mr-1" />
          {day}, {time}
        </div>
        <div className="text-[10px] text-purple-600 mt-0.5">{reason}</div>
      </div>
      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
        <Plus className="h-3 w-3 text-purple-700" />
      </Button>
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

