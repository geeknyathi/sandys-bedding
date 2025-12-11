# Sandy's Bedding - Visual Design & Layout Guide

## 🎨 Color Palette Reference

```
Primary Colors:
┌─────────────────────────────────────┐
│ Primary Cream      #FAF8F5          │ Main background
│ Soft Beige         #E8E2D8          │ Alternate backgrounds
│ Warm Sand          #D4C9BA          │ Borders, subtle accents
├─────────────────────────────────────┤
Accent Colors:
│ Accent Gold        #C9A87C          │ Highlights, focus
│ Accent Sage        #B8BFA6          │ Secondary accents
│ Light Blue         #D5E1EB          │ Hero overlay, sections
├─────────────────────────────────────┤
Text Colors:
│ Dark Text          #2C2C2C          │ Primary text
│ Medium Grey        #6B6B6B          │ Secondary text
│ Soft Grey          #E5E5E5          │ Borders, dividers
│ White              #FFFFFF          │ Buttons, backgrounds
├─────────────────────────────────────┤
Action Color:
│ WhatsApp Green     #25D366          │ All CTA buttons
└─────────────────────────────────────┘
```

## 🔤 Typography Hierarchy

```
Headings (Playfair Display - Serif):
  Hero Title          72px, font-weight: 600
  Section Titles      42px, font-weight: 600
  Card Headings       28px, font-weight: 600
  Subheadings         22px, font-weight: 600
  Small Headings      20px, font-weight: 600
  Tiny Headings       18px, font-weight: 600

Body Text (Poppins - Sans-serif):
  Lead Text           20px, font-weight: 500, Gold color
  Large Body          18px, font-weight: 400
  Standard Body       16px, font-weight: 400
  Small Text          15px, font-weight: 400
  Micro Text          14px, font-weight: 400
  Tiny Text           13px, font-weight: 400
  Label Text          12px, font-weight: 600
```

## 🎯 Layout Measurements

```
Container Widths:
  Max Container       1200px
  Padding (sides)     20px
  Content width       1200px - 40px = 1160px

Spacing (sections):
  Section padding     100px top & bottom
  Gap between items   30-40px
  Card padding        30px
  Button padding      12-18px horizontal
  Border radius       8px (small), 16px (medium), 24px (large)

Shadows:
  Soft shadow         0 4px 20px rgba(0, 0, 0, 0.06)
  Medium shadow       0 8px 30px rgba(0, 0, 0, 0.08)
  Hover shadow        0 12px 40px rgba(0, 0, 0, 0.12)
```

## 📱 Responsive Breakpoints

```
Desktop:        1024px+   (3-4 columns, full layout)
Tablet:         768px-1023px (2-3 columns)
Mobile:         <768px    (1 column, stacked)
Mobile Small:   <480px    (Extra padding, larger touch targets)
```

## 🖼️ Image Dimensions Reference

```
Hero Section:
  Background image    1920x1080px minimum
  Display height      700px - 100vh

Product Images:
  Product card        600x600px (1:1 aspect)
  Display size        320px wide on mobile, 400px desktop

Category Images:
  Category card       600x400px (3:2 aspect)
  Display height      280px

Team Member Photos:
  Circle image        160x160px
  Display size        circular crop

Section Images:
  About section       800x800px (1:1 aspect)
  Display size        varies by layout
```

## 🎨 Component Styling

### Buttons
```
Primary Button (WhatsApp - All CTAs):
  Background:        #25D366 (WhatsApp Green)
  Text color:        White
  Padding:           18px 45px (large), 12px 28px (medium), 14px 20px (small)
  Border-radius:     50px (pill-shaped)
  Hover state:       Background: #20BA5A, Transform: translateY(-3px)
  Shadow:            0 10px 30px rgba(37, 211, 102, 0.3)

Secondary Button (About page):
  Background:        Transparent
  Border:            2px solid #2C2C2C
  Text color:        #2C2C2C
  Padding:           14px 35px
  Border-radius:     30px
  Hover state:       Background: #2C2C2C, Color: White

Category Button:
  Background:        #2C2C2C
  Text color:        White
  Padding:           12px 28px
  Border-radius:     30px
  Hover state:       Background: #C9A87C, Transform: translateX(5px)
```

### Cards

**Product Card:**
```
Width:              280px (mobile) - 1fr (responsive grid)
Background:        White
Shadow:            0 4px 20px rgba(0, 0, 0, 0.06)
Border-radius:     16px
Image height:      320px
Padding (info):    25px
Hover:             translateY(-10px), enhanced shadow
```

**Category Card:**
```
Width:             360px responsive
Background:        White + Flex column
Shadow:            0 4px 20px rgba(0, 0, 0, 0.06)
Border-radius:     24px
Image height:      280px
Padding (desc):    30px
Hover:             translateY(-10px), enhanced shadow
```

**Feature/Reason Card:**
```
Width:             300px responsive
Background:        White (feature), Cream (reason)
Padding:           40px 30px
Border-radius:     16px
Text-align:        Center
Hover:             translateY(-8px)
Icon size:         80px circle with gradient
```

### Forms

```
Input Fields:
  Padding:         12px 15px
  Border:          2px solid #E5E5E5
  Border-radius:   8px
  Focus:           Border color → #C9A87C
                   Box-shadow: 0 0 0 3px rgba(201, 168, 124, 0.1)
  Font:            Poppins, 15px

Textarea:
  Same as input, but:
  Min-height:      150px
  Resize:          Vertical only

Select:
  Same input styling
  Cursor:          Pointer
  Background:      White

Submit Button:
  Width:           100%
  Padding:         14px
  Background:      #25D366
  Color:           White
  Border-radius:   8px
  Hover:           Background: #20BA5A
```

## 📊 Section Layouts

### Home Page Structure
```
┌─────────────────────────────────────┐
│    Navigation Bar (Fixed)           │
├─────────────────────────────────────┤
│    Hero Section (Full viewport)     │
│    + Overlay + Large text + CTA     │
├─────────────────────────────────────┤
│    Featured Products Grid (3-4 col) │
├─────────────────────────────────────┤
│    Categories Grid (3 columns)      │
├─────────────────────────────────────┤
│    Why Choose Us Grid (4 columns)   │
├─────────────────────────────────────┤
│    About Section (2 column layout)  │
├─────────────────────────────────────┤
│    Testimonials Grid (3 columns)    │
├─────────────────────────────────────┤
│    Footer                           │
└─────────────────────────────────────┘
```

### Products Page Structure
```
┌─────────────────────────────────────┐
│    Navigation Bar                   │
├─────────────────────────────────────┤
│    Page Header "Our Complete..."    │
├─────────────────────────────────────┤
│    Search Bar | Sort Dropdown       │
├─────────────────────────────────────┤
│    Product Grid (4 columns)         │
│    - Search/filter results          │
│    - No results message             │
├─────────────────────────────────────┤
│    Footer                           │
└─────────────────────────────────────┘
```

### Categories Page Structure
```
┌─────────────────────────────────────┐
│    Navigation Bar                   │
├─────────────────────────────────────┤
│    Page Header "Shop by Category"   │
├─────────────────────────────────────┤
│    Category Cards Grid (3 columns)  │
│    - Image + overlay                │
│    - Description                    │
│    - Stats + Button                 │
├─────────────────────────────────────┤
│    Footer                           │
└─────────────────────────────────────┘
```

### About Page Structure
```
┌─────────────────────────────────────┐
│    Navigation Bar                   │
├─────────────────────────────────────┤
│    Page Header "About Sandy's..."   │
├─────────────────────────────────────┤
│    Main Story (2 column layout)     │
├─────────────────────────────────────┤
│    Mission/Vision/Values (3 col)    │
├─────────────────────────────────────┤
│    Why Choose Us Extended (6 col)   │
├─────────────────────────────────────┤
│    Team Section (3 columns)         │
├─────────────────────────────────────┤
│    Timeline Section (Alternating)   │
├─────────────────────────────────────┤
│    CTA Section                      │
├─────────────────────────────────────┤
│    Footer                           │
└─────────────────────────────────────┘
```

### Contact Page Structure
```
┌─────────────────────────────────────┐
│    Navigation Bar                   │
├─────────────────────────────────────┤
│    Page Header "Get in Touch"       │
├─────────────────────────────────────┤
│    Contact Info (Left) | Form (Right)
│    - Multiple channels              │
│    - Hours display                  │
│    - Social links                   │
├─────────────────────────────────────┤
│    FAQs Section (3 columns)         │
├─────────────────────────────────────┤
│    CTA Section                      │
├─────────────────────────────────────┤
│    Footer                           │
└─────────────────────────────────────┘
```

## 🎭 Hover Effects Reference

```
Cards:
  Hover transform:   translateY(-10px) or translateY(-8px)
  Hover shadow:      Enhanced shadow (medium or hover)
  Hover duration:    0.3s - 0.4s ease

Images:
  Hover transform:   scale(1.08) or scale(1.1)
  Hover duration:    0.5s ease

Text Links:
  Hover underline:   Add or show
  Hover color:       Change to accent color
  Hover duration:    0.3s ease

Buttons:
  Hover transform:   translateY(-2px) or translateY(-3px)
  Hover shadow:      Enhanced shadow
  Hover background:  Darker shade or accent color
  Hover duration:    0.3s ease
```

## 🔄 Animation Reference

```
Fade In (Cards appear):
  From:             opacity: 0, transform: translateY(30px)
  To:               opacity: 1, transform: translateY(0)
  Duration:         0.6s ease
  Trigger:          On scroll (Intersection Observer)

Parallax Hero:
  Effect:           Background moves at 50% scroll speed
  Implementation:   transform: translateY(scrolled * 0.5)

Smooth Scroll:
  Style:            scroll-behavior: smooth
  Links:            Internal anchor links smoothly scroll

Nav Scroll:
  Effect:           Navbar changes padding on scroll
  Duration:         0.3s ease
```

## 📐 Grid Specifications

```
Homepage Product Grid:
  Columns:          repeat(auto-fit, minmax(320px, 1fr))
  Gap:              40px

Categories Grid:
  Columns:          repeat(auto-fit, minmax(360px, 1fr))
  Gap:              40px

Products Page Grid:
  Columns:          repeat(auto-fill, minmax(280px, 1fr))
  Gap:              30px

Features/Reasons Grid:
  Columns:          repeat(auto-fit, minmax(300px, 1fr))
  Gap:              30px

Team Grid:
  Columns:          repeat(auto-fit, minmax(300px, 1fr))
  Gap:              40px

FAQs Grid:
  Columns:          repeat(auto-fit, minmax(350px, 1fr))
  Gap:              30px
```

## 🔐 Design Consistency Rules

✓ All buttons are either WhatsApp green or dark text
✓ All section headers use Playfair Display (serif)
✓ All body text uses Poppins (sans-serif)
✓ Padding is always in multiples of 10 (10, 20, 30, 40, etc.)
✓ Shadows are always one of 3 pre-defined levels
✓ Border radius is always 8, 16, or 24px
✓ Colors are consistent throughout (use CSS variables)
✓ Responsive breakpoints are consistent across all pages

---

This guide ensures visual consistency across the entire Sandy's Bedding website!
