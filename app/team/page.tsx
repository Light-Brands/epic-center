'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Linkedin, Mail, Globe, Award, Briefcase, GraduationCap } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const LEADERSHIP_TEAM = [
  {
    name: 'Dan Lawless',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur with deep experience in hospitality, healthcare, and alternative medicine. Passionate about bringing evidence-based psychedelic therapy to those who need it most.',
    expertise: ['Business Strategy', 'Fundraising', 'Operations'],
    background: [
      '15+ years entrepreneurial experience',
      'Previous exits in hospitality tech',
      'Personal transformation through plant medicine',
      'Network in HNW and institutional capital',
    ],
    image: null,
  },
]

const ADVISORY_BOARD = [
  {
    name: 'Medical Director (TBH)',
    role: 'Chief Medical Officer',
    expertise: 'Addiction Medicine & Psychiatry',
    description: 'Board-certified physician with expertise in addiction medicine and psychedelic-assisted therapy.',
  },
  {
    name: 'Clinical Psychologist (TBH)',
    role: 'Director of Integration',
    expertise: 'Trauma & PTSD',
    description: 'Licensed psychologist specializing in trauma therapy and psychedelic integration.',
  },
  {
    name: 'Hospitality Executive (TBH)',
    role: 'VP Operations',
    expertise: 'Luxury Hospitality',
    description: 'Former GM of luxury resort properties in Mexico with expertise in guest experience.',
  },
  {
    name: 'Legal Counsel (TBH)',
    role: 'General Counsel',
    expertise: 'Healthcare Regulatory',
    description: 'Attorney specializing in healthcare compliance and international medical regulations.',
  },
]

const KEY_HIRES = [
  { role: 'Medical Director', timeline: 'Q2 2026', priority: 'Critical', status: 'Searching' },
  { role: 'Director of Nursing', timeline: 'Q2 2026', priority: 'Critical', status: 'Searching' },
  { role: 'Clinical Psychologist', timeline: 'Q2 2026', priority: 'Critical', status: 'Searching' },
  { role: 'General Manager', timeline: 'Q3 2026', priority: 'High', status: 'Pipeline' },
  { role: 'Head of Marketing', timeline: 'Q3 2026', priority: 'High', status: 'Pipeline' },
  { role: 'Integration Coaches (3)', timeline: 'Q3 2026', priority: 'Medium', status: 'Pipeline' },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-canvas pt-20">
      <div className="w-full sm:w-[70vw] mx-auto py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A diverse team bringing together expertise in medicine, hospitality,
            technology, and business to create something truly transformational.
          </p>
        </section>

        {/* Founder */}
        <section className="mb-16">
          {LEADERSHIP_TEAM.map((member) => (
            <Card key={member.name} padding="lg" className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-heading text-6xl text-primary-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <Linkedin className="w-5 h-5 text-neutral-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <Mail className="w-5 h-5 text-neutral-600" />
                    </button>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-3xl font-heading text-neutral-900 mb-4">{member.name}</h3>
                  <p className="text-neutral-600 mb-6">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-3">
                      Background
                    </p>
                    <ul className="space-y-2">
                      {member.background.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>

        {/* Advisory Board */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Expertise
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Advisory & Key Roles</h3>
            <p className="text-neutral-600 mt-2">Positions being filled with top-tier talent</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORY_BOARD.map((advisor) => (
              <Card key={advisor.name} padding="md" className="text-center">
                <div className="w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-neutral-400" />
                </div>
                <p className="font-accent text-xs uppercase tracking-wide text-primary-600 mb-1">
                  {advisor.role}
                </p>
                <h4 className="font-medium text-neutral-900 mb-2">{advisor.name}</h4>
                <p className="text-sm text-secondary-600 font-medium mb-2">{advisor.expertise}</p>
                <p className="text-xs text-neutral-500">{advisor.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Hiring Plan */}
        <section className="mb-16">
          <Card padding="lg">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-heading text-neutral-900">Key Hires Roadmap</h3>
                <p className="text-neutral-600 mt-1">Critical positions to be filled before launch</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-3 pr-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Role
                    </th>
                    <th className="text-left py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Target Hire
                    </th>
                    <th className="text-left py-3 px-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Priority
                    </th>
                    <th className="text-left py-3 pl-4 font-accent text-xs uppercase tracking-wide text-neutral-500">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {KEY_HIRES.map((hire) => (
                    <tr key={hire.role} className="border-b border-neutral-100">
                      <td className="py-4 pr-4 font-medium text-neutral-900">{hire.role}</td>
                      <td className="py-4 px-4 text-neutral-600">{hire.timeline}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          hire.priority === 'Critical' ? 'bg-error-100 text-error-700' :
                          hire.priority === 'High' ? 'bg-warning-100 text-warning-700' :
                          'bg-neutral-100 text-neutral-600'
                        }`}>
                          {hire.priority}
                        </span>
                      </td>
                      <td className="py-4 pl-4">
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                          hire.status === 'Searching' ? 'bg-primary-100 text-primary-700' :
                          'bg-neutral-100 text-neutral-600'
                        }`}>
                          {hire.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Team Philosophy */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-heading mb-6">Our Philosophy</h3>
              <p className="text-xl text-primary-200 mb-8">
                "We believe that healing is possible for everyone. Our role is to create the
                conditions—medical, psychological, and environmental—where transformation can occur."
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  {
                    icon: Award,
                    title: 'Excellence',
                    description: 'Medical-grade standards in everything we do',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Evidence-Based',
                    description: 'Protocols grounded in clinical research',
                  },
                  {
                    icon: Globe,
                    title: 'Accessibility',
                    description: 'Making transformational healing available',
                  },
                ].map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <value.icon className="w-6 h-6 text-secondary-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{value.title}</h4>
                      <p className="text-sm text-primary-200">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Join Us CTA */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading mb-4">Join Our Mission</h3>
              <p className="text-primary-800 mb-6">
                We're looking for passionate individuals who want to be part of the future
                of mental health treatment. If you have expertise in medicine, psychology,
                hospitality, or operations, we'd love to hear from you.
              </p>
              <Button variant="primary" size="lg">
                <Mail className="mr-2 w-5 h-5" />
                Get in Touch
              </Button>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/properties" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Properties</span>
          </Link>
          <Link href="/moat">
            <Button variant="primary">
              Competitive Moat
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
