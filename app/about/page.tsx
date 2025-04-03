import Link from "next/link"
import { Calendar, ArrowRight, Users, Sparkles, Globe, Award, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
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
                <Link href="/pricing" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Pricing
                </Link>
                <Link href="/about" className="text-purple-600 font-medium">
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
            <Heart className="h-4 w-4 mr-2" />
            <span>Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            We're on a mission to{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
              give you back your time
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Cadence was founded with a simple belief: your time is your most valuable asset. We're building tools to
            help you protect it.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>Our Beginning</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">From frustration to innovation</h2>
              <p className="text-lg text-slate-600 mb-6">
                Cadence was born out of frustration with traditional calendars that didn't adapt to how people actually
                work. Our founders, Alex and Sarah, were tech professionals struggling with the same problem: calendars
                that worked against their productivity, not for it.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                After years of manually blocking time, rescheduling meetings, and trying to protect focus time, they
                realized there had to be a better way. What if a calendar could learn your preferences and optimize
                itself? What if AI could help you make the most of your time?
              </p>
              <p className="text-lg text-slate-600">
                In 2022, they assembled a team of AI experts, UX designers, and productivity enthusiasts to build
                Cadence – the first truly intelligent calendar that adapts to your life, not the other way around.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="p-1">
                <img src="/placeholder.svg?height=400&width=500" alt="Cadence founders" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
              <Heart className="h-4 w-4 mr-2" />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">What drives us every day</h2>
            <p className="text-lg text-slate-600">
              Our core values guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Time is precious</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We believe your time is your most valuable resource. Every feature we build is designed to help you
                  make the most of it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Innovation with purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We don't build AI features for the sake of it. Every innovation must solve real problems and create
                  tangible value.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Human-centered</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Technology should adapt to humans, not the other way around. We design for real people with real
                  needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
              <Users className="h-4 w-4 mr-2" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Meet the people behind Cadence</h2>
            <p className="text-lg text-slate-600">
              We're a diverse team of engineers, designers, and productivity enthusiasts passionate about helping people
              make the most of their time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Alex Chen",
                role: "Co-Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former product lead at Google Calendar with a passion for productivity systems.",
              },
              {
                name: "Sarah Johnson",
                role: "Co-Founder & CTO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "AI researcher with expertise in machine learning and natural language processing.",
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Design",
                image: "/placeholder.svg?height=300&width=300",
                bio: "UX specialist focused on creating intuitive and delightful user experiences.",
              },
              {
                name: "Priya Patel",
                role: "Lead Engineer",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Full-stack developer with a background in building scalable web applications.",
              },
              {
                name: "David Kim",
                role: "AI Research Lead",
                image: "/placeholder.svg?height=300&width=300",
                bio: "PhD in Computer Science specializing in predictive algorithms and machine learning.",
              },
              {
                name: "Emma Wilson",
                role: "Product Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former productivity coach with expertise in time management methodologies.",
              },
              {
                name: "James Taylor",
                role: "Customer Success",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Dedicated to ensuring customers get the most value from Cadence.",
              },
              {
                name: "Lisa Wang",
                role: "Marketing Director",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Experienced in growing B2B SaaS products with a focus on user-centric messaging.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-purple-600 text-sm mb-2">{member.role}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
              <Award className="h-4 w-4 mr-2" />
              <span>Our Backers</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Backed by the best</h2>
            <p className="text-lg text-slate-600">
              We're proud to be supported by investors who share our vision for the future of productivity.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200">
                <img
                  src={`/placeholder.svg?height=60&width=120&text=Investor ${i}`}
                  alt={`Investor ${i}`}
                  className="max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
                <Users className="h-4 w-4 mr-2" />
                <span>Join Our Team</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Come build the future with us</h2>
              <p className="text-lg text-slate-600 mb-6">
                We're always looking for talented individuals who are passionate about productivity, AI, and creating
                exceptional user experiences.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                At Cadence, you'll work with a diverse team of experts, tackle challenging problems, and make a real
                impact on how people manage their time.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                View open positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
              <div className="p-1">
                <img src="/placeholder.svg?height=400&width=500" alt="Cadence team" className="rounded-lg w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
              <Globe className="h-4 w-4 mr-2" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">We'd love to hear from you</h2>
            <p className="text-lg text-slate-600">
              Have questions, feedback, or just want to say hello? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">For general inquiries and support:</p>
                <a href="mailto:hello@cadence.ai" className="text-purple-600 hover:text-purple-800 font-medium">
                  hello@cadence.ai
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Chat with our support team directly from the app or website.</p>
                <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
                  Start a conversation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">Our headquarters:</p>
                <address className="not-italic text-slate-700">
                  123 Productivity Lane
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </address>
              </CardContent>
            </Card>
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

function Mail({ className }: { className?: string }) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function MessageSquare({ className }: { className?: string }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function MapPin({ className }: { className?: string }) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Clock({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

