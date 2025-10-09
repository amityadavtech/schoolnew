# Pinnacle Academy - School Website

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

### 🔧 Admin Dashboard
- **Content Management**: Edit pages, announcements, and content
- **Event Management**: Create, edit, and manage school events
- **Gallery Management**: Upload and organize photos
- **Faculty Management**: Add and update staff profiles
- **Admission Management**: Review and process applications
- **Settings**: School information and security settings

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
│   ├── admin/             # Admin dashboard
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── faculty/           # Faculty page
│   ├── gallery/           # Gallery page
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── admin/             # Admin-specific components
│   ├── sections/          # Page sections
│   ├── ui/                # shadcn/ui components
│   ├── navigation.tsx     # Main navigation
│   └── footer.tsx         # Site footer
├── public/                # Static assets
└── README.md             # This file
\`\`\`

## Content Management

### Admin Access
Access the admin dashboard at `/admin` to manage:
- **Content**: Edit page content and announcements
- **Events**: Create and manage school events
- **Gallery**: Upload and organize photos
- **Faculty**: Manage staff profiles
- **Admissions**: Review applications
- **Settings**: Update school information

### Content Updates
The admin system provides an intuitive interface for non-technical users to:
- Update text content across all pages
- Add new events to the calendar
- Upload photos to the gallery
- Manage faculty information
- Process admission applications

## Customization

### Branding
- Update colors in `app/globals.css` design tokens
- Replace logo and images in the `public/` directory
- Modify school information in component files

### Content
- Edit text content through the admin dashboard
- Update contact information and school details
- Customize form fields and validation rules

### Features
- Add new page sections by creating components
- Extend the admin dashboard with additional features
- Integrate with external services (email, CMS, etc.)

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

Built with ❤️ for educational excellence.
