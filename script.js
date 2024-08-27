const songs = [
    { name: "Complicated", src: "songs/Avril Lavigne - Complicated.mp3" },
    { name: "Girlfriend", src: "songs/songs/Avril Lavigne - Girlfriend.mp3" },
    { name: "Here's to Never Growing Up", src: "songs/songs/Avril Lavigne - Here's to Never Growing Up.mp3" },
    { name: "Rock N Roll", src: "songs/songs/Avril Lavigne - Rock N Roll.mp3" }
    // 继续添加你的歌曲
];

const audioPlayer = document.getElementById("audio-player");
const songList = document.getElementById("song-list");

let currentSongIndex = 1;

function loadSongs() {
    songs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.name;
        li.addEventListener("click", () => playSong(index));
        songList.appendChild(li);
    });
}

function playSong(index) {
    currentSongIndex = index;
    audioPlayer.src = songs[currentSongIndex].src;
    audioPlayer.play();
    updateActiveSong();
}

function updateActiveSong() {
    const items = songList.getElementsByTagName("li");
    Array.from(items).forEach((item, index) => {
        item.classList.toggle("active", index === currentSongIndex);
    });
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

// 自动播放下一首歌
audioPlayer.addEventListener("ended", playNextSong);

// 初始化歌曲列表和播放器
window.addEventListener("DOMContentLoaded", () => {
    loadSongs();
    playSong(currentSongIndex);
});