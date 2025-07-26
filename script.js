const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

let songs = [];
let songIndex = 0;

function loadSong(song) {
  title.innerText = song.trackName;
  audio.src = song.previewUrl;
  cover.src = song.artworkUrl100;
}

function playSong() {
  playBtn.textContent = '⏸️';
  audio.play();
}

function pauseSong() {
  playBtn.textContent = '▶️';
  audio.pause();
}

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

prevBtn.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextBtn.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}
audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

searchBtn.addEventListener('click', async () => {
  const term = searchInput.value.trim();
  if (!term) return alert("Please enter a song or artist name!");

  const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&limit=10`);
  const data = await res.json();

  songs = data.results;
  if (songs.length === 0) {
    alert("No results found!");
    return;
  }

  songIndex = 0;
  loadSong(songs[songIndex]);
  playSong();
});
