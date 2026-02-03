# AINGEL EQ-Ops: Super-Detailed Screen Prompts

**Purpose**: Use these prompts with Kimi K 2.5 or any AI design tool to generate brand-consistent UI mockups.

**CRITICAL**: Copy the Brand DNA section at the start of EVERY prompt to ensure consistency.

---

## 🎨 BRAND DNA (Include with EVERY prompt)

```
BRAND IDENTITY: AINGEL EQ-Ops - Customer Experience Intelligence Platform
BRAND PILLARS: CLEAN | FUTURISTIC | INTELLIGENT | ASPIRATIONAL | TECHNOLOGICAL | PREMIUM

COLORS:
- Background Primary: #161719 (Noir Essence - dark, almost black)
- Background Secondary: #1e1f21 (slightly lighter noir for cards)
- Accent Primary: #C7918A (Warm coral - for CTAs, active states, highlights)
- Accent Gradient: linear-gradient(135deg, #C7918A → #A68A98) (Aura gradient)
- Text Primary: #F7F7F8 (Cultured - almost white)
- Text Secondary: #A5ADB8 (Frosted Steel - muted gray-blue)
- Text Warm: #948A86 (Terra - warm neutral)
- Surface: #DED9D7 (Human Touch - for light elements)
- Status Critical: #E54D4D (Red)
- Status Warning: #E5A84D (Amber)
- Status Success: #4ADE80 (Green)

TYPOGRAPHY:
- Font Family: "Outfit" (Google Fonts) - NEVER use Inter, Roboto, or Arial
- Headings: Outfit Light (300 weight)
- Body: Outfit Regular (400 weight)
- Letter spacing: Slightly loose on headings (-0.01em to -0.02em)

DESIGN ELEMENTS:
- Corner Radius: 8px consistently on ALL components (cards, buttons, inputs)
- Glassmorphism: Frosted glass effects with backdrop-blur on cards
- Halftone Dots: Subtle dot patterns as decorative elements
- Light Bleaks: Soft coral glows in corners/edges
- Dark Theme: Always dark mode, premium feel
- Shadows: Soft, diffused shadows (no harsh edges)

LAYOUT PRINCIPLES:
- Left sidebar navigation (collapsible)
- Clean grid layouts with generous whitespace
- Cards with subtle borders (1px rgba(255,255,255,0.1))
- Status badges with rounded corners and colored backgrounds
```

---

## Screen 1: Business Health Dashboard

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA ABOVE FIRST]

SCREEN: Business Health Dashboard - Executive Overview
AUDIENCE: Business Owners, VPs, Executives
PURPOSE: Real-time view of how customer interactions impact revenue, brand, operations, and product

LAYOUT STRUCTURE:
┌─────────────────────────────────────────────────────────────────────┐
│ [Left Sidebar - 240px]        │  [Main Content Area]               │
│                                │                                     │
│  AINGEL logo (coral accent)    │  Header: "Business Health Dashboard"│
│                                │  Subtitle: "Real-time customer      │
│  Nav Items (vertical):         │           experience impact"        │
│  • Dashboard (active)          │  Last updated: "15 minutes ago"     │
│  • Analytics                   │                                     │
│  • Health                      │  ┌─────────────┐ ┌─────────────┐   │
│  • Settings                    │  │ REVENUE     │ │ BRAND       │   │
│  • Profile                     │  │ HEALTH      │ │ HEALTH      │   │
│                                │  │             │ │             │   │
│  [Bottom: Premium Plan badge]  │  │ $12,847     │ │ 72/100      │   │
│                                │  │ ▲ 23%       │ │ ▼ 5pts      │   │
│                                │  └─────────────┘ └─────────────┘   │
│                                │                                     │
│                                │  ┌─────────────┐ ┌─────────────┐   │
│                                │  │ SITE        │ │ PRODUCT     │   │
│                                │  │ HEALTH      │ │ HEALTH      │   │
│                                │  │             │ │             │   │
│                                │  │ 8 issues    │ │ 4 flagged   │   │
│                                │  │ ACTION REQ  │ │ REVIEW      │   │
│                                │  └─────────────┘ └─────────────┘   │
│                                │                                     │
│                                │  ┌───────────────────────────────┐ │
│                                │  │ CRITICAL ALERTS (Today)       │ │
│                                │  │ 🔴 2:34 PM - Churn risk...    │ │
│                                │  │ 🔴 1:15 PM - Brand damage...  │ │
│                                │  │ 🟡 11:42 AM - Checkout...     │ │
│                                │  └───────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘

SPECIFIC ELEMENTS:

1. HEALTH PILLAR CARDS (4 cards in 2x2 grid):
   Each card should have:
   - Status badge top-right (CRITICAL/WARNING/ACTION REQ/REVIEW)
   - Badge colors: Critical=#E54D4D, Warning=#E5A84D, Action=#C7918A, Review=#8B7355
   - Icon representing the pillar (use simple line icons)
   - Metric name in frosted-steel color (#A5ADB8)
   - Large metric value in white (#F7F7F8)
   - Trend indicator with arrow (▲ green for good, ▼ red for bad, or neutral)
   - Percentage change in small text
   - Card background: #1e1f21 with subtle glassmorphism
   - 8px border radius

2. REVENUE HEALTH CARD:
   - Icon: Dollar sign or chart
   - Label: "Revenue Health"
   - Value: "$12,847" (large, white)
   - Subtext: "At Risk" in coral (#C7918A)
   - Trend: "▲ 8.3% vs last week" in green
   - Status badge: "CRITICAL" in red

3. BRAND HEALTH CARD:
   - Icon: Shield or heart
   - Label: "Brand Health"
   - Value: "72/100" (large, white)
   - Subtext: "Score" in muted text
   - Trend: "▼ 3 pts drop" in coral/red
   - Status badge: "WARNING" in amber

4. SITE HEALTH CARD:
   - Icon: Globe or monitor
   - Label: "Site Health"
   - Value: "8" (large, white)
   - Subtext: "Critical Issues" in muted
   - Detail: "+2 New Issues" in coral
   - Status badge: "ACTION REQ" in coral

5. PRODUCT HEALTH CARD:
   - Icon: Box or tag
   - Label: "Product Health"
   - Value: "4" (large, white)
   - Subtext: "Products Flagged" in muted
   - Detail: "No change" in neutral
   - Status badge: "REVIEW" in warm brown

6. CRITICAL ALERTS TABLE:
   - Dark card background (#1e1f21)
   - Header: "Critical Alerts" with "View All History" link in coral
   - Columns: TIME | DESCRIPTION | STATUS | IMPACT
   - Each row should have:
     * Time in muted color
     * Description text (truncated if long)
     * Status pill (Active=green, Investigating=yellow, Resolved=blue)
     * Impact badge (HIGH=red, MEDIUM=orange, LOW=green)
   - Hover state: slightly lighter background

7. SIDEBAR:
   - Background: slightly darker than main (#121314)
   - AINGEL logo at top (stylized text or icon with coral accent)
   - Navigation items with icons
   - Active item: coral left border + coral icon + white text
   - Inactive items: muted icons + muted text
   - Bottom: "PREMIUM PLAN" badge with coral gradient background
   - Subtle separator lines between sections

8. HEADER AREA:
   - Page title "Business Health Dashboard" in Outfit Light, 24px
   - Subtitle "Real-time customer experience impact" in muted color
   - "Last updated: Just now" timestamp in small muted text
   - Right side: "Support" and "Documentation" links

VISUAL EFFECTS:
- Subtle light bleak (coral glow) in top-left corner of main content
- Very subtle halftone dot pattern as background texture
- Cards should have micro drop shadows
- Smooth transitions on hover states

RESOLUTION: 1440x900px (desktop)
```

---

## Screen 2: Conversations List

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Conversations List - Support Team View
AUDIENCE: QA Team, Support Agents
PURPOSE: Browse and filter all customer conversations with EQ scores and failure flags

LAYOUT STRUCTURE:
Same sidebar as Dashboard, but "Conversations" nav item is active.

MAIN CONTENT:

HEADER SECTION:
- Title: "Conversations" (24px, Outfit Light)
- Subtitle: "Review customer interactions and EQ scores"
- Right side: Search bar (rounded, dark background, coral border on focus)
- Filter buttons: "All" | "Flagged" | "Critical" | "Bot" | "Human"
- Date range picker

CONVERSATION TABLE:
┌────────────────────────────────────────────────────────────────────────┐
│ CUSTOMER        │ CHANNEL │ EQ SCORE │ FLAGS    │ STATUS   │ REVENUE  │
├────────────────────────────────────────────────────────────────────────┤
│ [Avatar] John D.│ 💬 Chat │ 0.75/4 🔴│ 3 flags  │ Critical │ $127     │
│ Order #4521     │ Bot→Human│          │ blame... │          │ at risk  │
├────────────────────────────────────────────────────────────────────────┤
│ [Avatar] Sarah M│ 📧 Email│ 2.8/4 🟡 │ 1 flag   │ Review   │ -        │
│ Refund request  │ Human   │          │ context..│          │          │
├────────────────────────────────────────────────────────────────────────┤
│ [Avatar] Mike T.│ 📞 Voice│ 3.9/4 🟢 │ -        │ Good     │ $89      │
│ Product inquiry │ Human   │          │          │          │ converted│
└────────────────────────────────────────────────────────────────────────┘

TABLE DESIGN DETAILS:

1. ROW STRUCTURE:
   - Left: Customer avatar (40px circle, generated or initials)
   - Customer name in white, order/topic in muted below
   - Channel icon + type (Chat/Email/Voice/Phone)
   - Agent type badge: "Bot" (blue), "Human" (green), "Bot→Human" (amber)

2. EQ SCORE DISPLAY:
   - Score as "X.X/4" format
   - Color-coded circle indicator:
     * 0-1.5: Red (#E54D4D) - Critical
     * 1.5-2.5: Amber (#E5A84D) - Warning
     * 2.5-3.5: Neutral (#A5ADB8)
     * 3.5-4.0: Green (#4ADE80) - Good
   - Show as pill/badge with background tint

3. FAILURE FLAGS COLUMN:
   - Number badge: "3 flags" in coral if flagged
   - Hover preview showing flag names: "blame_shift, repeated_deflection..."
   - Click to expand

4. STATUS COLUMN:
   - Status pills with backgrounds:
     * Critical: Red background, white text
     * Review: Amber background, dark text
     * Good: Green background, dark text
     * Resolved: Blue background

5. REVENUE COLUMN:
   - Dollar amount if order linked
   - "at risk" label in coral if flagged
   - "converted" in green if successful
   - "-" if no revenue data

6. ROW INTERACTIONS:
   - Hover: Row background lightens slightly (#242527)
   - Click: Navigate to conversation detail
   - Checkbox on left for bulk actions

PAGINATION:
- Bottom of table: "Showing 1-20 of 1,847 conversations"
- Page numbers with coral active state
- "Previous" / "Next" buttons

FILTERS SIDEBAR (Optional right panel):
- Date range
- EQ Score range slider
- Channel checkboxes
- Agent type checkboxes
- Failure flag multiselect

RESOLUTION: 1440x900px
```

---

## Screen 3: Conversation Detail

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Conversation Detail View
AUDIENCE: QA Team, Support Managers
PURPOSE: Deep-dive into a single conversation with full transcript, scoring breakdown, and remediation suggestions

LAYOUT: Three-column layout

┌──────────┬─────────────────────────────────┬──────────────────────┐
│ Sidebar  │  TRANSCRIPT (Center)            │  ANALYSIS (Right)    │
│          │                                  │                      │
│          │  Customer: John D.               │  EQ SCORE            │
│          │  Order #4521 | $127 | Chat       │  ┌────────────────┐  │
│          │                                  │  │    0.75/4      │  │
│          │  ┌────────────────────────────┐  │  │   CRITICAL     │  │
│          │  │ 👤 Customer - 2:34 PM      │  │  └────────────────┘  │
│          │  │ "Hi, where's my order?"    │  │                      │
│          │  └────────────────────────────┘  │  DIMENSION SCORES    │
│          │                                  │  ────────────────     │
│          │  ┌────────────────────────────┐  │  Tone: 1.5/4 ●●○○    │
│          │  │ 🤖 Bot - 2:34 PM           │  │  Proportionality:    │
│          │  │ "Hello! I'm Buddy Bot..."  │  │       1.0/4 ●○○○     │
│          │  │ [FLAGGED: blame_shift]     │  │  Intent: 0.5/4 ●○○○  │
│          │  └────────────────────────────┘  │  Resolution: 0/4 ○○○○│
│          │                                  │                      │
│          │  ... more messages ...           │  FAILURE FLAGS       │
│          │                                  │  ────────────────     │
│          │  ┌────────────────────────────┐  │  🚩 blame_shift      │
│          │  │ 👤 Customer - 2:41 PM      │  │  🚩 repeated_deflect │
│          │  │ "NEVER MIND. This is      │  │  🚩 cheerful_abandon │
│          │  │  HORRIBLE."               │  │  🚩 churn_signal     │
│          │  │ [ESCALATION DETECTED]      │  │                      │
│          │  └────────────────────────────┘  │  BUSINESS IMPACT     │
│          │                                  │  ────────────────     │
│          │  ┌────────────────────────────┐  │  💰 Revenue: $127    │
│          │  │ 🤖 Bot - 2:41 PM           │  │  👤 LTV: $847        │
│          │  │ "You got it! 😊"           │  │  ⚠️ Churn Risk: HIGH │
│          │  │ [FLAGGED: cheerful_aband]  │  │                      │
│          │  └────────────────────────────┘  │  SUGGESTED REWRITE   │
│          │                                  │  ────────────────     │
│          │                                  │  [Better response    │
│          │                                  │   card with          │
│          │                                  │   before/after]      │
│          │                                  │                      │
│          │                                  │  COACHING TIP        │
│          │                                  │  ────────────────     │
│          │                                  │  "When customer uses │
│          │                                  │   ALL CAPS, adjust   │
│          │                                  │   tone accordingly"  │
└──────────┴─────────────────────────────────┴──────────────────────┘

DESIGN DETAILS:

1. HEADER:
   - Back arrow to return to list
   - Customer name and avatar
   - Metadata: Order #, Revenue, Channel, Duration
   - Agent type badge (Bot/Human/Bot→Human)
   - Shopify icon if order linked

2. TRANSCRIPT PANEL (Center):
   - Chat bubble style messages
   - Customer messages: Left-aligned, darker background
   - Agent messages: Right-aligned, slightly lighter background
   - Timestamp on each message
   - Bot messages marked with 🤖 icon
   - Human messages marked with 👤 icon
   - FLAGGED messages have coral left border + flag label
   - Escalation points highlighted in amber

3. ANALYSIS PANEL (Right):
   - Sticky position (doesn't scroll with transcript)
   - EQ Score: Large number in circle, color-coded
   - "CRITICAL" severity badge below score
   - Dimension breakdown with visual bars:
     * Each dimension: Label, score, visual dots (filled/empty)
     * Use coral for filled dots on low scores

4. FAILURE FLAGS SECTION:
   - List of detected flags with 🚩 icons
   - Each flag is clickable to jump to that message
   - Flag names: blame_shift, repeated_deflection, etc.
   - Coral accent color

5. BUSINESS IMPACT SECTION:
   - Revenue at risk (from Shopify)
   - Customer LTV
   - Churn risk level (HIGH/MEDIUM/LOW)
   - Recovery recommended badge

6. SUGGESTED REWRITE CARD:
   - Split view: "Original" vs "Suggested"
   - Original in muted/faded style
   - Suggested in clean white with coral border
   - Copy button on suggested response

7. COACHING TIP:
   - Card with lightbulb icon
   - Actionable improvement advice
   - Warm, helpful tone

VISUAL EFFECTS:
- Smooth scroll in transcript panel
- Highlight animation when jumping to flagged message
- Subtle shadows on message bubbles

RESOLUTION: 1440x900px
```

---

## Screen 4: Alerts Center

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Alerts Center
AUDIENCE: CS Leaders, Support Managers
PURPOSE: Central hub for all proactive alerts with routing and management

LAYOUT:
┌─────────────────────────────────────────────────────────────────────┐
│ [Sidebar]  │  ALERTS CENTER                                         │
│            │  "Proactive alerts for critical customer issues"       │
│            │                                                         │
│            │  ALERT STATS (4 cards in row)                          │
│            │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│            │  │ ACTIVE │ │ TODAY  │ │ ROUTED │ │ RESOLVED│          │
│            │  │   12   │ │   47   │ │   35   │ │   892   │          │
│            │  └────────┘ └────────┘ └────────┘ └────────┘           │
│            │                                                         │
│            │  FILTER TABS: All | Churn Risk | Brand | Revenue | Site│
│            │                                                         │
│            │  ┌─────────────────────────────────────────────────┐   │
│            │  │ 🔴 CRITICAL | Churn Risk                        │   │
│            │  │ Customer: John D. | LTV: $847 | EQ: 0.8/4       │   │
│            │  │ "Rage-quit after 8 turns, threatened to leave"  │   │
│            │  │ Routed to: Sarah M. (Support Manager) | 2:34 PM │   │
│            │  │ [View Conversation] [Assign] [Resolve]          │   │
│            │  └─────────────────────────────────────────────────┘   │
│            │                                                         │
│            │  ┌─────────────────────────────────────────────────┐   │
│            │  │ 🔴 CRITICAL | Brand Damage                      │   │
│            │  │ Customer: Mike T. | "Posting on Twitter" threat │   │
│            │  │ Routed to: CX Director | 1:15 PM                │   │
│            │  │ [View] [Assign] [Resolve]                       │   │
│            │  └─────────────────────────────────────────────────┘   │
│            │                                                         │
│            │  ┌─────────────────────────────────────────────────┐   │
│            │  │ 🟡 WARNING | Site Issue Spike                   │   │
│            │  │ "Checkout timeout" - 14 mentions today          │   │
│            │  │ Routed to: Engineering | 11:42 AM               │   │
│            │  │ [View All] [Assign] [Acknowledge]               │   │
│            │  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘

ALERT CARD DESIGN:
- Left border color indicates severity (red/amber/green)
- Severity badge: "CRITICAL" or "WARNING"
- Alert type badge: Churn Risk, Brand Damage, Revenue, Site Issue, Product
- Customer info with avatar
- Key metrics inline (LTV, EQ Score, mention count)
- Description text (1-2 lines)
- Routing info: "Routed to: [Name] | [Time]"
- Action buttons: ghost style, coral on hover
- Timestamp in muted color

FILTER TABS:
- Horizontal pills
- Active tab: coral background
- Inactive: transparent with muted text
- Count badges on each tab

ALERT TYPES:
1. Churn Risk (🔴) - EQ < 1.5, abandonment
2. Brand Damage (🔴) - Social threats, explicit complaints
3. Revenue at Risk (🟡) - Pre-sale failures, high-value
4. Site Issue (🟡) - Technical problems spiking
5. Product Issue (🟡) - Quality complaints spiking
6. Escalation Needed (🔴) - Manager requested but not fulfilled
7. Exceptional Service (🟢) - EQ > 3.8, recognition queue

RESOLUTION: 1440x900px
```

---

## Screen 5: Demo - Side-by-Side Comparison

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Demo - Traditional QA vs AINGEL Comparison
AUDIENCE: Sales Prospects
PURPOSE: The killer demo slide showing the gap between traditional QA (94%) and AINGEL (0.75/4)

LAYOUT: Split screen comparison

┌─────────────────────────────────────────────────────────────────────┐
│                     TRADITIONAL QA vs AINGEL                        │
│          "Same conversation. Completely different verdict."         │
│                                                                      │
│  ┌─────────────────────────┐    ┌─────────────────────────┐         │
│  │                         │    │                         │         │
│  │    TRADITIONAL QA       │    │       AINGEL            │         │
│  │    Zendesk QA/Klaus     │    │       EQ-Ops            │         │
│  │                         │    │                         │         │
│  │        ┌─────┐          │    │        ┌─────┐          │         │
│  │        │ 94% │          │    │        │0.75 │          │         │
│  │        │  ✓  │          │    │        │ /4  │          │         │
│  │        └─────┘          │    │        │ ✗   │          │         │
│  │                         │    │        └─────┘          │         │
│  │  "High quality          │    │  "Critical failure,     │         │
│  │   interaction"          │    │   likely churn"         │         │
│  │                         │    │                         │         │
│  │  ────────────────       │    │  ────────────────        │         │
│  │  ✓ Greeting       Pass  │    │  Tone:        1.5/4 🔴  │         │
│  │  ✓ Empathy        Pass  │    │  Proportion:  1.0/4 🔴  │         │
│  │  ✓ Apology        Pass  │    │  Intent:      0.5/4 🔴  │         │
│  │  ✓ Professional   Pass  │    │  Resolution:  0/4   🔴  │         │
│  │  ✓ Grammar        Pass  │    │                         │         │
│  │                         │    │  FLAGS DETECTED:        │         │
│  │  Flags: 0               │    │  🚩 blame_shift         │         │
│  │  Business Impact: —     │    │  🚩 repeated_deflection │         │
│  │  Alert: None            │    │  🚩 cheerful_abandonment│         │
│  │                         │    │  🚩 churn_signal_ignored│         │
│  │                         │    │                         │         │
│  │                         │    │  BUSINESS IMPACT:       │         │
│  │                         │    │  💰 $127 revenue at risk│         │
│  │                         │    │  👤 $847 LTV customer   │         │
│  │                         │    │  ⚠️ ALERT: Churn risk   │         │
│  │                         │    │                         │         │
│  └─────────────────────────┘    └─────────────────────────┘         │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐ │
│  │                    THE CONVERSATION                            │ │
│  │  Customer asked for alternatives 3 times. Got none.            │ │
│  │  Said they'd buy more. Rage-quit. Bot said "You got it! 😊"   │ │
│  └────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│              "They measure compliance. We measure quality."         │
└─────────────────────────────────────────────────────────────────────┘

DESIGN DETAILS:

1. LEFT PANEL (Traditional QA):
   - Muted/faded styling (to de-emphasize)
   - Gray-ish background (#242527)
   - Large "94%" with green checkmark
   - Checklist of passed items (all green checks)
   - Empty "Flags: 0" and "Business Impact: —"
   - No alert section
   - Feels "blind" and incomplete

2. RIGHT PANEL (AINGEL):
   - Vibrant, highlighted styling
   - Subtle coral glow/border
   - Large "0.75/4" with red X
   - Four dimension scores with visual bars
   - All bars in red (low scores)
   - Failure flags list with 🚩 icons
   - Business impact section with real numbers
   - Alert badge: "CHURN RISK" in coral

3. BOTTOM SUMMARY:
   - Dark card with the story
   - Quote describing what happened
   - Impactful and memorable

4. TAGLINE:
   - "They measure compliance. We measure quality."
   - In Outfit Light, larger size
   - Centered at bottom

VISUAL EFFECTS:
- Subtle animation: AINGEL side "reveals" the hidden issues
- Coral glow around AINGEL panel
- Traditional side intentionally looks dated/boring
- AINGEL side looks modern and insightful

RESOLUTION: 1440x900px
```

---

## Screen 6: Agent Performance

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Agent Performance Dashboard
AUDIENCE: CS Leaders, Operations
PURPOSE: Compare human vs AI agent performance, identify patterns, and find quick wins

LAYOUT:
┌─────────────────────────────────────────────────────────────────────┐
│ [Sidebar]  │  AGENT PERFORMANCE                                     │
│            │  "Compare human and AI agent quality"                  │
│            │                                                         │
│            │  OVERVIEW CARDS (3 in row):                            │
│            │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐   │
│            │  │ AVG EQ SCORE │ │ BOT vs HUMAN │ │ TOP PATTERN  │   │
│            │  │    2.4/4     │ │  Bot: 1.8    │ │ Intent       │   │
│            │  │  ▲ 0.3 pts   │ │  Human: 2.9  │ │ Alignment    │   │
│            │  └──────────────┘ └──────────────┘ └──────────────┘   │
│            │                                                         │
│            │  ┌─────────────────────────────────────────────────┐   │
│            │  │ AGENT COMPARISON TABLE                          │   │
│            │  │ ─────────────────────────────────────────────   │   │
│            │  │ AGENT        │ TYPE │ AVG EQ │ CONVOS │ FLAGS  │   │
│            │  │ ─────────────────────────────────────────────   │   │
│            │  │ 🤖 Buddy Bot │ AI   │ 1.8/4  │ 1,247  │ 234    │   │
│            │  │ 👤 Sarah M.  │ Human│ 3.2/4  │ 312    │ 18     │   │
│            │  │ 👤 Mike T.   │ Human│ 2.9/4  │ 287    │ 31     │   │
│            │  │ 🤖 Support AI│ AI   │ 2.1/4  │ 892    │ 156    │   │
│            │  └─────────────────────────────────────────────────┘   │
│            │                                                         │
│            │  ┌─────────────────────┐ ┌─────────────────────┐       │
│            │  │ TOP FAILURE PATTERNS│ │ QUICK WINS          │       │
│            │  │ ─────────────────   │ │ ─────────────────    │       │
│            │  │ 1. Intent Alignment │ │ 1. Fix bot prompt   │       │
│            │  │    23% of failures  │ │    for escalations  │       │
│            │  │ 2. Tone Calibration │ │ 2. Add alternative  │       │
│            │  │    18% of failures  │ │    lookup methods   │       │
│            │  │ 3. Resolution Path  │ │ 3. Train humans on  │       │
│            │  │    15% of failures  │ │    implicit intent  │       │
│            │  └─────────────────────┘ └─────────────────────┘       │
└─────────────────────────────────────────────────────────────────────┘

DESIGN DETAILS:

1. AGENT TABLE:
   - Sort by any column
   - Agent avatar/icon (🤖 for AI, 👤 for human)
   - Type badge: "AI" in blue, "Human" in green
   - EQ Score with color coding
   - Conversation count
   - Flag count (coral if high)
   - Sparkline showing trend (optional)

2. FAILURE PATTERNS CARD:
   - Ranked list of most common issues
   - Percentage of total failures
   - Progress bar showing proportion
   - Click to filter conversations

3. QUICK WINS CARD:
   - Actionable recommendations
   - Numbered list
   - Specific, implementable suggestions
   - Each linked to relevant conversations

4. BOT VS HUMAN COMPARISON:
   - Side by side averages
   - Visual bar comparison
   - Gap highlighted

RESOLUTION: 1440x900px
```

---

## Screen 7: Settings

### Prompt for Kimi K 2.5

```
[PASTE BRAND DNA FIRST]

SCREEN: Settings Page
AUDIENCE: Admins, Account Owners
PURPOSE: Manage integrations, data sources, API access, and webhooks

LAYOUT:
┌─────────────────────────────────────────────────────────────────────┐
│ [Sidebar]  │  SETTINGS                                              │
│            │  "Manage integrations, alerts, and team configurations"│
│            │                                                         │
│  Settings  │  TAB NAVIGATION:                                       │
│  is active │  [Integrations] [Alert Rules] [Team] [Brand] [Billing] │
│            │                                                         │
│            │  CONNECTED PLATFORMS (Card Grid)                       │
│            │  ┌────────────┐ ┌────────────┐ ┌────────────┐         │
│            │  │ [Zendesk]  │ │ [Shopify]  │ │ [Intercom] │         │
│            │  │  🟢 ACTIVE │ │  🟢 ACTIVE │ │ ○ Connect  │         │
│            │  │ [Disconnect]│ │ [Settings] │ │            │         │
│            │  └────────────┘ └────────────┘ └────────────┘         │
│            │                                                         │
│            │  ┌────────────┐                                        │
│            │  │ [Gorgias]  │                                        │
│            │  │ ○ Connect  │                                        │
│            │  └────────────┘                                        │
│            │                                                         │
│            │  DATA SOURCES                                          │
│            │  ─────────────                                          │
│            │  ☑ Sync conversations automatically                    │
│            │    "Continuously update chat logs every 15 minutes"    │
│            │                                                         │
│            │  ☑ Include voice transcripts                           │
│            │    "Process audio files and generate searchable text"  │
│            │                                                         │
│            │  ☐ Pull customer metadata                              │
│            │    "Enrich profiles with external CRM data points"     │
│            │                                                         │
│            │  API ACCESS                    WEBHOOKS                │
│            │  ─────────────                 ─────────────            │
│            │  SECRET KEY:                   ENDPOINT URL:           │
│            │  [••••••••••••••••]            [https://...]            │
│            │  Last used: 2 hours ago        ● Not tested yet        │
│            │  [Regenerate Key]              [Test Webhook]          │
│            │                                                         │
└─────────────────────────────────────────────────────────────────────┘

DESIGN DETAILS:

1. TAB NAVIGATION:
   - Horizontal tabs below header
   - Active tab: coral underline
   - Inactive: muted text

2. PLATFORM CARDS:
   - Logo/icon of platform
   - Status badge: "ACTIVE" in green, or gray outline "Connect"
   - Connected: Show disconnect/settings buttons
   - Not connected: Show "Connect" CTA in coral

3. DATA SOURCE TOGGLES:
   - Custom toggle switches (coral when on)
   - Title + description for each option
   - Grouped logically

4. API SECTION:
   - Masked secret key field
   - Copy button
   - "View documentation" link
   - Regenerate button (with confirmation)

5. WEBHOOK SECTION:
   - URL input field
   - Test status indicator
   - Test button in coral

RESOLUTION: 1440x900px
```

---

## Screens 8-12: Onboarding Flow

### Screen 8: Step 1 - Connect Your Data

```
[PASTE BRAND DNA FIRST]

SCREEN: Onboarding Step 1 - Connect Your Data
PURPOSE: First step of onboarding wizard - select data source

LAYOUT: Centered modal/card on dark background

┌─────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                         [AINGEL Logo]                               │
│                         STEP 1 OF 5                                 │
│                         ● ○ ○ ○ ○                                   │
│                                                                      │
│        ┌─────────────────────────────────────────────────┐          │
│        │                                                  │          │
│        │           Connect Your Data                      │          │
│        │     Choose your support platform to get started  │          │
│        │                                                  │          │
│        │   ┌─────────────┐  ┌─────────────┐              │          │
│        │   │ [Zendesk]   │  │ [Intercom]  │              │          │
│        │   │   POPULAR   │  │             │              │          │
│        │   └─────────────┘  └─────────────┘              │          │
│        │                                                  │          │
│        │   ┌─────────────┐  ┌─────────────┐              │          │
│        │   │ [Gorgias]   │  │ [Custom API]│              │          │
│        │   │ E-COMMERCE  │  │             │              │          │
│        │   └─────────────┘  └─────────────┘              │          │
│        │                                                  │          │
│        │   ☐ Also connect Shopify for business insights  │          │
│        │                                                  │          │
│        │         Or upload a CSV sample                   │          │
│        │                                                  │          │
│        │   [Back]                    [Continue →]         │          │
│        │                                                  │          │
│        └─────────────────────────────────────────────────┘          │
│                                                                      │
│        "Secure connection via OAuth 2.0 - Data is encrypted at rest"│
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

DESIGN DETAILS:

1. PROGRESS INDICATOR:
   - Step dots at top
   - Current step filled (coral)
   - Future steps empty (outline)

2. PLATFORM CARDS:
   - Selectable cards (radio behavior)
   - Selected: coral border + subtle glow
   - Hover: slight scale up
   - Platform logo centered
   - "POPULAR" or "E-COMMERCE" badge on relevant options

3. SHOPIFY CHECKBOX:
   - Optional add-on
   - Coral checkbox when checked

4. CSV LINK:
   - Text link below cards
   - Opens file upload modal

5. NAVIGATION:
   - Back button (ghost style)
   - Continue button (coral gradient, primary CTA)

6. SECURITY NOTE:
   - Small text at bottom
   - Lock icon
   - Reassuring copy

RESOLUTION: 1440x900px (centered content is ~600px wide)
```

---

### Screen 9: Step 2 - Brand Configuration

```
[PASTE BRAND DNA FIRST]

SCREEN: Onboarding Step 2 - Tell Us About Your Brand
PURPOSE: Configure brand voice and calibration preferences

LAYOUT: Same centered card style as Step 1

CONTENT:
┌─────────────────────────────────────────────────────────┐
│                                                          │
│           Tell Us About Your Brand                       │
│     We'll calibrate scoring to match your voice          │
│                                                          │
│   TONE PREFERENCE                                        │
│   ─────────────────                                      │
│   ○ Formal        "Professional and polished"            │
│   ● Friendly      "Warm and approachable"    ← Selected  │
│   ○ Playful       "Fun and casual"                       │
│                                                          │
│   INDUSTRY                                               │
│   ─────────────────                                      │
│   [E-commerce ▼]                                         │
│                                                          │
│   PRIORITIES (Rank 1-3)                                  │
│   ─────────────────                                      │
│   Speed      [■■■■░░░░░░] 4                              │
│   Empathy    [■■■■■■■░░░] 7                              │
│   Resolution [■■■■■■■■░░] 8                              │
│                                                          │
│   [Back]                         [Continue →]            │
│                                                          │
└─────────────────────────────────────────────────────────┘

DESIGN:
- Radio buttons for tone (coral when selected)
- Dropdown for industry
- Sliders for priorities (coral fill)
- Clear labels and descriptions
```

---

### Screen 10: Step 3 - Calibration Review

```
[PASTE BRAND DNA FIRST]

SCREEN: Onboarding Step 3 - Review Calibration
PURPOSE: Show sample scored conversations for customer to validate

LAYOUT:
┌─────────────────────────────────────────────────────────┐
│                                                          │
│           Review Our Calibration                         │
│     We scored 50 sample conversations. Do these          │
│     ratings match your expectations?                     │
│                                                          │
│   SAMPLE 1 OF 5                                          │
│   ┌───────────────────────────────────────────────────┐ │
│   │ [Conversation preview text...]                    │ │
│   │                                                   │ │
│   │ Our Score: 2.1/4 (Below Average)                  │ │
│   │                                                   │ │
│   │ Does this feel right?                             │ │
│   │ [Too Low] [About Right] [Too High]                │ │
│   └───────────────────────────────────────────────────┘ │
│                                                          │
│   ○ ● ○ ○ ○  (1 of 5 samples)                           │
│                                                          │
│   [Skip Calibration]              [Next Sample →]        │
│                                                          │
└─────────────────────────────────────────────────────────┘

DESIGN:
- Conversation preview in card
- Three-button feedback (radio-like)
- "About Right" is primary CTA color when selected
- Progress through samples
```

---

### Screen 11: Step 4 - Configure Alerts

```
[PASTE BRAND DNA FIRST]

SCREEN: Onboarding Step 4 - Configure Alerts
PURPOSE: Set up who receives which alerts

LAYOUT:
┌─────────────────────────────────────────────────────────┐
│                                                          │
│           Configure Alerts                               │
│     Tell us who should be notified for critical issues   │
│                                                          │
│   ALERT TYPE           │  ASSIGN TO        │  ENABLED   │
│   ─────────────────────┼───────────────────┼────────────│
│   🔴 Churn Risk        │ [Support Manager▼]│ [● ON ]    │
│   🔴 Brand Damage      │ [CX Director ▼]   │ [● ON ]    │
│   💰 Revenue at Risk   │ [Sales Team ▼]    │ [● ON ]    │
│   🛠 Site/Product Issue│ [Engineering ▼]   │ [○ OFF]    │
│                                                          │
│   DELIVERY METHOD                                        │
│   ─────────────────                                      │
│   [● Email] [○ Slack] [○ Both]                          │
│                                                          │
│   Connect Slack: [Connect to Slack]                      │
│                                                          │
│   [Back]                         [Continue →]            │
│                                                          │
└─────────────────────────────────────────────────────────┘

DESIGN:
- Table-like layout for alert configuration
- Dropdown for team assignment
- Toggle switches for enable/disable
- Radio buttons for delivery method
- Slack integration CTA
```

---

### Screen 12: Step 5 - Go Live

```
[PASTE BRAND DNA FIRST]

SCREEN: Onboarding Step 5 - Go Live!
PURPOSE: Celebration screen, confirm setup complete

LAYOUT: Centered with confetti/celebration elements

┌─────────────────────────────────────────────────────────┐
│                                                          │
│                      🎉                                  │
│                                                          │
│               You're All Set!                            │
│                                                          │
│     AINGEL is now monitoring your conversations.         │
│     We'll alert you when issues need attention.          │
│                                                          │
│   ┌─────────────────────────────────────────────────┐   │
│   │ ✓ Zendesk connected                             │   │
│   │ ✓ Shopify connected                             │   │
│   │ ✓ Brand voice: Friendly                          │   │
│   │ ✓ Alerts routing to 3 team members               │   │
│   │ ✓ First batch processing in ~15 minutes          │   │
│   └─────────────────────────────────────────────────┘   │
│                                                          │
│             [Go to Dashboard →]                          │
│                                                          │
│   Need help? Contact support@aingeleq.com                │
│                                                          │
└─────────────────────────────────────────────────────────┘

DESIGN:
- Celebration emoji or confetti animation
- Success checkmarks in green
- Summary of what was configured
- Primary CTA to dashboard (coral gradient)
- Support contact link

VISUAL EFFECTS:
- Subtle confetti animation
- Coral glow behind success card
- Warm, celebratory feel
```

---

## Screen 13: Login / Auth (Bonus)

```
[PASTE BRAND DNA FIRST]

SCREEN: Login Page
PURPOSE: Authentication entry point

LAYOUT: Split screen - left brand/art, right form

LEFT SIDE (50%):
- Noir background with coral gradient bleak
- Large AINGEL logo
- Tagline: "Customer Experience Intelligence"
- Subtle halftone pattern
- Maybe abstract data visualization graphic

RIGHT SIDE (50%):
- Centered login form
- Email input
- Password input
- "Remember me" checkbox
- "Forgot password?" link
- "Sign In" button (coral gradient)
- "Or continue with" + Google/SSO buttons
- "Don't have an account? Request demo"

DESIGN:
- Clean, minimal form
- Coral accents on focus states
- Glassmorphism card for form container
```

---

## Usage Instructions

### For Kimi K 2.5:

1. Copy the **BRAND DNA** section
2. Paste it at the START of your prompt
3. Add the specific screen prompt
4. Request: "Generate a high-fidelity UI mockup for this screen"

### For Claude Code (HTML artifacts):

1. Use these prompts with the frontend-design skill
2. Ask Claude to generate working HTML/CSS
3. Include: "Use the exact brand colors, Outfit font, and 8px border radius"

### For Implementation:

1. Use the `tailwind.config.ts` as your starting point
2. Reference these prompts for component specifications
3. Build with shadcn/ui components styled to match

---

*Generated: 2026-02-03*
*For: AINGEL EQ-Ops Platform*
