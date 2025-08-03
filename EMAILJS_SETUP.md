# EmailJS Setup Guide for Your Portfolio

Your contact form is now ready to send emails directly from your website! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (nkkwame@gmail.com)
5. Copy the **Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Project Inquiry - {{subject}}

**Body:**
```
Hello Kwame,

You have received a new project inquiry from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Your Contact.tsx File
Replace these values in `components/Contact.tsx`:

```tsx
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
)
```

## Step 6: Test Your Form
1. Deploy your changes to GitHub Pages
2. Fill out the contact form on your website
3. Check your Gmail inbox for the email

## Important Notes:
- EmailJS free plan allows 200 emails per month
- Emails will be sent from your Gmail account to your Gmail account
- The form will show "Sending..." while processing
- Users will see a success/error message after submission

## Troubleshooting:
If emails aren't working:
1. Check browser console for errors
2. Verify all IDs are correct in Contact.tsx
3. Ensure Gmail service is properly connected
4. Check EmailJS dashboard for usage/errors

That's it! Your contact form will now send emails directly from your website without opening Gmail app.
