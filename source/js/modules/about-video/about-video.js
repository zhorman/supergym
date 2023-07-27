const playButton = document.querySelector('.about__video-button');
const video = document.querySelector('.about__video-content');

playButton.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playButton.style.display = 'none';
  }
});

video.addEventListener('click', function () {
  if (!video.paused) {
    video.pause();
    playButton.style.display = 'block';
  }
});
