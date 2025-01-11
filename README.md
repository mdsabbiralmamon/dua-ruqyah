# Project Title: Dua Ruqyah Clone

## Project Description:

This project involves cloning the UI of the Dua Ruqyah website and implementing API endpoints to fetch data for categories, subcategories, and duas. The cloned UI will be functional, with the categories section and dua cards dynamically populated using data from the APIs.

## Tech Stack:

- Backend: NextJs
- Frontend: Tailwind CSS, Next.js
- Database: Provided SQLite database
- Deployment: Probably will do on vercel.

## Key Features:

- API Endpoints: Creation of API endpoints to fetch data from the provided database.
- UI Cloning: Replication of the Dua Ruqyah website's UI using Tailwind CSS and Next.js.
- Dynamic Content: Functional categories section and dua cards that display data fetched from the APIs.
- Static Site Generation (SSG): Pre-rendering of pages using Next.js's SSG feature.
- Responsiveness: Ensuring the website is responsive across various devices.

## Setup and Installation:

- Clone the repository: `git clone https://github.com/mdsabbiralmamon/dua-ruqyah.git`
- Install dependencies: `npm install` (or appropriate package manager)
- Set up environment variables: 
```bash
JWT_SECRET=Your_Secret
SESSION_SECRET=Your_Secret
NEXTAUTH_SECRET=Your_Secret
NEXTAUTH_URL=http://localhost:3000(Default) or Use_Your_Prefered
```
- Run the development server: `npm run dev`
- Build for production: `npm run build`
- Deploy: your deployed url.

## Folder Structure

```bash
/dua-rukaiya
├── /public
│   └──             
├── /src
│   ├── /database
│   │   └── dua.sqlite         # SQLite database file
│   ├── /app
│   │   ├── /api
│   │   │   └──/data
│   │   │      └── route.ts    # API route to query SQLite database
│   │   ├── icon.png           # Custom favicon
│   │   ├── globals.css        # Global Css
│   │   ├── layout.tsx         # Global Layout
│   │   └── page.tsx           # Home page to display data
│   └── /utils
│       └── db.js              # Database utility to simplify SQLite usage
├── .env                       # Env File
├── .gitignore                 # Files to ignore in Git
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```