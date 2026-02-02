import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  organization: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // For now, log the submission
    // TODO: Integrate with Payload CMS and Resend email
    console.log('Contact form submission:', data)

    // In production, this would:
    // 1. Save to Payload CMS ContactSubmissions collection
    // 2. Send email notification via Resend

    // Example Resend integration (uncomment when RESEND_API_KEY is configured):
    /*
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'IGNIS Contact Form <noreply@yourdomain.com>',
      to: process.env.CONTACT_EMAIL || 'ignis.fyp@gmail.com',
      subject: `New Contact: ${data.interest} from ${data.firstName} ${data.lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Organization:</strong> ${data.organization || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${data.interest}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    })
    */

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
