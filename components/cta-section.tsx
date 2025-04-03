"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-purple-600 to-teal-500"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-teal-300 opacity-10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3 text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Start Mastering Your Time Today
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
              Join thousands of professionals who have transformed their scheduling with Cadence. Try it free for 14
              days — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-white/90">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-teal-300" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-teal-300" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-teal-300" />
                <span>Full access to all features</span>
              </div>
            </div>
          </div>

          {/* Calendar Illustration */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <CalendarAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CalendarAnimation() {
  const [currentStep, setCurrentStep] = useState(0)

  // Animate through the optimization steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-purple-200 p-4 aspect-square">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-purple-100">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-purple-600 mr-2" />
          <h3 className="font-semibold text-purple-900">Your Calendar</h3>
        </div>
        <div className="flex items-center text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          <Clock className="h-3 w-3 mr-1" />
          <span>May 2024</span>
        </div>
      </div>

      {/* Calendar Body */}
      <div className="space-y-2 mb-4">
        {/* Step 1: Initial Schedule */}
        <div
          className={`transition-all duration-500 ${currentStep === 0 ? "opacity-100" : "opacity-0 absolute inset-0"} ${currentStep !== 0 && "pointer-events-none"}`}
        >
          <CalendarDay time="9:00 AM" event="Team Meeting" type="meeting" active={currentStep === 0} />
          <CalendarDay time="10:30 AM" event="Client Call" type="meeting" active={currentStep === 0} />
          <CalendarDay time="12:00 PM" event="Lunch Break" type="break" active={currentStep === 0} />
          <CalendarDay time="1:00 PM" event="Email Catchup" type="work" active={currentStep === 0} />
          <CalendarDay time="3:00 PM" event="Project Review" type="meeting" active={currentStep === 0} />
          <CalendarDay time="4:30 PM" event="Admin Tasks" type="work" active={currentStep === 0} />
        </div>

        {/* Step 2: AI Analyzing */}
        <div
          className={`transition-all duration-500 ${currentStep === 1 ? "opacity-100" : "opacity-0 absolute inset-0"} ${currentStep !== 1 && "pointer-events-none"}`}
        >
          <div className="h-64 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4">
              <SparklesIcon className="h-8 w-8 text-purple-600 animate-pulse" />
            </div>
            <h3 className="text-lg font-medium text-purple-900 mb-2">AI Optimizing</h3>
            <p className="text-sm text-purple-700 text-center max-w-xs">
              Analyzing your productivity patterns and priorities...
            </p>
            <div className="mt-4 w-48 h-2 bg-purple-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-600 to-teal-500 animate-pulse"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Step 3: Optimization Suggestions */}
        <div
          className={`transition-all duration-500 ${currentStep === 2 ? "opacity-100" : "opacity-0 absolute inset-0"} ${currentStep !== 2 && "pointer-events-none"}`}
        >
          <div className="bg-purple-50 border border-purple-100 rounded-lg p-3 mb-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-1 mt-0.5">
                <SparklesIcon className="h-3 w-3 text-white" />
              </div>
              <div className="ml-2">
                <p className="text-xs font-medium text-purple-800">AI Recommendation</p>
                <p className="text-xs text-purple-700">Rearrange your schedule for optimal productivity:</p>
                <ul className="text-xs text-purple-700 mt-1 space-y-1">
                  <li className="flex items-center">
                    <ArrowRight className="h-2 w-2 mr-1" />
                    <span>Group meetings in the afternoon</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-2 w-2 mr-1" />
                    <span>Add focus time in the morning</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-2 w-2 mr-1" />
                    <span>Schedule buffer time between meetings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end mt-2">
              <button className="text-[10px] bg-gradient-to-r from-purple-600 to-teal-500 text-white px-2 py-1 rounded">
                Apply Changes
              </button>
            </div>
          </div>

          <CalendarDay
            time="9:00 AM"
            event="Team Meeting"
            type="meeting"
            suggested={false}
            active={currentStep === 2}
          />
          <CalendarDay
            time="10:30 AM"
            event="Client Call"
            type="meeting"
            suggested={false}
            active={currentStep === 2}
          />
          <CalendarDay time="12:00 PM" event="Lunch Break" type="break" suggested={true} active={currentStep === 2} />
        </div>

        {/* Step 4: Optimized Schedule */}
        <div
          className={`transition-all duration-500 ${currentStep === 3 ? "opacity-100" : "opacity-0 absolute inset-0"} ${currentStep !== 3 && "pointer-events-none"}`}
        >
          <CalendarDay time="9:00 AM" event="Deep Work" type="focus" ai={true} active={currentStep === 3} />
          <CalendarDay time="11:00 AM" event="Email Catchup" type="work" ai={true} active={currentStep === 3} />
          <CalendarDay time="12:00 PM" event="Lunch Break" type="break" active={currentStep === 3} />
          <CalendarDay time="1:00 PM" event="Team Meeting" type="meeting" active={currentStep === 3} />
          <CalendarDay time="2:30 PM" event="Buffer Time" type="buffer" ai={true} active={currentStep === 3} />
          <CalendarDay time="3:00 PM" event="Client Call" type="meeting" active={currentStep === 3} />
          <CalendarDay time="4:30 PM" event="Project Review" type="meeting" active={currentStep === 3} />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {[0, 1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentStep === step ? "bg-gradient-to-r from-purple-600 to-teal-500 w-6" : "bg-purple-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function CalendarDay({ time, event, type, ai = false, suggested = false, active = false }) {
  let bgColor = "bg-white"
  let borderColor = "border-slate-100"
  let textColor = "text-slate-700"

  if (type === "meeting") {
    bgColor = "bg-blue-50"
    borderColor = "border-blue-100"
    textColor = "text-blue-700"
  } else if (type === "focus") {
    bgColor = "bg-purple-50"
    borderColor = "border-purple-100"
    textColor = "text-purple-700"
  } else if (type === "break") {
    bgColor = "bg-amber-50"
    borderColor = "border-amber-100"
    textColor = "text-amber-700"
  } else if (type === "buffer") {
    bgColor = "bg-teal-50"
    borderColor = "border-teal-100"
    textColor = "text-teal-700"
  }

  if (suggested) {
    bgColor = "bg-white"
    borderColor = "border-red-200"
    textColor = "text-red-700"
  }

  return (
    <div
      className={`flex items-center ${borderColor} border-l-4 rounded mb-2 overflow-hidden transition-all duration-300 ${active ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
      style={{ transitionDelay: `${Math.random() * 0.5}s` }}
    >
      <div className="w-16 py-2 px-1 bg-slate-50 text-xs text-slate-500 font-medium">{time}</div>
      <div className={`flex-1 py-2 px-3 ${bgColor} ${textColor} text-sm font-medium flex justify-between items-center`}>
        <span>{event}</span>
        {ai && (
          <span className="text-[10px] bg-gradient-to-r from-purple-600 to-teal-500 text-white px-1.5 py-0.5 rounded-full flex items-center">
            <SparklesIcon className="h-2 w-2 mr-0.5" />
            AI
          </span>
        )}
        {suggested && (
          <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full">Suggested Move</span>
        )}
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

