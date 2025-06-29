# shadcn UI with Tailwind CSS v4 Implementation

This document outlines the changes made to implement shadcn UI with Tailwind CSS v4 in the account-admin-ui project.

## Installed Dependencies

The following packages were installed to support shadcn UI:

- `@radix-ui/react-icons`: Icons for shadcn UI components
- `@radix-ui/themes`: Theming system for shadcn UI
- `class-variance-authority`: For creating variant-based components
- `clsx`: Utility for conditionally joining classNames
- `tailwind-merge`: For merging Tailwind CSS classes
- `tailwind-variants`: For creating variants in Tailwind CSS
- `next-themes`: For theme switching (light/dark mode)
- `shadcn`: The CLI tool for adding shadcn UI components

## Configuration Files

### components.json

Added a `components.json` file to configure shadcn UI with the following settings:
- Style: Default
- RSC Support: Enabled
- TSX: Enabled
- Tailwind Config: `tailwind.config.mjs`
- CSS: `src/app/globals.css`
- Base Color: Slate
- CSS Variables: Enabled

### tailwind.config.mjs

Updated the Tailwind configuration to include shadcn UI's required theme settings including:
- Dark mode support with `class` strategy
- Custom colors for UI elements (primary, secondary, muted, etc.)
- Animation keyframes for components
- Border radius variables

### globals.css

Updated to include shadcn UI's CSS variables and theme definitions:
- Light and dark mode color schemes
- Base styles for elements
- Font configurations

## Components Added

Added the following shadcn UI components:
- Button
- Card
- Input
- Form
- Label

## Theme Implementation

Added theme support with:
- `ThemeProvider` in `layout.tsx` for app-wide theme context
- `ModeToggle` component for switching between light and dark modes

## Pages Updated

The following pages were updated to use shadcn UI components:
- Login Page
- Forgot Password Page
- Dashboard components

## Maintaining Tailwind CSS v4

The project is configured to use Tailwind CSS v4 through the package.json dependencies:
```json
"@tailwindcss/postcss": "^4",
"tailwindcss": "^4"
```

This ensures that the project will continue to use Tailwind CSS v4 even when updating other dependencies.
