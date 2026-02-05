import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  organization: z.string().optional(),
  interest: z.string().min(1),
  message: z.string().min(10),
})

const interestLabels: Record<string, string> = {
  demo: 'System Demo Request',
  academic: 'Academic Collaboration',
  research: 'Research Discussion',
  partnership: 'Partnership Inquiry',
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    const interestLabel = interestLabels[data.interest] || data.interest

    const mailOptions = {
      from: `"IGNIS Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      replyTo: data.email,
      subject: `[IGNIS] ${interestLabel} - ${data.firstName} ${data.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1a4d2e; padding: 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0;">New Contact Form Submission</h1>
          </div>

          <div style="padding: 30px; background-color: #f9f9f9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #1a4d2e;">Name:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  ${data.firstName} ${data.lastName}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #1a4d2e;">Email:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <a href="mailto:${data.email}" style="color: #17cf73;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #1a4d2e;">Organization:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  ${data.organization || 'Not provided'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <strong style="color: #1a4d2e;">Interest:</strong>
                </td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                  <span style="background-color: #17cf73; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">
                    ${interestLabel}
                  </span>
                </td>
              </tr>
            </table>

            <div style="margin-top: 20px;">
              <strong style="color: #1a4d2e;">Message:</strong>
              <div style="background-color: white; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #17cf73;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div style="background-color: #1a4d2e; padding: 15px; text-align: center;">
            <p style="color: #ffffff; margin: 0; font-size: 12px;">
              IGNIS - AI-Powered Fire Detection & Evacuation System
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Organization: ${data.organization || 'Not provided'}
Interest: ${interestLabel}

Message:
${data.message}

---
IGNIS - AI-Powered Fire Detection & Evacuation System
      `,
    }

    await transporter.sendMail(mailOptions)

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
