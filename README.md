# Ali Mohsin Portfolio

A modern, responsive portfolio website built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom theming
- **Dark Mode**: Built-in dark/light theme support with next-themes
- **Animations**: Smooth animations using Framer Motion
- **Responsive**: Mobile-first responsive design
- **SEO Optimized**: Full meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized for Core Web Vitals

## Pages

- **Home** - Hero section with introduction and skills
- **About** - Personal background, values, and education
- **Experience** - Professional work history timeline
- **Projects** - Portfolio of featured projects
- **Case Studies** - In-depth project analyses
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/
│   │   ├── case-studies/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── projects/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/             # Reusable components
│   │   ├── navbar.tsx
│   │   ├── scroll-progress.tsx
│   │   └── theme-provider.tsx
│   └── lib/                    # Utility functions
│       └── utils.ts
├── public/                     # Static assets
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Customization

### Theme Colors

Edit the CSS variables in `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 262 83% 58%;  /* Purple primary color */
  --background: 30 15% 96%;
  /* ... other variables */
}

.dark {
  --primary: 262 83% 70%;
  --background: 0 0% 0%;
  /* ... other variables */
}
```

### Content

Update the content in each page file (`src/app/*/page.tsx`) to match your personal information.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Build the project for production:

```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

This project is open source and available under the MIT License.

## Author

**Elango Murugan**
- GitHub: [@Elango-spidy](https://github.com/Elango-spidy)
- LinkedIn: [elango-m-9b4b76310](https://www.linkedin.com/in/elango-m-9b4b76310/)
- Email: muruganelango2003@gmail.com
