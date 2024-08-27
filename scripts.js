window.onload = function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = document.getElementById('playlist');
    var tracks = [];
    var current = 0;

    // Fetch the music list from JSON file
    fetch('music.json')
        .then(response => response.json())
        .then(data => {
            tracks = data.tracks;
            loadTrack(current);
            createPlaylist();
        });

    // Load and play the current track
    function loadTrack(index) {
        audioPlayer.src = tracks[index];
        audioPlayer.play();
    }

    // Function to play the next song
    function nextTrack() {
        current++;
        if (current >= tracks.length) {
            current = 0; // Loop back to the first track
        }
        loadTrack(current);
    }

    // Event listener for when the song ends
    audioPlayer.addEventListener('ended', nextTrack);

    // Create the playlist dynamically
    function createPlaylist() {
        tracks.forEach((track, index) => {
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.href = track;
            a.innerText = "Track " + (index + 1);
            a.addEventListener('click', function(e) {
                e.preventDefault();
                current = index;
                loadTrack(current);
            });
            li.appendChild(a);
            playlist.appendChild(li);
        });
    }
};