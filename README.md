# Habit-Tracker — Your Personal Daily Life Manager

My Day timeline, tasks, habits, an editable day routine, MET-based exercise/calorie
tracking, a searchable food-calorie database, insights, focus timer, goals, business
tracker, journal — with real Google Sign-In (Firebase Auth) or a local device account.
Installable as a proper app with its own icon.

## Installing as an app (not just a website)

This is a Progressive Web App (PWA) — the legitimate way to get a real installed-app
experience (home screen icon, app-drawer/start-menu entry, its own window with no
browser address bar, offline support) from a website, without needing a Play Store
account, code signing, or native build tools.

- **Android / Chrome / Edge (desktop or mobile):** open the live link, then use the
  in-app "Install App" button (on the sign-in screen or in Settings) — it triggers the
  browser's real install prompt. Or use the install icon that appears in the address bar.
- **iPhone / iPad (Safari):** Safari doesn't support the automatic prompt — tap the
  Share icon, then "Add to Home Screen." The in-app button shows these steps automatically
  on iOS.
- **Fallback:** "Download as a file (.html)" still works everywhere, saving a portable
  offline copy — just without the home-screen icon / standalone window.

## Files
- `index.html` — landing page (two choices: Continue in Browser / Download the App)
- `app.html` — the app itself
- `manifest.json` — PWA metadata (name, icons, colors, display mode)
- `service-worker.js` — enables offline caching + installability
- `icon-*.png`, `apple-touch-icon.png`, `favicon-*.png` — the app's icon set

**Honest limitation:** this is a PWA, not a native `.apk`/`.exe` — no Play Store or App
Store listing. Google Sign-In still needs internet and the live `https://` link (not
the offline downloaded copy or file:// access), same as before.

## Host it live (GitHub Pages)
1. Push this repo to GitHub — make sure ALL files (including the .png icons,
   manifest.json, and service-worker.js) are included, not just app.html.
2. Settings → Pages → Source → Deploy from a branch → `main` / root → Save.
3. Live at `https://<your-username>.github.io/Habit-Tracker/`
