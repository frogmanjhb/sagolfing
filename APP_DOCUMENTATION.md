# SA Golfing Web Application - Complete Documentation

## Executive Summary
SA Golfing is a comprehensive golf booking and tour management web application for South Africa's premier golf courses. The application serves as a digital platform connecting golfers with South Africa's top golf destinations across five major regions: Johannesburg, Cape Town, Garden Route, Durban, and Kruger.

---

## Table of Contents
1. [Application Overview](#application-overview)
2. [Core Features](#core-features)
3. [Modal Forms & Lead Capture](#modal-forms--lead-capture)
4. [Technical Architecture](#technical-architecture)
5. [User Flows](#user-flows)
6. [Data Structure](#data-structure)
7. [SEO & Performance](#seo--performance)
8. [Current Capabilities](#current-capabilities)
9. [Future Enhancements](#future-enhancements)

---

## Application Overview

### Purpose
The SA Golfing application is designed to:
- Showcase South Africa's top 100 golf courses
- Provide comprehensive golf tour and booking services via modal forms
- Offer corporate golf event management
- Facilitate golf equipment rental and transportation services
- Connect international and local golfers with premium golf experiences
- Enable direct contact via WhatsApp, phone, and email

### Target Audience
- International golf tourists
- Local golf enthusiasts
- Corporate event planners
- Golf tour groups
- Business travelers who golf

### Technology Stack
- **Framework:** React 19.2.0 with TypeScript
- **Routing:** React Router DOM 7.9.6
- **Styling:** TailwindCSS 4.1.17
- **Build Tool:** Vite 7.2.2
- **Prerendering:** vite-prerender-plugin 0.5.13 (optional `build:prerender`)
- **SEO:** React Helmet Async 2.0.5 + build-time sitemap plugin
- **Forms:** Web3Forms API with mailto fallback
- **Deployment:** Railway (Production) / Docker ready
- **Node Version:** 20.0.0+

### Build Scripts
| Script | Description |
|--------|-------------|
| `npm run dev` | Local development server (port 3000) |
| `npm run build` | Standard Vite production build |
| `npm run build:prerender` | Production build with static HTML prerendering |
| `npm run preview` | Preview production build locally |
| `npm start` | Serve `dist/` for production (Railway/Docker) |

---

## Core Features

### 1. Homepage (Landing Page)
**Location:** `/` (root route)

The homepage supports two layout modes via `ViewModeContext` (`standard` | `bento`). The default is **standard**; bento components swap in alternative card-based layouts for Hero, Services, Courses, Clients, and Contact. Both layouts share `BookGolfTourPromo` and the global Header/Footer.

#### Components:
1. **Header Navigation**
   - Local SA Golfing logo (`/images/SAGolfing-Logo-2010 (1).png`)
   - CPG partnership logo displayed alongside CTAs
   - Sticky navigation with scroll-aware styling
   - Mobile-responsive hamburger menu
   - Section links: Home, Services, Courses
   - Persistent modal CTAs:
     - **Book Your Tee Off Time** → `BookingModal`
     - **Book your Golf Clubs** → `GolfClubHireModal`
     - **Enquire Now** → `EnquiryModal`

2. **Hero Section**
   - Full-width banner with Ken Burns animated background
   - Headline: "Play the Best Golf Courses in South Africa"
   - Tagline: "Your preferred golfing partner away from home"
   - Dual CTAs opening the booking modal:
     - "Book Your Tee Off in Johannesburg"
     - "Book Your Tee Off in Cape Town"
   - **HeroBento** variant: card-based hero layout for bento mode

3. **Book Golf Tour Promo**
   - Featured section between Hero and Services on both layout modes
   - Regional tour cards (Garden Route, Cape Town, Durban, Johannesburg)
   - Clicking a region dispatches `sagolfing:select-region` and scrolls to Courses
   - Highlights: nationwide coverage, safari/coastal routes, booking support, 24-hour chauffeur
   - Direct phone contact for Tim Steenhoff

4. **Services Section**
   - Grid display of 6 core services
   - Each service card includes:
     - Icon/image
     - Title
     - Brief description
     - "Learn More" button linking to detail page
   
   **Services Offered (display order):**
   - Day Golf Excursions (single-day packages)
   - Golf Club Hire (50 sets of 5-star clubs)
   - Golf Holidays (complete vacation packages)
   - Golf Tours (customized across SA)
   - Chauffeur Driver (24/7 service, 4-14 seater vehicles)
   - Corporate Golf Days (up to 144 players)

   Each card uses local imagery, bullet-point highlights, and links to service detail pages. **ServicesSectionBento** provides the bento layout variant.

5. **Courses Section**
   - Regional tabs/filters for 5 regions:
     - Johannesburg (60+ courses)
     - Garden Route (9 courses)
     - Cape Town (27 courses)
     - Durban (9 courses)
     - Kruger (6 courses)
   - Pagination: 9 courses shown initially per region, with "Show All" toggle
   - Loading skeleton during region switches
   - Listens for `sagolfing:select-region` events from BookGolfTourPromo
   - Course cards displaying:
     - Course image (local assets where available)
     - Course name
     - National ranking (if applicable)
     - Region
     - Key highlights
     - Travel time from airport
     - "View Details" button
   - **CoursesSectionBento** provides the bento layout variant

6. **Clients Section**
   - Infinite-scroll logo banner of airline and corporate clients
   - Local airline logos (British Airways, Emirates, Qantas, Delta, Air France, Lufthansa, KLM, Iberia, Cathay Pacific)
   - Corporate logos (Toyota, IBM, LG, NEC, Nedbank, Samsung, Toshiba)
   - **ClientsSectionBento** provides the bento layout variant

7. **Contact Section**
   - Contact details (no inline form — enquiries use header modals)
   - Email: info@sagolfing.com
   - Phone: Tim Steenhoff, +27 82 770 1733
   - WhatsApp chat link with pre-filled message
   - **ContactSectionBento** provides the bento layout variant

8. **Footer**
   - SA Golfing logo and tagline
   - Quick links: Home, Services, Courses
   - Contact block with email, phone, and WhatsApp
   - Copyright information

### 2. Course Detail Pages
**Location:** `/course/:courseId` (dynamic routes)

**Purpose:** Provide comprehensive information about each golf course

#### Features:
1. **Hero Banner**
   - High-quality course image
   - Course name
   - National ranking badge (if ranked)
   - Location information
   - Gradient overlay for readability

2. **Navigation**
   - Back button to courses section
   - Smooth scroll functionality
   - Breadcrumb navigation

3. **Main Content Area**
   - **About Section**
     - Full course description
     - History and heritage information
     - Unique characteristics
   
   - **Highlights Section**
     - Key features in grid format
     - Checkmark indicators
     - 2-column responsive layout
   
   - **Course Features**
     - Detailed bullet-point list
     - Facility information
     - Championship history
     - Notable holes and design elements

4. **Information Sidebar**
   - **Course Statistics Card:**
     - Designer name
     - Par
     - Course length (meters)
     - Travel time from OR Tambo Airport
   
   - **Book Now Button**
     - Prominent CTA
     - Navigates to contact section
     - Hover animations
   
   - **Region Badge**
     - Visual indicator of geographic location
     - Color-coded by region

5. **SEO Optimization**
   - Dynamic meta tags
   - Open Graph tags for social sharing
   - Structured data (GolfCourse schema)
   - Breadcrumb schema
   - Course-specific keywords

### 3. Service Detail Pages
**Location:** `/service/:serviceSlug` (dynamic routes)

**Purpose:** Provide comprehensive information about each service offering

#### Features:
1. **Hero Section**
   - Service icon/image
   - Service title
   - Detailed description
   - Gradient background
   - Back navigation

2. **Bento Box Grid Layout**
   Modern card-based layout with multiple information sections:
   
   a. **What's Included Card (Large)**
      - 2-column grid of features
      - Checkmark indicators
      - Hover effects
      - Comprehensive feature list
   
   b. **Pricing Card**
      - Pricing information
      - Custom quote details
      - "Get a Quote" CTA button
      - Gradient background
   
   c. **Key Benefits Card**
      - Bulleted list of advantages
      - Clear value propositions
      - Arrow indicators
   
   d. **Client Testimonial Card (Wide)**
      - Client quote
      - Client name and role
      - Avatar placeholder
      - Social proof
   
   e. **Ready to Start Card**
      - Call-to-action messaging
      - "Contact Us Now" button
      - Encourages user engagement
   
   f. **Quick Info Card (Full Width)**
      - "Have Questions?" section
      - Multiple CTAs
      - Links to contact and services

3. **Service-Specific Details**

   **Corporate Golf Days:**
   - Event planning for up to 144 golfers
   - Invitation design and management
   - Branded merchandise (shirts, caps)
   - 4-ball photos
   - Sponsored holes and signage
   - Guest speakers
   - Prizes (closest to pin, longest drive)
   - Prize giving and dinner/snacks
   - Auction of sports memorabilia

   **Golf Tours:**
   - Customized tours across all SA regions
   - Access to world-class courses
   - Accommodation arrangements
   - Transportation coordination
   - Tee-time bookings
   - Local expertise and course knowledge
   - Flexible itinerary planning

   **Day Golf Excursions:**
   - One-call booking convenience
   - Return transport from hotel/B&B
   - Confirmed tee-off times
   - Golf club hire available
   - Complete packaged day experience
   - Door-to-door service

   **Golf Club Hire:**
   - 50 sets of 5-star clubs
   - Premium brands: Cobra, Ping, Adams, King Cobra, Titleist, TaylorMade, Wilson
   - Right-handed men's clubs
   - Left-handed men's clubs
   - Right-handed ladies clubs
   - Clubs matched to game and handicap
   - Well-maintained equipment

   **Chauffeur Driver:**
   - Exclusive dedicated vehicle
   - 24/7 on-call service
   - Multiple vehicle sizes: 4, 6, 10, 14 seaters
   - Air-conditioned vehicles
   - Professional drivers
   - Local knowledge

   **Holidays:**
   - Complete golf vacation packages
   - Multi-region tours
   - Accommodation bookings
   - Wine tours and safari add-ons
   - Cultural excursions
   - All-inclusive options

---

## Modal Forms & Lead Capture

All primary lead-generation flows use modal dialogs accessible from the Header (and Hero booking CTAs). Forms share a common submission pipeline via `useFormSubmit` and `submitForm`.

### Shared Form Infrastructure
- **`ModalShell`** — reusable accessible modal wrapper
- **`FormFeedback`** — inline error display during submission
- **`FormSubmitSuccess`** — success state with contextual messaging
- **`useFormSubmit`** — manages idle / submitting / success / error states
- **`submitForm`** — sends to Web3Forms API when configured, otherwise opens a `mailto:` fallback

### Submission Backend
- **Production:** Web3Forms (`VITE_WEB3FORMS_ACCESS_KEY`) emails submissions to info@sagolfing.com
- **Local dev fallback:** Opens the visitor's email client via `mailto:` when no access key is set
- **Form types:** `enquiry`, `booking`, `golf-club-hire`

### 1. Enquiry Modal
**Trigger:** Header "Enquire Now" button

**Fields:**
- Name
- Email
- Phone number
- Enquiry message

**Behavior:** Resets form state on close; shows success or error feedback inline.

### 2. Booking Modal
**Trigger:** Header "Book Your Tee Off Time", Hero CTAs

**Fields:**
- Name and surname
- Email and phone
- Golf course (dropdown of all courses)
- Tee-off time preference
- Start and end dates
- Optional golf club hire (toggle):
  - Club type, handedness, number of sets
  - Preferred brand, delivery location
  - Special requirements

**Behavior:** Integrated club-hire fields when "needs clubs" is checked; form resets on modal close.

### 3. Golf Club Hire Modal
**Trigger:** Header "Book your Golf Clubs"

**Fields:**
- Name and surname
- Email and phone
- Rental start and end dates
- Club type and handedness
- Number of sets and preferred brand
- Delivery location and special requirements

**Behavior:** Dedicated hire workflow separate from tee-time booking.

### WhatsApp Integration
Contact details and WhatsApp chat links are centralized in `src/config/seo.ts`:
- **Contact:** Tim Steenhoff — info@sagolfing.com — +27 82 770 1733
- **WhatsApp:** `wa.me` link with optional pre-filled enquiry message
- Used in ContactSection, ContactSectionBento, and Footer

---

## Technical Architecture

### Frontend Structure

```
src/
├── App.tsx                      # Routing + dual homepage layouts
├── main.tsx                     # App entry point with providers
├── prerender.tsx                # SSR prerender entry for static HTML generation
├── components/
│   ├── Header.tsx               # Nav + modal triggers + CPG logo
│   ├── Hero.tsx                 # Standard hero with booking CTAs
│   ├── BookGolfTourPromo.tsx    # Regional tour promo section
│   ├── ServicesSection.tsx
│   ├── CoursesSection.tsx       # Region tabs, pagination, loading state
│   ├── ClientsSection.tsx       # Infinite-scroll client logos
│   ├── ContactSection.tsx       # Email, phone, WhatsApp contact block
│   ├── Footer.tsx
│   ├── BookingModal.tsx         # Tee-time + optional club hire
│   ├── EnquiryModal.tsx
│   ├── GolfClubHireModal.tsx
│   ├── ModalShell.tsx
│   ├── FormFeedback.tsx
│   ├── FormSubmitSuccess.tsx
│   ├── SEOHelmet.tsx            # Dynamic SEO meta tags
│   ├── StructuredData.tsx       # JSON-LD schema
│   ├── CourseCard.tsx
│   └── bento/                   # Alternate bento layout components
│       ├── HeroBento.tsx
│       ├── ServicesSectionBento.tsx
│       ├── CoursesSectionBento.tsx
│       ├── ClientsSectionBento.tsx
│       └── ContactSectionBento.tsx
├── pages/
│   ├── CourseDetailPage.tsx
│   └── ServiceDetailPage.tsx
├── contexts/
│   └── ViewModeContext.tsx      # standard | bento layout toggle
├── hooks/
│   └── useFormSubmit.ts
├── config/
│   └── seo.ts                   # Site URL, contact info, sitemap, prerender routes
├── data/
│   ├── courses.ts               # 111 golf courses
│   └── services.ts              # 6 service offerings
├── lib/
│   ├── submitForm.ts            # Web3Forms + mailto submission
│   └── utils.ts
├── utils/
│   ├── helmetToHeadElements.ts  # Prerender head extraction
│   └── mailto.ts
├── types/
│   └── index.ts
└── styles/
    └── index.css                # Tailwind CSS
plugins/
└── seoBuildPlugin.ts            # Generates sitemap.xml at build time
public/
└── images/                      # Local logos, airline logos, course/service images
```

### Routing System
- **React Router DOM v7** for client-side routing
- **Browser Router** with hash navigation support
- **Dynamic routes** for courses and services
- **Smooth scroll** navigation to sections
- **Programmatic navigation** with useNavigate hook

### State Management
- React component state (useState)
- URL-based state (useParams)
- View mode context (`ViewModeContext`) for standard/bento homepage layouts
- Form submission state via `useFormSubmit` hook
- No global state management library (intentionally simple)

### Styling Approach
- **TailwindCSS** utility-first framework
- **Custom color palette:**
  - Primary: Green shades (golf theme)
  - Corporate: Gray scale for professional look
  - Accent colors for CTAs
- **Responsive design:** Mobile-first approach
- **CSS animations:** Hover effects, transitions
- **Custom container classes**

---

## User Flows

### Flow 1: Book a Tee Time via Modal
1. User clicks "Book Your Tee Off Time" in Header or Hero CTA
2. Booking modal opens with course dropdown and date fields
3. Optionally enables golf club hire fields
4. Submits via Web3Forms (or mailto fallback)
5. Success screen confirms submission; form resets on close

### Flow 2: Discover and Book a Golf Course
1. User lands on homepage
2. Scrolls to "Courses" section, uses BookGolfTourPromo region cards, or clicks navigation
3. Filters by region (Johannesburg, Cape Town, etc.)
4. Views up to 9 course cards initially; expands with "Show All"
5. Clicks "View Details" on interested course
6. Reviews comprehensive course information
7. Clicks "Book Now" button or uses Header booking modal
8. Submits booking inquiry via modal form

### Flow 3: Learn About Services and Request Quote
1. User lands on homepage
2. Views "Services" section
3. Clicks "Learn More" on specific service
4. Navigates to service detail page
5. Reviews features, benefits, pricing
6. Reads testimonial for social proof
7. Clicks "Get a Quote" or "Contact Us"
8. Opens Enquiry modal from Header or scrolls to Contact section
9. Submits inquiry via modal or contacts via WhatsApp/phone/email

### Flow 4: Browse Courses by Region
1. User lands on homepage
2. Scrolls to "Courses" section
3. Clicks regional tab (e.g., "Johannesburg")
4. Views filtered list of courses in that region
5. Can switch between regions using tabs
6. Each tab updates course display dynamically with loading skeleton

### Flow 5: Golf Club Hire
1. User clicks "Book your Golf Clubs" in Header
2. Golf Club Hire modal opens
3. User enters rental dates, club specs, and delivery details
4. Submits via Web3Forms; receives success confirmation

### Flow 6: WhatsApp Contact
1. User scrolls to Contact section or Footer
2. Clicks "Chat to Tim on WhatsApp"
3. Opens WhatsApp with pre-filled enquiry message

### Flow 7: Return from Detail Page
1. User is on course/service detail page
2. Clicks "Back" button
3. Returns to homepage
4. Auto-scrolls to relevant section (courses/services)
5. Maintains browsing context

---

## Data Structure

### Golf Course Object
```typescript
interface GolfCourse {
  id: string;                    // Unique identifier (slug)
  name: string;                  // Course name
  region: string;                // Johannesburg, Cape Town, etc.
  location?: string;             // City - Province
  nationalRanking?: number;      // 1-100 ranking
  image?: string;                // Hero image URL
  highlights?: string[];         // Key features array
  description?: string;          // Full description
  designer?: string;             // Course architect
  par?: number;                  // Course par
  length?: string;               // Course length
  travelTime?: string;           // From OR Tambo Airport
  features?: string[];           // Detailed features array
}
```

### Service Object
```typescript
interface Service {
  id: string;                    // Unique identifier
  slug: string;                  // URL slug
  title: string;                 // Service name
  description: string;           // Brief description
  icon?: string;                 // Icon path or emoji
  detailedDescription?: string;  // Full description
  features?: string[];           // What's included
  benefits?: string[];           // Why choose this
  pricing?: string;              // Pricing information
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  callToAction?: string;         // CTA text
}
```

### Regional Organization
```typescript
interface RegionData {
  name: Region;                  // Region name
  courses: GolfCourse[];         // Array of courses
}

type Region = 'Johannesburg' | 'Garden Route' | 
              'Cape Town' | 'Durban' | 'Kruger';
```

### Course Database Summary
- **Total Courses:** 111
- **Johannesburg Region:** 60 courses
  - Including Gary Player CC (Sun City) - #1 nationally
  - Blair Atholl - #2 nationally
  - Multiple top-100 ranked courses
- **Cape Town Region:** 27 courses
  - Pearl Valley - #3 nationally
  - Arabella - #5 nationally
  - Royal Cape (oldest in Africa - 1885)
- **Garden Route Region:** 9 courses
  - Fancourt
  - Pezula
  - Pinnacle Point
- **Durban Region:** 9 courses
  - Durban Country Club - #8 nationally
  - Mount Edgecombe
  - Zimbali
- **Kruger Region:** 6 courses
  - Leopard Creek
  - Skukuza (inside Kruger National Park)
  - Hans Merensky

---

## SEO & Performance

### Site Configuration
Centralized in `src/config/seo.ts`:
- **Production domain:** `https://www.sagolfing.com` (via `VITE_SITE_URL`)
- **Contact constants:** email, phone, WhatsApp URL builder
- **Canonical URLs:** `absoluteUrl()`, `courseUrl()`, `serviceUrl()` helpers
- **Prerender routes:** all course and service pages auto-enumerated

### Search Engine Optimization

#### 1. Dynamic Meta Tags
Every page has unique, optimized meta tags via `SEOHelmet`:
- **Title tags:** Route-specific titles
- **Description tags:** Compelling, keyword-rich
- **Keywords:** Targeted golf tourism keywords
- **Canonical URLs:** Point to `www.sagolfing.com`
- **Open Graph:** Facebook/LinkedIn sharing
- **Twitter Cards:** Twitter sharing optimization

#### 2. Google Search Console
- Google site verification meta tag in `index.html`

#### 3. Structured Data (JSON-LD)
**Homepage:**
- Organization schema
- LocalBusiness schema
- TravelAgency schema

**Course Pages:**
- GolfCourse schema (with designer, par, location)
- Breadcrumb schema
- ImageObject schema

#### 4. Sitemap & Robots
- **sitemap.xml:** Auto-generated at build time by `seoBuildPlugin` from live course/service data
- Regenerated in both `public/` and `dist/` on each build
- **robots.txt:** Search engine instructions in `public/robots.txt`
- **Priority levels:** Homepage (1.0), Courses (0.8), Services (0.7)

#### 5. Static Prerendering
Optional prerender build for improved crawlability:
- **Script:** `npm run build:prerender` (Vite mode `prerender`)
- **Plugin:** `vite-prerender-plugin` with entry at `src/prerender.tsx`
- **Scope:** All course and service detail routes (homepage handled separately)
- **Output:** Pre-rendered HTML with extracted Helmet meta tags for each route

#### 6. Performance Optimizations
- **Code splitting:** Vendor chunks separated (react-vendor, helmet-vendor)
- **Minification:** Terser for production (console/debugger stripped)
- **Tree shaking:** Unused code removed
- **Preconnect:** DNS prefetch for fonts and CDN
- **Lazy loading:** Images loaded on demand
- **Local assets:** Airline logos, course images, and branding served from `/public/images`

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Alt text on all images
- Keyboard navigation support
- Focus indicators
- Responsive touch targets

---

## Current Capabilities

### ✅ Implemented Features

#### Content Management
- 111 golf courses catalogued with detailed information
- 6 comprehensive service offerings
- Regional organization and filtering
- High-quality imagery
- Testimonials and social proof

#### User Interface
- Responsive design (mobile, tablet, desktop)
- Dual homepage layouts (standard + bento via ViewModeContext)
- Smooth scrolling navigation
- Interactive hover states and Ken Burns hero animation
- Loading skeletons for course region switching
- Course pagination (9 per region, expandable)
- Modal-based booking, enquiry, and club hire forms
- Form submission feedback (success, error, mailto fallback)
- Infinite-scroll client logo banner
- WhatsApp chat integration
- Error handling (404 pages)
- Back navigation with context preservation

#### Technical Features
- Client-side routing (SPA)
- Dynamic page generation
- Optional static prerendering (`build:prerender`)
- Build-time sitemap generation
- Web3Forms email submission with mailto fallback
- Environment-driven site URL and API keys
- SEO optimization with Google Search Console verification
- Social media sharing optimization
- Production-ready build
- Docker containerization with Vite env build args
- Railway deployment configuration

#### Information Architecture
- Clear navigation structure
- Intuitive user flows
- Section-based homepage
- Detailed course pages (111 pages)
- Detailed service pages (6 pages)
- Contact integration

#### Business Features
- Lead generation through modal forms (booking, enquiry, club hire)
- WhatsApp direct messaging to Tim Steenhoff
- Phone and email contact options
- Book Golf Tour regional promo with course deep-linking
- Service showcasing with local imagery
- Course discovery with pagination
- Social proof (airline and corporate client logos)
- Clear calls-to-action throughout Header and Hero
- Multiple conversion points

---

## Future Enhancements

### Phase 2: Backend & Booking System
- ~~Email form delivery~~ (Web3Forms integration complete)
- Real-time tee time availability
- Online booking and payment
- User accounts and profiles
- Booking history
- Email confirmations
- SMS notifications

### Phase 3: Community Features
- User reviews and ratings
- Photo uploads from users
- Social sharing of rounds
- Leaderboards
- Golf buddy finder
- Forum/community section

### Phase 4: Analytics & Marketing
- Google Analytics integration
- Conversion tracking
- A/B testing
- Email marketing integration
- CRM integration
- Affiliate program
- Referral system

### Phase 5: Advanced Features
- ~~Live chat support~~ (partial: WhatsApp integration added)
- Multi-language support (Afrikaans, German, French)
- Currency converter
- Weather integration
- Course condition updates
- Photo galleries for each course
- Video tours
- Interactive course maps
- Handicap calculator

### Phase 6: Mobile App
- Native iOS/Android apps
- Push notifications
- Offline course information
- GPS navigation to courses
- Digital scorecards
- In-app booking

---

## Deployment & Hosting

### Current Setup
- **Platform:** Railway.app
- **Domain:** https://www.sagolfing.com (`VITE_SITE_URL`)
- **Container:** Docker ready
- **Build:** Vite production build (`npm run build`) or prerender build (`npm run build:prerender`)
- **Serve:** Static file serving via `serve` package
- **Port:** Dynamic ($PORT environment variable)

### Environment Variables
| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Canonical site URL for SEO, sitemap, and Open Graph |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API key for modal form email delivery |

See `.env.example` for local setup. Docker/Railway pass `VITE_*` variables as build args so they are embedded at build time.

### Environment Configuration
- Node.js 20.0.0+
- NPM 10.0.0+
- Automatic builds on git push
- Zero-downtime deployments

---

## API Integration Points (Future)

### Recommended External Services
1. **Booking System**
   - GolfNow API
   - Tee-On API
   - Custom booking backend

2. **Payment Processing**
   - Stripe
   - PayFast (South Africa)
   - PayPal

3. **Email Services**
   - SendGrid
   - Mailgun
   - AWS SES

4. **SMS Notifications**
   - Twilio
   - Clickatell (SA provider)

5. **Analytics**
   - Google Analytics 4
   - Mixpanel
   - Hotjar (heatmaps)

6. **Weather**
   - OpenWeatherMap
   - Weather Underground

7. **Maps & Directions**
   - Google Maps API
   - Mapbox

---

## Contact Information

The application facilitates contact through:
- **Enquiry modal** — general questions from Header "Enquire Now"
- **Booking modal** — tee-time requests with optional club hire
- **Golf Club Hire modal** — dedicated equipment rental requests
- **WhatsApp** — direct chat link to Tim Steenhoff
- **Phone** — +27 82 770 1733
- **Email** — info@sagolfing.com
- **Contact section & Footer** — email, phone, and WhatsApp links
- **Book Now** buttons on course pages
- **Get a Quote** buttons on service pages

---

## Competitive Advantages

1. **Comprehensive Coverage:** 111 courses across 5 regions
2. **Detailed Information:** Course statistics, designer, rankings
3. **Multiple Services:** Not just bookings - full golf experiences
4. **Local Expertise:** SA-specific knowledge and connections
5. **Premium Focus:** Top 100 courses and 5-star equipment
6. **Turnkey Solutions:** Complete packages from transport to prizes
7. **SEO Optimized:** Discoverable by international golfers
8. **Mobile Optimized:** Works perfectly on any device
9. **Fast Performance:** Under 3 seconds load time
10. **Professional Design:** Modern, trustworthy appearance

---

## Key Metrics & Statistics

### Content Volume
- **111** golf courses
- **6** service offerings
- **5** geographic regions
- **117** total routable pages
- **60+** courses in Johannesburg alone
- **50** sets of rental golf clubs
- **144** max corporate event capacity

### Travel Information
- All travel times measured from OR Tambo Airport
- Covers courses from 15 minutes to 6 hours away
- Includes both drive times and flight options

### Course Rankings
- Includes courses ranked #1 through #100 nationally
- Features Africa's oldest golf club (Royal Cape - 1885)
- Showcases world-renowned designers:
  - Gary Player
  - Jack Nicklaus
  - Ernie Els
  - Peter Matkovich
  - Tom Weiskopf

---

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Security Considerations
- No sensitive data stored client-side
- HTTPS enforced
- No authentication system yet
- Form submissions via Web3Forms API (server-side email delivery)
- Mailto fallback for local development only
- XSS protection via React
- Bot check field included in Web3Forms payload

---

## Maintenance & Updates

### Content Updates
- Course information in `src/data/courses.ts`
- Service information in `src/data/services.ts`
- Easy to add/edit/remove courses
- No database required for content changes

### Deployment Process
1. Set `VITE_SITE_URL` and `VITE_WEB3FORMS_ACCESS_KEY` in Railway/host environment
2. Update code locally
3. Test with `npm run dev`
4. Build with `npm run build` (or `npm run build:prerender` for static HTML)
5. Push to git repository
6. Railway auto-deploys via Docker
7. Verify production site and form submissions

---

## Conclusion

The SA Golfing web application is a fully functional, production-ready golf tourism platform showcasing South Africa's finest golf courses and comprehensive golf services. It provides an excellent foundation for:

- Lead generation
- Brand awareness
- Course discovery
- Service marketing
- SEO visibility
- Mobile accessibility
- Future backend integration

The application successfully balances aesthetic appeal, functionality, performance, and SEO optimization to serve both business goals and user needs.

---

## Document Version
- **Version:** 2.0
- **Last Updated:** June 14, 2026
- **Author:** Development Team
- **Status:** Production Active

### Changelog (v2.0)
- Modal forms: Booking, Enquiry, Golf Club Hire with Web3Forms integration
- WhatsApp contact links across Contact and Footer
- Book Golf Tour promo section with regional course deep-linking
- Dual homepage layouts (standard + bento components)
- Course pagination, loading skeletons, and local image assets
- Build-time sitemap generation and optional prerender build
- Google Search Console verification
- Domain updated to www.sagolfing.com
- Header CTAs, CPG partnership logo, and updated Hero copy
- Docker build args for Vite environment variables

