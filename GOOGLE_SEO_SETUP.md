# Google Search Console Setup Guide

## Step 1: Add Your Site to Google Search Console

1. **Go to Google Search Console**: https://search.google.com/search-console/
2. **Sign in** with your Google account (`nkkwame0162@gmail.com`)
3. **Add Property**: Click "Add Property" 
4. **Choose URL prefix**: Enter `https://nkkwame.github.io`
5. **Verify ownership** using one of these methods:

### Method 1: HTML File Upload (Recommended)
1. Download the verification file from Google
2. Upload it to `public/` folder in your project
3. Deploy and verify

### Method 2: HTML Meta Tag
1. Copy the meta tag from Google Search Console
2. Add it to your `app/layout.tsx` metadata
3. Replace `YOUR_GOOGLE_VERIFICATION_CODE` with the actual code

## Step 2: Submit Your Sitemap

1. In Google Search Console, go to **Sitemaps**
2. Enter: `https://nkkwame.github.io/sitemap.xml`
3. Click **Submit**

## Step 3: Request Indexing

1. Go to **URL Inspection**
2. Enter: `https://nkkwame.github.io`
3. Click **Request Indexing**

## Step 4: Monitor Performance

Check these sections regularly:
- **Coverage**: See which pages are indexed
- **Performance**: Track search impressions and clicks
- **Enhancements**: Check for any SEO issues

## Step 5: Update Social Media Links

In `components/StructuredData.tsx`, update:
- LinkedIn URL (line 15)
- Twitter handle (line 16)
- Any other social media profiles

## Step 6: Add Google Analytics (Optional)

For detailed traffic analytics:
1. Create Google Analytics account
2. Add tracking code to your site
3. Link with Google Search Console

## Expected Results:

**Within 1-2 weeks, people should find you when searching for:**
- "Kwame Nkrumah developer"
- "Full-stack developer Ghana"
- "IT teacher Cape Coast"
- "Programming instructor Ghana"
- "Web developer UCC"

## Keywords You'll Rank For:
- Your name: "Kwame Nkrumah"
- Location + skills: "Ghana web developer"
- Education: "UCC programming teacher"
- Services: "freelance developer Ghana"

## Tips for Better Rankings:
1. **Blog regularly** about programming topics
2. **Update portfolio** with new projects
3. **Get backlinks** from other Ghana tech sites
4. **Share content** on social media
5. **Engage** with Ghana tech community online

Your portfolio is now SEO-optimized and ready for Google! 🚀
