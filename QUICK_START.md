# Sandy's Bedding - Quick Start Guide

## 🎯 Quick Setup (5 Minutes)

### Step 1: Update WhatsApp Number
Find and replace in ALL HTML files:
- `1234567890` → Your WhatsApp number (e.g., `27821234567`)

Files to update:
- `index.html`
- `pages/products.html`
- `pages/categories.html`
- `pages/about.html`
- `pages/contact.html`

### Step 2: Update Business Information
In all pages, replace:
- Phone: `+27 123 456 7890`
- Email: `info@sandysbedding.co.za`
- Location details
- Social media URLs

### Step 3: Replace Images
Update image URLs with your own:
- Product images
- Category images
- Team photos
- Hero background

### Step 4: Test Locally
1. Open `index.html` in browser
2. Click "Order via WhatsApp" buttons
3. Test all navigation links
4. Verify forms work correctly

### Step 5: Deploy
Upload all files to your web hosting service

---

## 📂 File Structure Overview

```
sandy-vs/
├── index.html              → Home page
├── styles.css              → All styling
├── script.js               → Shared JavaScript
├── README.md               → Original setup guide
├── WEBSITE_STRUCTURE.md    → This detailed guide
├── QUICK_START.md          → This file
└── pages/
    ├── products.html       → Products with search
    ├── categories.html     → Categories showcase
    ├── about.html          → Company story
    ├── contact.html        → Contact & support
    ├── products-script.js  → Search/filter logic
    └── contact-script.js   → Form handling
```

---

## 🎨 5 Pages Included

| Page | Features | URL |
|------|----------|-----|
| **Home** | Hero, Featured Products, Categories, Testimonials | `index.html` |
| **Products** | All products, Search, Filter, Sort | `pages/products.html` |
| **Categories** | 7 Category cards with details | `pages/categories.html` |
| **About** | Story, Team, Timeline, Mission/Vision | `pages/about.html` |
| **Contact** | Contact form, FAQ, Support options | `pages/contact.html` |

---

## ✨ Key Innovative Features

1. **Product Search & Filter** - Real-time search and 5 sort options
2. **Product Ratings** - Star ratings with review counts
3. **Company Timeline** - Visual business milestones
4. **Team Profiles** - Meet the founder and team
5. **Smart Contact Form** - Auto-opens WhatsApp with pre-filled data
6. **FAQ Section** - Customer self-service
7. **Multi-Channel Support** - WhatsApp, Phone, Email, Social
8. **Category Showcase** - Detailed category descriptions

---

## 📱 Responsive Design

✓ Desktop (1024px+)
✓ Tablet (768px - 1024px)
✓ Mobile (< 768px)
✓ Mobile hamburger menu
✓ Flexible product grid
✓ Stacked form layouts

---

## 🎯 Customer Journey

```
Home Page
    ↓
[Browse Products] OR [Browse Categories] OR [Learn About Us]
    ↓
Contact Page / WhatsApp Button
    ↓
Send WhatsApp Message
    ↓
Receive Order / Inquiry
```

---

## 🔐 WhatsApp Integration

Every page has WhatsApp ordering:
- Main CTA buttons on home
- Individual product order buttons
- Category explore buttons
- Contact form with pre-filled data
- Footer WhatsApp link
- Navigation bar WhatsApp button

---

## 💡 Customization Tips

### Add More Products
In `pages/products.html`, copy this block and customize:
```html
<div class="product-card" data-category="blankets" data-price="899">
    <div class="product-image">
        <img src="[IMAGE_URL]" alt="Product Name">
        <div class="product-badge">New</div>
    </div>
    <div class="product-info">
        <h3 class="product-name">Product Name</h3>
        <div class="product-rating">
            <span class="stars">★★★★★</span>
            <span class="rating-count">(XX reviews)</span>
        </div>
        <p class="product-price">R XXXX</p>
        <a href="https://wa.me/[NUMBER]?text=[MESSAGE]" class="btn-order">
            Order via WhatsApp
        </a>
    </div>
</div>
```

### Change Colors
In `styles.css`, update CSS variables:
```css
:root {
    --primary-cream: #FAF8F5;
    --accent-gold: #C9A87C;
    --accent-sage: #B8BFA6;
    /* Update these values */
}
```

### Update Testimonials
In `index.html`, edit testimonial cards with real customer feedback.

---

## 🚀 Launch Checklist

- [ ] Update WhatsApp number (all files)
- [ ] Update contact info (phone, email, location)
- [ ] Replace all product images
- [ ] Replace team member photos
- [ ] Update testimonials with real reviews
- [ ] Add social media links
- [ ] Test all WhatsApp buttons
- [ ] Test contact form
- [ ] Test responsive design on mobile
- [ ] Test navigation between pages
- [ ] Optimize images for web
- [ ] Set up web analytics
- [ ] Enable SSL/HTTPS
- [ ] Create Google Business profile
- [ ] Set up Facebook Business page
- [ ] Deploy to hosting

---

## 🆘 Troubleshooting

### WhatsApp Links Not Working
- Check phone number format includes country code
- Example: `27821234567` (South Africa)
- Test link: `https://wa.me/27821234567`

### Images Not Showing
- Check image URLs are complete (http:// or https://)
- Verify image paths if using local files
- Check image file extensions (.jpg, .png, .webp)

### Contact Form Not Working
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify WhatsApp number is set correctly
- Test on different browser

### Mobile Menu Not Working
- Check if JavaScript file is loading
- Test hamburger icon click
- Verify CSS media queries

---

## 📊 Analytics Setup (Recommended)

Add Google Analytics tracking code to `<head>` of all pages:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🌟 Pro Tips

1. **Keep images under 200KB** - Use compression tools
2. **Update products regularly** - Keep content fresh
3. **Monitor WhatsApp messages** - Respond quickly
4. **Request testimonials** - Ask happy customers
5. **Add blog section** - For SEO and content marketing
6. **Use social media** - Link to Instagram, TikTok
7. **Collect email signups** - Build newsletter
8. **Track user behavior** - Use Google Analytics

---

## 📞 Support Resources

- **Unsplash** (free images): unsplash.com
- **TinyPNG** (image compression): tinypng.com
- **Font Awesome** (icons): fontawesome.com
- **Google Fonts** (typography): fonts.google.com
- **WhatsApp Business API**: whatsapp.com/business

---

## 🎓 Learning Resources

- **CSS/HTML**: W3Schools.com, MDN Web Docs
- **JavaScript**: JavaScript.info, FreeCodeCamp
- **Web Design**: Dribbble.com, Behance.net
- **WordPress**: WordPress.org, ThemeForest

---

## 📈 Next Growth Steps

1. **Email Marketing** - Collect emails for promotions
2. **Blog Section** - Educational content
3. **Product Reviews** - Real customer feedback
4. **Size Guide** - Help customers choose
5. **Care Instructions** - Product guides
6. **Bulk Ordering** - B2B options
7. **Gift Cards** - New revenue stream
8. **Seasonal Campaigns** - Holiday promotions

---

## 🎉 You're Ready!

Your professional Sandy's Bedding website is ready to launch.

**Next: Update WhatsApp number and deploy!**

For detailed information, see: `WEBSITE_STRUCTURE.md`

---

**Happy selling!** 🛏️✨

Questions? Check the README.md or WEBSITE_STRUCTURE.md files.
