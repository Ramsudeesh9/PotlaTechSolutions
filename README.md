# Potla Tech Solutions Website

Responsive company website frontend for Potla Tech Solutions, built with React (loaded in the browser), Bootstrap and custom CSS.

## Features

- Responsive homepage and navigation
- About Us dropdown with only **Company** and **Team**
- **Company** page with company overview, technology/business visual, ISO certification image, company statistics, history, mission, who-we-are content and a milestone timeline
- **Team** page with **Management** and **Team Potla** tabs
- Management profiles for Rajeshwari Potla and Srinu Potla
- Team Potla gallery with the supplied office and celebration photographs
- Services, technologies, products, gallery, industries, careers, locations and contact pages
- Hyderabad head office address; other location links for Bangalore, Malaysia and Guntur (no USA location)
- Responsive layouts for desktop, tablet and mobile

## Technologies

- HTML5
- CSS3
- JavaScript / JSX
- React and ReactDOM (CDN)
- Bootstrap (CDN)

## Project structure

```text
PotlaTechSolutions_Frontend/
├── index.html
├── README.md
└── assets/
    ├── app.jsx
    ├── style.css
    └── images/
        ├── team/          # Chairperson, Founder & CEO, team photographs
        ├── gallery/       # Real Potla events and milestone photographs
        ├── locations/
        ├── industries/
        ├── partners/
        ├── tech/
        ├── about-team.jpg # Company overview visual
        └── about-team.jpeg # ISO certification announcement
```

## Run locally

1. Extract the ZIP file.
2. Open the `PotlaTechSolutions_Frontend` folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and select **Open with Live Server**.
5. Open the local URL shown by Live Server in your browser.

React, ReactDOM, Babel and Bootstrap are loaded from CDNs, so an internet connection is required while running the site.

## About Us pages

- **About Us → Company** – company overview, stats, ISO certification, history, mission, who we are and the timeline. The page uses the included local image assets and real Potla group/team photos.
- **About Us → Team** – two tabs:
  - **Management** – Chairperson and Founder & CEO profiles.
  - **Team Potla** – supplied office and celebration group photographs.

All Company and Team images are stored locally under `assets/images/`; they are included in this ZIP.

## Locations

The head office address shown is in Hyderabad, Telangana. Other displayed locations are Bangalore, Malaysia and Guntur. USA is not listed.

## GitHub

From the extracted `PotlaTechSolutions_Frontend` folder, run:

```bash
git init
git add .
git commit -m "Update Potla Tech Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your actual GitHub repository URL. Do not commit passwords, API keys or other secrets.
