"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

export default function ColorPalette() {
  return (
    <div className="space-y-12">
      {/* Primary Colors */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Primary Brand Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ColorCard
            name="Primary"
            color="#5046e4"
            variants={[
              { label: "50", hex: "#f3f2fe" },
              { label: "100", hex: "#e9e7fd" },
              { label: "200", hex: "#d6d3fc" },
              { label: "300", hex: "#b7b2f9" },
              { label: "400", hex: "#8f86f3" },
              { label: "500", hex: "#5046e4" },
              { label: "600", hex: "#3f33d9" },
              { label: "700", hex: "#3026c5" },
              { label: "800", hex: "#2820a1" },
              { label: "900", hex: "#221c7d" },
            ]}
            usage="Primary brand color, buttons, active states, links"
          />
          <ColorCard
            name="Secondary"
            color="#10b981"
            variants={[
              { label: "50", hex: "#ecfdf5" },
              { label: "100", hex: "#d1fae5" },
              { label: "200", hex: "#a7f3d0" },
              { label: "300", hex: "#6ee7b7" },
              { label: "400", hex: "#34d399" },
              { label: "500", hex: "#10b981" },
              { label: "600", hex: "#059669" },
              { label: "700", hex: "#047857" },
              { label: "800", hex: "#065f46" },
              { label: "900", hex: "#064e3b" },
            ]}
            usage="Secondary accents, success states, completion indicators"
          />
          <ColorCard
            name="Tertiary"
            color="#f43f5e"
            variants={[
              { label: "50", hex: "#fff1f2" },
              { label: "100", hex: "#ffe4e6" },
              { label: "200", hex: "#fecdd3" },
              { label: "300", hex: "#fda4af" },
              { label: "400", hex: "#fb7185" },
              { label: "500", hex: "#f43f5e" },
              { label: "600", hex: "#e11d48" },
              { label: "700", hex: "#be123c" },
              { label: "800", hex: "#9f1239" },
              { label: "900", hex: "#881337" },
            ]}
            usage="Accent elements, highlights, notifications, tags"
          />
        </div>
      </div>

      {/* Neutral Colors */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Neutral Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ColorCard
            name="Slate"
            color="#64748b"
            variants={[
              { label: "50", hex: "#f8fafc" },
              { label: "100", hex: "#f1f5f9" },
              { label: "200", hex: "#e2e8f0" },
              { label: "300", hex: "#cbd5e1" },
              { label: "400", hex: "#94a3b8" },
              { label: "500", hex: "#64748b" },
              { label: "600", hex: "#475569" },
              { label: "700", hex: "#334155" },
              { label: "800", hex: "#1e293b" },
              { label: "900", hex: "#0f172a" },
            ]}
            usage="UI elements, text, borders, backgrounds"
          />
          <ColorCard
            name="Gray"
            color="#6b7280"
            variants={[
              { label: "50", hex: "#f9fafb" },
              { label: "100", hex: "#f3f4f6" },
              { label: "200", hex: "#e5e7eb" },
              { label: "300", hex: "#d1d5db" },
              { label: "400", hex: "#9ca3af" },
              { label: "500", hex: "#6b7280" },
              { label: "600", hex: "#4b5563" },
              { label: "700", hex: "#374151" },
              { label: "800", hex: "#1f2937" },
              { label: "900", hex: "#111827" },
            ]}
            usage="Secondary UI elements, subtle backgrounds"
          />
        </div>
      </div>

      {/* Semantic Colors */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Semantic Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ColorCard
            name="Success"
            color="#22c55e"
            variants={[
              { label: "50", hex: "#f0fdf4" },
              { label: "100", hex: "#dcfce7" },
              { label: "200", hex: "#bbf7d0" },
              { label: "300", hex: "#86efac" },
              { label: "400", hex: "#4ade80" },
              { label: "500", hex: "#22c55e" },
              { label: "600", hex: "#16a34a" },
              { label: "700", hex: "#15803d" },
              { label: "800", hex: "#166534" },
              { label: "900", hex: "#14532d" },
            ]}
            usage="Success messages, completed tasks"
          />
          <ColorCard
            name="Warning"
            color="#eab308"
            variants={[
              { label: "50", hex: "#fefce8" },
              { label: "100", hex: "#fef9c3" },
              { label: "200", hex: "#fef08a" },
              { label: "300", hex: "#fde047" },
              { label: "400", hex: "#facc15" },
              { label: "500", hex: "#eab308" },
              { label: "600", hex: "#ca8a04" },
              { label: "700", hex: "#a16207" },
              { label: "800", hex: "#854d0e" },
              { label: "900", hex: "#713f12" },
            ]}
            usage="Warnings, alerts, pending actions"
          />
          <ColorCard
            name="Error"
            color="#ef4444"
            variants={[
              { label: "50", hex: "#fef2f2" },
              { label: "100", hex: "#fee2e2" },
              { label: "200", hex: "#fecaca" },
              { label: "300", hex: "#fca5a5" },
              { label: "400", hex: "#f87171" },
              { label: "500", hex: "#ef4444" },
              { label: "600", hex: "#dc2626" },
              { label: "700", hex: "#b91c1c" },
              { label: "800", hex: "#991b1b" },
              { label: "900", hex: "#7f1d1d" },
            ]}
            usage="Errors, destructive actions, critical alerts"
          />
          <ColorCard
            name="Info"
            color="#3b82f6"
            variants={[
              { label: "50", hex: "#eff6ff" },
              { label: "100", hex: "#dbeafe" },
              { label: "200", hex: "#bfdbfe" },
              { label: "300", hex: "#93c5fd" },
              { label: "400", hex: "#60a5fa" },
              { label: "500", hex: "#3b82f6" },
              { label: "600", hex: "#2563eb" },
              { label: "700", hex: "#1d4ed8" },
              { label: "800", hex: "#1e40af" },
              { label: "900", hex: "#1e3a8a" },
            ]}
            usage="Information, help, in-progress states"
          />
        </div>
      </div>

      {/* Gradients */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Premium Gradients</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GradientCard
            name="Premium Purple"
            gradient="linear-gradient(135deg, #5046e4, #8e7cf7)"
            colors={["#5046e4", "#8e7cf7"]}
            usage="Primary CTAs, hero sections, premium features"
          />
          <GradientCard
            name="Innovative Blend"
            gradient="linear-gradient(135deg, #5046e4, #10b981)"
            colors={["#5046e4", "#10b981"]}
            usage="AI features, innovation highlights, special modules"
          />
          <GradientCard
            name="Vibrant Accent"
            gradient="linear-gradient(135deg, #5046e4, #f43f5e)"
            colors={["#5046e4", "#f43f5e"]}
            usage="Promotional content, special banners, limited offers"
          />
        </div>
      </div>
    </div>
  )
}

// Update the ColorCard component to support dark mode
function ColorCard({ name, color, variants, usage }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div className="h-24 flex items-end p-3" style={{ backgroundColor: color }}>
        <div className="bg-background/90 px-2 py-1 rounded text-sm font-medium">
          {name}: {color}
        </div>
      </div>
      <div className="p-3">
        <div className="text-sm text-muted-foreground mb-2">{usage}</div>
        <div className="grid grid-cols-5 gap-1">
          {variants.map((variant) => (
            <ColorVariant key={variant.label} label={variant.label} hex={variant.hex} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ColorVariant({ label, hex }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className="w-8 h-8 rounded cursor-pointer mb-1 flex items-center justify-center"
        style={{ backgroundColor: hex }}
        onClick={copyToClipboard}
        title={`Copy ${hex}`}
      >
        {copied ? (
          <Check className="w-3 h-3 text-white" />
        ) : (
          <Copy className="w-3 h-3 text-white opacity-0 hover:opacity-70" />
        )}
      </div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  )
}

// Update the GradientCard component to support dark mode
function GradientCard({ name, gradient, colors, usage }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(gradient)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      <div
        className="h-24 flex items-end p-3 cursor-pointer"
        style={{ background: gradient }}
        onClick={copyToClipboard}
      >
        {copied ? (
          <div className="bg-background/90 px-2 py-1 rounded text-sm font-medium">Copied!</div>
        ) : (
          <div className="bg-background/90 px-2 py-1 rounded text-sm font-medium">{name}</div>
        )}
      </div>
      <div className="p-3">
        <div className="text-sm text-muted-foreground mb-2">{usage}</div>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded flex-shrink-0"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
          <div className="text-xs text-muted-foreground flex items-center">{colors.join(" → ")}</div>
        </div>
      </div>
    </div>
  )
}

