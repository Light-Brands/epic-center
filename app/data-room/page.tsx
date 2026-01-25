'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowRight, FileText, Download, Lock, Folder, Eye, Calendar, Mail } from 'lucide-react'
import { Button, Card } from '@/components/ui'

const DOCUMENT_CATEGORIES = [
  {
    name: 'Investment Documents',
    icon: FileText,
    documents: [
      { name: 'Executive Summary', type: 'PDF', access: 'public', size: '2.4 MB' },
      { name: 'Pitch Deck', type: 'PDF', access: 'public', size: '8.1 MB' },
      { name: 'Private Placement Memorandum', type: 'PDF', access: 'restricted', size: '15.2 MB' },
      { name: 'Subscription Agreement', type: 'PDF', access: 'restricted', size: '1.8 MB' },
      { name: 'Operating Agreement', type: 'PDF', access: 'restricted', size: '4.2 MB' },
    ],
  },
  {
    name: 'Financial Model',
    icon: Folder,
    documents: [
      { name: 'Financial Projections (5-Year)', type: 'Excel', access: 'restricted', size: '3.2 MB' },
      { name: 'Unit Economics Model', type: 'Excel', access: 'public', size: '1.1 MB' },
      { name: 'Sensitivity Analysis', type: 'Excel', access: 'restricted', size: '2.4 MB' },
      { name: 'Cap Table', type: 'Excel', access: 'restricted', size: '0.8 MB' },
    ],
  },
  {
    name: 'Property Documents',
    icon: Folder,
    documents: [
      { name: 'Property Evaluation Matrix', type: 'PDF', access: 'public', size: '4.5 MB' },
      { name: 'Hotel Alea Tulum - Full Assessment', type: 'PDF', access: 'restricted', size: '12.3 MB' },
      { name: 'Renovation Budget & Timeline', type: 'Excel', access: 'restricted', size: '2.1 MB' },
      { name: 'Comparable Market Analysis', type: 'PDF', access: 'restricted', size: '6.7 MB' },
    ],
  },
  {
    name: 'Legal & Compliance',
    icon: Lock,
    documents: [
      { name: 'Corporate Structure Overview', type: 'PDF', access: 'public', size: '1.2 MB' },
      { name: 'Mexican Healthcare Regulations', type: 'PDF', access: 'public', size: '3.4 MB' },
      { name: 'Fideicomiso Structure', type: 'PDF', access: 'restricted', size: '2.8 MB' },
      { name: 'Risk Disclosure Document', type: 'PDF', access: 'restricted', size: '1.9 MB' },
    ],
  },
  {
    name: 'Research & Evidence',
    icon: FileText,
    documents: [
      { name: 'Ibogaine Research Summary', type: 'PDF', access: 'public', size: '5.6 MB' },
      { name: 'Market Research Report', type: 'PDF', access: 'public', size: '8.9 MB' },
      { name: 'Competitive Landscape Analysis', type: 'PDF', access: 'restricted', size: '4.3 MB' },
      { name: 'Clinical Outcome Studies', type: 'PDF', access: 'public', size: '7.2 MB' },
    ],
  },
]

export default function DataRoomPage() {
  const publicDocs = DOCUMENT_CATEGORIES.flatMap(cat =>
    cat.documents.filter(doc => doc.access === 'public')
  ).length

  const restrictedDocs = DOCUMENT_CATEGORIES.flatMap(cat =>
    cat.documents.filter(doc => doc.access === 'restricted')
  ).length

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="max-w-container-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <p className="font-accent text-sm uppercase tracking-widest text-secondary-500 mb-4">
            Due Diligence
          </p>
          <h2 className="text-4xl md:text-5xl font-heading text-neutral-900 mb-6">
            Investor Data Room
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Access all investment materials, financial models, property documentation,
            and research supporting this opportunity.
          </p>
        </section>

        {/* Access Stats */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Card padding="lg" className="text-center">
              <Eye className="w-10 h-10 text-success-500 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">{publicDocs}</p>
              <p className="text-neutral-600">Public Documents</p>
              <p className="text-sm text-neutral-500 mt-2">Available now</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Lock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">{restrictedDocs}</p>
              <p className="text-neutral-600">Restricted Documents</p>
              <p className="text-sm text-neutral-500 mt-2">Requires NDA</p>
            </Card>
            <Card padding="lg" className="text-center">
              <Calendar className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
              <p className="font-heading text-3xl text-neutral-900 mb-1">24-48 hrs</p>
              <p className="text-neutral-600">Access Turnaround</p>
              <p className="text-sm text-neutral-500 mt-2">After NDA execution</p>
            </Card>
          </div>
        </section>

        {/* Document Categories */}
        <section className="mb-12">
          <div className="space-y-8">
            {DOCUMENT_CATEGORIES.map((category) => (
              <Card key={category.name} padding="lg">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-heading text-neutral-900">{category.name}</h3>
                </div>
                <div className="divide-y divide-neutral-100">
                  {category.documents.map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          doc.access === 'public' ? 'bg-success-100' : 'bg-neutral-100'
                        }`}>
                          <FileText className={`w-5 h-5 ${
                            doc.access === 'public' ? 'text-success-600' : 'text-neutral-400'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900">{doc.name}</p>
                          <p className="text-sm text-neutral-500">{doc.type} • {doc.size}</p>
                        </div>
                      </div>
                      {doc.access === 'public' ? (
                        <Button variant="secondary" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      ) : (
                        <span className="flex items-center gap-2 text-sm text-neutral-500">
                          <Lock className="w-4 h-4" />
                          Requires Access
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Request Access */}
        <section className="mb-16">
          <Card padding="lg" className="bg-primary-800 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading mb-4">Request Full Access</h3>
                <p className="text-primary-200 mb-6">
                  To access restricted documents including the Private Placement Memorandum,
                  financial models, and detailed property assessments, please complete our
                  brief qualification process.
                </p>
                <div className="space-y-3">
                  {[
                    'Submit accredited investor verification',
                    'Execute mutual NDA',
                    'Schedule introductory call',
                    'Receive full data room access',
                  ].map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary-400 text-primary-900 text-sm font-medium flex items-center justify-center">
                        {index + 1}
                      </div>
                      <span className="text-primary-100">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-primary-700/50 rounded-xl p-8">
                  <Mail className="w-12 h-12 text-secondary-400 mx-auto mb-4" />
                  <p className="text-primary-200 mb-4">
                    Contact our investor relations team to begin the process
                  </p>
                  <Button variant="accent" size="lg">
                    Request Access
                  </Button>
                  <p className="text-sm text-primary-300 mt-4">
                    invest@transformational-epicenter.com
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Data Room FAQ */}
        <section className="mb-16">
          <Card padding="lg" className="bg-gradient-to-br from-secondary-400 to-secondary-500 text-primary-900">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-heading text-center mb-8">Data Room FAQ</h3>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is required to access restricted documents?',
                    a: 'You must verify accredited investor status and execute our mutual NDA.',
                  },
                  {
                    q: 'How long does access approval take?',
                    a: 'Typically 24-48 hours after submitting required documentation.',
                  },
                  {
                    q: 'Can I share documents with my advisors?',
                    a: 'Yes, you may share with legal and financial advisors under the NDA terms.',
                  },
                  {
                    q: 'Are financial models available in editable format?',
                    a: 'Yes, Excel models are provided for detailed analysis and scenario modeling.',
                  },
                ].map((item) => (
                  <div key={item.q} className="bg-white/20 rounded-lg p-4">
                    <p className="font-medium mb-2">{item.q}</p>
                    <p className="text-sm text-primary-800">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-neutral-200">
          <Link href="/outcomes" className="group flex items-center gap-2 text-neutral-600 hover:text-primary-800 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-accent text-sm uppercase tracking-wide">Outcomes</span>
          </Link>
          <Link href="/faq">
            <Button variant="primary">
              FAQ
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
