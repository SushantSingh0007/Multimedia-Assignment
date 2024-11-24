// Get the video element
const demoVideo = document.getElementById('demo-video');

function playDemo() {
  demoVideo.play();
}

function pauseDemo() {
  demoVideo.pause();
}

function stopDemo() {
  demoVideo.pause();
  demoVideo.currentTime = 0; // Reset to the start
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
