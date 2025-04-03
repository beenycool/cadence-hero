import { ArrowRight, CheckCircle, ClipboardList, Users, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function TeamManagementSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
            <Users className="h-4 w-4 mr-2" />
            <span>Team Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Empower your team with intelligent task management</h2>
          <p className="text-lg text-slate-600">
            Seamlessly assign tasks, track progress, and optimise your team's productivity with AI-powered insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Features */}
          <div className="space-y-8">
            <FeatureItem
              icon={<ClipboardList className="h-6 w-6 text-purple-600" />}
              title="Intelligent Task Assignment"
              description="Assign tasks to team members with AI-powered suggestions for optimal timing based on workload and productivity patterns."
            />

            <FeatureItem
              icon={<Users className="h-6 w-6 text-purple-600" />}
              title="Team Capacity Planning"
              description="Visualise your team's capacity and workload to ensure balanced distribution and prevent burnout."
            />

            <FeatureItem
              icon={<UserPlus className="h-6 w-6 text-purple-600" />}
              title="Collaborative Workflows"
              description="Create shared workflows with dependencies that automatically schedule across team members' calendars."
            />

            <div className="pt-4">
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                Explore Team Features
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side: UI Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-teal-100 rounded-2xl blur-xl opacity-70"></div>
            <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200">
              <TeamAssignmentPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">{icon}</div>
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

function TeamAssignmentPreview() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Team Task Assignment</h3>
          <p className="text-sm text-slate-500">Marketing Team • Week of 10 May, 2024</p>
        </div>
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
          <UserPlus className="h-4 w-4 mr-2" />
          Assign Task
        </Button>
      </div>

      {/* Team Members and Tasks */}
      <div className="space-y-6">
        <TeamMemberTasks
          name="Emma Thompson"
          role="Content Strategist"
          avatar="/placeholder.svg?height=40&width=40"
          workload={70}
          tasks={[
            { title: "Q2 Content Calendar", dueDate: "15 May", status: "in-progress", priority: "high" },
            { title: "Blog Post: AI Trends", dueDate: "18 May", status: "not-started", priority: "medium" },
          ]}
        />

        <TeamMemberTasks
          name="James Wilson"
          role="Graphic Designer"
          avatar="/placeholder.svg?height=40&width=40"
          workload={85}
          tasks={[
            { title: "Social Media Graphics", dueDate: "12 May", status: "in-progress", priority: "high" },
            { title: "Product Brochure Design", dueDate: "20 May", status: "not-started", priority: "medium" },
            { title: "Website Banner Updates", dueDate: "14 May", status: "in-progress", priority: "low" },
          ]}
        />

        <TeamMemberTasks
          name="Sarah Chen"
          role="Marketing Manager"
          avatar="/placeholder.svg?height=40&width=40"
          workload={50}
          tasks={[
            { title: "Campaign Performance Review", dueDate: "16 May", status: "not-started", priority: "medium" },
          ]}
        />
      </div>

      {/* AI Recommendation */}
      <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
            <SparklesIcon className="h-3 w-3 text-white" />
          </div>
          <div className="ml-2">
            <p className="text-xs font-medium text-purple-800">AI Recommendation</p>
            <p className="text-xs text-purple-700">
              James has a high workload this week. Consider reassigning "Website Banner Updates" to Sarah who has more
              capacity.
            </p>
            <div className="mt-2 flex space-x-2">
              <button className="text-xs bg-white border border-purple-200 text-purple-700 px-2 py-1 rounded hover:bg-purple-50">
                Ignore
              </button>
              <button className="text-xs bg-gradient-to-r from-purple-600 to-teal-500 text-white px-2 py-1 rounded">
                Reassign Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TeamMemberTasks({ name, role, avatar, workload, tasks }) {
  // Determine workload color
  let workloadColor = "bg-green-500"
  if (workload > 80) {
    workloadColor = "bg-red-500"
  } else if (workload > 60) {
    workloadColor = "bg-amber-500"
  }

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <div className="p-4 bg-slate-50 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-300 mr-3">
            <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-medium text-slate-900">{name}</h4>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden mr-2">
            <div className={`h-full ${workloadColor}`} style={{ width: `${workload}%` }}></div>
          </div>
          <span
            className="text-xs font-medium"
            style={{ color: workload > 80 ? "#ef4444" : workload > 60 ? "#f59e0b" : "#22c55e" }}
          >
            {workload}% Load
          </span>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {tasks.map((task, index) => {
          // Set priority colors
          let priorityColor = "bg-slate-100 text-slate-700"
          if (task.priority === "high") {
            priorityColor = "bg-red-100 text-red-700"
          } else if (task.priority === "medium") {
            priorityColor = "bg-amber-100 text-amber-700"
          } else if (task.priority === "low") {
            priorityColor = "bg-green-100 text-green-700"
          }

          // Set status styles
          let statusIcon = null
          let statusText = ""
          if (task.status === "completed") {
            statusIcon = <CheckCircle className="h-4 w-4 text-green-500" />
            statusText = "Completed"
          } else if (task.status === "in-progress") {
            statusIcon = (
              <div className="h-4 w-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin"></div>
            )
            statusText = "In Progress"
          } else {
            statusIcon = <div className="h-4 w-4 rounded-full border border-slate-300"></div>
            statusText = "Not Started"
          }

          return (
            <div key={index} className="p-3 flex justify-between items-center hover:bg-slate-50">
              <div className="flex items-center">
                {statusIcon}
                <span className="ml-2 text-sm font-medium text-slate-800">{task.title}</span>
              </div>
              <div className="flex items-center">
                <Badge className={`mr-2 ${priorityColor}`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </Badge>
                <span className="text-xs text-slate-500">Due: {task.dueDate}</span>
              </div>
            </div>
          )
        })}
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

