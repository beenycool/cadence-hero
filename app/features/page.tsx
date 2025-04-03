import Link from "next/link"
import { Calendar, ArrowRight, Check, Sparkles, MessageSquare, Clock, BellRing, Users, Brain, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-purple-600" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Cadence
                </span>
              </Link>
              <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link href="/features" className="text-purple-600 font-medium">
                  Features
                </Link>
                <Link href="/pricing" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-purple-600 transition-colors">
                  About
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-purple-600 transition-colors hidden sm:block">
                Log in
              </Link>
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Intelligent Features</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Reimagine how you{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              manage your time
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Cadence combines AI intelligence with thoughtful design to create a calendar that works for you, not against
            you.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white"
          >
            Get started for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ai" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid grid-cols-3 w-full max-w-xl">
                <TabsTrigger value="ai">AI Intelligence</TabsTrigger>
                <TabsTrigger value="productivity">Productivity</TabsTrigger>
                <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ai" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
                    <Brain className="h-4 w-4 mr-2" />
                    <span>AI-Powered Scheduling</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Let AI optimize your calendar</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Our intelligent algorithm learns your preferences and optimizes your schedule for maximum
                    productivity and work-life balance.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Learns your productivity patterns",
                      "Suggests optimal meeting times",
                      "Automatically blocks focus time",
                      "Prevents meeting overload",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="p-1">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="AI Scheduling Demo"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<MessageSquare className="h-6 w-6 text-purple-600" />}
                  title="Natural Language Input"
                  description="Create events by typing or speaking naturally. Cadence understands context, timing, and participants."
                />
                <FeatureCard
                  icon={<Sparkles className="h-6 w-6 text-purple-600" />}
                  title="Smart Suggestions"
                  description="Receive intelligent suggestions for scheduling, rescheduling, and optimizing your calendar."
                />
                <FeatureCard
                  icon={<Zap className="h-6 w-6 text-purple-600" />}
                  title="Productivity Insights"
                  description="Get personalized insights about your schedule patterns and productivity trends."
                />
              </div>
            </TabsContent>

            <TabsContent value="productivity" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="p-1">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="Focus Time Demo"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-blue-100 text-blue-700 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Focus Time Management</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Protect your deep work time</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Cadence helps you carve out and protect dedicated time for focused work, ensuring you can get into
                    flow state without interruptions.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Automatically blocks focus time based on your preferences",
                      "Prevents meeting scheduling during your peak productivity hours",
                      "Sends smart notifications to minimize distractions",
                      "Tracks and analyzes your focus time effectiveness",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Clock className="h-6 w-6 text-purple-600" />}
                  title="Time Blocking"
                  description="Organize your day with intelligent time blocks for different types of work and activities."
                />
                <FeatureCard
                  icon={<BellRing className="h-6 w-6 text-purple-600" />}
                  title="Smart Reminders"
                  description="Get contextual reminders that know when and how to notify you based on your patterns."
                />
                <FeatureCard
                  icon={<Zap className="h-6 w-6 text-purple-600" />}
                  title="Productivity Analytics"
                  description="Track your productivity metrics and get actionable insights to improve your workflow."
                />
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-teal-100 text-teal-700 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Team Collaboration</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Seamless team scheduling</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Coordinate with your team effortlessly with intelligent meeting scheduling that respects everyone's
                    preferences and availability.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Find optimal meeting times automatically",
                      "Share availability without back-and-forth emails",
                      "Coordinate across time zones intelligently",
                      "Integrate with your team's existing tools",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
                  <div className="p-1">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="Team Scheduling Demo"
                      className="rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={<Users className="h-6 w-6 text-purple-600" />}
                  title="Team Scheduling"
                  description="Find the perfect meeting time that works for everyone without the back-and-forth."
                />
                <FeatureCard
                  icon={<Calendar className="h-6 w-6 text-purple-600" />}
                  title="Shared Calendars"
                  description="Create and manage team calendars with customizable visibility and permissions."
                />
                <FeatureCard
                  icon={<MessageSquare className="h-6 w-6 text-purple-600" />}
                  title="Meeting Notes & Tasks"
                  description="Capture meeting notes and action items directly in your calendar events."
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">All Features</h2>
            <p className="text-lg text-slate-600">
              Discover all the powerful features that make Cadence the ultimate calendar solution for professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Brain className="h-6 w-6 text-purple-600" />,
                title: "AI-Powered Scheduling",
                description: "Let our AI optimize your calendar based on your productivity patterns and preferences.",
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
                title: "Natural Language Input",
                description: "Create events using natural language - just type or speak what you need.",
              },
              {
                icon: <Clock className="h-6 w-6 text-purple-600" />,
                title: "Focus Time Blocking",
                description: "Automatically block time for deep work based on your productivity patterns.",
              },
              {
                icon: <Users className="h-6 w-6 text-purple-600" />,
                title: "Team Scheduling",
                description: "Find the perfect meeting time that works for everyone without the back-and-forth.",
              },
              {
                icon: <BellRing className="h-6 w-6 text-purple-600" />,
                title: "Smart Reminders",
                description: "Get contextual reminders that know when and how to notify you.",
              },
              {
                icon: <Zap className="h-6 w-6 text-purple-600" />,
                title: "Productivity Analytics",
                description: "Track your productivity metrics and get actionable insights.",
              },
              {
                icon: <Calendar className="h-6 w-6 text-purple-600" />,
                title: "Multiple Calendars",
                description: "Manage personal and work calendars in one unified interface.",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-purple-600" />,
                title: "Smart Suggestions",
                description: "Receive intelligent suggestions for scheduling and optimizing your calendar.",
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
                title: "Meeting Notes & Tasks",
                description: "Capture meeting notes and action items directly in your calendar events.",
              },
            ].map((feature, i) => (
              <Card key={i} className="border-slate-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-purple-600 hover:text-purple-800 p-0">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform how you manage time?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have revolutionized their scheduling with Cadence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Cadence
                </span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                AI-powered scheduling that adapts to your life, not the other way around.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/features" className="hover:text-purple-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="hover:text-purple-400 transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-purple-400 transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-purple-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="hover:text-purple-400 transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-purple-400 transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">© 2024 Cadence AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="border-slate-200 hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-purple-600 hover:text-purple-800 p-0">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

