document.addEventListener('DOMContentLoaded', function() {
    const files = [
        { name: "Track 1 - Chill Beats", file: "track1.mp3" },
        { name: "Track 2 - Smooth Jazz", file: "track2.mp3" },
    ];

    const fileList = document.getElementById("file-list");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");
    const currentTrackDisplay = document.getElementById("current-track");

    // Dynamically populate file list
    files.forEach(file => {
        const fileItem = document.createElement("li");
        fileItem.textContent = file.name;
        fileItem.dataset.file = file.file;

        // Event listener for clicking on track
        fileItem.addEventListener("click", function() {
            console.log(`Selected file: ${fileItem.dataset.file}`); // Debugging
            audioSource.src = fileItem.dataset.file; // Update audio source
            audioPlayer.load(); // Reload the audio element with the new source
            audioPlayer.play(); // Automatically start playing
            currentTrackDisplay.textContent = file.name; // Update "Now Playing"
        });

        fileList.appendChild(fileItem);
    });
});
