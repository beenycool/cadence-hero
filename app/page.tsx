import Link from "next/link"
import { Calendar, ChevronRight, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import CalendarMockup from "@/components/calendar-mockup"
import FeaturesSection from "@/components/features-section"
import HowItWorksSection from "@/components/how-it-works-section"
import PricingSection from "@/components/pricing-section"
import TeamManagementSection from "@/components/team-management-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      {/* Navbar - Use semantic colors */}
      <header className="border-b border-border bg-background/80 dark:bg-background/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-teal-500 dark:to-teal-400 bg-clip-text text-transparent">
                  Cadence
                </span>
              </Link>
              {/* <nav className="hidden md:ml-10 md:flex md:space-x-8">
                <Link
                  href="/features"
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/design-system"
                  className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Design System
                </Link>
              </nav> */}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/login"
                className="text-muted-foreground hover:text-primary transition-colors hidden sm:block"
              >
                Log in
              </Link>
              <Button className="bg-gradient-to-r from-primary to-teal-500 hover:from-primary/80 hover:to-teal-600/80 text-primary-foreground">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 dark:bg-primary/20 text-primary">
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                <span>AI-Powered Time Management</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                <span className="block">Intelligent scheduling</span>
                <span className="block bg-gradient-to-r from-primary to-teal-500 dark:to-teal-400 bg-clip-text text-transparent">
                  for the modern world
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Cadence uses AI to understand your priorities, habits, and preferences, creating the perfect schedule
                that adapts to your life, not the other way around.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-teal-500 hover:from-primary/80 hover:to-teal-600/80 text-primary-foreground"
                >
                  Get started for free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-accent"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Watch demo
                </Button>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-teal-500 opacity-${100 - i * 10}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">Join 10,000+ professionals optimising their time</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-xl blur-xl opacity-70 dark:opacity-40"></div>
              <div className="relative bg-card rounded-xl shadow-xl overflow-hidden border border-border">
                <CalendarMockup />
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 dark:bg-primary/5 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <FeaturesSection />

      {/* Team Management Section */}
      <TeamManagementSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />

      {/* Dashboard UI and Calendar View are commented out for the landing page
    but can be uncommented to display them */}
      {/* <DashboardUI /> */}
      {/* <DetailedCalendarView /> */}
    </div>
  )
}
