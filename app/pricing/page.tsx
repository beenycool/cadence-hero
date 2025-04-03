import Link from "next/link"
import { Calendar, Check, ArrowRight, CheckCircle2, HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
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
                <Link href="/features" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-purple-600 font-medium">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Choose the plan that's right for you and start optimizing your schedule with Cadence.
          </p>

          <div className="flex justify-center mb-12">
            <Tabs defaultValue="monthly" className="w-full max-w-xs">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">
                  Annual
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Save 20%</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-slate-500 ml-2">forever</span>
                </div>
                <CardDescription className="mt-2">
                  Perfect for individuals getting started with smart scheduling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Basic calendar integration",
                    "Up to 5 AI scheduling suggestions per month",
                    "Personal calendar view",
                    "Email reminders",
                    "Mobile app access",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-purple-200 shadow-lg relative">
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              </div>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="text-slate-500 ml-2">per month</span>
                </div>
                <CardDescription className="mt-2">
                  Ideal for professionals who want to maximize productivity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Free",
                    "Unlimited AI scheduling suggestions",
                    "Priority support",
                    "Advanced productivity analytics",
                    "Focus time protection",
                    "Custom scheduling rules",
                    "Calendar sharing",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                  Upgrade to Pro
                </Button>
              </CardFooter>
            </Card>

            {/* Team Plan */}
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl">Team</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="text-slate-500 ml-2">per user/month</span>
                </div>
                <CardDescription className="mt-2">
                  For teams that need collaborative scheduling and management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Everything in Pro",
                    "Collaborative team scheduling",
                    "Admin controls and dashboard",
                    "Team productivity analytics",
                    "Shared focus time settings",
                    "Meeting cost calculator",
                    "Task assignment for team members",
                    "Priority customer support",
                    "Dedicated account manager",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Enterprise */}
          <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-teal-50 rounded-xl border border-purple-100 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
                <p className="text-slate-600 mb-4">
                  Contact our sales team for enterprise pricing and custom solutions.
                </p>
                <div className="flex items-center text-sm text-slate-600">
                  <Check className="h-4 w-4 text-purple-600 mr-2" />
                  <span>Custom integrations</span>
                  <Check className="h-4 w-4 text-purple-600 mx-2" />
                  <span>Dedicated support</span>
                  <Check className="h-4 w-4 text-purple-600 mx-2" />
                  <span>SLA</span>
                </div>
              </div>
              <Button className="bg-white text-purple-700 border border-purple-200 hover:bg-purple-50">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
            <p className="text-lg text-slate-600">See which plan is right for you and your team.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-medium text-slate-500">Features</th>
                  <th className="py-4 px-6 text-center font-medium text-slate-500">Free</th>
                  <th className="py-4 px-6 text-center font-medium text-purple-700 bg-purple-50">Pro</th>
                  <th className="py-4 px-6 text-center font-medium text-slate-500">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Calendar Integrations</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-purple-50">Advanced</td>
                  <td className="py-4 px-6 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">AI Scheduling Suggestions</td>
                  <td className="py-4 px-6 text-center">5 per month</td>
                  <td className="py-4 px-6 text-center bg-purple-50">Unlimited</td>
                  <td className="py-4 px-6 text-center">Unlimited</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Focus Time Protection</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50">
                    <Check className="h-5 w-5 text-purple-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-teal-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Productivity Analytics</td>
                  <td className="py-4 px-6 text-center">Basic</td>
                  <td className="py-4 px-6 text-center bg-purple-50">Advanced</td>
                  <td className="py-4 px-6 text-center">Team & Individual</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Team Collaboration</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50">Limited</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-teal-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Admin Controls</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-teal-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-medium">Priority Support</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50">
                    <Check className="h-5 w-5 text-purple-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-teal-600 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">API Access</td>
                  <td className="py-4 px-6 text-center">
                    <X className="h-5 w-5 text-slate-300 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-purple-50">
                    <Check className="h-5 w-5 text-purple-600 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="h-5 w-5 text-teal-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about Cadence and our pricing plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FaqItem
                question="How does Cadence's AI scheduling actually work?"
                answer="Cadence uses machine learning algorithms to analyze your calendar patterns, productivity rhythms, and preferences. It learns when you're most productive for different types of tasks, understands your meeting preferences, and optimizes your schedule accordingly. The AI continuously improves as it learns from your interactions and feedback."
              />
              <FaqItem
                question="Can I integrate Cadence with my existing calendar and productivity tools?"
                answer="Yes, Cadence seamlessly integrates with popular calendar services like Google Calendar, Outlook, and Apple Calendar. We also support integrations with productivity tools like Slack, Asana, Trello, and Microsoft Teams. Our API allows for custom integrations with enterprise systems as well."
              />
              <FaqItem
                question="How does the team task assignment feature work?"
                answer="Team managers can assign tasks directly to team members through Cadence. The AI will intelligently suggest optimal time slots for these tasks based on each team member's schedule, workload, and productivity patterns. Team members receive notifications and the tasks are automatically added to their calendars with appropriate focus time allocated."
              />
              <FaqItem
                question="Is my calendar data secure and private?"
                answer="Absolutely. We take data security and privacy extremely seriously. All data is encrypted both in transit and at rest. We follow industry best practices for security and comply with GDPR, CCPA, and other privacy regulations. We never sell your data or use it for purposes other than improving your scheduling experience."
              />
              <FaqItem
                question="What if I need to override the AI suggestions?"
                answer="You always have full control over your schedule. While Cadence provides intelligent suggestions, you can easily override, modify, or ignore any AI recommendation. Your feedback helps the system learn your preferences better for future suggestions."
              />
              <FaqItem
                question="Can I switch between plans or cancel my subscription?"
                answer="Yes, you can upgrade, downgrade, or cancel your plan at any time. If you upgrade, the new plan will be effective immediately. If you downgrade, the new plan will be effective at the end of your current billing cycle. You can cancel your subscription directly from your account settings."
              />
            </div>
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

function FaqItem({ question, answer }) {
  return (
    <div className="border-b border-slate-200 pb-4">
      <button className="flex justify-between items-center w-full text-left focus:outline-none">
        <span className="text-lg font-medium text-slate-900">{question}</span>
        <HelpCircle className="h-5 w-5 text-slate-400" />
      </button>
      <div className="mt-2 text-slate-600">
        <p>{answer}</p>
      </div>
    </div>
  )
}

