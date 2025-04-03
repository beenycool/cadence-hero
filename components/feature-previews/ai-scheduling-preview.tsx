import { User, Users, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AISchedulingPreview() {
  const timeSlots = [
    { time: "9:00 AM", status: "busy", title: "Team Meeting" },
    { time: "10:00 AM", status: "suggested", title: "Deep Work", ai: true },
    { time: "11:00 AM", status: "suggested", title: "Deep Work", ai: true },
    { time: "12:00 PM", status: "lunch", title: "Lunch Break" },
    { time: "1:00 PM", status: "busy", title: "Client Call" },
    { time: "2:00 PM", status: "free", title: "" },
    { time: "3:00 PM", status: "busy", title: "1:1 with Manager" },
    { time: "4:00 PM", status: "suggested", title: "Email Catch-up", ai: true },
  ]

  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
      <div className="p-3 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
        <div className="text-sm font-medium">Today's Optimized Schedule</div>
        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 flex items-center">
          <Zap className="mr-1 h-3 w-3" />
          <span>AI Optimized</span>
        </Badge>
      </div>

      <div className="divide-y divide-slate-100">
        {timeSlots.map((slot, index) => {
          let bgColor = "bg-white"
          let textColor = "text-slate-700"
          let borderColor = ""
          let icon = null

          if (slot.status === "busy") {
            bgColor = "bg-blue-50"
            textColor = "text-blue-700"
            icon = <Users className="h-3 w-3" />
          } else if (slot.status === "suggested") {
            bgColor = "bg-purple-50"
            textColor = "text-purple-700"
            borderColor = "border-l-4 border-l-purple-400"
            icon = <Zap className="h-3 w-3" />
          } else if (slot.status === "lunch") {
            bgColor = "bg-amber-50"
            textColor = "text-amber-700"
            icon = <User className="h-3 w-3" />
          }

          return (
            <div key={index} className={`flex items-center p-2 ${bgColor} ${borderColor}`}>
              <div className="w-16 text-xs text-slate-500 flex-shrink-0">{slot.time}</div>
              <div className={`flex-1 text-xs font-medium ${textColor} flex items-center`}>
                {icon && <span className="mr-1">{icon}</span>}
                {slot.title}
                {slot.ai && (
                  <Badge className="ml-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-[0.65rem] px-1 py-0 h-4">
                    AI
                  </Badge>
                )}
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
            <p className="text-xs text-purple-700">3 focus blocks optimized for your peak productivity hours</p>
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

