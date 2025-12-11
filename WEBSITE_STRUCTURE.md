# Sandy's Bedding - Multi-Page Website Structure

## 📁 Project Structure

```
sandy-vs/
├── index.html                    # Home Page
├── styles.css                    # Main stylesheet (shared across all pages)
├── script.js                     # Main JavaScript (shared functionality)
├── README.md                     # Original setup guide
├── pages/
│   ├── products.html             # All Products Page with Search & Filter
│   ├── categories.html           # Categories Showcase Page
│   ├── about.html                # About Us & Company Story Page
│   ├── contact.html              # Contact & Support Page
│   ├── products-script.js        # Products page-specific functionality
│   └── contact-script.js         # Contact form handling
```

---

## 🌐 Page Overview

### 1. **Home Page** (`index.html`)
The main landing page featuring:
- **Navigation bar** with links to all pages
- **Hero section** with large background image and WhatsApp CTA
- **Categories section** (6 main categories)
- **Featured products** (6 curated products)
- **Why choose us** section (4 key features)
- **About section** (short company story)
- **Testimonials** (3 customer reviews)
- **Footer** with contact info and social links

**Key Features:**
- Parallax scrolling on hero
- Smooth scroll navigation
- Responsive design

---

### 2. **Products Page** (`pages/products.html`)
Complete product catalog with search and filtering:

**Features:**
- **Search functionality** - Real-time product search by name
- **Sort options** - Featured, Price (Low to High), Price (High to Low), Newest, Top Rated
- **Product grid** - 12 products displayed in responsive grid
- **Product cards** include:
  - Large product image
  - Product name
  - Star rating with review count
  - Price
  - WhatsApp order button
  - Product badges (New, Popular, Kids)
- **"No results" message** when search yields no matches
- **Mobile responsive** search and filter toolbar

**Innovative Features:**
✨ Real-time search filtering
✨ Dynamic sorting system
✨ Product ratings & reviews display
✨ Responsive grid that adapts to screen size

---

### 3. **Categories Page** (`pages/categories.html`)
Organized category showcase:

**Features:**
- **7 category cards** including:
  - Blankets
  - Sheets
  - Duvets
  - Pillows
  - Comforters
  - Kids Bedding
  - Accessories (NEW!)
  
**Each Category Card Shows:**
- Beautiful category image with hover zoom effect
- Category overlay with name and tagline
- Detailed description
- Product count within category
- "Explore Now" button linking to WhatsApp

**Innovative Features:**
✨ Image hover animations
✨ Expandable category cards with descriptions
✨ Direct WhatsApp navigation per category
✨ Product count display

---

### 4. **About Us Page** (`pages/about.html`)
Comprehensive company storytelling:

**Sections:**
1. **Hero section** with company name and tagline
2. **Main story** - Founder's vision and journey
3. **Mission, Vision, Values** - 3-column layout
4. **Why Choose Us Extended** - 6 detailed reasons with icons
5. **Meet the Team** - 3 team members with photos and bios
6. **Our Journey Timeline** - 5-milestone company history
7. **Call-to-action** - "Chat With Us" button

**Content:**
- Company founded in 2018
- Growth milestones marked by year
- Team member profiles with roles
- Core values emphasis (Quality, Integrity, Care, Innovation)

**Innovative Features:**
✨ Interactive timeline visualization
✨ Team member profiles with images
✨ Mission/Vision/Values summary cards
✨ Brand storytelling that builds trust
✨ Extended reasons to choose us with detailed descriptions

---

### 5. **Contact Us Page** (`pages/contact.html`)
Multi-channel customer support:

**Left Column - Contact Information:**
- **WhatsApp** - Direct messaging link
- **Phone** - Clickable phone number
- **Email** - mailto link
- **Location** - Physical address/service area
- **Business hours** display
- **Social media links** (Facebook, Instagram, TikTok, WhatsApp)

**Right Column - Contact Form:**
- Full name field (required)
- Email address (required)
- Phone number (optional)
- Subject dropdown (6 options)
- Message textarea (required)
- Newsletter subscription checkbox
- Submit button that:
  - Pre-fills WhatsApp with form data
  - Shows success message
  - Opens WhatsApp Web/App
  - Resets form

**Additional Sections:**
- **FAQs Section** - 6 common questions about:
  - Return policy
  - Delivery time
  - Wholesale pricing
  - Order process
  - Customization options
  - Eco-friendly products

**Innovative Features:**
✨ Smart form submission to WhatsApp
✨ Pre-filled messages with form data
✨ Multi-channel contact options
✨ Comprehensive FAQ section
✨ Newsletter signup integration
✨ Business hours display

---

## 🎨 Design Consistency

### Color Scheme (Used Across All Pages)
- **Primary Cream**: #FAF8F5 (backgrounds)
- **Soft Beige**: #E8E2D8 (alternating backgrounds)
- **Accent Gold**: #C9A87C (highlights, important elements)
- **Dark Text**: #2C2C2C (primary text)
- **Medium Grey**: #6B6B6B (secondary text)
- **WhatsApp Green**: #25D366 (all CTA buttons)

### Typography
- **Primary Font**: Poppins (modern, clean)
- **Accent Font**: Playfair Display (elegant, sophisticated)

### Spacing & Shadows
- Consistent padding throughout
- Soft box shadows for depth
- Rounded corners (8px, 16px, 24px)
- Breathing room between sections

---

## 🚀 Innovative Features Added

### 1. **Product Search & Filter System** (Products Page)
Real-time search that filters products by name and enables sorting by:
- Price (ascending/descending)
- Newest items
- Top rated
- Featured products

### 2. **Product Ratings Display**
Each product shows:
- Star rating (★★★★★)
- Number of reviews
- Customer credibility

### 3. **Category Showcase with Descriptions**
Each category has:
- Detailed descriptions
- Product counts
- Hover animations
- Direct WhatsApp navigation

### 4. **Company Timeline**
Visual timeline showing business milestones from 2018-2025 with alternating layout and key achievements.

### 5. **Team Member Profiles**
Circular image displays with titles, roles, and brief bios to humanize the brand.

### 6. **Smart Contact Form**
Intelligent form that:
- Captures all customer info
- Converts to pre-filled WhatsApp message
- Maintains chat history via WhatsApp
- Supports multiple inquiry types via subject dropdown

### 7. **FAQ Section**
Comprehensive answers to common questions for customer self-service.

### 8. **Multi-Channel Contact**
Multiple ways to reach out:
- WhatsApp (primary)
- Phone
- Email
- Social media
- Contact form

---

## 📱 Responsive Design

All pages include responsive breakpoints:
- **Desktop** (1024px+) - Full layout
- **Tablet** (768px - 1024px) - Adjusted grid columns
- **Mobile** (< 768px) - Single column layouts

**Mobile optimizations:**
- Hamburger menu toggle
- Stacked forms
- Single-column product grid
- Simplified navigation

---

## ⚡ JavaScript Functionality

### Main Script (`script.js`) - Shared Across All Pages
- Smooth scroll navigation
- Navbar scroll effect
- Mobile menu toggle
- Intersection observer for fade-in animations
- Parallax hero effect
- Hover effects on cards

### Products Page Script (`products-script.js`)
- Real-time search filtering
- Dynamic sorting system
- Product visibility toggle
- "No results" message display

### Contact Page Script (`contact-script.js`)
- Form data collection
- WhatsApp message formatting
- Pre-filled message generation
- Form reset after submission
- Success/error messaging
- Input focus effects

---

## 🔧 Setup Instructions

### Update WhatsApp Number
Replace `1234567890` in all HTML files with your actual WhatsApp business number:
```html
https://wa.me/27821234567
```

### Customize Company Information
Update in all pages:
- Phone number
- Email address
- Business hours
- Physical location
- Social media links

### Replace Images
Update image URLs in:
- `index.html` - Hero, categories, products, testimonials
- `pages/products.html` - Product images
- `pages/categories.html` - Category images
- `pages/about.html` - Company image, team photos

### Add More Products
In `pages/products.html`, duplicate a product card and update:
- Image URL
- Product name
- Price
- WhatsApp message text
- Category data attribute
- Rating and review count

---

## 🌟 WordPress Conversion Ready

This multi-page structure is designed for easy WordPress migration:

**Page Templates:**
- `index.php` for Home
- `products.php` for Product Listing
- `category.php` for Categories
- `about.php` for About
- `contact.php` for Contact

**Custom Post Types to Create:**
- Products (with categories, ratings, prices)
- Team Members
- Testimonials
- FAQs

**Plugins Recommended:**
- Advanced Custom Fields (ACF)
- Contact Form 7
- WooCommerce (optional - use with WhatsApp integration)
- Yoast SEO

---

## 📊 Page Load Performance Tips

1. **Optimize images** before upload (TinyPNG, ImageOptim)
2. **Use lazy loading** on images
3. **Minify CSS and JS** for production
4. **Enable browser caching**
5. **Consider CDN** for assets
6. **Compress videos** if adding them

---

## 🎯 SEO Optimization (Next Steps)

Each page should include:
- Unique meta descriptions
- SEO-friendly titles
- Structured data (schema.org)
- Open Graph tags for social sharing
- Mobile-friendly viewport meta tag (✓ Already added)

---

## 📝 Navigation Map

```
Home (index.html)
├── Products (pages/products.html)
│   └── Search & Filter Functionality
├── Categories (pages/categories.html)
│   └── Category Details with WhatsApp Links
├── About (pages/about.html)
│   ├── Company Story
│   ├── Mission/Vision/Values
│   ├── Why Choose Us (6 reasons)
│   ├── Team Profiles
│   ├── Company Timeline
│   └── Chat CTA
├── Contact (pages/contact.html)
│   ├── Multi-Channel Contact Options
│   ├── Contact Form with WhatsApp Integration
│   ├── Business Hours
│   ├── Social Media Links
│   └── FAQs
└── Footer
    ├── Quick Links
    ├── Social Media
    └── Contact Info
```

---

## ✅ What's Included

✓ **5 Complete Pages** - Home, Products, Categories, About, Contact
✓ **Search & Filter System** - Real-time product search and sorting
✓ **Contact Form** - With WhatsApp integration
✓ **Responsive Design** - Mobile, tablet, desktop optimized
✓ **Modern Animations** - Smooth scrolling, hover effects, parallax
✓ **Team Profiles** - Meet the team section
✓ **Company Timeline** - Business milestones showcase
✓ **FAQ Section** - Customer self-service
✓ **Multiple CTA Options** - Every page has WhatsApp access
✓ **Clean Code** - Well-organized CSS, HTML, JavaScript

---

## 🚀 Next Steps

1. Update WhatsApp number in all pages
2. Replace placeholder images with real product photos
3. Add team member photos to about page
4. Customize company information throughout
5. Test all forms and WhatsApp links
6. Deploy to web hosting
7. Set up analytics (Google Analytics, Facebook Pixel)
8. Create blog section (optional)
9. Add more detailed product pages (optional)
10. Implement customer reviews system (optional)

---

**Built with passion for Sandy's Bedding** 🛏️✨

Professional, modern, responsive, and WhatsApp-integrated bedding e-commerce website.
