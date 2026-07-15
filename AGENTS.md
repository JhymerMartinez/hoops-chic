# AGENTS.md

# Hoops Chic

## Project Overview

Hoops Chic is a premium handmade jewelry brand focused on creating elegant, timeless, and meaningful accessories.

The first version of this project is **not** a traditional e-commerce website. Instead, it is a high-quality online catalog where customers can browse products and place orders through WhatsApp.

The long-term vision is to evolve the website into a complete e-commerce platform.

---

# Project Goals

The website should:

- Showcase Hoops Chic as a premium jewelry brand.
- Increase trust and credibility.
- Encourage visitors to contact the brand through WhatsApp.
- Provide an excellent browsing experience on mobile devices.
- Be highly performant.
- Be SEO friendly.
- Be easy to extend as the business grows.

The website should feel closer to brands like Mejuri, Pandora, or Ana Luisa than to a generic Shopify template.

---

# Target Audience

Primary audience:

- Women between 18–45 years old.
- Looking for elegant handmade accessories.
- Interested in gifts.
- Active on Instagram.
- Mobile-first users.

---

# Brand Personality

The UI should communicate:

- Elegant
- Premium
- Minimal
- Handmade
- Warm
- Modern
- Trustworthy

Avoid:

- Loud colors
- Excessive gradients
- Flashy animations
- Cluttered layouts

Whitespace is part of the design.

---

# Tech Stack

## Framework

- Next.js (App Router)
- React
- TypeScript

## Styling

- Tailwind CSS v4
- CSS Variables
- Responsive-first approach

## Components

- shadcn/ui
- Radix UI
- Lucide Icons

## Animation

- Framer Motion

Animations should be subtle.

Examples:

- Fade
- Slide
- Scale
- Reveal

Avoid excessive animations.

---

# Code Quality

Always prioritize:

- Readability
- Reusability
- Accessibility
- Type safety
- Maintainability

Never duplicate components unnecessarily.

Prefer composition over large components.

---

# Folder Structure

Preferred structure:

src/

    app/
    components/
        ui/
        layout/
        sections/
        products/
    hooks/
    lib/
    types/
    utils/
    data/
    styles/

public/

    logo/
    images/
    products/

content/

docs/

---

# Design System

Typography:

- Playfair Display (Headings)
- Poppins (Body)

Color palette:

- White
- Ivory
- Beige
- Dark Gray
- Gold accents

The exact palette can evolve according to the Hoops Chic logo.

---

# MVP Scope

## Included

- Home page
- Shop page
- Product Details
- Collections
- About Us
- Gift Guide
- Gallery
- Reviews
- FAQ
- Contact

Features:

- Product search
- Category filters
- WhatsApp ordering
- Instagram integration
- Responsive design
- SEO optimization
- Fast loading
- Static product catalog

---

## Not Included Yet

The following features are intentionally postponed.

- Shopping cart
- Checkout
- User accounts
- Payments
- Inventory management
- Order history
- Admin dashboard

Agents should NOT implement these unless explicitly requested.

---

# Product Catalog

Initially products will come from local static data.

Possible formats:

- JSON
- TypeScript objects

Later this may migrate to:

- CMS
- Database
- Headless commerce platform

Code should make this migration easy.

---

# Assets

Available assets include:

- Brand logo
- Product catalog
- Product images

Agents should always reuse existing assets before creating placeholders.

---

# SEO

Every page should include:

- Metadata
- OpenGraph
- Twitter Cards
- Semantic HTML
- Structured headings

Performance is important.

---

# Accessibility

Follow WCAG best practices.

Use:

- Semantic HTML
- Keyboard navigation
- Proper contrast
- Labels
- ARIA only when necessary

---

# Performance

Optimize for:

- Lighthouse 95+
- Lazy loading
- Next.js Image
- Minimal JavaScript
- Server Components whenever possible

---

# Responsive Design

Mobile-first.

Support:

- Mobile
- Tablet
- Desktop

Layouts should never rely on desktop assumptions.

---

# Future Roadmap

Phase 1

Catalog Website

- Product pages
- WhatsApp ordering
- SEO

Phase 2

Shopping

- Cart
- Checkout
- Payments

Phase 3

Customer Experience

- Wishlist
- Accounts
- Loyalty Program

Phase 4

Business

- CMS
- Admin
- Analytics
- Inventory

---

# Development Principles

When making decisions, prioritize:

1. User Experience
2. Performance
3. Accessibility
4. Maintainability
5. Scalability

---

# Agent Instructions

When implementing features:

- Reuse existing components.
- Avoid premature abstraction.
- Keep components focused.
- Prefer Server Components unless client-side state is required.
- Use TypeScript strictly.
- Avoid using `any`.
- Keep styling inside Tailwind whenever possible.
- Document non-obvious decisions.
- Ask before introducing new dependencies.

Always assume this project is intended to become a production-quality application.

---

# Definition of Done

A task is complete only if:

- Code builds successfully.
- TypeScript has no errors.
- ESLint passes.
- Responsive behavior verified.
- Accessibility considered.
- Components are reusable.
- No obvious performance regressions.
