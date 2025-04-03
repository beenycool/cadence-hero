import { Calendar, MessageSquareText, BellRing, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AISchedulingPreview from "@/components/feature-previews/ai-scheduling-preview"
import NaturalLanguagePreview from "@/components/feature-previews/natural-language-preview"
import SmartRemindersPreview from "@/components/feature-previews/smart-reminders-preview"

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            <span>Intelligent Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Reimagine how you manage your time</h2>
          <p className="text-lg text-muted-foreground">
            Cadence combines AI intelligence with thoughtful design to create a calendar that works for you, not against
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: AI-powered scheduling */}
          <FeatureCard
            icon={<Calendar className="h-6 w-6 text-primary" />}
            title="AI-Powered Scheduling"
            description="Our intelligent algorithm learns your preferences and optimizes your schedule for maximum productivity and work-life balance."
            preview={<AISchedulingPreview />}
          />

          {/* Feature 2: Natural language event creation */}
          <FeatureCard
            icon={<MessageSquareText className="h-6 w-6 text-primary" />}
            title="Natural Language Creation"
            description="Simply type or speak what you need to schedule, and Cadence understands context, timing, and participants automatically."
            preview={<NaturalLanguagePreview />}
          />

          {/* Feature 3: Smart reminders and follow-ups */}
          <FeatureCard
            icon={<BellRing className="h-6 w-6 text-primary" />}
            title="Smart Reminders & Follow-ups"
            description="Never miss important deadlines with contextual reminders that know when and how to notify you based on your response patterns."
            preview={<SmartRemindersPreview />}
          />
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-primary to-teal-500 hover:from-primary/80 hover:to-teal-600/80 text-primary-foreground">
            Explore all features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  preview: React.ReactNode
}

function FeatureCard({ icon, title, description, preview }: FeatureCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex items-center text-sm text-primary font-medium">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>

      <div className="border-t border-border bg-muted p-4 h-64 overflow-hidden">
        <div className="transform transition-transform duration-500 group-hover:scale-105">{preview}</div>
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
