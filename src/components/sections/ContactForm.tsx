'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  organization: z.string().optional(),
  interest: z.string().min(1, 'Please select an option'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const interestOptions = [
  { value: 'demo', label: 'System Demo Request' },
  { value: 'academic', label: 'Academic Collaboration' },
  { value: 'research', label: 'Research Discussion' },
  { value: 'partnership', label: 'Partnership Inquiry' },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: 'demo',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card variant="elevated" className="p-8 lg:p-10 border-forest-green/20">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-forest-dark mb-2">Get In Touch</h2>
        <p className="text-forest-dark/60 text-sm">
          Fill out the details below and we&apos;ll respond as soon as possible.
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div className="text-center py-12">
          <div className="size-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-accent-green text-3xl">check_circle</span>
          </div>
          <h3 className="text-xl font-bold text-forest-dark mb-2">Message Sent!</h3>
          <p className="text-forest-dark/60 mb-6">
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
          <Button onClick={() => setSubmitStatus('idle')} variant="outline">
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="firstName"
              label="First Name"
              placeholder="e.g. Jonathan"
              error={errors.firstName?.message}
              {...register('firstName')}
            />
            <Input
              id="lastName"
              label="Last Name"
              placeholder="e.g. Ive"
              error={errors.lastName?.message}
              {...register('lastName')}
            />
          </div>

          <Input
            id="email"
            type="email"
            label="Work Email"
            placeholder="name@company.com"
            error={errors.email?.message}
            {...register('email')}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              id="organization"
              label="Organization / Institution"
              placeholder="University / Company Name"
              error={errors.organization?.message}
              {...register('organization')}
            />
            <Select
              id="interest"
              label="Interest"
              options={interestOptions}
              error={errors.interest?.message}
              {...register('interest')}
            />
          </div>

          <Textarea
            id="message"
            label="Message"
            placeholder="Tell us about your interest in IGNIS or how we can collaborate..."
            rows={4}
            error={errors.message?.message}
            {...register('message')}
          />

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              Something went wrong. Please try again later.
            </div>
          )}

          <div className="pt-4">
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
            <p className="text-center text-xs text-forest-dark/40 mt-4">
              Protected by advanced encryption. We value your privacy.
            </p>
          </div>
        </form>
      )}
    </Card>
  )
}
