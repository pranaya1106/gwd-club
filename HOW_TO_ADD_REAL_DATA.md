# HOW TO ADD REAL DATA TO GWD WEBSITE

Quick reference guide for updating the website with actual content.

---

## 1. ADD OFFICIAL GWD LOGO

**File:** `src/components/Logo.tsx`

**Find this section (around line 20):**
```jsx
{/* When the official logo file is provided, replace this with:
    <img src="/gwd-logo.svg" alt="GWD" className="w-full h-full object-contain" />
*/}
```

**Steps:**
1. Place your logo file in the `public/` folder (e.g., `public/gwd-logo.svg` or `public/gwd-logo.png`)
2. Replace the placeholder div with:
```jsx
<img src="/gwd-logo.svg" alt="GWD" className="w-full h-full object-contain" />
```

---

## 2. ADD PEOPLE PHOTOS & DETAILS

**File:** `src/data/people.ts`

**Add a photo:**
```typescript
{
  id: 'abdul-mudabbir',
  name: 'Abdul Mudabbir',
  role: 'Founder & Club Director',
  category: 'founder',
  initials: 'AM',
  bio: 'Your bio text here',  // Add bio
  photoUrl: '/people/abdul-mudabbir.jpg',  // Add photo
  accent: 'red',
  functionalArea: null,
  teamCount: null,
  teamMembers: [],
}
```

**Add team members for a lead:**
```typescript
{
  id: 'anvita-reddy',
  name: 'Anvita Reddy',
  role: 'Marketing Lead',
  category: 'lead',
  initials: 'AR',
  bio: 'Bio text here',
  photoUrl: '/people/anvita.jpg',
  accent: 'red',
  functionalArea: 'Marketing',
  teamCount: 5,  // Set actual count
  teamMembers: [  // Add team members
    { name: 'Member Name 1', photoUrl: '/people/member1.jpg' },
    { name: 'Member Name 2', photoUrl: '/people/member2.jpg' },
    { name: 'Member Name 3', photoUrl: null },  // null if no photo
  ],
}
```

**Remember:**
- Place photos in `public/people/` folder
- Use exact spellings from GWD Overview
- Set `photoUrl: null` if no photo available

---

## 3. ADD GWD IN ACTION CONTENT

**File:** `src/data/actionCategories.ts`

**Add descriptions and images:**
```typescript
{
  id: 'industry-exposure',
  label: 'INDUSTRY EXPOSURE',
  description: 'Real description about industry visits and company interactions.',
  accent: 'red',
  image: '/action/industry.jpg',  // Optional image
  hasContent: true,  // Set to true when you have content
}
```

---

## 4. ADD CREATIVE WORK (POSTERS, REELS, ETC.)

**File:** `src/data/creativeWork.ts`

**Add real creative work:**
```typescript
export const creativeWorks: CreativeWork[] = [
  {
    id: 'design-1',
    title: 'GWD Annual Event Poster',
    category: 'DESIGN',
    image: '/creative/event-poster.jpg',
    description: 'Poster for GWD annual event 2024',
  },
  {
    id: 'reel-1',
    title: 'Industrial Visit Highlights',
    category: 'REELS',
    image: '/creative/reel-thumbnail.jpg',  // Thumbnail for reel
    description: 'Video highlights from company visit',
  },
  // Add more...
];
```

**Categories:**
- `DESIGN` — Posters, graphics, visual design
- `REELS` — Videos, reels, motion content
- `EVENTS` — Event photography, coverage
- `MEDIA` — Social media content, promotional work

---

## 5. ADD INDUSTRY VISIT DETAILS

**File:** `src/components/IndustryExposure.tsx`

**Find these placeholders (around lines 70-85):**

**Replace event title:**
```jsx
<h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
  Industrial Visit to [Company Name]  {/* Update this */}
</h3>
```

**Replace date:**
```jsx
<span className="font-mono text-sm">March 15, 2024</span>  {/* Update this */}
```

**Replace location:**
```jsx
<span className="font-mono text-sm">Hyderabad, Telangana</span>  {/* Update this */}
```

**Replace description:**
```jsx
<p className="text-ink-300 leading-relaxed mb-8">
  Real description of the industrial visit...  {/* Update this */}
</p>
```

**Add photograph:**
Find this section (around line 35):
```jsx
{/* When a real photo is provided, replace with: */}
<img src="/industry/visit-photo.jpg" alt="" className="w-full h-full object-cover" />
```

---

## 6. ADD CURRENT ACTIVITIES (GWD NOW)

**File:** `src/data/initiatives.ts`

**Add real ongoing activities:**
```typescript
export const initiatives: Initiative[] = [
  {
    id: 'init-1',
    title: 'Technical Workshop Series',
    description: 'Weekly workshops on web development, AI, and emerging technologies',
    status: 'now',  // 'now' for current, 'in-progress' for ongoing
    date: null,
  },
  {
    id: 'init-2',
    title: 'Event Planning for Annual Fest',
    description: 'Organizing GWD annual tech fest',
    status: 'in-progress',
    date: null,
  },
];
```

---

## 7. ADD UPCOMING EVENTS (WHAT'S NEXT)

**File:** `src/data/roadmap.ts`

**Add future plans:**
```typescript
export const roadmapItems: RoadmapItem[] = [
  {
    id: 'road-1',
    category: 'EVENTS',
    title: 'Annual Tech Fest 2024',
    description: 'GWD flagship event with workshops, competitions, and industry talks',
    date: null,
  },
  {
    id: 'road-2',
    category: 'INDUSTRY',
    title: 'Company Visit to Tech Park',
    description: 'Industrial exposure visit scheduled',
    date: null,
  },
  {
    id: 'road-3',
    category: 'PROJECTS',
    title: 'Club Management Platform',
    description: 'Building internal project management system',
    date: null,
  },
  {
    id: 'road-4',
    category: 'EXPERIENCES',
    title: 'Guest Speaker Series',
    description: 'Industry experts sharing insights',
    date: null,
  },
];
```

**Categories:**
- `EVENTS` — Upcoming club events
- `INDUSTRY` — Planned industrial visits
- `PROJECTS` — Technical/creative projects in pipeline
- `EXPERIENCES` — Workshops, talks, learning experiences

---

## 8. FOLDER STRUCTURE FOR ASSETS

Create these folders in `public/`:

```
public/
├── gwd-logo.svg                 # Official GWD logo
├── people/                      # People photos
│   ├── abdul-mudabbir.jpg
│   ├── rahman-pasha.jpg
│   ├── anvita-reddy.jpg
│   └── ...
├── creative/                    # Creative work
│   ├── poster-1.jpg
│   ├── reel-1-thumb.jpg
│   └── ...
├── action/                      # GWD In Action images
│   ├── industry.jpg
│   ├── events.jpg
│   └── ...
└── industry/                    # Industry visit photos
    └── visit-photo.jpg
```

---

## 9. IMAGE GUIDELINES

**Formats:**
- Logo: SVG (preferred) or PNG
- Photos: JPG or PNG
- Posters/Creative: JPG or PNG

**Sizes:**
- People photos: 400x400px minimum
- Creative work: 1200px width minimum
- Industry photos: 1920px width minimum

**Optimization:**
- Compress images before uploading
- Use tools like TinyPNG or Squoosh
- Keep file sizes under 500KB when possible

---

## 10. QUICK CHECKLIST

Before going live, verify:

- [ ] Official GWD logo added
- [ ] All founder photos added
- [ ] All leadership photos added
- [ ] All lead photos added with team info
- [ ] GWD In Action categories have descriptions
- [ ] Creative work gallery has real media
- [ ] Industry visit details updated
- [ ] Current activities added to GWD Now
- [ ] Upcoming events added to What's Next
- [ ] All images optimized
- [ ] Website tested on mobile
- [ ] Website tested on different browsers
- [ ] All hover interactions work
- [ ] All modals open/close properly
- [ ] Navigation links work
- [ ] Smooth scroll animations work

---

## NEED HELP?

If you encounter issues:

1. **Images not showing?**
   - Check file path (should start with `/`)
   - Verify file is in `public/` folder
   - Check file name spelling matches exactly

2. **Content not updating?**
   - Save the file
   - Check browser (dev server auto-reloads)
   - Check browser console for errors

3. **Layout broken?**
   - Check TypeScript syntax
   - Verify all closing braces and brackets
   - Run: `npm run build` to check for errors

---

**Remember:** Only add real, verified information. Use elegant empty states (leave fields as `null`) rather than inventing content.

Good luck! 🔴🟢
