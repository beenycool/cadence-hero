"use client"

import { useState } from "react"
import { Check, CheckCircle2, HelpCircle, Sparkles, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export default function PricingSection() {
  const [billingAnnually, setBillingAnnually] = useState(true)

  const pricingPlans = [
    {
      name: "Free",
      description: "Perfect for individuals getting started with smart scheduling.",
      price: {
        monthly: 0,
        annually: 0,
      },
      features: [
        "Basic calendar integration",
        "Up to 5 AI scheduling suggestions per month",
        "Personal calendar view",
        "Email reminders",
        "Mobile app access",
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      name: "Pro",
      description: "Ideal for professionals who want to maximise productivity.",
      price: {
        monthly: 9.99,
        annually: 99.99,
      },
      features: [
        "Everything in Free",
        "Unlimited AI scheduling suggestions",
        "Priority support",
        "Advanced productivity analytics",
        "Focus time protection",
        "Custom scheduling rules",
        "Calendar sharing",
      ],
      cta: "Upgrade to Pro",
      ctaVariant: "default" as const,
      popular: true,
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      name: "Team",
      description: "For teams that need collaborative scheduling and management.",
      price: {
        monthly: 19.99,
        annually: 199.99,
      },
      features: [
        "Everything in Pro",
        "Collaborative team scheduling",
        "Admin controls and dashboard",
        "Team productivity analytics",
        "Shared focus time settings",
        "Meeting cost calculator",
        "Task assignment for team members",
        "Priority customer support",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      icon: <Users className="h-5 w-5" />,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
            <Zap className="h-4 w-4 mr-2" />
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose the plan that's right for you</h2>
          <p className="text-lg text-slate-600 mb-8">All plans include a 14-day free trial. No credit card required.</p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-3">
            <span
              className={cn(
                "text-sm transition-colors duration-200",
                !billingAnnually ? "text-slate-900 font-medium" : "text-slate-500",
              )}
            >
              Monthly
            </span>
            <div className="relative">
              <Switch
                checked={billingAnnually}
                onCheckedChange={setBillingAnnually}
                className="data-[state=checked]:bg-gradient-to-r from-purple-600 to-teal-500"
              />
              <div
                className={cn(
                  "absolute -top-8 -right-12 bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs px-2 py-1 rounded-full transition-opacity duration-200",
                  billingAnnually ? "opacity-100" : "opacity-0",
                )}
              >
                Save 16%
              </div>
            </div>
            <span
              className={cn(
                "text-sm transition-colors duration-200",
                billingAnnually ? "text-slate-900 font-medium" : "text-slate-500",
              )}
            >
              Yearly
            </span>
            {billingAnnually && (
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 ml-1">2 months free</Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-xl border transition-all duration-300 hover:shadow-lg",
                plan.popular
                  ? "border-purple-200 shadow-md shadow-purple-100 hover:shadow-purple-200"
                  : "border-slate-200 hover:border-slate-300",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={cn("p-6 rounded-t-xl", plan.popular ? "bg-purple-50" : "bg-slate-50")}>
                <div className="flex items-center mb-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center mr-3",
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-teal-500 text-white"
                        : "bg-slate-200 text-slate-700",
                    )}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold">
                    ${billingAnnually ? plan.price.annually : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-slate-500 ml-1">{billingAnnually ? "/year" : "/month"}</span>
                  )}
                  {plan.name === "Team" && <span className="text-slate-500 ml-1">per user</span>}
                </div>
                <Button
                  variant={plan.ctaVariant}
                  className={cn(
                    "w-full",
                    plan.popular &&
                      plan.ctaVariant === "default" &&
                      "bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600",
                  )}
                >
                  {plan.cta}
                </Button>
              </div>

              <div className="p-6">
                <p className="text-sm font-medium text-slate-700 mb-4">Plan includes:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2
                        className={cn("h-5 w-5 mr-2 flex-shrink-0", plan.popular ? "text-purple-600" : "text-teal-500")}
                      />
                      <span className="text-sm text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-purple-50 to-teal-50 rounded-xl border border-purple-100 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-slate-600 mb-4">Contact our sales team for enterprise pricing and custom solutions.</p>
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

        {/* Enhanced FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <FaqItem
              question="How does Cadence's AI scheduling actually work?"
              answer="Cadence uses machine learning algorithms to analyse your calendar patterns, productivity rhythms, and preferences. It learns when you're most productive for different types of tasks, understands your meeting preferences, and optimises your schedule accordingly. The AI continuously improves as it learns from your interactions and feedback."
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
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-900">{question}</span>
        <HelpCircle
          className={cn(
            "h-5 w-5 text-slate-400 transition-transform duration-200",
            isOpen && "transform rotate-180 text-purple-600",
          )}
        />
      </button>
      <div
        className={cn(
          "mt-2 text-slate-600 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}

function Calendar({ className }: { className?: string }) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

