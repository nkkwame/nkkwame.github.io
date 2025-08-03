# Quick Email Setup Guide

## Current Configuration:
- **Display Email (UI)**: josephkwame.nkrumah@stu.ucc.edu.gh
- **Receive Email (Backend)**: nkkwame0162@gmail.com
- **Fallback**: Formspree service included

## Option 1: EmailJS Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up with `nkkwame0162@gmail.com`

### Step 2: Add Gmail Service
1. Click "Email Services" → "Add New Service"
2. Choose "Gmail"
3. Connect your `nkkwame0162@gmail.com` account
4. Copy the **Service ID** (looks like `service_xxxxxxx`)

### Step 3: Create Template
1. Go to "Email Templates" → "Create New Template"
2. Use this template:

**Subject:** New Contact - {{subject}}

**Body:**
```
New message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}
```

4. Save and copy the **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Contact.tsx
Replace these 3 values in the code:
```tsx
await emailjs.send(
  'YOUR_SERVICE_ID',    // Line 32
  'YOUR_TEMPLATE_ID',   // Line 33  
  templateParams,
  'YOUR_PUBLIC_KEY'     // Line 35
)
```

## Option 2: Use Formspree (Works Immediately)

The code already includes Formspree as backup! If EmailJS fails, it automatically tries Formspree.

### To use ONLY Formspree:
1. Replace the entire handleSubmit function with just the Formspree part
2. Or just wait - it will work as backup if EmailJS fails

## Test Your Form:
1. Deploy your changes: `git add -A && git commit -m "Fix contact form" && git push`
2. Visit your site and test the contact form
3. Check `nkkwame0162@gmail.com` for emails

## Troubleshooting:
- If you see "EmailJS failed, trying Formspree..." in browser console, EmailJS needs setup
- If Formspree works but you want EmailJS, follow the 5-minute setup above
- Both services will send emails to `nkkwame0162@gmail.com`
