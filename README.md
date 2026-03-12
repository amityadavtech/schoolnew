# Aira Bal Vidya Mandir Inter College - School Website

A comprehensive, modern school website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### 🏫 Complete School Website
- **Homepage**: Hero section, announcements, features, statistics, testimonials
- **About Page**: Mission, vision, history, principal's message, achievements
- **Academics**: Curriculum overview, programs, extracurricular activities
- **Gallery**: Interactive photo gallery with lightbox and category filtering
- **Events**: Calendar system with upcoming events and detailed views
- **Faculty**: Staff directory with detailed profiles and department filtering
- **Admissions**: Application process, requirements, and online application form
- **Contact**: Contact information, inquiry form, and interactive map

### 🎨 Design Features
- **Premium Design**: Elegant, professional aesthetic with sophisticated typography
- **Dark/Light Mode**: Complete theme switching capability
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### 🛠️ Technical Features
- **Next.js 14**: App Router with server and client components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS v4**: Modern styling with design tokens
- **Framer Motion**: Smooth animations and transitions
- **shadcn/ui**: High-quality, accessible UI components
- **Form Handling**: Complete form validation and submission
- **Image Optimization**: Next.js Image component with placeholder generation

### 📱 Interactive Components
- **Gallery Lightbox**: Full-featured image viewer with navigation
- **Event Calendar**: Interactive calendar with date selection
- **Faculty Profiles**: Modal popups with detailed information
- **Contact Forms**: Admission and contact forms with validation
- **Navigation**: Responsive navigation with mobile menu

### 🔧 Static Site Architecture
This is a fully static website with no dynamic admin features. Content is managed through source files and rebuilt/redeployed for updates.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

### Deployment
This project is optimized for deployment on Vercel:
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── academics/         # Academics page
│   ├── admissions/        # Admissions page
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── faculty/           # Faculty page
│   ├── gallery/           # Gallery page (static images served from `public/`)
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── sections/          # Page sections
│   ├── ui/                # shadcn/ui components
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Site footer
├── lib/                   # Utilities & data
│   ├── gallery-store.ts   # Static gallery image data
│   └── utils.ts
├── public/                # Static assets (images, etc.)
└── README.md             # This file
\`\`\`

## Content Management (Static Site)

This is a **fully static site** with no dynamic admin features. All content is managed through:

1. **Page Components** (`app/` directory) - Edit React/TSX files to update page structure
2. **Gallery Images** (`lib/gallery-store.ts`) - Update the image array to add/remove gallery photos
3. **Static Assets** (`public/` directory) - Replace image files here
4. **Styling** (`app/globals.css`, tailwind config) - Modify colors and design tokens

All changes require a rebuild and redeploy (no real-time admin dashboard).

## Customization

### Branding
- Update colors in `app/globals.css` design tokens
- Replace logo and images in the `public/` directory
- Modify school information in component files

### Content Updates
- Edit page content directly in component files
- Update gallery images in `lib/gallery-store.ts`
- Replace static assets in `public/` directory
- Update contact information and school details in relevant components

### Features
- Add new page sections by creating components
- Modify styling through Tailwind CSS and globals.css
- Integrate with external services (email, analytics, etc.)

## Performance

- **Optimized Images**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Friendly**: Proper meta tags and structured data
- **Fast Loading**: Optimized bundle size and efficient rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Check the documentation
- Open an issue on GitHub
- Contact the development team

---

