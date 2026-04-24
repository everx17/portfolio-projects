# Fridge Friend (Year 3 Coursework) — React Native + API + Firebase

Fridge Friend is a mobile app prototype built for CM3050 (Mobile Development). The concept is a
“smart kitchen companion” that helps users keep track of ingredients at home, reduce food waste,
and discover recipes based on what they already have.

This project was intentionally ambitious and design-heavy, and it met the core coursework goals
(**React Native + API usage**) while also implementing extras such as Firebase and local persistence.

## Demo / Report
- Demo video: https://drive.google.com/file/d/16pBQnsJLDeFl2MjnhnyLbrk0EMAc4d_x/view?usp=sharing
- Report: https://drive.google.com/file/d/1kRI5hjdejmLZWD3PqsDdvKoZGaTS_EO0/view?usp=sharing

## Tech Stack
- React Native (Expo workflow)
- Spoonacular API (recipes + ingredient/food info + nutrition analysis)
- Firebase (authentication + cloud backup/restore)
- AsyncStorage (on-device storage)
- React hooks (notably `useEffect`)

## Highlights (What this project showcases)
- **UI/UX effort:** extensive wireframing and a design-first approach
- **API integration:** fetch data from Spoonacular for recipes and nutrition information
- **Data persistence:** store app data locally with AsyncStorage
- **Cloud features (extra):** Firebase auth + backup/restore design
- **Clear product thinking:** aims to reduce food waste, support shopping planning, and suggest
  recipes from available ingredients

## Core Features (Prototype)
- Store and browse ingredients (fridge/pantry concept)
- Search recipes suggested based on stored ingredients
- View recipe details + nutrition analysis
- Login / signup screens (Firebase auth integration intended)
- Backup to cloud / restore from cloud (intended via Firebase + AsyncStorage)

## Known Limitations (Coursework Snapshot)
This repository reflects the submitted coursework build. Due to time constraints (and the project’s
scope), some parts are incomplete or UI-only:

- **Shopping list** page is not fully implemented.
- **Expiration reminder** toggle/date picker is UI-only (no working notifications/reminders).
- **Forgot password** flow is UI-level (screen + popup) but email sending is not fully wired.
- **Backup/restore** may be incomplete depending on Firebase configuration and the submitted build.
- Some UI styling is inconsistent across screens.

## Running / Preview
This project was submitted using **EAS Update** for preview rather than Snack (Firebase limitations).

Note: The submitted version may not run on the latest Expo Go due to dependency/SDK changes.
I’m keeping the project as-is to preserve the original coursework submission. 
For review, please see the demo video above.

## What I Would Improve Next
- Finish shopping list with full data flow + persistence
- Implement real reminders/notifications for expiring ingredients
- Verify password reset + backup/restore flows end-to-end
- UI polish + consistent spacing/typography across auth screens
- Upgrade Expo SDK/dependencies in a separate “modernize” branch
