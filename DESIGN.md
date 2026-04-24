# Portfolio Design Document

## Current Design Analysis (8/10)

### Module Structure

| Module | Purpose | Depth | Issues |
|--------|--------|-------|--------|
| Navigation | Fixed nav with scroll detection | Deep | Clean, minimal interfaces |
| Hero | Name intro + code window | Deep | Good abstraction |
| About | Personal narrative | Deep | Clear information hiding |
| Experience | Work history | Deep | Well-organized |
| Projects | Case studies | Deep (for each project) | Could merge similar structure |
| Skills | Tech grid | Shallow | Simple display, minimal interface |
| Contact | Links | Deep | Simple interface |
| Footer | Social links | Deep | Minimal |

### Complexity Analysis

**Positive (low complexity):**
- Each section is self-contained
- Clear information hiding between sections
- Consistent props structure (isInView, ref, motion)
- No cross-section dependencies
- Data is well-encapsulated in each component

**Issues Identified:**

1. **Cognitive Load**: Dev must understand Framer Motion patterns for each section
2. **Unknown Unknowns**: Code window behavior (typing animation) not obvious
3. **Shallow Module**: Skills section is minimal - just displays badges

### Design Scores

| Principle | Score | Issue |
|-----------|-------|-------|
| Deep Modules | 8/10 | Skills is shallow, rest are deep |
| Information Hiding | 9/10 | Colors leaking into component props |
| General-Purpose | 9/10 | Components are appropriately specific |
| Comments | 6/10 | No interface comments explaining design |
| Strategic | 7/10 | Some inconsistency in motion configs |

---

## Proposed Improvements

### 1. Extract Shared Motion Config (Information Hiding)

```typescript
// lib/motion-config.ts (NEW)
export const motionConfig = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
  stagger: 0.15,
}
```

### 2. Add Design Comments (Comments as Documentation)

```typescript
/**
 * Hero section with animated introduction.
 * 
 * Design: Minimal interface, deep implementation hiding
 * the code window typing animation complexity.
 * 
 * @Complexity: Change amplification avoided through
 * single source of truth for time display.
 */
```

### 3. Improve Skills Section (Make Deeper)

Current: Just badges
Proposed: Group by domain with descriptions

### 4. Interactive Project Preview (Strategic Investment)

Add hover/interaction to project cards rather than just links.

---

## Implementation Priority

| Priority | Change | Impact |
|----------|--------|--------|
| P0 | Fix colors consistency | Visual |
| P1 | Add motion config | Maintainability |
| P2 | Interactive elements | Engagement |
| P3 | Skills enhancement | Depth |

---

## Design Review Checklist

- [x] Can describe each module in one sentence?
- [x] Are interfaces simpler than implementations?
- [x] Can change implementation without affecting callers?
- [ ] Do interface comments exist?
- [x] Is design discussion part of development?

---

*Based on "A Philosophy of Software Design" framework*