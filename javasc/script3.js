


function Z1(id) {
    
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // start from beginning
    });

    
    const audioToPlay = document.getElementById(id);
    if (audioToPlay){
        audioToPlay.play();
    }
}
