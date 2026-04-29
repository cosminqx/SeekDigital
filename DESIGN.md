# SEEK DIGITAL — DESIGN SYSTEM
### *Visual Language v1.0*

---

> We don't make things pretty. We make them feel like something.

---

## The Feeling We're After

Think the opening credits of an A24 film — that moment before anything happens, when you already feel the weight of the world you're about to enter. Think *Euphoria*'s color palette: neon bruising through dark skin, light refracted through something wet. Think glass at night. Think the blue hour. Think a city you've never been to but recognize immediately.

SEEK Digital is not a corporate agency. We're four people who care too much about craft. Our visual identity should feel like we built it for ourselves first — then realized it was exactly what our clients needed.

---

## 01 — COLOR SYSTEM

### Base Palette

```
--seek-void         #050507    /* true black — the canvas */
--seek-depth        #0D0D14    /* background surfaces */
--seek-surface      #12121C    /* elevated cards */
--seek-glass        #1A1A2E    /* glass panels */
--seek-border       rgba(255, 255, 255, 0.06)  /* subtle dividers */
```

### Neon / Signal Colors

```
--seek-violet       #7C3AED    /* primary signal — electric, not purple */
--seek-violet-glow  #9F67FF    /* hover states, active elements */
--seek-electric     #4F46E5    /* secondary — deep indigo */
--seek-plasma       #C084FC    /* accent — soft lilac for contrast text */
--seek-ember        #F472B6    /* warm accent — sparingly, emotionally */
--seek-ice          #67E8F9    /* data, technical details */
```

### Text

```
--text-primary      #F1F0FF    /* near-white, slightly blue-tinted */
--text-secondary    #A09EBF    /* muted — labels, secondary info */
--text-ghost        #4A4870    /* placeholder, disabled */
--text-neon         #C084FC    /* highlighted phrases, pull quotes */
```

### Glass / Morphoglass Variables

```
--glass-bg          rgba(255, 255, 255, 0.04)
--glass-bg-hover    rgba(255, 255, 255, 0.07)
--glass-border      rgba(255, 255, 255, 0.08)
--glass-border-glow rgba(124, 58, 237, 0.3)
--glass-blur        blur(20px) saturate(180%)
--glass-blur-heavy  blur(40px) saturate(200%)
```

### Gradient Signatures

```css
/* Hero background — the "deep field" gradient */
.seek-gradient-bg {
  background: radial-gradient(ellipse at 20% 50%, #1e0b3e 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, #0f0a2e 0%, transparent 50%),
              #050507;
}

/* Card accent — top edge glow */
.seek-gradient-edge {
  background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, transparent 60%);
}

/* Text gradient — for headlines */
.seek-gradient-text {
  background: linear-gradient(135deg, #F1F0FF 0%, #C084FC 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glow orb — decorative background element */
.seek-orb {
  background: radial-gradient(circle, rgba(124, 58, 237, 0.3) 0%, transparent 70%);
  filter: blur(80px);
}
```

---

## 02 — TYPOGRAPHY

### Typeface Selection

**Display / Headlines:** `Syne` (Google Fonts)
— Geometric, contemporary, slightly aggressive. Not a corporate font.

**Body / UI:** `Inter` (variable)
— Clean, readable, unobtrusive.

**Monospace / Code / Data:** `JetBrains Mono`
— Technical credibility without trying too hard.

**Accent / Pull Quotes:** `Fraunces` (optical size variable)
— Expressive serif for editorial moments. Use sparingly.

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Fraunces:ital,opsz,wght@1,9..144,300;1,9..144,700&display=swap');
```

### Type Scale

```
--text-xs     0.75rem   / 12px  — labels, captions
--text-sm     0.875rem  / 14px  — secondary body
--text-base   1rem      / 16px  — body text
--text-lg     1.125rem  / 18px  — lead text
--text-xl     1.25rem   / 20px  — card titles
--text-2xl    1.5rem    / 24px  — section headings
--text-3xl    1.875rem  / 30px  — sub-headlines
--text-4xl    2.25rem   / 36px  — headlines
--text-5xl    3rem      / 48px  — hero titles
--text-7xl    4.5rem    / 72px  — display / statement text
```

### Typography Rules

- **Headlines (Syne 700–800):** tight letter-spacing (`-0.02em` to `-0.04em`), leading 1.1. Let them breathe vertically, not horizontally.
- **Body (Inter 400):** line-height 1.6–1.7. Comfortable for reading, not cramped.
- **Pull quotes (Fraunces italic):** oversized (3xl+), `--text-neon` or `--text-plasma` color. One per section maximum.
- **Data / metrics (JetBrains Mono):** used for numbers, stats, code snippets. Creates a "proof" feeling.
- **Never** all-caps for body text. Occasional all-caps in `--text-xs` for labels only.
- **Avoid** decorative fonts beyond what's listed. The restraint is the aesthetic.

---

## 03 — MORPHOGLASS COMPONENTS

The signature visual language of SEEK Digital. Glass that feels like it's floating, not bolted on.

### Base Glass Card

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
}

/* Top-edge glow — the "halo" effect */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.6), transparent);
}

/* Hover state */
.glass-card:hover {
  background: var(--glass-bg-hover);
  border-color: var(--glass-border-glow);
  transform: translateY(-2px);
  box-shadow: 0 20px 60px rgba(124, 58, 237, 0.1), 0 0 0 1px rgba(124, 58, 237, 0.15);
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Glass Variants

```css
/* Frosted — heavier blur for modals, overlays */
.glass-frosted {
  background: rgba(13, 13, 20, 0.8);
  backdrop-filter: var(--glass-blur-heavy);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Prismatic — subtle rainbow edge on interaction */
.glass-prismatic::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(124,58,237,0.4), rgba(79,70,229,0.2), rgba(192,132,252,0.3));
  z-index: -1;
}

/* Signal — for high-priority cards (pricing, CTAs) */
.glass-signal {
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.25);
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.08) inset;
}
```

---

## 04 — DEPTH & SHADOW

Never flat. Never cartoonish. Shadows are light that didn't make it through.

```css
--shadow-none:     none;
--shadow-sm:       0 2px 8px rgba(0, 0, 0, 0.4);
--shadow-md:       0 4px 24px rgba(0, 0, 0, 0.5), 0 1px 4px rgba(0, 0, 0, 0.3);
--shadow-lg:       0 12px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.04);
--shadow-glow:     0 0 30px rgba(124, 58, 237, 0.3), 0 0 80px rgba(124, 58, 237, 0.1);
--shadow-text-glow: 0 0 20px rgba(192, 132, 252, 0.5);
```

---

## 05 — MOTION & ANIMATION

Slow enough to feel intentional. Fast enough to not get in the way.

### Timing

```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out:     cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);

--duration-fast:   150ms;
--duration-base:   250ms;
--duration-slow:   400ms;
--duration-drift:  700ms;
```

### Motion Principles

- **Entrance:** elements fade in + translate up `16px`. Nothing pops in from nowhere.
- **Hover:** `translateY(-2px)` + shadow deepens. Feels physical.
- **Focus states:** border glow expands, no jump or scale.
- **Background orbs:** very slow drift (`20–40s` loops), `opacity: 0.15–0.3`. Ambient, not distracting.
- **No bounce** (except micro-interactions like button press feedback).
- **Parallax:** subtle, `0.1–0.2` factor. Depth without performance.

### Key Animations

```css
@keyframes float-orb {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.05); }
  66%       { transform: translate(-20px, 15px) scale(0.97); }
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(24px); filter: blur(4px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}

@keyframes shimmer-edge {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}
```

---

## 06 — LAYOUT & SPACING

### Grid

```
Max container width:  1280px
Content width:        1024px (text-heavy sections)
Gutter:               24px (mobile) / 40px (desktop)
Column grid:          12-column, 24px gaps
```

### Spacing Scale

```
--space-1    4px     --space-8    32px
--space-2    8px     --space-10   40px
--space-3    12px    --space-12   48px
--space-4    16px    --space-16   64px
--space-6    24px    --space-20   80px
                     --space-32   128px
```

### Section Rhythm

- Hero: `padding: 160px 0 120px` — room to breathe.
- Section gap: `80–120px` vertical. Sections feel like chapters, not slides.
- Card padding: `32px` default, `24px` on smaller variants.
- Dark space is active. It creates tension. Don't fill it.

---

## 07 — ICONOGRAPHY & VISUAL ELEMENTS

### Icons

Use **Phosphor Icons** — regular weight default, bold on hover/active. No emoji in UI. No mixed icon sets.

Sizes: `16px` inline / `20px` UI / `24px` feature cards / `32px+` decorative.

### Decorative Elements

**Noise texture:** SVG film-grain overlay at `opacity: 0.025–0.04`. Adds tactility.

**Bleed edges:** Let gradients and orbs bleed beyond containers. Nothing should feel boxed in.

**Accent lines:** `1px` horizontal rules in `--glass-border-glow`. Section separators, not decoration.

**Scan lines (optional):** On hero sections only. Subtle horizontal lines at `0.02` opacity.

---

## 08 — PHOTOGRAPHY & IMAGERY

### Direction

- Dark, moody, high-contrast. Neon reflections welcome. Rain-wet surfaces. Screen glow.
- People: real expressions, not stock smiles. Imperfect is authentic.
- Tech: close-up details — keyboards, cables, screens — not the full setup.

### Color Grading

- Shadows: pull toward violet/blue (`#0D0A1E`)
- Highlights: slightly cyan/neutral — avoid warm yellow
- Midtones: slight desaturation, slight blue push
- Clarity: elevated — details crisp in shadows

### Don't

- No white backgrounds in photography
- No corporate handshake imagery
- No generic dashboard screenshots from stock
- No bright daytime exteriors unless treated to match palette

---

## 09 — COMPONENT PATTERNS

### Buttons

```css
/* Primary */
.btn-primary {
  background: var(--seek-violet);
  color: var(--text-primary);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid rgba(124, 58, 237, 0.4);
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.2);
  transition: all 250ms var(--ease-out-expo);
}
.btn-primary:hover {
  background: var(--seek-violet-glow);
  box-shadow: 0 0 40px rgba(124, 58, 237, 0.4);
  transform: translateY(-1px);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--glass-border);
  padding: 12px 28px;
  border-radius: 8px;
}
.btn-ghost:hover {
  border-color: rgba(124, 58, 237, 0.4);
  color: var(--text-primary);
  background: var(--glass-bg);
}
```

### Tags / Labels

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.2);
  border-radius: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--seek-plasma);
  letter-spacing: 0.05em;
}
```

### Metric / Stat Display

```css
.metric {
  font-family: 'Syne', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #F1F0FF 0%, #C084FC 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.metric-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-secondary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}
```

### Section Heading Pattern

```html
<!-- Always: small tag → headline → subline -->
<div class="section-header">
  <span class="tag">← Servicii</span>
  <h2 class="headline">Ce construim<br/><em>împreună</em></h2>
  <p class="subline">Livrăm concret. Fără jargon.</p>
</div>
```

---

## 10 — VOICE & TONE (visual expression of copy)

This is a design system, not a copywriting guide — but how copy looks matters.

- **Headlines:** Short. Declarative. Sometimes incomplete sentences. Let silence do work.
- **Italics:** Used for emphasis, not decoration. Fraunces italic for pull quotes only.
- **Numbers in JetBrains Mono:** Gives data a "proof" texture — `30 de zile. 50% returnare. Niciun contract.`
- **Romanian:** Should feel natural and direct — not translated from corporate English.
- **No exclamation marks** in headlines. Confidence doesn't shout.
- **Line breaks in headlines are intentional** — where the line breaks, the thought pivots.

---

## 11 — WHAT TO AVOID

| Don't | Because |
|---|---|
| Rainbow gradient buttons | Looks like 2021 NFT culture, not us |
| Pure white backgrounds | Breaks the dark-first world we're building |
| Helvetica or system-default sans | No personality |
| 8+ active colors on one screen | The restraint is the aesthetic |
| Particle animations | Overused, performance-heavy, distracting |
| Auto-play video backgrounds | Heavy and inaccessible |
| Anything that pulses without reason | Motion should mean something |
| Stock photos of people at laptops in cafés | Our clients know what that looks like |
| "We are a full-service agency" hero copy | We're not. Don't say things we're not. |

---

## 12 — BRAND VOICE IN ONE IMAGE

Picture this:

A restaurant owner in Iași opens Instagram at 11pm after a long shift. Their phone screen is the only light in the room. They see a SEEK Digital post — not a flyer, not a banner — something that actually stopped their thumb. Something that felt like it understood them.

That's the feeling we're designing toward. Every pixel, every line-height, every transition duration — it's in service of that moment.

---

*SEEK DIGITAL SRL — Lansare Iunie 2026*
*Design System v1.0 — intern, confidential*
