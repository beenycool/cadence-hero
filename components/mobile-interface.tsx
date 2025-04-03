"use client"

import { useState } from "react"
import {
  Calendar,
  CheckSquare,
  BarChart3,
  User,
  Plus,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  MoreHorizontal,
  Sparkles,
  ArrowUp,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function MobileInterface() {
  const [showFab, setShowFab] = useState(true)
  const [showQuickActions, setShowQuickActions] = useState(false)
  const [showEventDetails, setShowEventDetails] = useState(false)

  // Get current date
  const today = new Date()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
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
  const dayName = dayNames[today.getDay()]
  const monthName = monthNames[today.getMonth()]
  const dayNumber = today.getDate()

  return (
    <div className="bg-slate-50 min-h-screen max-w-md mx-auto relative">
      {/* Header */}
      <header className="bg-white px-4 py-3 border-b border-slate-200 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold text-slate-900">Cadence</h1>
            <div className="flex items-center text-sm text-slate-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Today</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-center">
              <div className="text-sm font-medium text-slate-900">{dayName}</div>
              <div className="text-xs text-slate-500">
                {dayNumber} {monthName}
              </div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Insights Card */}
      <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-teal-50 border-b border-purple-100">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
          <div className="ml-2 flex-1">
            <div className="flex justify-between items-start">
              <p className="text-xs font-medium text-purple-800">Today's Productivity</p>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-3 w-3 text-purple-700" />
              </Button>
            </div>

            <div className="mt-1 grid grid-cols-3 gap-2">
              <div className="bg-white rounded p-2 border border-purple-100">
                <div className="text-xs text-purple-700">Focus Time</div>
                <div className="text-sm font-bold text-purple-900">3h 20m</div>
                <div className="text-[10px] text-green-600 flex items-center">
                  <ArrowUp className="h-2 w-2 mr-0.5" />
                  15% vs avg
                </div>
              </div>
              <div className="bg-white rounded p-2 border border-purple-100">
                <div className="text-xs text-purple-700">Meetings</div>
                <div className="text-sm font-bold text-purple-900">2h 15m</div>
                <div className="text-[10px] text-red-600 flex items-center">
                  <ArrowUp className="h-2 w-2 mr-0.5" />
                  10% vs avg
                </div>
              </div>
              <div className="bg-white rounded p-2 border border-purple-100">
                <div className="text-xs text-purple-700">Tasks</div>
                <div className="text-sm font-bold text-purple-900">5/8</div>
                <div className="text-[10px] text-green-600 flex items-center">
                  <ArrowUp className="h-2 w-2 mr-0.5" />2 completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Calendar */}
      <main className="pb-20">
        {/* Time Blocks */}
        <div className="bg-white">
          {[9, 10, 11, 12, 13, 14, 15, 16, 17].map((hour) => {
            const isPast = hour < 14 // Assuming current time is 2 PM

            return (
              <div key={hour} className="relative">
                <div className="absolute left-0 top-0 w-16 h-full flex flex-col items-center justify-start pt-2 text-xs text-slate-500">
                  <span>{hour}:00</span>
                </div>

                <div className={cn("ml-16 h-20 border-b border-slate-100 relative", isPast ? "bg-slate-50/50" : "")}>
                  {/* Current time indicator */}
                  {hour === 14 && (
                    <div className="absolute left-0 right-0 top-2 flex items-center z-10">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="flex-1 h-px bg-red-500"></div>
                      <div className="bg-red-500 text-white text-[10px] px-1 rounded">Now</div>
                    </div>
                  )}

                  {/* Events */}
                  {hour === 9 && (
                    <MobileEvent
                      title="Team Standup"
                      time="9:00 - 9:30"
                      location="Conference Room A"
                      category="meeting"
                      height={10}
                      onClick={() => setShowEventDetails(true)}
                    />
                  )}

                  {hour === 10 && (
                    <MobileEvent
                      title="Deep Work: Project Planning"
                      time="10:00 - 12:00"
                      category="focus"
                      height={40}
                      aiSuggested={true}
                    />
                  )}

                  {hour === 12 && (
                    <MobileEvent
                      title="Lunch Break"
                      time="12:00 - 13:00"
                      location="Cafeteria"
                      category="personal"
                      height={20}
                    />
                  )}

                  {hour === 13 && (
                    <MobileEvent
                      title="Client Call: ABC Corp"
                      time="13:30 - 14:30"
                      location="Zoom"
                      category="meeting"
                      participants={3}
                      height={20}
                      top={10}
                    />
                  )}

                  {hour === 15 && (
                    <MobileEvent
                      title="Email Catchup"
                      time="15:00 - 16:00"
                      category="focus"
                      height={20}
                      aiSuggested={true}
                    />
                  )}

                  {hour === 16 && (
                    <MobileEvent
                      title="Project Review"
                      time="16:30 - 17:30"
                      location="Conference Room B"
                      category="meeting"
                      participants={5}
                      height={20}
                      top={10}
                    />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around max-w-md mx-auto">
        <NavItem icon={<Calendar className="h-5 w-5" />} label="Calendar" active />
        <NavItem icon={<CheckSquare className="h-5 w-5" />} label="Tasks" badge="5" />
        <div className="w-12"></div> {/* Placeholder for FAB */}
        <NavItem icon={<BarChart3 className="h-5 w-5" />} label="Insights" />
        <NavItem icon={<User className="h-5 w-5" />} label="Profile" />
      </nav>

      {/* Floating Action Button */}
      {showFab && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <Button
            className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 shadow-lg"
            onClick={() => setShowQuickActions(!showQuickActions)}
          >
            {showQuickActions ? <X className="h-6 w-6 text-white" /> : <Plus className="h-6 w-6 text-white" />}
          </Button>
        </div>
      )}

      {/* Quick Actions */}
      {showQuickActions && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-3">
          <QuickAction label="Event" icon={<Calendar className="h-5 w-5 text-white" />} color="bg-blue-600" />
          <QuickAction label="Task" icon={<CheckSquare className="h-5 w-5 text-white" />} color="bg-green-600" />
          <QuickAction label="Focus Time" icon={<Sparkles className="h-5 w-5 text-white" />} color="bg-purple-600" />
        </div>
      )}

      {/* Event Details Modal */}
      {showEventDetails && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-xl w-full max-h-[80vh] overflow-auto animate-slide-up">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-slate-900">Event Details</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowEventDetails(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Team Standup</h3>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Meeting</Badge>
              </div>

              <div className="space-y-3">
                <DetailItem
                  icon={<Clock className="h-4 w-4 text-slate-500" />}
                  label="Wednesday, 15 May"
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
                      <Sparkles className="h-3 w-3 text-white" />
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
                <Button className="flex-1 bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                  Join Meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function NavItem({ icon, label, active = false, badge = null }) {
  return (
    <button className="flex flex-col items-center justify-center w-16 relative">
      <div className={cn("h-6 w-6 flex items-center justify-center", active ? "text-purple-600" : "text-slate-500")}>
        {icon}
      </div>
      <span className={cn("text-xs mt-1", active ? "text-purple-600 font-medium" : "text-slate-500")}>{label}</span>

      {badge && (
        <div className="absolute top-0 right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {badge}
        </div>
      )}
    </button>
  )
}

function MobileEvent({
  title,
  time,
  location = null,
  category,
  participants = null,
  height = 20,
  top = 0,
  aiSuggested = false,
  onClick = () => {},
}) {
  let bgColor = "bg-slate-100 border-slate-300 text-slate-700"

  if (category === "meeting") {
    bgColor = "bg-blue-50 border-blue-300 text-blue-700"
  } else if (category === "focus") {
    bgColor = "bg-purple-50 border-purple-300 text-purple-700"
  } else if (category === "personal") {
    bgColor = "bg-amber-50 border-amber-300 text-amber-700"
  }

  return (
    <div
      className={`absolute left-2 right-2 rounded border ${bgColor} p-2 overflow-hidden shadow-sm`}
      style={{ height: `${height}%`, top: `${top}%` }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="font-medium text-xs truncate pr-1">{title}</div>
        {aiSuggested && (
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-0.5">
            <Sparkles className="h-2 w-2 text-white" />
          </div>
        )}
      </div>
      <div className="text-[10px] mt-0.5 flex items-center">
        <Clock className="h-2 w-2 mr-1" />
        {time}
      </div>
      {location && (
        <div className="text-[10px] flex items-center">
          <MapPin className="h-2 w-2 mr-1" />
          {location}
        </div>
      )}
      {participants && (
        <div className="text-[10px] flex items-center">
          <Users className="h-2 w-2 mr-1" />
          {participants} attendees
        </div>
      )}
    </div>
  )
}

function QuickAction({ label, icon, color }) {
  return (
    <div className="flex flex-col items-center">
      <Button className={`h-12 w-12 rounded-full ${color} hover:opacity-90 shadow-md`}>{icon}</Button>
      <span className="text-xs text-white font-medium mt-1 bg-slate-800/70 px-2 py-0.5 rounded-full">{label}</span>
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

