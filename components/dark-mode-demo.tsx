"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DarkModeDemo() {
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("light")

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-2xl font-bold">Dark Mode Support</h3>
        <p className="text-muted-foreground text-center max-w-2xl">
          Cadence's design system fully supports dark mode, providing a comfortable viewing experience in low-light
          environments while maintaining brand consistency and accessibility.
        </p>

        <div className="flex items-center space-x-4 mt-4">
          <ThemeButton
            icon={<Sun className="h-5 w-5" />}
            label="Light"
            active={theme === "light"}
            onClick={() => setTheme("light")}
          />
          <ThemeButton
            icon={<Moon className="h-5 w-5" />}
            label="Dark"
            active={theme === "dark"}
            onClick={() => setTheme("dark")}
          />
          <ThemeButton
            icon={<Monitor className="h-5 w-5" />}
            label="System"
            active={theme === "system"}
            onClick={() => setTheme("system")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Color Adaptation</CardTitle>
            <CardDescription>
              Colors automatically adjust for optimal contrast and reduced eye strain in dark environments
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <ColorSwatch name="Background" colorClass="bg-background" textClass="text-foreground" />
                <ColorSwatch name="Card" colorClass="bg-card" textClass="text-card-foreground" />
                <ColorSwatch name="Muted" colorClass="bg-muted" textClass="text-muted-foreground" />
                <ColorSwatch name="Accent" colorClass="bg-accent" textClass="text-accent-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Component Examples</CardTitle>
            <CardDescription>
              UI components maintain their functionality and visual hierarchy in both modes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buttons" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="text">Typography</TabsTrigger>
              </TabsList>
              <TabsContent value="buttons" className="space-y-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  <Button>Primary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </TabsContent>
              <TabsContent value="cards" className="pt-4">
                <div className="border rounded-md p-4 bg-muted/50">
                  <h4 className="font-medium mb-2">Nested Card Example</h4>
                  <p className="text-sm text-muted-foreground">Cards maintain proper contrast in both modes</p>
                </div>
              </TabsContent>
              <TabsContent value="text" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold">Heading Example</h4>
                  <p className="text-sm text-muted-foreground">
                    Body text maintains readability in both light and dark modes
                  </p>
                  <p className="text-xs text-muted-foreground">Small text remains accessible with proper contrast</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ThemeButton({ icon, label, active, onClick }) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      className={`flex items-center space-x-2 ${active ? "bg-primary-500 text-white" : ""}`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Button>
  )
}

function ColorSwatch({ name, colorClass, textClass }) {
  return (
    <div className={`${colorClass} p-4 rounded-md border`}>
      <div className={`${textClass} font-medium`}>{name}</div>
      <div className={`${textClass} text-xs opacity-80`}>Sample text</div>
    </div>
  )
}

