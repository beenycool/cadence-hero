import type React from "react"
import Link from "next/link"
import { Calendar, ArrowRight, Twitter, Linkedin, Facebook, Instagram, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
                Cadence
              </span>
            </div>
            <p className="text-slate-600 mb-4 max-w-xs">
              AI-powered scheduling that adapts to your life, not the other way around.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter className="h-4 w-4" />} href="https://twitter.com/cadenceai" />
              <SocialIcon icon={<Linkedin className="h-4 w-4" />} href="https://linkedin.com/company/cadenceai" />
              <SocialIcon icon={<Facebook className="h-4 w-4" />} href="https://facebook.com/cadenceai" />
              <SocialIcon icon={<Instagram className="h-4 w-4" />} href="https://instagram.com/cadenceai" />
              <SocialIcon icon={<Github className="h-4 w-4" />} href="https://github.com/cadenceai" />
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/how-it-works">How It Works</FooterLink>
              <FooterLink href="/integrations">Integrations</FooterLink>
              <FooterLink href="/enterprise">Enterprise</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/help-center">Help Center</FooterLink>
              <FooterLink href="/guides">Guides</FooterLink>
              <FooterLink href="/api-docs">API Documentation</FooterLink>
              <FooterLink href="/community">Community</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/gdpr">GDPR Compliance</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Stay Updated</h3>
            <p className="text-slate-600 mb-4 max-w-xs">
              Subscribe to our newsletter for tips, product updates, and productivity insights.
            </p>
            <div className="flex space-x-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 bg-white border-slate-200 focus:border-purple-400 focus:ring-purple-400"
                />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-500 mb-4 md:mb-0">© {currentYear} Cadence AI. All rights reserved.</div>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <span>Made with</span>
              <span className="text-red-500">❤️</span>
              <span>by the Cadence team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-slate-600 hover:text-purple-600 transition-colors text-sm">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-purple-600 hover:border-purple-300 transition-colors"
    >
      {icon}
    </a>
  )
}

