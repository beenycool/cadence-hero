import { Check, Clock, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NaturalLanguagePreview() {
  return (
    <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
      <div className="p-3 border-b border-slate-200 bg-slate-50">
        <div className="text-sm font-medium">Natural Language Input</div>
      </div>

      <div className="p-3 space-y-3">
        <div className="bg-slate-100 rounded-lg p-3 text-sm">
          <div className="font-medium text-slate-700 mb-1">You typed:</div>
          <div className="text-slate-600 italic">
            "Schedule a meeting with the design team next Tuesday at 2pm for 1 hour to discuss the new dashboard layout"
          </div>
        </div>

        <div className="flex items-center">
          <div className="h-px bg-slate-200 flex-grow"></div>
          <div className="px-3 text-xs text-slate-400">Cadence understands</div>
          <div className="h-px bg-slate-200 flex-grow"></div>
        </div>

        <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm font-medium text-purple-700">Design Team Meeting</div>
            <Badge variant="outline" className="bg-white text-purple-700 border-purple-200">
              <Clock className="mr-1 h-3 w-3" />1 hour
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs mb-3">
            <div>
              <div className="text-slate-500">When</div>
              <div className="font-medium text-slate-700">Tuesday, May 14, 2024</div>
              <div className="text-slate-700">2:00 PM - 3:00 PM</div>
            </div>
            <div>
              <div className="text-slate-500">Who</div>
              <div className="font-medium text-slate-700">Design Team</div>
              <div className="text-slate-700">5 participants</div>
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 mb-1">Description</div>
            <div className="text-xs text-slate-700">Discuss the new dashboard layout</div>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-md hover:bg-slate-50 transition-colors">
            Edit
          </button>
          <button className="text-xs bg-gradient-to-r from-purple-600 to-teal-500 text-white px-3 py-1 rounded-md flex items-center">
            <Check className="mr-1 h-3 w-3" />
            Confirm
          </button>
        </div>
      </div>

      <div className="p-3 border-t border-slate-200 bg-slate-50 flex items-center">
        <input
          type="text"
          placeholder="Type your next event in natural language..."
          className="flex-1 text-xs bg-white border border-slate-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <button className="ml-2 bg-gradient-to-r from-purple-600 to-teal-500 text-white p-1.5 rounded-md">
          <Send className="h-3 w-3" />
        </button>
      </div>
    </div>
  )
}

