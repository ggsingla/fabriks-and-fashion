# Fabriks & Fashion

A luxury fashion house website specializing in bespoke designs, sustainable fashion, and exceptional craftsmanship. Built with modern web technologies and a focus on performance, accessibility, and maintainability.

🌐 **Live Site**: [https://fabriks-and-fashion.vercel.app](https://fabriks-and-fashion.vercel.app)

## 🚀 Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (React-based framework)
- **Language**: TypeScript
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/)
  - Tailwind Typography
  - Tailwind Forms
  - Tailwind Aspect Ratio
- **Content Management**:
  - Markdown-based content system
  - Gray Matter for frontmatter parsing
  - Remark for Markdown processing
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) (`@phosphor-icons/react`)
- **Development Tools**:
  - ESLint
  - TypeScript
  - PostCSS
  - Autoprefixer

## 📚 Content Management

The project uses a Markdown-based content management system for easy content updates and maintenance:

- Content is stored in the `/content` directory as `.md` files
- Each service/feature has its own Markdown file with frontmatter metadata
- Content is processed using `gray-matter` and `remark` for HTML conversion
- The system allows for easy content updates without code changes

## 🎨 Design System

The project maintains a consistent and modern design system:

- **Typography**: Carefully selected font combinations for optimal readability
- **Color Scheme**: Elegant and sophisticated color palette
- **Layout**: Responsive design with consistent spacing and grid system
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle and purposeful animations for enhanced user experience

## 🛠️ Project Structure

```
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── content/         # Markdown content files
├── lib/            # Utility functions and helpers
├── public/         # Static assets
└── styles/         # Global styles and Tailwind configuration
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Run the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build and Deployment

To build the project for production:

```bash
yarn build
# or
npm run build
```

The project can be deployed on any platform that supports Next.js applications, with Vercel being the recommended platform.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
