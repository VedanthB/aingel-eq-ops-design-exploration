# AINGEL EQ-Ops - Official Brand Specification

**Source**: AINGEL Brand Book (044bureau)

---

## Brand Pillars

**CLEAN | FUTURISTIC | INTELLIGENT | ASPIRATIONAL | TECHNOLOGICAL | PREMIUM**

---

## Tone of Voice

| Spectrum | Position |
|----------|----------|
| Formal ←→ Casual | **Slightly Formal** |
| Playful ←→ Serious | **Leaning Serious** |
| Expressive ←→ Calm | **Balanced (center-calm)** |
| Friendly ←→ Assertive | **Slightly Assertive** |

---

## Color Palette (EXACT)

### Primary Colors

| Name | HEX | RGB | Usage |
|------|-----|-----|-------|
| **Cultured** | `#F7F7F8` | 247, 247, 248 | Light backgrounds, primary text on dark |
| **Noir Essence** | `#161719` | 22, 23, 25 | Dark backgrounds, primary dark color |
| **Frosted Steel** | `#A5ADB8` | 165, 173, 184 | Secondary text, muted elements |
| **Terra** | `#948A86` | 148, 138, 134 | Warm neutral accents |
| **Human Touch** | `#DED9D7` | 222, 217, 215 | Soft backgrounds, card surfaces |

### Accent Gradient (Aura)

| Position | HEX |
|----------|-----|
| Start | `#C7918A` (warm coral/pink) |
| End | `#A68A98` (muted mauve) |

### Print (CMYK)

| Color | CMYK |
|-------|------|
| Rich Black | 40, 40, 40, 100 |
| White | 0, 0, 0, 0 |

---

## Typography

### Font Family

**Outfit** (Google Fonts) - Geometric sans-serif with modern, clean lines

### Type Hierarchy

| Level | Specs |
|-------|-------|
| **Follow Headline** | Outfit Light (300), Size: Lead × 0.8, Leading: size × 1.15, **ALL CAPS**, Tracking: **15%** |
| **Lead Headline** | Outfit Regular (400), Leading: size × 1.15, **ALL CAPS**, Tracking: **5%** |
| **Body Copy** | Outfit Light (300), Size: Lead × 0.56, Leading: size × 1.3, Sentence case, Tracking: **5%** |

### CSS Implementation

```css
/* Follow Headline */
.follow-headline {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.15;
}

/* Lead Headline */
.lead-headline {
  font-family: 'Outfit', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.15;
}

/* Body Copy */
.body-copy {
  font-family: 'Outfit', sans-serif;
  font-weight: 300;
  letter-spacing: 0.05em;
  line-height: 1.3;
}
```

---

## Design Elements

### 1. Frosted Glass (Ethereal Layer)

- Blurred glass effect
- Creates visual metaphor for "invisible layers of connection"
- Use for cards, overlays, modal backgrounds
- Semi-transparent with backdrop blur

```css
.frosted-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### 2. Halftone Pattern

- Gradient-like dot texture
- Symbolizes intersection of technology and emotion
- Use as subtle background texture
- Can be static or animated

```css
.halftone-pattern {
  background-image: radial-gradient(circle, #A5ADB8 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0.3;
}
```

### 3. Light Bleaks & Scale Lines

- Halo/glow effect symbolizing warmth and connection
- Thin scale lines for structure and precision
- Use soft, diffused glows (not harsh)
- Position in corners or as accent behind elements

```css
.light-bleak {
  background: radial-gradient(
    ellipse at 30% 20%,
    rgba(199, 145, 138, 0.15) 0%,
    transparent 50%
  );
}
```

### 4. Logo Usage

- **Clear space**: Minimum 0.5× text height around logo
- **Preferred backgrounds**: Solid brand colors, clean backgrounds
- **Avoid**: Saturated backgrounds, busy patterns
- **Full opacity only**: Never alter transparency

---

## Imagery Style

- Blend of contrasts: soft/blurred + high-contrast/structured
- Motion blur and double exposure for ethereal quality
- Muted, understated color palette
- Subtle gradients
- Interplay of light, shadow, and contrast
- Human-centric warmth balanced with tech sophistication

---

## Application to EQ-Ops Dashboard

### Dark Theme (Primary)

```css
:root {
  --bg-primary: #161719;      /* Noir Essence */
  --bg-secondary: #1e1f21;    /* Slightly lighter noir */
  --bg-card: #242527;         /* Card backgrounds */

  --text-primary: #F7F7F8;    /* Cultured */
  --text-secondary: #A5ADB8;  /* Frosted Steel */
  --text-warm: #948A86;       /* Terra */

  --accent-primary: #C7918A;  /* Aura start */
  --accent-secondary: #A68A98; /* Aura end */

  --surface: #DED9D7;         /* Human Touch - for light elements */

  /* Gradient */
  --aura-gradient: linear-gradient(135deg, #C7918A 0%, #A68A98 100%);
}
```

### Status Colors (Dashboard-specific)

```css
:root {
  --status-critical: #E54D4D;
  --status-warning: #E5A84D;
  --status-success: #4ADE80;
  --status-info: #60A5FA;
  --status-review: #8B7355;
}
```

### Border Radius

- **Standard**: 8px (consistent across all components)
- **Small (pills/badges)**: 4px or 20px (full round)
- **Large (modals/cards)**: 12px

### Shadows

```css
/* Subtle card shadow */
.card-shadow {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

/* Glow effect (for CTAs, active states) */
.coral-glow {
  box-shadow: 0 0 20px rgba(199, 145, 138, 0.3);
}
```

---

## Logo for Dashboard

Use the **text-only logo** "A I N G E L" with letter spacing for the sidebar header.

For app icons/favicons, use the **logo mark** (sphere with orbital lines).

---

*Extracted from: AINGEL Brand Guidelines by 044bureau*
