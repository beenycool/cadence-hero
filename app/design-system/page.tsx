import ColorPalette from "@/components/color-palette"
import TypographySystem from "@/components/typography-system"
import { ThemeToggle } from "@/components/theme-toggle"
import DarkModeDemo from "@/components/dark-mode-demo"

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 flex flex-col items-center">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        <h1 className="text-4xl font-bold mb-4">Cadence Design System</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center">
          A comprehensive design system for Cadence, focusing on color and typography to establish a professional,
          tech-forward identity.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Dark Mode</h2>
          <DarkModeDemo />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Color Palette</h2>
          <ColorPalette />
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Typography System</h2>
          <TypographySystem />
        </section>
      </div>
    </div>
  )
}

