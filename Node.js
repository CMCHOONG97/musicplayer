const fs = require('fs');
const path = require('path');

const musicFolder = './songs';
const outputFilePath = './music.json';

fs.readdir(musicFolder, (err, files) => {
    if (err) throw err;

    const tracks = files.filter(file => path.extname(file) === '.mp3');
    const musicList = {
        tracks: tracks.map(track => path.join(musicFolder, track))
    };

    fs.writeFile(outputFilePath, JSON.stringify(musicList), err => {
        if (err) throw err;
        console.log('Music list has been generated!');
    });
});