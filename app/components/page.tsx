import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Plus, Settings, ChevronRight, Bell, User, Search, Sparkles, Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ComponentLibrary() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex items-center mb-8">
        <div className="flex items-center mr-4">
          <Calendar className="h-8 w-8 text-purple-600 mr-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
            Cadence
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-slate-700">Component Library</h2>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid grid-cols-6 w-full max-w-4xl mb-8">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Form Elements</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="ai">AI Elements</TabsTrigger>
        </TabsList>

        {/* Buttons Section */}
        <TabsContent value="buttons" className="space-y-8">
          <ComponentSection title="Button Variants">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ComponentCard title="Primary">
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                    Primary Button
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                    disabled
                  >
                    Disabled
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                    <Plus className="mr-2 h-4 w-4" /> With Icon
                  </Button>
                </div>
              </ComponentCard>

              <ComponentCard title="Secondary">
                <div className="space-y-4">
                  <Button variant="secondary" className="w-full">
                    Secondary Button
                  </Button>
                  <Button variant="secondary" className="w-full" disabled>
                    Disabled
                  </Button>
                  <Button variant="secondary" className="w-full">
                    <Settings className="mr-2 h-4 w-4" /> With Icon
                  </Button>
                </div>
              </ComponentCard>

              <ComponentCard title="Outline">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Outline Button
                  </Button>
                  <Button variant="outline" className="w-full" disabled>
                    Disabled
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Clock className="mr-2 h-4 w-4" /> With Icon
                  </Button>
                </div>
              </ComponentCard>

              <ComponentCard title="Ghost">
                <div className="space-y-4">
                  <Button variant="ghost" className="w-full">
                    Ghost Button
                  </Button>
                  <Button variant="ghost" className="w-full" disabled>
                    Disabled
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <ChevronRight className="mr-2 h-4 w-4" /> With Icon
                  </Button>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>

          <ComponentSection title="Button Sizes">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ComponentCard title="Small">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                >
                  Small Button
                </Button>
              </ComponentCard>

              <ComponentCard title="Default">
                <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                  Default Button
                </Button>
              </ComponentCard>

              <ComponentCard title="Large">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                >
                  Large Button
                </Button>
              </ComponentCard>

              <ComponentCard title="Icon">
                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="h-10 w-10 rounded-full">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>

        {/* Form Elements Section */}
        <TabsContent value="forms" className="space-y-8">
          <ComponentSection title="Text Inputs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ComponentCard title="Default Input">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
              </ComponentCard>

              <ComponentCard title="With Icon">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input className="pl-10" placeholder="Search events..." />
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Disabled">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Disabled Input</label>
                  <Input disabled placeholder="This input is disabled" />
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>

          <ComponentSection title="Select & Checkboxes">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ComponentCard title="Select">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Time Zone</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">Eastern Time (ET)</SelectItem>
                      <SelectItem value="cst">Central Time (CT)</SelectItem>
                      <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                      <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </ComponentCard>

              <ComponentCard title="Checkbox">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm font-medium text-slate-700">
                      Accept terms and conditions
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" defaultChecked />
                    <label htmlFor="newsletter" className="text-sm font-medium text-slate-700">
                      Subscribe to newsletter
                    </label>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Switch">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">Email notifications</label>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">AI suggestions</label>
                    <Switch defaultChecked />
                  </div>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>

        {/* Cards Section */}
        <TabsContent value="cards" className="space-y-8">
          <ComponentSection title="Event Cards">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ComponentCard title="Meeting Event">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Team Standup</CardTitle>
                        <CardDescription>Daily check-in</CardDescription>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Meeting</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>9:00 AM - 9:30 AM</span>
                      </div>
                      <div className="flex items-center text-slate-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>5 participants</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </ComponentCard>

              <ComponentCard title="Focus Time">
                <Card>
                  <CardHeader className="pb-2 border-l-4 border-l-purple-500">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">Deep Work</CardTitle>
                        <CardDescription>Project development</CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Focus</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-slate-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>10:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex items-center text-purple-600">
                        <Sparkles className="h-4 w-4 mr-2" />
                        <span>AI suggested time block</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Modify
                    </Button>
                  </CardFooter>
                </Card>
              </ComponentCard>

              <ComponentCard title="AI Insight Card">
                <Card className="bg-gradient-to-r from-purple-50 to-teal-50 border-purple-100">
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="mr-2 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1.5">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-purple-800">Productivity Insight</CardTitle>
                        <CardDescription className="text-purple-600">Based on your patterns</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-purple-700">
                      You're most productive in the morning. I've scheduled your focus blocks between 9 AM and 12 PM for
                      optimal results.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" className="text-purple-700 hover:bg-purple-100">
                      Dismiss
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
                    >
                      Apply
                    </Button>
                  </CardFooter>
                </Card>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>

        {/* Calendar Elements Section */}
        <TabsContent value="calendar" className="space-y-8">
          <ComponentSection title="Calendar Elements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ComponentCard title="Day Cells">
                <div className="grid grid-cols-7 gap-1 border rounded-lg overflow-hidden">
                  {/* Day Header */}
                  <div className="col-span-7 grid grid-cols-7 bg-slate-50 border-b">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="p-2 text-center text-xs font-medium text-slate-600">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  {Array.from({ length: 7 }, (_, i) => (
                    <div key={i} className="aspect-square p-1 border hover:bg-slate-50 cursor-pointer">
                      <div className="h-full flex flex-col">
                        <div className="text-xs font-medium text-slate-700">{i + 10}</div>
                        {i === 2 && (
                          <div className="mt-1 text-[8px] bg-blue-100 text-blue-700 rounded px-1 py-0.5">2 events</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ComponentCard>

              <ComponentCard title="Calendar Events">
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
                    <div className="font-medium text-sm text-blue-700">Team Meeting</div>
                    <div className="text-xs text-blue-600">9:00 AM - 10:00 AM</div>
                  </div>

                  <div className="p-2 bg-purple-50 border-l-4 border-purple-500 rounded-r-md">
                    <div className="font-medium text-sm text-purple-700">Focus Time</div>
                    <div className="text-xs text-purple-600">11:00 AM - 1:00 PM</div>
                  </div>

                  <div className="p-2 bg-amber-50 border-l-4 border-amber-500 rounded-r-md">
                    <div className="font-medium text-sm text-amber-700">Lunch Break</div>
                    <div className="text-xs text-amber-600">1:00 PM - 2:00 PM</div>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Time Indicators">
                <div className="relative h-40 border-l border-slate-200 pl-2">
                  {/* Time labels */}
                  {[9, 10, 11, 12].map((hour, i) => (
                    <div key={hour} className="absolute text-xs text-slate-500" style={{ top: `${i * 33.3}%` }}>
                      {hour}:00 AM
                    </div>
                  ))}

                  {/* Current time indicator */}
                  <div className="absolute top-[40%] left-0 right-0 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="h-px flex-1 bg-red-500"></div>
                    <div className="text-xs bg-red-500 text-white px-1 rounded">10:40 AM</div>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Mini Month View">
                <div className="w-full max-w-xs">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-slate-700">May 2024</h3>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ChevronRight className="h-3 w-3 rotate-180" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <ChevronRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                      <div key={day} className="text-xs text-slate-500 font-medium">
                        {day}
                      </div>
                    ))}

                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 3 // Offset to start month on correct day
                      const isCurrentMonth = day > 0 && day <= 31
                      const isToday = day === 15

                      return (
                        <div
                          key={i}
                          className={`text-xs rounded-full w-6 h-6 mx-auto flex items-center justify-center ${
                            isToday
                              ? "bg-purple-600 text-white"
                              : isCurrentMonth
                                ? "hover:bg-slate-100 cursor-pointer"
                                : "text-slate-300"
                          }`}
                        >
                          {isCurrentMonth ? day : ""}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>

        {/* Navigation Components Section */}
        <TabsContent value="navigation" className="space-y-8">
          <ComponentSection title="Navigation Components">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ComponentCard title="Top Navigation">
                <div className="w-full border rounded-lg overflow-hidden">
                  <div className="bg-white px-4 py-2 border-b flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                        Cadence
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Bell className="h-5 w-5 text-slate-600" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                      </div>

                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Sidebar Navigation">
                <div className="w-full border rounded-lg overflow-hidden">
                  <div className="bg-white p-3 space-y-1 w-48">
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-purple-50 text-purple-700">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Calendar</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">Schedule</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <User className="h-4 w-4" />
                      <span className="text-sm font-medium">Profile</span>
                    </div>

                    <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 text-slate-700">
                      <Settings className="h-4 w-4" />
                      <span className="text-sm font-medium">Settings</span>
                    </div>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Tabs">
                <div className="border-b">
                  <div className="flex">
                    <button className="px-4 py-2 text-sm font-medium text-purple-700 border-b-2 border-purple-500">
                      Day
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Week</button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Month</button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900">Year</button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Breadcrumbs">
                <div className="flex items-center text-sm">
                  <a href="#" className="text-slate-500 hover:text-purple-600">
                    Dashboard
                  </a>
                  <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                  <a href="#" className="text-slate-500 hover:text-purple-600">
                    Calendar
                  </a>
                  <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                  <span className="text-slate-900 font-medium">May 2024</span>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>

        {/* AI Elements Section */}
        <TabsContent value="ai" className="space-y-8">
          <ComponentSection title="AI-Specific Elements">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ComponentCard title="AI Suggestion Chips">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full px-3 py-1 bg-purple-50 border border-purple-100 text-purple-700">
                    <Sparkles className="h-3 w-3 mr-2" />
                    <span className="text-xs font-medium">Schedule focus time</span>
                    <Check className="h-4 w-4 ml-2 cursor-pointer hover:text-purple-900" />
                    <X className="h-4 w-4 ml-1 cursor-pointer hover:text-purple-900" />
                  </div>

                  <div className="inline-flex items-center rounded-full px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700">
                    <Sparkles className="h-3 w-3 mr-2" />
                    <span className="text-xs font-medium">Reschedule meeting</span>
                    <Check className="h-4 w-4 ml-2 cursor-pointer hover:text-blue-900" />
                    <X className="h-4 w-4 ml-1 cursor-pointer hover:text-blue-900" />
                  </div>

                  <div className="inline-flex items-center rounded-full px-3 py-1 bg-teal-50 border border-teal-100 text-teal-700">
                    <Sparkles className="h-3 w-3 mr-2" />
                    <span className="text-xs font-medium">Add buffer time</span>
                    <Check className="h-4 w-4 ml-2 cursor-pointer hover:text-teal-900" />
                    <X className="h-4 w-4 ml-1 cursor-pointer hover:text-teal-900" />
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="AI Insight Banner">
                <div className="p-3 bg-gradient-to-r from-purple-50 to-teal-50 border border-purple-100 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                      <Sparkles className="h-3 w-3 text-white" />
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
              </ComponentCard>

              <ComponentCard title="AI Badge">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-teal-500 text-white">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI Suggested
                  </Badge>

                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-medium">Deep Work Session</div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-teal-500 text-white text-[0.65rem] px-1 py-0 h-4">
                      <Sparkles className="h-2 w-2 mr-0.5" />
                      AI
                    </Badge>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="AI Productivity Score">
                <div className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium text-slate-900">Productivity Score</h3>
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-slate-900">85%</span>
                    <span className="ml-2 text-xs font-medium text-green-600">+12%</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Your focus time has improved this week</p>
                  <div className="mt-3 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-teal-500 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </ComponentCard>
            </div>
          </ComponentSection>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ComponentSection({ title, children }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
      {children}
    </div>
  )
}

function ComponentCard({ title, children }) {
  return (
    <div className="border rounded-lg p-4">
      <h4 className="text-sm font-medium text-slate-500 mb-3">{title}</h4>
      <div className="flex items-center justify-center min-h-[100px]">{children}</div>
    </div>
  )
}

