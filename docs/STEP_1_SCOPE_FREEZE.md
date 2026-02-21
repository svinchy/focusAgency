# Step 1 Scope Freeze

Date: 2026-02-21
Project: focusAgency
Status: Approved

## Goal
Freeze what content is editable for launch, and lock everything else.

## Editable Content (Launch Scope)
All fields below are considered editable business content and should be managed in CMS/admin in later steps.

### 1) Navigation
- `service`
- `about`
- `contact`
- Languages: `en`, `ka`
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` (`content.navbar`)

### 2) Banner
- `subtitle`
- `title`
- Languages: `en`, `ka`
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` (`content.banner`)

### 3) Services
- Section title
- 4 service cards:
- Card title
- Card short description
- Service detailed bullet list content
- Languages: `en`, `ka`
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` (`content.services`, `content.serviceContent`)

### 4) Work Flow Steps
- Section title
- 3 steps:
- Step number label
- Step text
- Languages: `en`, `ka`
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` (`content.steps`)

### 5) Team
- Section title
- CTA button text (`know us better`)
- Team members (currently 4):
- Role
- Name
- Image
- Optional social links per member (currently hardcoded empty hrefs in HTML)
- Languages: `en`, `ka` (except image URL)
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` + `/Users/svinchy/Desktop/focusAgency/index.html`

### 6) Testimonials
- Section title
- Testimonial items (currently 7):
- Author
- Message text
- Languages: `en`, `ka`
- Current source: `/Users/svinchy/Desktop/focusAgency/data.js` (`content.testimonial`)

### 7) Footer Contact/Form Copy
- Footer heading (`focus agency`)
- Form legend (`have a question?`)
- Placeholder texts (`name`, `email`, `shoot a message`)
- Contact labels (`call us any time`, `connect with us by email`, `Follow us`)
- Address heading and address lines
- Footer paragraph text
- Languages: `en`, `ka` (recommended)
- Current source: `/Users/svinchy/Desktop/focusAgency/index.html` (hardcoded)

### 8) Business Contact Data
- Phone number(s)
- Contact email(s)
- Social profile links
- Office address lines
- Map/street image URLs
- Current source: `/Users/svinchy/Desktop/focusAgency/index.html` (hardcoded)

## Not Editable For Launch (Frozen)
These are frozen implementation/design decisions until after launch:

- Layout/section order
- Animation behavior and motion style
- Visual theme/design tokens
- Service section interaction pattern
- Team/testimonial carousel behavior
- Number of language options (locked to `en`, `ka`)
- New features beyond plan steps (no additional UI modules)

## Constraints Locked For Launch
- Keep current section architecture and CSS folder structure.
- Do not add new visual features while finishing responsive + QA.
- Content changes are allowed; structural redesign is not.

## Definition of Done (Step 1 Complete)
- Editable content list approved.
- Frozen list approved.
- All launch copy changes happen only inside approved editable fields.
- Any new requested feature must be deferred to post-launch backlog.

## Finalized Decisions
1. Team size locked to 4 for launch: `yes`
2. Testimonials count locked to 7 for launch: `yes`
3. Footer text bilingual (`en+ka`) at launch: `yes`
4. Member social links editable in CMS: `yes`

Step 1 scope freeze is complete.
