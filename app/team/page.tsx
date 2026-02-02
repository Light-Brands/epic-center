'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, Linkedin, Mail, Globe, Award, Briefcase, GraduationCap } from 'lucide-react'
import { Button, Card } from '@/components/ui'
import { Footer } from '@/components/layout'

const FOUNDERS = [
  {
    name: 'Nicholas Courchesne',
    role: 'Founder & CEO',
    bio: 'Visionary leader and master relationship builder driving Epic Center\'s mission forward. A natural connector with deep networks across industries, Nicholas brings strategic vision and heartfelt purpose to every partnership and stakeholder relationship.',
    expertise: ['Strategic Vision', 'Partnerships', 'Business Development'],
    background: [
      'Deep networks across wellness and hospitality industries',
      'Proven track record building strategic partnerships',
      'Personal transformation through plant medicine',
      'Passionate advocate for accessible healing',
    ],
    image: null,
  },
  {
    name: 'Jason Sparks',
    role: 'Co-Founder & COO',
    bio: 'Seasoned hospitality executive bringing operational excellence and guest experience mastery to Epic Center. Jason combines analytical rigor with hands-on leadership to ensure world-class operations and exceptional guest experiences.',
    expertise: ['Operations', 'Hospitality', 'Guest Experience'],
    background: [
      'Extensive luxury resort operations experience',
      'Expert in guest experience optimization',
      'Strong operational and analytical skills',
      'Committed to service excellence',
    ],
    image: null,
  },
]

const LEADERSHIP_TEAM = [
  {
    name: 'Dan Lawless',
    role: 'Technical Lead & Solution Architect',
    focus: 'Technology Strategy',
    bio: 'Seasoned full-stack developer with over 20 years of experience building and scaling technical foundations. Dan architects both internal and external technologies, bringing visionary tech leadership to Epic Center.',
    caseStudy: 'Pending Case Study',
  },
  {
    name: 'Dr. Mariana Hoyo',
    role: 'Chief Medical Officer',
    focus: 'Medical & Integration',
    bio: 'General Physician from Universidad Anáhuac México Norte with a Master\'s in Healthcare Management. Certified in Medicinal Cannabis and ThetaHealing, she provides holistic care for physical, mental, and emotional well-being.',
    caseStudy: null,
  },
  {
    name: 'Eyob Mebrahtu',
    role: 'Head of Marketing',
    focus: 'Growth & Brand',
    bio: 'Marketing leader bringing expertise in luxury wellness and transformation brands. Dedicated to cultivating meaningful client connections and ensuring exceptional experiences throughout their transformation journey.',
    caseStudy: 'Walking Case Study',
  },
  {
    name: 'Julien Leblanc',
    role: 'Medicine Advocate',
    focus: 'Outreach & Promotion',
    bio: 'Professional MMA fighter and passionate advocate for plant medicine as a healing and performance tool. Julien brings visibility and authentic testimony to the transformative power of these treatments.',
    caseStudy: 'Walking Case Study',
  },
]

const KEY_ROLES_NEEDED = [
  {
    name: 'Director of Nursing',
    role: 'Clinical Operations',
    expertise: 'Medical Oversight',
    description: 'RN with experience in critical care and patient monitoring protocols.',
  },
  {
    name: 'Integration Coaches',
    role: 'Patient Support',
    expertise: 'Therapeutic Integration',
    description: 'Trained coaches to guide guests through pre and post-treatment integration.',
  },
  {
    name: 'Legal Counsel',
    role: 'General Counsel',
    expertise: 'Healthcare Regulatory',
    description: 'Attorney specializing in healthcare compliance and international medical regulations.',
  },
]

const KEY_HIRES = [
  { role: 'Director of Nursing', timeline: 'Q2 2026', priority: 'Critical', status: 'Searching' },
  { role: 'Integration Coaches (3)', timeline: 'Q3 2026', priority: 'Medium', status: 'Pipeline' },
  { role: 'Legal Counsel', timeline: 'Q4 2026', priority: 'Medium', status: 'Pipeline' },
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

        {/* Founders */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Leadership
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Founders</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {FOUNDERS.map((member) => (
              <Card key={member.name} padding="lg">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-heading text-4xl text-primary-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-heading text-neutral-900">{member.name}</h3>
                  <div className="flex gap-2 justify-center mt-3">
                    <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <Linkedin className="w-4 h-4 text-neutral-600" />
                    </button>
                    <button className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors">
                      <Mail className="w-4 h-4 text-neutral-600" />
                    </button>
                  </div>
                </div>

                <p className="text-neutral-600 mb-6 text-center">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
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
                  <p className="font-accent text-xs uppercase tracking-wide text-neutral-500 mb-3 text-center">
                    Background
                  </p>
                  <ul className="space-y-2">
                    {member.background.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Core Team
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Leadership Team</h3>
            <p className="text-neutral-600 mt-2">Industry experts driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP_TEAM.map((member) => (
              <Card key={member.name} padding="md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading text-xl text-primary-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900">{member.name}</h4>
                    <p className="font-accent text-xs uppercase tracking-wide text-primary-600 mb-1">
                      {member.role}
                    </p>
                    <p className="text-sm text-secondary-600 font-medium">{member.focus}</p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mt-4">{member.bio}</p>
                {member.caseStudy && (
                  <div className="mt-3 pt-3 border-t border-neutral-100">
                    <span className="inline-flex items-center px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium">
                      {member.caseStudy}
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Key Roles Needed */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-2">
              Opportunities
            </p>
            <h3 className="text-3xl font-heading text-neutral-900">Key Roles Needed</h3>
            <p className="text-neutral-600 mt-2">Positions we&apos;re actively filling to complete our team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {KEY_ROLES_NEEDED.map((advisor) => (
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
          <Link href="/properties/riviera-maya-jungle-estate" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">The Property</span>
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
