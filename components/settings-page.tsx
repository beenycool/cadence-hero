"use client"

import { useState } from "react"
import {
  User,
  Mail,
  Lock,
  Calendar,
  Clock,
  Globe,
  Bell,
  Zap,
  Sparkles,
  Link,
  CreditCard,
  ChevronRight,
  Check,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account")

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Settings</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <nav className="flex flex-col">
                <SettingsNavItem
                  icon={<User className="h-5 w-5" />}
                  label="Account"
                  active={activeTab === "account"}
                  onClick={() => setActiveTab("account")}
                />
                <SettingsNavItem
                  icon={<Calendar className="h-5 w-5" />}
                  label="Calendar Preferences"
                  active={activeTab === "calendar"}
                  onClick={() => setActiveTab("calendar")}
                />
                <SettingsNavItem
                  icon={<Sparkles className="h-5 w-5" />}
                  label="AI Preferences"
                  active={activeTab === "ai"}
                  onClick={() => setActiveTab("ai")}
                />
                <SettingsNavItem
                  icon={<Bell className="h-5 w-5" />}
                  label="Notifications"
                  active={activeTab === "notifications"}
                  onClick={() => setActiveTab("notifications")}
                />
                <SettingsNavItem
                  icon={<Link className="h-5 w-5" />}
                  label="Integrations"
                  active={activeTab === "integrations"}
                  onClick={() => setActiveTab("integrations")}
                />
                <SettingsNavItem
                  icon={<CreditCard className="h-5 w-5" />}
                  label="Subscription"
                  active={activeTab === "subscription"}
                  onClick={() => setActiveTab("subscription")}
                />
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              {/* Account Settings */}
              {activeTab === "account" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Account Settings</h2>

                  <div className="space-y-8">
                    {/* Profile */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Profile</h3>

                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden bg-slate-200">
                            <img
                              src="/placeholder.svg?height=80&width=80"
                              alt="Profile"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center border-2 border-white">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                            <Input defaultValue="Alex" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                            <Input defaultValue="Morgan" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Email</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                          <div className="relative">
                            <Input defaultValue="alex.morgan@example.com" className="pl-10" />
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                        <div className="flex items-end">
                          <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200">Change Email</Button>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm text-green-700">Your email is verified</span>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Password</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                          <div className="relative">
                            <Input type="password" defaultValue="********" className="pl-10" />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                          <div className="relative">
                            <Input type="password" className="pl-10" />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200">Change Password</Button>
                        <Button variant="link" className="text-purple-600 hover:text-purple-800">
                          Forgot Password?
                        </Button>
                      </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <h3 className="text-lg font-medium text-red-600">Danger Zone</h3>

                      <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                        <h4 className="text-base font-medium text-red-700 mb-2">Delete Account</h4>
                        <p className="text-sm text-red-600 mb-4">
                          Once you delete your account, there is no going back. Please be certain.
                        </p>
                        <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Calendar Preferences */}
              {activeTab === "calendar" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Calendar Preferences</h2>

                  <div className="space-y-8">
                    {/* Working Hours */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Working Hours</h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Start Time</label>
                          <div className="relative">
                            <Input type="time" defaultValue="09:00" className="pl-10" />
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">End Time</label>
                          <div className="relative">
                            <Input type="time" defaultValue="17:00" className="pl-10" />
                            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">Working Days</label>
                        <div className="flex flex-wrap gap-2">
                          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
                            (day, index) => (
                              <button
                                key={day}
                                className={cn(
                                  "px-3 py-1 text-sm font-medium rounded-full",
                                  index < 5 ? "bg-purple-100 text-purple-700" : "bg-slate-100 text-slate-500",
                                )}
                              >
                                {day.substring(0, 3)}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Time Zone */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Time Zone</h3>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Time Zone</label>
                        <div className="relative">
                          <select className="w-full rounded-md border border-slate-200 py-2 pl-10 pr-3 text-sm">
                            <option>(GMT+01:00) London - British Summer Time</option>
                            <option>(GMT+00:00) London - Greenwich Mean Time</option>
                            <option>(GMT-05:00) New York - Eastern Time</option>
                            <option>(GMT-08:00) San Francisco - Pacific Time</option>
                          </select>
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </div>
                        <p className="text-xs text-slate-500 mt-1">Current local time: 14:30, Wednesday</p>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center">
                          <Zap className="h-5 w-5 text-purple-600 mr-2" />
                          <span className="text-sm font-medium text-slate-700">
                            Automatically adjust for daylight saving
                          </span>
                        </div>
                        <Switch
                          defaultChecked={true}
                          className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
                        />
                      </div>
                    </div>

                    {/* View Options */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">View Options</h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">Default Calendar View</label>
                          <select className="rounded-md border border-slate-200 py-1 px-3 text-sm">
                            <option>Week</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Agenda</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">Week Starts On</label>
                          <select className="rounded-md border border-slate-200 py-1 px-3 text-sm">
                            <option>Monday</option>
                            <option>Sunday</option>
                            <option>Saturday</option>
                          </select>
                        </div>

                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-slate-700">Time Format</label>
                          <select className="rounded-md border border-slate-200 py-1 px-3 text-sm">
                            <option>24 Hour</option>
                            <option>12 Hour (AM/PM)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3 pt-2">
                        <ToggleSetting label="Show weekends" defaultChecked={true} />
                        <ToggleSetting label="Show week numbers" defaultChecked={false} />
                        <ToggleSetting label="Show declined events" defaultChecked={true} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* AI Preferences */}
              {activeTab === "ai" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">AI Preferences</h2>

                  <div className="space-y-8">
                    {/* AI Features */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-slate-900">AI Features</h3>
                        <Badge className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">Pro Feature</Badge>
                      </div>

                      <div className="space-y-3">
                        <ToggleSetting
                          icon={<Sparkles className="h-5 w-5 text-purple-600" />}
                          label="Enable AI scheduling suggestions"
                          description="Allow Cadence to suggest optimal times for your events"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          icon={<Sparkles className="h-5 w-5 text-purple-600" />}
                          label="Enable AI focus time blocking"
                          description="Automatically schedule focus time based on your productivity patterns"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          icon={<Sparkles className="h-5 w-5 text-purple-600" />}
                          label="Enable natural language processing"
                          description="Create events by typing or speaking in natural language"
                          defaultChecked={true}
                        />
                      </div>
                    </div>

                    {/* Suggestion Frequency */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Suggestion Frequency</h3>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          How often should Cadence provide AI suggestions?
                        </label>
                        <div className="space-y-2">
                          <RadioOption
                            id="freq-high"
                            name="suggestion-frequency"
                            label="High"
                            description="Provide frequent suggestions for optimisation"
                            defaultChecked={true}
                          />
                          <RadioOption
                            id="freq-medium"
                            name="suggestion-frequency"
                            label="Medium"
                            description="Balance between suggestions and manual control"
                          />
                          <RadioOption
                            id="freq-low"
                            name="suggestion-frequency"
                            label="Low"
                            description="Minimal suggestions, mostly manual control"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Optimisation Goals */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Optimisation Goals</h3>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          What should Cadence prioritise when optimising your schedule?
                        </label>
                        <div className="space-y-2">
                          <RadioOption
                            id="goal-productivity"
                            name="optimisation-goal"
                            label="Maximise Productivity"
                            description="Optimise for deep work and focus time"
                            defaultChecked={true}
                          />
                          <RadioOption
                            id="goal-balance"
                            name="optimisation-goal"
                            label="Work-Life Balance"
                            description="Ensure adequate breaks and personal time"
                          />
                          <RadioOption
                            id="goal-collaboration"
                            name="optimisation-goal"
                            label="Team Collaboration"
                            description="Prioritise meeting availability and team coordination"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Learning Preferences */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Learning Preferences</h3>

                      <div className="space-y-3">
                        <ToggleSetting
                          label="Learn from my scheduling habits"
                          description="Allow Cadence to learn from your scheduling patterns and preferences"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          label="Learn from my event interactions"
                          description="Allow Cadence to learn from how you interact with calendar events"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          label="Learn from my feedback on suggestions"
                          description="Improve suggestions based on your feedback"
                          defaultChecked={true}
                        />
                      </div>

                      <div className="mt-2">
                        <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                          Reset Learning Data
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications */}
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Notification Settings</h2>

                  <div className="space-y-8">
                    {/* Notification Channels */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Notification Channels</h3>

                      <div className="space-y-3">
                        <ToggleSetting
                          icon={<Mail className="h-5 w-5 text-slate-600" />}
                          label="Email Notifications"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          icon={<Bell className="h-5 w-5 text-slate-600" />}
                          label="Push Notifications"
                          defaultChecked={true}
                        />
                        <ToggleSetting
                          icon={<Link className="h-5 w-5 text-slate-600" />}
                          label="Slack Notifications"
                          defaultChecked={false}
                        />
                      </div>
                    </div>

                    {/* Event Notifications */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Event Notifications</h3>

                      <div className="space-y-3">
                        <NotificationSetting
                          label="Event reminders"
                          defaultChecked={true}
                          options={["5 minutes", "15 minutes", "30 minutes", "1 hour", "1 day"]}
                          defaultOption="15 minutes"
                        />
                        <NotificationSetting label="New event invitations" defaultChecked={true} />
                        <NotificationSetting label="Event changes" defaultChecked={true} />
                        <NotificationSetting label="Event cancellations" defaultChecked={true} />
                      </div>
                    </div>

                    {/* AI Notifications */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">AI Notifications</h3>

                      <div className="space-y-3">
                        <NotificationSetting label="AI scheduling suggestions" defaultChecked={true} />
                        <NotificationSetting label="Focus time recommendations" defaultChecked={true} />
                        <NotificationSetting
                          label="Productivity insights"
                          defaultChecked={true}
                          options={["Daily", "Weekly", "Monthly"]}
                          defaultOption="Weekly"
                        />
                      </div>
                    </div>

                    {/* Quiet Hours */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Quiet Hours</h3>

                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-slate-600 mr-2" />
                          <span className="text-sm font-medium text-slate-700">Enable Quiet Hours</span>
                        </div>
                        <Switch
                          defaultChecked={true}
                          className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Start Time</label>
                          <Input type="time" defaultValue="20:00" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">End Time</label>
                          <Input type="time" defaultValue="08:00" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Integrations */}
              {activeTab === "integrations" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Integrations</h2>

                  <div className="space-y-8">
                    {/* Connected Calendars */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Connected Calendars</h3>

                      <div className="space-y-3">
                        <IntegrationItem
                          name="Google Calendar"
                          icon="/placeholder.svg?height=40&width=40"
                          connected={true}
                          primary={true}
                        />
                        <IntegrationItem
                          name="Outlook Calendar"
                          icon="/placeholder.svg?height=40&width=40"
                          connected={true}
                        />
                        <IntegrationItem
                          name="Apple Calendar"
                          icon="/placeholder.svg?height=40&width=40"
                          connected={false}
                        />
                      </div>

                      <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        <Plus className="h-4 w-4 mr-2" />
                        Connect Calendar
                      </Button>
                    </div>

                    {/* Productivity Tools */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Productivity Tools</h3>

                      <div className="space-y-3">
                        <IntegrationItem name="Slack" icon="/placeholder.svg?height=40&width=40" connected={true} />
                        <IntegrationItem
                          name="Microsoft Teams"
                          icon="/placeholder.svg?height=40&width=40"
                          connected={false}
                        />
                        <IntegrationItem name="Zoom" icon="/placeholder.svg?height=40&width=40" connected={true} />
                        <IntegrationItem name="Asana" icon="/placeholder.svg?height=40&width=40" connected={false} />
                        <IntegrationItem name="Trello" icon="/placeholder.svg?height=40&width=40" connected={false} />
                      </div>

                      <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        <Plus className="h-4 w-4 mr-2" />
                        Connect Tool
                      </Button>
                    </div>

                    {/* API Access */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-slate-900">API Access</h3>
                        <Badge className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">Pro Feature</Badge>
                      </div>

                      <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                        <h4 className="text-base font-medium text-slate-900 mb-2">API Key</h4>
                        <div className="flex items-center mb-4">
                          <Input
                            type="password"
                            defaultValue="sk_live_51NzQpRCkbZQzTzGv9LuuB2Vr"
                            className="font-mono"
                            readOnly
                          />
                          <Button className="ml-2 bg-slate-200 text-slate-700 hover:bg-slate-300">Copy</Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                            Regenerate Key
                          </Button>
                          <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                            View API Documentation
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Subscription */}
              {activeTab === "subscription" && (
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">Subscription Management</h2>

                  <div className="space-y-8">
                    {/* Current Plan */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Current Plan</h3>

                      <div className="p-6 border border-purple-200 rounded-lg bg-purple-50">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge className="bg-gradient-to-r from-purple-600 to-teal-500 text-white mb-2">
                              Pro Plan
                            </Badge>
                            <h4 className="text-xl font-bold text-slate-900">£9.99/month</h4>
                            <p className="text-sm text-slate-600 mt-1">Billed annually (£99.99/year)</p>
                          </div>
                          <Button className="bg-white text-purple-700 border border-purple-200 hover:bg-purple-50">
                            Change Plan
                          </Button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-purple-200">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-600">Next billing date</span>
                            <span className="font-medium text-slate-900">15 June, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Payment Method</h3>

                      <div className="p-4 border border-slate-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-slate-100 rounded-md flex items-center justify-center mr-3">
                              <CreditCard className="h-5 w-5 text-slate-600" />
                            </div>
                            <div>
                              <p className="font-medium text-slate-900">Visa ending in 4242</p>
                              <p className="text-sm text-slate-500">Expires 12/2025</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>

                      <Button className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Payment Method
                      </Button>
                    </div>

                    {/* Billing History */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-slate-900">Billing History</h3>

                      <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <table className="w-full text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 py-3 text-left font-medium text-slate-700">Date</th>
                              <th className="px-4 py-3 text-left font-medium text-slate-700">Description</th>
                              <th className="px-4 py-3 text-left font-medium text-slate-700">Amount</th>
                              <th className="px-4 py-3 text-left font-medium text-slate-700">Receipt</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            <tr>
                              <td className="px-4 py-3 text-slate-700">15 May, 2023</td>
                              <td className="px-4 py-3 text-slate-700">Pro Plan - Annual</td>
                              <td className="px-4 py-3 text-slate-700">£99.99</td>
                              <td className="px-4 py-3">
                                <a href="#" className="text-purple-600 hover:text-purple-800">
                                  Download
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3 text-slate-700">15 May, 2022</td>
                              <td className="px-4 py-3 text-slate-700">Pro Plan - Annual</td>
                              <td className="px-4 py-3 text-slate-700">£99.99</td>
                              <td className="px-4 py-3">
                                <a href="#" className="text-purple-600 hover:text-purple-800">
                                  Download
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Cancel Subscription */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <h3 className="text-lg font-medium text-slate-900">Cancel Subscription</h3>

                      <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                        <p className="text-sm text-slate-600 mb-4">
                          If you cancel your subscription, you will still have access to Pro features until the end of
                          your current billing period.
                        </p>
                        <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsNavItem({ icon, label, active, onClick }) {
  return (
    <button
      className={cn(
        "flex items-center w-full space-x-3 px-4 py-3 text-sm font-medium transition-colors",
        active
          ? "bg-purple-50 text-purple-900 border-r-2 border-r-purple-600"
          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
      )}
      onClick={onClick}
    >
      <span className={active ? "text-purple-600" : "text-slate-500"}>{icon}</span>
      <span>{label}</span>
      {active && <ChevronRight className="h-4 w-4 ml-auto text-purple-600" />}
    </button>
  )
}

function ToggleSetting({ icon = null, label, description = null, defaultChecked = false }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          <label className="text-sm font-medium text-slate-700">{label}</label>
          {description && <p className="text-xs text-slate-500">{description}</p>}
        </div>
      </div>
      <Switch
        defaultChecked={defaultChecked}
        className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
      />
    </div>
  )
}

function RadioOption({ id, name, label, description, defaultChecked = false }) {
  return (
    <div className="flex items-start">
      <input type="radio" id={id} name={name} defaultChecked={defaultChecked} className="mt-1 mr-2" />
      <div>
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  )
}

function NotificationSetting({ label, defaultChecked = false, options = null, defaultOption = null }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <label className="text-sm font-medium text-slate-700">{label}</label>
      </div>
      <div className="flex items-center space-x-3">
        {options && (
          <select className="rounded-md border border-slate-200 py-1 px-2 text-xs">
            {options.map((option) => (
              <option key={option} selected={option === defaultOption}>
                {option}
              </option>
            ))}
          </select>
        )}
        <Switch
          defaultChecked={defaultChecked}
          className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
        />
      </div>
    </div>
  )
}

function IntegrationItem({ name, icon, connected = false, primary = false }) {
  return (
    <div className="flex items-center justify-between p-3 border border-slate-200 rounded-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded overflow-hidden mr-3">
          <img src={icon || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">
            {connected ? "Connected" : "Not connected"}
            {primary && connected && " • Primary"}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className={connected ? "text-red-600" : "text-purple-600"}>
        {connected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  )
}

