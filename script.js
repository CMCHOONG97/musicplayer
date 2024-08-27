window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var audioPlayer = document.getElementById('audioPlayer');
    var playlist = document.getElementById('playlist');
    var tracks = [];
    var current = 0;

    fileInput.addEventListener('change', function(e) {
        var files = e.target.files;
        playlist.innerHTML = ''; // 清空当前的播放列表
        tracks = [];

        for (var i = 0; i < files.length; i++) {
            var li = document.createElement('li');
            li.textContent = files[i].name;
            playlist.appendChild(li);
            tracks.push(files[i]);
        }

        // 播放第一个文件
        if (tracks.length > 0) {
            playTrack(0);
        }
    });

    // 播放指定的歌曲
    function playTrack(index) {
        current = index;
        var file = tracks[current];
        var url = URL.createObjectURL(file);
        audioPlayer.src = url;
        audioPlayer.play();
    }

    // 播放下一首歌曲
    function nextTrack() {
        current++;
        if (current >= tracks.length) {
            current = 0; // 循环回到第一首
        }
        playTrack(current);
    }

    // 当歌曲播放完毕时自动播放下一首
    audioPlayer.addEventListener('ended', nextTrack);

    // 点击播放列表中的歌曲时，播放对应的歌曲
    playlist.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            var index = Array.prototype.indexOf.call(playlist.children, e.target);
            playTrack(index);
        }
    });
};