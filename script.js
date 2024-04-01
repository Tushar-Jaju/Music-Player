const playList = [
  {
    src: "./media/let me down slowly.mp3",
    title: "Let me down slowly",
    artist: "Alec Benjamin",
    img: "./media/let me down slowly.jpeg",
  },
  {
    src: "./media/unity.mp3",
    title: "Unity",
    artist: "Alan Walker",
    img: "./media/unity.jpeg",
  },
  {
    src: "./media/spectre.mp3",
    title: "Spectre",
    artist: "Alan Walker",
    img: "./media/spectre.jpg",
  },
];

let index = 0;

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const songImg = document.querySelector(".song-img");

const song = document.getElementById("song");
const progress = document.getElementById("progress");
const ctrlIcon = document.getElementById("ctrlIcon");

function loadMusic() {
  title.innerHTML = playList[index].title;
  artist.innerHTML = playList[index].artist;
  songImg.src = playList[index].img;
  song.src = playList[index].src;
}

song.onloadedmetadata = function () {
  progress.max = song.duration;
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

function playNext() {
  if (index < playList.length - 1) {
    index++;
    loadMusic();
    song.play();
  }
}

function playPrev() {
  if (index > 0) {
    index--;
    loadMusic();
    song.play();
  }
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

song.addEventListener("ended", () => {
  song.currentTime = 0;
  ctrlIcon.classList.add("fa-play");
  ctrlIcon.classList.remove("fa-pause");
});

loadMusic();
