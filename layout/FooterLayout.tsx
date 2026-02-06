import React from 'react'
import { PageLayout } from './PageLayout'
import Link from 'next/link'
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

const FooterLayout = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '/features' },
      { label: 'Pricing', href: '/plans' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Demo', href: '#demo' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Documentation', href: '/docs' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Community', href: '/community' },
      { label: 'Support', href: '/support' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Cookies', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ]

  return (
    <PageLayout className='lg:py-0 py-0 border-t border-border'>
      {/* Main Footer Content */}
      <footer className='space-y-12 sm:space-y-16 py-12 sm:py-20'>
        {/* Hero Text */}

        {/* Newsletter & Contact Section */}

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8'>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className='text-sm font-semibold text-foreground uppercase tracking-wider mb-4'>
                {category}
              </h4>
              <ul className='space-y-2'>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-sm text-muted-foreground hover:text-primary transition-colors duration-200'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
          <div className='border rounded-xl border-border/50 bg-linear-to-br from-neutral-300/5 to-neutral-300/10 p-8 sm:p-10 lg:p-12 mx-auto w-full'>
            <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-3 text-center'>
              Stay Updated
            </h3>
            <p className='text-muted-foreground text-center mb-6'>
              Get insights on soil health, crop optimization, and farming innovations delivered to your inbox.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 items-center justify-center'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all'
              />
              <Button className='sm:w-auto sm:h-auto'>Subscribe</Button>
            </div>
          </div>

        {/* Divider */}
        <div className='h-px bg-border' />

        {/* Bottom Section */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
          {/* Logo & Copyright */}
          <div className='text-center sm:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {currentYear} Farming with AI. All rights reserved.
            </p>
            <p className='text-xs text-muted-foreground/60 mt-1'>
              Empowering farmers with intelligent soil analytics.
            </p>
          </div>

          {/* Social Links */}
          <div className='flex items-center gap-3'>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='p-2.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200'
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          {/* Contact Button */}
          <div className='hidden sm:block'>
            <Button variant='outline' size='sm' className='gap-2'>
              <Mail size={16} />
              Contact Us
            </Button>
          </div>
        </div>
      </footer>
      <div className='text-[calc(2.3rem+2.3vw)] lg:text-[calc(5rem+2vw)] text-center text-primary/30 uppercase font-extrabold mask-b-from-2 mask-b-at-center text-shadow-2xs'>
        Farming with ai
      </div>
    </PageLayout>
  )
}

export default FooterLayout