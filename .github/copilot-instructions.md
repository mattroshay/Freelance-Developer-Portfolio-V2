# Copilot Instructions for Freelance Developer Portfolio V2

## Project Overview

This is a freelance developer portfolio website built with React, TypeScript, and Vite. It showcases professional work, skills, and contact information.

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (via index.css)
- **UI Components**: Radix UI primitives
- **Internationalization**: i18next
- **Animation**: Motion library

## Development Guidelines

### Code Style

- Use functional components with React hooks
- Prefer TypeScript interfaces over types where appropriate
- Use explicit return types for functions
- Follow the existing naming conventions (PascalCase for components, camelCase for functions/variables)
- Keep components small and focused on a single responsibility

### Component Structure

- Place UI components in `src/components/ui/`
- Place page-level components in `src/components/`
- Use the existing component patterns (e.g., Header, Hero, About, Skills, Projects, Contact, Footer)
- Import UI components from `src/components/ui/` as needed

### Styling

- Use Tailwind CSS utility classes for styling
- Maintain responsive design principles
- Follow the existing design system patterns
- Use CSS variables and theme tokens where available
- Prefer flexbox and grid over absolute positioning

### File Organization

- Keep related files close together
- Use barrel exports (index.ts) where appropriate
- Place assets in `src/assets/`
- Place localization files in `src/locales/`

### Internationalization

- Use i18next for all user-facing text
- Add translation keys to appropriate locale files
- Support both English and French translations
- Use the existing i18n patterns in the codebase

### Build & Development

- Use `npm run dev` for local development (runs on port 3000)
- Use `npm run build` to create production builds
- Build output goes to the `build/` directory
- Ensure code builds successfully before committing

### Best Practices

- Maintain accessibility standards (use semantic HTML, ARIA attributes)
- Optimize images and assets for web
- Keep bundle size reasonable
- Test responsive layouts across different screen sizes
- Follow React best practices (avoid prop drilling, use context when needed)
- Leverage Radix UI components for complex UI interactions

### Git Workflow

- Do not commit `node_modules/` or `build/` directories
- Keep commits focused and descriptive
- Test builds before pushing changes

## Component Patterns

When creating new components:

1. Start with a functional component
2. Add TypeScript props interface
3. Use Tailwind CSS for styling
4. Ensure responsive design
5. Add proper accessibility attributes
6. Consider internationalization needs

## Common Tasks

### Adding a New Section

1. Create component in `src/components/`
2. Add translations to locale files
3. Import and add to `App.tsx`
4. Style using Tailwind CSS
5. Test responsive behavior

### Adding a New UI Component

1. Create in `src/components/ui/`
2. Follow Radix UI patterns if applicable
3. Ensure TypeScript types are properly defined
4. Make it reusable and composable

### Updating Styles

1. Use existing Tailwind classes
2. Check `src/index.css` for global styles
3. Maintain consistency with existing design
4. Test in light and dark modes if theme switching exists

## Additional Notes

- The project uses Vite's path aliases (`@` points to `src/`)
- SWC is used for faster TypeScript compilation
- The project is optimized for modern browsers (target: esnext)
