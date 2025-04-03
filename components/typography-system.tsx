export default function TypographySystem() {
  return (
    <div className="space-y-12">
      {/* Brand & Logo */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Brand & Logo</h3>
        <div className="p-6 border rounded-lg grid gap-6">
          <div className="space-y-2">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Cadence
            </div>
            <div className="text-sm text-muted-foreground">
              Font: Urbanist, Weight: 800 (ExtraBold), Treatment: Gradient
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary-600">Cadence</div>
            <div className="text-sm text-muted-foreground">
              Font: Urbanist, Weight: 700 (Bold), Treatment: Solid color
            </div>
          </div>
        </div>
      </div>

      {/* Font Family */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Font Family</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg">
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold mb-2">Primary Font: Urbanist</div>
                <div className="font-urbanist text-2xl">Urbanist</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Clean, modern sans-serif with excellent readability. Used for headings, UI elements, and brand
                  identity.
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="space-y-1">
                  <div className="font-urbanist font-light">Light (300)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 300</div>
                </div>
                <div className="space-y-1">
                  <div className="font-urbanist font-normal">Regular (400)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 400</div>
                </div>
                <div className="space-y-1">
                  <div className="font-urbanist font-medium">Medium (500)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 500</div>
                </div>
                <div className="space-y-1">
                  <div className="font-urbanist font-semibold">SemiBold (600)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 600</div>
                </div>
                <div className="space-y-1">
                  <div className="font-urbanist font-bold">Bold (700)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 700</div>
                </div>
                <div className="space-y-1">
                  <div className="font-urbanist font-extrabold">ExtraBold (800)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 800</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <div className="space-y-4">
              <div>
                <div className="text-lg font-semibold mb-2">Secondary Font: Inter</div>
                <div className="font-inter text-2xl">Inter</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Highly legible sans-serif optimized for screen reading. Used for body text and dense UI elements.
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="space-y-1">
                  <div className="font-inter font-light">Light (300)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 300</div>
                </div>
                <div className="space-y-1">
                  <div className="font-inter font-normal">Regular (400)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 400</div>
                </div>
                <div className="space-y-1">
                  <div className="font-inter font-medium">Medium (500)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 500</div>
                </div>
                <div className="space-y-1">
                  <div className="font-inter font-semibold">SemiBold (600)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 600</div>
                </div>
                <div className="space-y-1">
                  <div className="font-inter font-bold">Bold (700)</div>
                  <div className="text-xs text-muted-foreground">fontWeight: 700</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Typography Scale</h3>
        <div className="p-6 border rounded-lg space-y-8">
          {/* Headings */}
          <div className="space-y-6">
            <div className="text-lg font-semibold">Headings</div>
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="font-urbanist text-5xl font-bold leading-tight text-foreground">
                  H1: Calendar that works for you
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Urbanist, Size: 48px (text-5xl), Weight: 700, Line Height: 1.1, Letter Spacing: -0.02em
                </div>
                <div className="text-sm text-muted-foreground">Usage: Main page titles, hero sections</div>
              </div>

              <div className="space-y-1">
                <div className="font-urbanist text-4xl font-bold leading-tight text-foreground">
                  H2: Intelligent scheduling
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Urbanist, Size: 36px (text-4xl), Weight: 700, Line Height: 1.2, Letter Spacing: -0.01em
                </div>
                <div className="text-sm text-muted-foreground">Usage: Section headings, feature titles</div>
              </div>

              <div className="space-y-1">
                <div className="font-urbanist text-3xl font-semibold leading-tight text-foreground">
                  H3: Advanced productivity tools
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Urbanist, Size: 30px (text-3xl), Weight: 600, Line Height: 1.3
                </div>
                <div className="text-sm text-muted-foreground">Usage: Subsection headings, card titles</div>
              </div>

              <div className="space-y-1">
                <div className="font-urbanist text-2xl font-semibold leading-snug text-foreground">
                  H4: Smart calendar features
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Urbanist, Size: 24px (text-2xl), Weight: 600, Line Height: 1.3
                </div>
                <div className="text-sm text-muted-foreground">Usage: Component headings, modal titles</div>
              </div>

              <div className="space-y-1">
                <div className="font-urbanist text-xl font-medium leading-snug text-foreground">
                  H5: Focus time protection
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Urbanist, Size: 20px (text-xl), Weight: 500, Line Height: 1.4
                </div>
                <div className="text-sm text-muted-foreground">Usage: Smaller section titles, widget headings</div>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div className="space-y-6">
            <div className="text-lg font-semibold">Body Text</div>
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="font-inter text-lg leading-relaxed text-slate-700">
                  Body Large: Cadence uses AI to understand your priorities, habits, and preferences to create the
                  perfect schedule that adapts to your life, not the other way around.
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Inter, Size: 18px (text-lg), Weight: 400, Line Height: 1.6
                </div>
                <div className="text-sm text-muted-foreground">Usage: Lead paragraphs, feature descriptions</div>
              </div>

              <div className="space-y-1">
                <div className="font-inter text-base leading-relaxed text-slate-700">
                  Body: Our intelligent calendar adapts to your unique workflow in just a few simple steps. Connect your
                  existing calendars, set your preferences, and let our AI analyze your patterns to optimize your
                  schedule.
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Inter, Size: 16px (text-base), Weight: 400, Line Height: 1.6
                </div>
                <div className="text-sm text-muted-foreground">Usage: Standard body text, paragraphs</div>
              </div>

              <div className="space-y-1">
                <div className="font-inter text-sm leading-relaxed text-slate-600">
                  Body Small: Cadence has completely transformed how I manage my time. I'm more productive during work
                  hours and actually disconnect when I'm off. It's like having a personal assistant who knows me better
                  than I know myself.
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Inter, Size: 14px (text-sm), Weight: 400, Line Height: 1.5
                </div>
                <div className="text-sm text-muted-foreground">Usage: Secondary text, captions, small descriptions</div>
              </div>

              <div className="space-y-1">
                <div className="font-inter text-xs leading-normal text-slate-500">
                  Caption: Last updated 3 days ago · 5 min read · Privacy policy
                </div>
                <div className="text-sm text-muted-foreground">
                  Font: Inter, Size: 12px (text-xs), Weight: 400, Line Height: 1.5
                </div>
                <div className="text-sm text-muted-foreground">Usage: Metadata, timestamps, footnotes</div>
              </div>
            </div>
          </div>

          {/* UI Elements */}
          <div className="space-y-6">
            <div className="text-lg font-semibold">UI Elements</div>
            <div className="space-y-6">
              <div className="space-y-1">
                <button className="font-urbanist bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium">
                  Get Started
                </button>
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Urbanist, Size: 16px, Weight: 500, Line Height: 1.4, Letter Spacing: 0.01em
                </div>
                <div className="text-sm text-muted-foreground">Usage: Primary buttons, CTAs</div>
              </div>

              <div className="space-y-1">
                <button className="font-urbanist border border-primary-600 text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-md font-medium">
                  Learn More
                </button>
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Urbanist, Size: 16px, Weight: 500, Line Height: 1.4
                </div>
                <div className="text-sm text-muted-foreground">Usage: Secondary buttons, less prominent actions</div>
              </div>

              <div className="space-y-1">
                <div className="font-inter text-sm font-medium text-slate-700 mb-1">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="font-inter text-base border border-slate-300 rounded-md px-3 py-2 w-full max-w-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Inter, Label: 14px, Weight: 500; Input: 16px, Weight: 400
                </div>
                <div className="text-sm text-muted-foreground">Usage: Form labels and inputs</div>
              </div>

              <div className="space-y-1">
                <div className="font-inter bg-slate-100 text-slate-800 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                  New Feature
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Inter, Size: 12px, Weight: 500, Line Height: 1.5
                </div>
                <div className="text-sm text-muted-foreground">Usage: Tags, badges, chips</div>
              </div>
            </div>
          </div>

          {/* Special Treatments */}
          <div className="space-y-6">
            <div className="text-lg font-semibold">Special Treatments</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="font-urbanist text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  AI-Powered Scheduling
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Urbanist, Size: 24px, Weight: 700, Gradient Text
                </div>
                <div className="text-sm text-muted-foreground">Usage: Feature highlights, premium elements</div>
              </div>

              <div className="space-y-1">
                <div className="font-urbanist text-lg font-semibold px-4 py-3 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-lg border border-primary-200 text-primary-800">
                  Smart Time Blocking
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  Font: Urbanist, Size: 18px, Weight: 600, Gradient Background
                </div>
                <div className="text-sm text-muted-foreground">Usage: Feature cards, highlighted sections</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Example Application */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Example Application</h3>
        <div className="border rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-card border-b p-4">
            <div className="text-2xl font-bold font-urbanist text-primary-600 flex items-center">
              <span className="bg-primary-600 text-white p-1 rounded mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                  <line x1="16" x2="16" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="2" y2="6"></line>
                  <line x1="3" x2="21" y1="10" y2="10"></line>
                </svg>
              </span>
              Cadence
            </div>
          </div>

          {/* Content */}
          <div className="bg-muted p-6">
            <div className="max-w-3xl mx-auto bg-card rounded-lg shadow-sm border overflow-hidden">
              {/* Card Header */}
              <div className="p-6 border-b">
                <h2 className="font-urbanist text-3xl font-bold text-foreground mb-2">Welcome Back, Alex</h2>
                <p className="font-inter text-base text-muted-foreground">
                  Here's your schedule for today, optimized for productivity.
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="font-urbanist text-xl font-semibold mb-4 text-slate-800">Today's Focus Blocks</div>

                {/* Event Item */}
                <div className="mb-4 bg-primary-50 border-l-4 border-primary-500 p-3 rounded-r-md">
                  <div className="font-urbanist font-medium text-primary-700">Deep Work Session</div>
                  <div className="font-inter text-sm text-muted-foreground flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="mr-3">9:00 AM - 11:00 AM</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 mr-1"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Home Office</span>
                  </div>
                </div>

                {/* Event Item */}
                <div className="mb-4 bg-secondary-50 border-l-4 border-secondary-500 p-3 rounded-r-md">
                  <div className="font-urbanist font-medium text-secondary-700">Team Meeting</div>
                  <div className="font-inter text-sm text-muted-foreground flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 mr-1"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="mr-3">11:30 AM - 12:30 PM</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3 mr-1"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Conference Room A</span>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="p-4 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100 rounded-lg mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0 bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-1.5 rounded-full mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M12 3v5m4-2-3 3m-2 4v5m-4-2 3 3m10-10-3 3m-2-6V3m-4 2 3 3m2 4v5m4-2-3 3M3 9l3 3m2-6V3"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-urbanist font-medium text-primary-800 text-sm">AI Suggestion</div>
                      <p className="font-inter text-sm text-muted-foreground mt-1">
                        Based on your productivity patterns, I've scheduled focus time after your team meeting to
                        complete the project proposal.
                      </p>
                      <button className="mt-2 font-urbanist text-xs bg-white border border-primary-200 text-primary-700 px-3 py-1 rounded">
                        Apply Suggestion
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

