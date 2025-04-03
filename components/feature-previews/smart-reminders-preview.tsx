import { Bell, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SmartRemindersPreview() {
  const reminders = [
    {
      title: "Project Deadline",
      time: "Tomorrow, 5:00 PM",
      priority: "high",
      actions: ["Snooze", "Mark Complete"],
      context: "3 tasks remaining",
    },
    {
      title: "Follow up with Client",
      time: "Today, 2:00 PM",
      priority: "medium",
      actions: ["Snooze", "Email Now"],
      context: "Last contacted 5 days ago",
    },
    {
      title: "Team Standup",
      time: "In 30 minutes",
      priority: "upcoming",
      actions: ["Join Call"],
      context: "Daily meeting",
    },
    {
      title: "Review Quarterly Report",
      time: "Friday, 11:00 AM",
      priority: "low",
      actions: ["Snooze", "Open Document"],
      context: "Shared by Finance team",
    },
  ]

  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
      <div className="p-3 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <div className="text-sm font-medium flex items-center">
          <Bell className="h-4 w-4 mr-2 text-purple-600" />
          Smart Reminders
        </div>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
          4 upcoming
        </Badge>
      </div>

      <div className="divide-y divide-slate-100 max-h-[240px] overflow-y-auto">
        {reminders.map((reminder, index) => {
          let priorityColor = "bg-slate-100 text-slate-700"

          if (reminder.priority === "high") {
            priorityColor = "bg-red-100 text-red-700 border-l-4 border-l-red-500"
          } else if (reminder.priority === "medium") {
            priorityColor = "bg-amber-50 text-amber-700"
          } else if (reminder.priority === "upcoming") {
            priorityColor = "bg-blue-50 text-blue-700"
          }

          return (
            <div key={index} className={`p-3 ${priorityColor}`}>
              <div className="flex justify-between items-start mb-1">
                <div className="text-sm font-medium">{reminder.title}</div>
                <div className="flex items-center text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {reminder.time}
                </div>
              </div>

              <div className="text-xs mb-2">{reminder.context}</div>

              <div className="flex space-x-2">
                {reminder.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className={`text-xs px-2 py-1 rounded ${
                      actionIndex === reminder.actions.length - 1
                        ? "bg-gradient-to-r from-purple-600 to-teal-500 text-white"
                        : "bg-white border border-slate-200 text-slate-700"
                    }`}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-3 bg-purple-50 border-t border-purple-100">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
          <div className="ml-2">
            <p className="text-xs text-purple-700">Reminders are prioritized based on your response patterns</p>
          </div>
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

