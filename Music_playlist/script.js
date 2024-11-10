const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const title = document.getElementById('song-title');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

const playlist = [
  { title: "Song 1 - Royalty Free", src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3" },
  { title: "Song 2 - Royalty Free", src: "https://www.bensound.com/bensound-music/bensound-sunny.mp3" },
  { title: "Song 3 - Royalty Free", src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3" }
];

let currentSongIndex = 0;

// Load the initial song
function loadSong(index) {
  const song = playlist[index];
  audio.src = song.src;
  title.textContent = song.title;
  audio.load();
}

// Play or pause the song
function togglePlay() {
  if (audio.paused) {
    audio.play().then(() => {
      playButton.textContent = "⏸"; // Change button to pause icon
    }).catch(error => console.log("Playback error:", error));
  } else {
    audio.pause();
    playButton.textContent = "▶"; // Change button to play icon
  }
}

// Play next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  audio.play();
  playButton.textContent = "⏸";
}

// Play previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  audio.play();
  playButton.textContent = "⏸";
}

// Set volume
function setVolume(volume) {
  audio.volume = volume;
}

// Select song from playlist and play it
function selectSong(index) {
  currentSongIndex = index;
  loadSong(currentSongIndex);
  audio.play();
  playButton.textContent = "⏸";
}

// Update time display
audio.addEventListener('timeupdate', () => {
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);

  currentTimeEl.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
  durationEl.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
});

// Reset play button when song ends
audio.addEventListener('ended', () => {
  playButton.textContent = "▶";
});

// Load the first song in the playlist and set initial volume
loadSong(currentSongIndex);
audio.volume = 0.5;
