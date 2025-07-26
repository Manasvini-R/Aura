# Aura - API-Based Music Player

Aura is a simple, sleek web-based music player built with HTML, CSS, and JavaScript that fetches and plays songs dynamically using the iTunes Search API. It allows users to search for their favorite tracks and listen to previews without uploading any song files.

---

## Features

* Search songs dynamically via iTunes API
* Play, pause, skip to next or previous track
* Responsive and visually appealing UI with smooth animations
* Displays song title and album art
* Default logo shown before any search
* Rotating animation on album cover during playback

---

## Demo

Check out the live demo: [https://aura-vlo4.onrender.com](https://aura-vlo4.onrender.com)

---

## How It Works

1. User enters a song or artist name in the search box.
2. Aura calls the iTunes Search API to fetch matching songs.
3. Songs are loaded into the player queue.
4. User can play, pause, and navigate through the fetched tracks.
5. Album art and track info update dynamically with playback.

---

## Technologies Used

* HTML5
* CSS3 (with animations and transitions)
* Vanilla JavaScript (Fetch API)
* iTunes Search API (public API for music data)

---

## Installation & Usage

1. Clone the repository:

```bash
git clone https://github.com/Manasvini-R/Aura.git
cd Aura
```

2. Open `index.html` in your browser to run locally.

3. Or deploy it to a static hosting service (like Render, Netlify, or GitHub Pages).

---

## Deployment on Render

* Set the **Publish Directory** to `.` (root folder).
* Deploy the project.
* Ensure `script.js`, `style.css`, and other assets are present in the root directory.
* Clear build cache and redeploy if needed.

---

## Folder Structure

```
Aura/
├── index.html       # Main HTML page
├── style.css        # Stylesheet for UI
├── script.js        # JavaScript logic for player
├── image.png        # Default album art/logo image
└── README.md        # This file
```

---

## Future Improvements

* Add volume control and progress bar seeking
* Support playlists saved locally
* Integrate with other music APIs (Spotify, Deezer)
* Add dark/light mode themes
* Improve mobile responsiveness

---




