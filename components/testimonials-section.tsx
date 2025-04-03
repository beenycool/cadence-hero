"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star, Calendar, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Founder & CEO",
      company: "NexTech Innovations",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Cadence has transformed how I run my startup. The AI scheduling suggestions are uncanny—it's like having an assistant who knows exactly when I need focus time vs. meeting time. I've reclaimed at least 5 hours weekly that used to be lost to poor scheduling.",
      rating: 5,
      feature: "AI Focus Time Blocking",
    },
    {
      name: "Marcus Johnson",
      title: "VP of Operations",
      company: "Elevate Enterprise",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "As an executive managing multiple teams, my calendar was a nightmare. Cadence's team scheduling features have reduced our meeting time by 30% while improving collaboration. The AI somehow finds the perfect slots that work for everyone's productivity patterns.",
      rating: 5,
      feature: "Smart Team Scheduling",
    },
    {
      name: "Leila Rodriguez",
      title: "Independent UX Designer",
      company: "Freelance",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Balancing multiple clients used to be my biggest challenge. Cadence's natural language scheduling lets me say 'Schedule 3 hours for the Acme project before Thursday' and it finds the optimal time based on my energy levels. Game-changer for freelancers!",
      rating: 5,
      feature: "Natural Language Scheduling",
    },
    {
      name: "David Park",
      title: "Product Manager",
      company: "Horizon Software",
      image: "/placeholder.svg?height=400&width=400",
      quote:
        "Our team's productivity skyrocketed after adopting Cadence. The AI analyzes our past sprint performance and automatically schedules optimal times for planning, standups, and deep work. The smart reminders ensure nothing falls through the cracks.",
      rating: 5,
      feature: "Smart Reminders & Analytics",
    },
  ]

  // Auto-advance testimonials
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50 rounded-full opacity-30 blur-3xl"></div>

        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-purple-100 text-purple-700 mb-4">
            <Star className="h-4 w-4 mr-2" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by professionals everywhere</h2>
          <p className="text-lg text-slate-600">
            See how Cadence is transforming how people manage their time and boost productivity.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-12 items-center">
              {/* Testimonial Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-teal-100 rounded-2xl blur-xl opacity-70 animate-pulse"></div>
                <div className="relative bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 p-6 aspect-square">
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full p-2 shadow-lg">
                    <Quote className="h-5 w-5 text-white" />
                  </div>

                  <div className="h-full flex flex-col items-center justify-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                      <Image
                        src={testimonials[activeIndex].image || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex mb-2">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900">{testimonials[activeIndex].name}</h3>
                      <p className="text-slate-600">{testimonials[activeIndex].title}</p>
                      <p className="text-purple-600 font-medium">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="relative">
                <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-purple-100 opacity-30">
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M30 60H0V40C0 18 18 0 40 0H50V20H40C28 20 20 28 20 40V60H30V120H0V60ZM100 60H70V40C70 18 88 0 110 0H120V20H110C98 20 90 28 90 40V60H100V120H70V60Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                  <div className="mb-6">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 mb-4">
                      <Sparkles className="h-4 w-4 mr-2" />
                      <span>Favorite Feature: {testimonials[activeIndex].feature}</span>
                    </div>
                    <p className="text-lg text-slate-700 italic leading-relaxed">"{testimonials[activeIndex].quote}"</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-1">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setAutoplay(false)
                            setActiveIndex(index)
                          }}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            index === activeIndex
                              ? "bg-gradient-to-r from-purple-600 to-teal-500 w-8"
                              : "bg-slate-300 hover:bg-slate-400",
                          )}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={handlePrev}>
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full h-8 w-8" onClick={handleNext}>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm max-w-md mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                <Image
                  src={testimonials[activeIndex].image || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex mb-2">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900">{testimonials[activeIndex].name}</h3>
                <p className="text-sm text-slate-600">{testimonials[activeIndex].title}</p>
                <p className="text-sm text-purple-600 font-medium">{testimonials[activeIndex].company}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 mb-3">
                <Sparkles className="h-3 w-3 mr-1" />
                <span>Favorite: {testimonials[activeIndex].feature}</span>
              </div>
              <p className="text-slate-700 italic text-sm leading-relaxed">"{testimonials[activeIndex].quote}"</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false)
                      setActiveIndex(index)
                    }}
                    className={cn(
                      "w-1.5 h-1.5 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-gradient-to-r from-purple-600 to-teal-500 w-6"
                        : "bg-slate-300 hover:bg-slate-400",
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-1">
                <Button variant="outline" size="icon" className="rounded-full h-7 w-7" onClick={handlePrev}>
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-7 w-7" onClick={handleNext}>
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StatCard icon={<Users className="h-5 w-5 text-purple-600" />} value="10,000+" label="Active Users" />
            <StatCard icon={<Calendar className="h-5 w-5 text-purple-600" />} value="1.2M+" label="Events Scheduled" />
            <StatCard icon={<Clock className="h-5 w-5 text-purple-600" />} value="320,000+" label="Hours Saved" />
            <StatCard icon={<Sparkles className="h-5 w-5 text-purple-600" />} value="98%" label="Satisfaction Rate" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 text-center hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center mb-3">{icon}</div>
      <div className="text-2xl font-bold text-slate-900 mb-1">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}

function Users({ className }: { className?: string }) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

