---
name: Intelligence Workspace
description: A premium, precise, and interactive showcase for an AI Engineer.
colors:
  primary: "#0055FF"
  primary-hover: "#0044CC"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F8F9FA"
  text-primary: "#000000"
  text-secondary: "#4A4A4A"
  text-muted: "#A0A0A0"
  border: "rgba(0, 0, 0, 0.08)"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(3rem, 10vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "rgba(0, 0, 0, 0.05)"
    textColor: "#000000"
    rounded: "{rounded.full}"
    padding: "16px 32px"
  glass-card:
    backgroundColor: "rgba(255, 255, 255, 0.85)"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Intelligence Workspace

## 1. Overview

**Creative North Star: "The Clinical Innovation Hub"**

The Intelligence Workspace is a visual system designed to feel like a high-performance personal engineering environment. It utilizes a clean, high-contrast light theme to project authority, clarity, and technical precision. The interface uses pure whites and a vibrant innovation blue accent to create a professional yet cutting-edge atmosphere.

Aesthetic Philosophy: Refined, Efficient, and Professional. The system takes cues from high-end innovation platforms (Hackculture) and clinical laboratory aesthetics.

**Key Characteristics:**
- **Innovation Focus**: Centered layouts with high-impact bold typography.
- **Modern Minimalism**: Clean white surfaces with a strict 4pt grid and intentional whitespace.
- **Refined Interactivity**: Motion and interaction are used to prove engineering competence.

## 2. Colors

The palette is professional and high-contrast, using blue to draw attention to high-value actions.

### Primary
- **Innovation Blue** (#0055FF): Used for high-impact CTAs, highlights, and status indicators. It represents high-tech innovation and precision.

### Neutral
- **Pure White** (#FFFFFF): The base surface. A clean, focused background for maximum clarity.
- **Surface Elevation** (#F8F9FA): Used for containers to create depth through tonal layering.
- **Primary Text** (#000000): High-signal communication.
- **Secondary Text** (#4A4A4A): Supporting details and descriptions.

### Named Rules
**The Focus Rule.** Accent color is restricted to functional elements and key highlights (≤10% weight). It should act as a beacon for the visitor's eye.

## 3. Typography

The system uses Inter for its versatility and precision across all roles.

**Display Font:** Inter
**Body Font:** Inter
**Label Font:** Inter

**Character:** Modern, clean, and clinical. Strong weight contrast and tight tracking create a technical yet accessible feel.

### Hierarchy
- **Display** (500, 6rem, 0.95): Used for the personal name and main hero headers.
- **Headline** (500, 2.5rem, 1.2): Section titles.
- **Title** (500, 1.25rem, 1.4): Card and item headings.
- **Body** (300, 1rem, 1.6): Narrative and descriptions.
- **Label** (400, 0.75rem, 0.1em tracking): Metadata and small indicators.

## 4. Elevation

The system is flat-by-default, using tonal layering and backdrop blurs to establish hierarchy.

### Named Rules
**The Tonal Stack Rule.** Higher elevation elements are represented by lighter surfaces and backdrop blurs. No generic box-shadows are used for structural layout.

## 5. Components

### Buttons
- **Primary**: Solid black background, pill-shaped. Maximum contrast for conversion.
- **Secondary**: Light gray background with 1px border. Used for profile links and secondary actions.

### Cards
- **Style**: Semi-transparent white surface (#FFFFFF at 0.85 opacity) with 12px corner radius.
- **Interaction**: Hover increases border brightness and adds subtle depth.

### Interactive Elements
- **Code Window**: Centrally integrated to show actual implementation work.
- **AI Console**: A personal tool for direct engagement with Charan's engineering philosophy.

## 6. Do's and Don'ts

### Do:
- **Do** prioritize the personal name in the Hero section.
- **Do** use fluid `clamp()` for responsive typography.
- **Do** maintain a clean, organized "workspace" feel.

### Don't:
- **Don't** refer to the site as a "Laboratory."
- **Don't** use overly abstract instrument metaphors.
- **Don't** sacrifice readability for "experimental" effects.
