# Sandy's Bedding - Premium Bedding E-commerce Website

A modern, elegant, and professional website design for Sandy's Bedding company, featuring WhatsApp-based ordering system.

## 🌟 Features

### Design Elements
- **Clean & Modern UI**: Minimalistic design with soft, luxurious aesthetics
- **Soft Color Palette**: Cream, beige, soft pastels, and light grey tones
- **Smooth Animations**: Fade-in effects, hover animations, and parallax scrolling
- **Fully Responsive**: Mobile-first design that works on all devices
- **WhatsApp Integration**: All orders go through WhatsApp instead of traditional checkout

### Sections

1. **Navigation Bar**
   - Sticky header with smooth scroll
   - Quick access WhatsApp button
   - Mobile-responsive menu

2. **Hero Section**
   - Large, beautiful bedroom imagery
   - Clear value proposition
   - Prominent WhatsApp CTA button

3. **Categories Section**
   - Visual category cards with hover effects
   - 6 main categories: Blankets, Sheets, Duvets, Pillows, Comforters, Kids Bedding
   - Click to inquire via WhatsApp

4. **Featured Products**
   - Clean product cards with large images
   - Support for products with or without prices
   - Individual WhatsApp order buttons per product
   - Product badges (New, Popular, Kids)

5. **Why Choose Us**
   - 4 key features with icons
   - Soft Fabrics, High Quality, Affordable, Fast Delivery

6. **About Section**
   - Company story and values
   - Side-by-side layout with imagery
   - Personal touch for small business appeal

7. **Testimonials**
   - Customer reviews with star ratings
   - Social proof section

8. **Footer**
   - Contact information
   - Operating hours
   - Social media links
   - Quick links
   - WhatsApp contact button

## 🎨 Design Specifications

### Color Palette
- **Primary Cream**: #FAF8F5
- **Soft Beige**: #E8E2D8
- **Warm Sand**: #D4C9BA
- **Accent Sage**: #B8BFA6
- **Light Blue**: #D5E1EB
- **Accent Gold**: #C9A87C
- **Dark Text**: #2C2C2C

### Typography
- **Primary Font**: Poppins (modern, clean, readable)
- **Accent Font**: Playfair Display (elegant, sophisticated)

### Design Principles
- Generous white space
- Soft shadows and rounded corners
- Breathing room between elements
- Professional luxury brand aesthetic
- Calming and peaceful vibe

## 🛠️ Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Basic understanding of HTML/CSS/JavaScript

### Installation

1. **Download/Clone the files**
   ```
   - index.html
   - styles.css
   - script.js
   - README.md
   ```

2. **Update WhatsApp Number**
   - Open `index.html`
   - Find all instances of `wa.me/1234567890`
   - Replace `1234567890` with your actual WhatsApp number (include country code)
   - Example: `wa.me/27821234567` for South African number

3. **Customize Content**
   - Update company name if needed
   - Replace placeholder images with actual product photos
   - Edit product names and prices
   - Customize about section text
   - Update contact information in footer
   - Add your social media links

4. **Replace Images**
   - Current images are from Unsplash (free stock photos)
   - Replace with actual product photography
   - Recommended image sizes:
     - Hero: 1920x1080px
     - Category cards: 800x600px
     - Product images: 800x800px
     - About image: 1000x800px

5. **Test Locally**
   - Open `index.html` in your browser
   - Test all WhatsApp links
   - Check responsive design on different screen sizes
   - Verify all sections display correctly

6. **Deploy**
   - Upload to your web hosting service
   - Or use free hosting: Netlify, Vercel, GitHub Pages

## 📱 WhatsApp Integration

### How It Works
- Each "Order via WhatsApp" button opens WhatsApp Web/App
- Pre-filled message with product name
- Customer can modify message before sending
- Business owner receives order inquiry via WhatsApp
- Handle orders, payments, and delivery coordination through WhatsApp chat

### WhatsApp Link Format
```html
https://wa.me/[PHONE_NUMBER]?text=[MESSAGE]
```

Example:
```html
https://wa.me/27821234567?text=I'm interested in the Luxury Cotton Blanket
```

## 🎯 WordPress Conversion Ready

The design is structured to easily convert into a WordPress theme:

- **Separate Sections**: Each section is modular and can become a WordPress template part
- **Clean HTML Structure**: Semantic HTML5 for easy PHP integration
- **Reusable Components**: Product cards, category cards can become custom post types
- **CSS Variables**: Easy to integrate into WordPress Customizer
- **Mobile-First**: Responsive design principles compatible with WordPress standards

### WordPress Conversion Path
1. Convert HTML sections into PHP template files
2. Create custom post types for Products and Categories
3. Use Advanced Custom Fields (ACF) for product details
4. Integrate with WooCommerce (optional) or keep WhatsApp ordering
5. Add WordPress admin panel for content management

## 📋 Customization Guide

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-cream: #FAF8F5;
    --accent-gold: #C9A87C;
    /* Update these values */
}
```

### Adding Products
1. Copy a product card div in `index.html`
2. Update image, name, price, and WhatsApp link
3. Keep the same class structure for consistent styling

### Removing Price Display
To hide a price, leave the `<p class="product-price">` empty:
```html
<p class="product-price"></p>
```

### Mobile Menu
Mobile menu toggle is included but needs additional styling for dropdown menu if needed.

## 🚀 Performance Tips

- **Optimize Images**: Compress images before upload (use TinyPNG, ImageOptim)
- **Lazy Loading**: Add `loading="lazy"` to images
- **Minify CSS/JS**: Use minification tools before production
- **CDN**: Use CDN for Font Awesome and Google Fonts
- **Caching**: Enable browser caching on your server

## 📞 Support & Customization

### Need Help?
- Update business information in footer
- Test all links before going live
- Ensure WhatsApp number includes country code
- Check mobile responsiveness on actual devices

### Professional Enhancement Ideas
- Add product filtering/sorting
- Implement product quick view lightbox
- Add product image gallery
- Include size/color variations
- Add newsletter signup
- Implement live chat widget
- Add Google Analytics tracking

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This is a custom design created for Sandy's Bedding. Modify and use as needed for your business.

## 🎨 Credits

- **Fonts**: Google Fonts (Poppins, Playfair Display)
- **Icons**: Font Awesome 6
- **Stock Images**: Unsplash (replace with your own)
- **Design**: Custom modern e-commerce aesthetic

---

**Built with care for a beautiful sleep experience** 🛏️✨

Remember to replace the WhatsApp number and images before launching!
