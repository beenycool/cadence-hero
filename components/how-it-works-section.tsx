"use client"

import { useState, useEffect } from "react"
import {
  Calendar,
  Brain,
  Clock,
  ArrowRight,
  Check,
  TrendingUpIcon,
  HeartIcon,
  MessageCircleIcon,
  UserIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)

  // Auto-advance steps for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      number: 1,
      title: "Connect & Customize",
      description:
        "Connect your existing calendars and set your preferences for work hours, focus time, and meeting preferences.",
      icon: <Calendar className="h-6 w-6 text-white" />,
      illustration: <ConnectIllustration active={activeStep === 0} />,
    },
    {
      number: 2,
      title: "AI Analysis",
      description:
        "Our AI analyzes your schedule patterns, priorities, and habits to understand your unique productivity rhythm.",
      icon: <Brain className="h-6 w-6 text-white" />,
      illustration: <AnalysisIllustration active={activeStep === 1} />,
    },
    {
      number: 3,
      title: "Smart Scheduling",
      description:
        "Cadence suggests optimal time blocks for meetings, deep work, and personal time based on your patterns.",
      icon: <Sparkles className="h-6 w-6 text-white" />,
      illustration: <SchedulingIllustration active={activeStep === 2} />,
    },
    {
      number: 4,
      title: "Perfect Balance",
      description: "Enjoy a perfectly balanced calendar that maximizes productivity while protecting your well-being.",
      icon: <Clock className="h-6 w-6 text-white" />,
      illustration: <BalanceIllustration active={activeStep === 3} />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How Cadence works for you</h2>
          <p className="text-lg text-slate-600">
            Our intelligent calendar adapts to your unique workflow in just a few simple steps.
          </p>
        </div>

        {/* Desktop Timeline (hidden on mobile) */}
        <div className="hidden md:block relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-200 via-teal-200 to-purple-200 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex flex-col items-center transition-all duration-500",
                  activeStep === index ? "opacity-100 scale-105" : "opacity-70",
                )}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-500 mb-4",
                    activeStep === index
                      ? "bg-gradient-to-r from-purple-600 to-teal-500 shadow-lg shadow-purple-200"
                      : "bg-slate-200",
                  )}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </div>

                <h3
                  className={cn(
                    "text-xl font-semibold mb-2 text-center transition-colors duration-500",
                    activeStep === index ? "text-purple-700" : "text-slate-700",
                  )}
                >
                  {step.title}
                </h3>

                <p className="text-slate-600 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps (visible only on mobile) */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "flex items-start transition-all duration-500 p-4 rounded-lg",
                activeStep === index ? "bg-white shadow-md" : "opacity-70",
              )}
              onClick={() => setActiveStep(index)}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-4",
                  activeStep === index ? "bg-gradient-to-r from-purple-600 to-teal-500" : "bg-slate-200",
                )}
              >
                <span className="text-white font-bold">{step.number}</span>
              </div>

              <div>
                <h3
                  className={cn(
                    "text-lg font-semibold mb-1 transition-colors duration-500",
                    activeStep === index ? "text-purple-700" : "text-slate-700",
                  )}
                >
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrations */}
        <div className="mt-12 bg-white rounded-xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 h-[300px] md:h-[400px] relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-700 flex items-center justify-center",
                  activeStep === index
                    ? "opacity-100 transform translate-x-0"
                    : index < activeStep
                      ? "opacity-0 transform -translate-x-full"
                      : "opacity-0 transform translate-x-full",
                )}
              >
                {step.illustration}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
            Get started with Cadence
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

// Step 1: Connect & Customize Illustration
function ConnectIllustration({ active }: { active: boolean }) {
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-2 gap-6">
        <div
          className={cn(
            "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Google Calendar</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-blue-100 rounded-full w-full"></div>
            <div className="h-2 bg-blue-100 rounded-full w-3/4"></div>
          </div>
          <div
            className={cn(
              "mt-3 flex items-center text-xs text-green-600 transition-all duration-1000 delay-300",
              active ? "opacity-100" : "opacity-0",
            )}
          >
            <Check className="h-3 w-3 mr-1" />
            <span>Connected</span>
          </div>
        </div>

        <div
          className={cn(
            "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform delay-150",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <Calendar className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Outlook</span>
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-blue-100 rounded-full w-full"></div>
            <div className="h-2 bg-blue-100 rounded-full w-2/3"></div>
          </div>
          <div
            className={cn(
              "mt-3 flex items-center text-xs text-green-600 transition-all duration-1000 delay-500",
              active ? "opacity-100" : "opacity-0",
            )}
          >
            <Check className="h-3 w-3 mr-1" />
            <span>Connected</span>
          </div>
        </div>

        <div
          className={cn(
            "col-span-2 bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform delay-300",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
              <UserIcon className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">Your Preferences</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <div className="text-slate-500 mb-1">Work Hours</div>
              <div className="font-medium text-slate-700">9:00 AM - 5:00 PM</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Focus Time</div>
              <div className="font-medium text-slate-700">2 hours daily</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Meeting Buffer</div>
              <div className="font-medium text-slate-700">15 minutes</div>
            </div>
            <div>
              <div className="text-slate-500 mb-1">Lunch Break</div>
              <div className="font-medium text-slate-700">12:00 - 1:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 2: AI Analysis Illustration
function AnalysisIllustration({ active }: { active: boolean }) {
  return (
    <div className="w-full max-w-md">
      <div
        className={cn(
          "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform",
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-2">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-medium text-slate-700">AI Pattern Analysis</span>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">Productivity by Time of Day</span>
              <span className="text-purple-600 font-medium">High confidence</span>
            </div>
            <div className="h-8 bg-slate-100 rounded-md overflow-hidden flex">
              <div
                className={cn("bg-purple-200 h-full transition-all duration-1000 ease-out", active ? "w-[10%]" : "w-0")}
              ></div>
              <div
                className={cn(
                  "bg-purple-300 h-full transition-all duration-1000 ease-out delay-100",
                  active ? "w-[15%]" : "w-0",
                )}
              ></div>
              <div
                className={cn(
                  "bg-purple-400 h-full transition-all duration-1000 ease-out delay-200",
                  active ? "w-[25%]" : "w-0",
                )}
              ></div>
              <div
                className={cn(
                  "bg-purple-500 h-full transition-all duration-1000 ease-out delay-300",
                  active ? "w-[30%]" : "w-0",
                )}
              ></div>
              <div
                className={cn(
                  "bg-purple-400 h-full transition-all duration-1000 ease-out delay-400",
                  active ? "w-[15%]" : "w-0",
                )}
              ></div>
              <div
                className={cn(
                  "bg-purple-300 h-full transition-all duration-1000 ease-out delay-500",
                  active ? "w-[5%]" : "w-0",
                )}
              ></div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>6AM</span>
              <span>9AM</span>
              <span>12PM</span>
              <span>3PM</span>
              <span>6PM</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">Meeting Preferences</span>
              <span className="text-teal-600 font-medium">Medium confidence</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div
                className={cn(
                  "h-6 rounded-md flex items-center justify-center text-[10px] font-medium text-white transition-all duration-700",
                  active ? "bg-teal-500 opacity-100" : "bg-slate-200 opacity-50",
                )}
              >
                Mornings
              </div>
              <div
                className={cn(
                  "h-6 rounded-md flex items-center justify-center text-[10px] font-medium transition-all duration-700 delay-100",
                  active ? "bg-slate-200 text-slate-500 opacity-100" : "bg-slate-200 text-slate-400 opacity-50",
                )}
              >
                Afternoons
              </div>
              <div
                className={cn(
                  "h-6 rounded-md flex items-center justify-center text-[10px] font-medium transition-all duration-700 delay-200",
                  active ? "bg-slate-200 text-slate-500 opacity-100" : "bg-slate-200 text-slate-400 opacity-50",
                )}
              >
                Evenings
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-500">Focus Time Analysis</span>
            </div>
            <div className="flex items-center">
              <div
                className={cn(
                  "h-3 transition-all duration-1000 ease-out rounded-l-full",
                  active ? "bg-gradient-to-r from-purple-600 to-teal-500 w-[75%]" : "bg-slate-200 w-[10%]",
                )}
              ></div>
              <div
                className={cn(
                  "h-3 bg-slate-200 transition-all duration-1000 ease-out rounded-r-full",
                  active ? "w-[25%]" : "w-[90%]",
                )}
              ></div>
            </div>
            <div
              className={cn(
                "text-xs text-purple-600 font-medium mt-1 transition-opacity duration-700 delay-500",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              You're 75% more productive during focus blocks
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 3: Smart Scheduling Illustration
function SchedulingIllustration({ active }: { active: boolean }) {
  return (
    <div className="w-full max-w-md">
      <div
        className={cn(
          "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform",
          active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-2">
            <Calendar className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-medium text-slate-700">Smart Calendar Suggestions</span>
        </div>

        <div className="space-y-3">
          {["Monday", "Tuesday", "Wednesday"].map((day, i) => (
            <div key={day} className="flex items-stretch h-16 border border-slate-200 rounded-md overflow-hidden">
              <div className="w-16 bg-slate-50 flex-shrink-0 flex flex-col items-center justify-center border-r border-slate-200">
                <div className="text-xs font-medium text-slate-700">{day}</div>
                <div className="text-[10px] text-slate-500">May {i + 6}</div>
              </div>

              <div className="flex-1 flex relative">
                <div
                  className={cn(
                    "absolute top-0 bottom-0 left-0 bg-blue-100 border-r border-blue-200 transition-all duration-1000 ease-out flex items-center justify-center",
                    active ? `w-[${25 + i * 5}%]` : "w-0",
                  )}
                >
                  <div
                    className={cn(
                      "text-[10px] text-blue-700 font-medium whitespace-nowrap transition-opacity duration-500",
                      active ? "opacity-100 delay-300" : "opacity-0",
                    )}
                  >
                    Meetings
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute top-0 bottom-0 bg-purple-100 border-r border-purple-200 transition-all duration-1000 ease-out delay-200 flex items-center justify-center",
                    active ? `left-[${25 + i * 5}%] w-[${30 - i * 5}%]` : "left-0 w-0",
                  )}
                >
                  <div
                    className={cn(
                      "text-[10px] text-purple-700 font-medium whitespace-nowrap transition-opacity duration-500",
                      active ? "opacity-100 delay-500" : "opacity-0",
                    )}
                  >
                    <Sparkles className="h-2 w-2 inline mr-0.5" />
                    Focus
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute top-0 bottom-0 bg-amber-100 border-r border-amber-200 transition-all duration-1000 ease-out delay-400 flex items-center justify-center",
                    active ? `left-[${55}%] w-[15%]` : "left-0 w-0",
                  )}
                >
                  <div
                    className={cn(
                      "text-[10px] text-amber-700 font-medium whitespace-nowrap transition-opacity duration-500",
                      active ? "opacity-100 delay-700" : "opacity-0",
                    )}
                  >
                    Break
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute top-0 bottom-0 right-0 bg-emerald-100 transition-all duration-1000 ease-out delay-600 flex items-center justify-center",
                    active ? `w-[${30 - i * 5}%]` : "w-0",
                  )}
                >
                  <div
                    className={cn(
                      "text-[10px] text-emerald-700 font-medium whitespace-nowrap transition-opacity duration-500",
                      active ? "opacity-100 delay-900" : "opacity-0",
                    )}
                  >
                    <Sparkles className="h-2 w-2 inline mr-0.5" />
                    Deep Work
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className={cn(
              "bg-purple-50 rounded-md p-3 border border-purple-100 transition-all duration-700 delay-1000",
              active ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4",
            )}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                <Sparkles className="h-3 w-3 text-white" />
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-purple-800">AI Insight</p>
                <p className="text-xs text-purple-700">
                  Your optimal focus time is between 9-11 AM. I've scheduled deep work blocks during this time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 4: Perfect Balance Illustration
function BalanceIllustration({ active }: { active: boolean }) {
  return (
    <div className="w-full max-w-md">
      <div className="grid grid-cols-2 gap-6">
        <div
          className={cn(
            "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-2">
              <TrendingUpIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">Productivity</span>
          </div>

          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "bg-gradient-to-r from-purple-500 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out",
                    active ? "w-[85%]" : "w-0",
                  )}
                ></div>
              </div>
              <span
                className={cn(
                  "ml-2 text-xs font-medium transition-opacity duration-500",
                  active ? "opacity-100" : "opacity-0",
                )}
              >
                85%
              </span>
            </div>

            <div
              className={cn(
                "text-xs text-slate-600 transition-all duration-700 delay-300",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="text-green-600 font-medium">↑ 32%</span> increase since using Cadence
            </div>
          </div>
        </div>

        <div
          className={cn(
            "bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform delay-150",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-2">
              <HeartIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">Work-Life Balance</span>
          </div>

          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={cn(
                    "bg-gradient-to-r from-purple-500 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out",
                    active ? "w-[90%]" : "w-0",
                  )}
                ></div>
              </div>
              <span
                className={cn(
                  "ml-2 text-xs font-medium transition-opacity duration-500",
                  active ? "opacity-100" : "opacity-0",
                )}
              >
                90%
              </span>
            </div>

            <div
              className={cn(
                "text-xs text-slate-600 transition-all duration-700 delay-300",
                active ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="text-green-600 font-medium">↑ 45%</span> improvement in satisfaction
            </div>
          </div>
        </div>

        <div
          className={cn(
            "col-span-2 bg-white rounded-lg border border-slate-200 p-4 transition-all duration-700 transform delay-300",
            active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center mr-2">
              <MessageCircleIcon className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-slate-700">User Testimonial</span>
          </div>

          <div
            className={cn(
              "italic text-sm text-slate-600 transition-all duration-1000 delay-500",
              active ? "opacity-100" : "opacity-0",
            )}
          >
            "Cadence has completely transformed how I manage my time. I'm more productive during work hours and actually
            disconnect when I'm off. It's like having a personal assistant who knows me better than I know myself."
          </div>

          <div
            className={cn(
              "mt-3 flex items-center transition-all duration-1000 delay-700",
              active ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-teal-200 flex items-center justify-center mr-2">
              <span className="text-xs font-medium text-purple-700">SJ</span>
            </div>
            <div>
              <div className="text-xs font-medium text-slate-700">Sarah Johnson</div>
              <div className="text-xs text-slate-500">Product Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function User({ className }: { className?: string }) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function TrendingUp({ className }: { className?: string }) {
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
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function Heart({ className }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function MessageCircle({ className }: { className?: string }) {
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
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
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

