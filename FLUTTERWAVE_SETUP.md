# Flutterwave Payment Setup Guide

## Step 1: Create Flutterwave Account

1. **Go to [Flutterwave.com](https://flutterwave.com)**
2. **Sign up** with your business email (`nkkwame0162@gmail.com`)
3. **Choose "Ghana"** as your country
4. **Complete business verification** (required for live payments)

## Step 2: Get Your API Keys

### For Testing (Current Setup):
- **Public Key**: Currently set to test key
- **Secret Key**: Not needed for frontend payments
- **Encryption Key**: Not needed for this setup

### For Live Payments:
1. **Go to Settings** → **API Keys**
2. **Copy your Live Public Key**
3. **Replace in `components/PaymentModal.tsx` line 31:**

```tsx
public_key: 'FLWPUBK-YOUR-ACTUAL-LIVE-KEY-HERE',
```

## Step 3: Configure Webhook (Optional)

For payment notifications:
1. **Go to Settings** → **Webhooks**
2. **Add webhook URL**: `https://nkkwame.github.io/api/webhook`
3. **Select events**: `charge.completed`

## Step 4: Test the Payment System

### Test Cards (Ghana):
- **Visa**: 4187427415564246
- **Mastercard**: 5531886652142950
- **Expiry**: Any future date
- **CVV**: 564
- **Pin**: 3310

### Mobile Money Test:
- **MTN**: 0544444444
- **Vodafone**: 0204444444
- **AirtelTigo**: 0274444444

## Step 5: Payment Flow

### What Happens:
1. **Client clicks "Pay Now"** on your services
2. **Enters their details** (name, email)
3. **Chooses payment type**: Full payment or 50% deposit
4. **Redirects to Flutterwave** secure payment page
5. **Pays using**: Mobile Money, Cards, or Bank Transfer
6. **Payment confirmation** sent to both you and client
7. **You receive notification** to start the project

### Payment Options Available:
- 💳 **Debit/Credit Cards** (Visa, Mastercard)
- 📱 **Mobile Money** (MTN, Vodafone, AirtelTigo)
- 🏦 **Bank Transfer** (All major Ghana banks)
- 💰 **USSD** (Quick dial codes)

## Step 6: Your Current Pricing

### Services with Payment Integration:
1. **Web Development**: ₵20,000
   - Deposit option: ₵10,000 (50%)
   - Full payment: ₵20,000

2. **IT Training Package**: ₵5,000
   - Deposit option: ₵2,500 (50%)
   - Full payment: ₵5,000

3. **Content Creation**: ₵5,000
   - Deposit option: ₵2,500 (50%)
   - Full payment: ₵5,000

## Step 7: Business Benefits

### For You:
- ✅ **Instant payments** - no waiting for bank transfers
- ✅ **Professional image** - modern payment system
- ✅ **Secured transactions** - Flutterwave handles security
- ✅ **Multiple payment options** - clients can choose their preferred method
- ✅ **Automatic notifications** - know immediately when paid

### For Clients:
- ✅ **Convenient payment** - pay from their phone
- ✅ **Secure transactions** - trusted payment gateway
- ✅ **Flexible options** - full payment or deposit
- ✅ **Instant confirmation** - immediate receipt

## Step 8: Fees Structure

### Flutterwave Fees (Ghana):
- **Local Cards**: 1.4% + ₵1
- **Mobile Money**: 1.4% + ₵1
- **Bank Transfer**: ₵10 flat fee
- **International Cards**: 3.8% + ₵1

### Example: ₵20,000 Web Development Project
- **Your Amount**: ₵20,000
- **Flutterwave Fee**: ₵281 (1.4% + ₵1)
- **You Receive**: ₵19,719

## Step 9: Going Live Checklist

1. ✅ **Flutterwave account verified**
2. ✅ **Business documents submitted**
3. ✅ **Live public key obtained**
4. ✅ **Payment modal updated with live key**
5. ✅ **Test transactions completed**
6. ✅ **Webhook configured (optional)**

## Step 10: Security Notes

- ✅ **Never expose secret keys** in frontend code
- ✅ **Always verify payments** on your backend (optional)
- ✅ **Use HTTPS** (already configured with GitHub Pages)
- ✅ **Validate transaction amounts** before fulfilling services

Your payment system is now ready! Clients can make secure payments directly from your portfolio. 🚀
