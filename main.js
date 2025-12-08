// const playBtn = document.getElementById("playBtn");
// const playIcon = document.getElementById("playIcon");
// const pauseIcon = document.getElementById("pauseIcon");
// const vinyl = document.getElementById("vinyl");
// const progressFill = document.getElementById("progressFill");

// let isPlaying = false;
// let progress = 0;
// let progressInterval;

// playBtn.addEventListener("click", () => {
//   isPlaying = !isPlaying;

//   if (isPlaying) {
//     playIcon.style.display = "none";
//     pauseIcon.style.display = "block";
//     vinyl.classList.add("spinning");
//     startProgress();
//   } else {
//     playIcon.style.display = "block";
//     pauseIcon.style.display = "none";
//     vinyl.classList.remove("spinning");
//     stopProgress();
//   }
// });

// function startProgress() {
//   progressInterval = setInterval(() => {
//     progress += 0.5;
//     if (progress >= 100) {
//       progress = 0;
//       isPlaying = false;
//       playIcon.style.display = "block";
//       pauseIcon.style.display = "none";
//       vinyl.classList.remove("spinning");
//       stopProgress();
//     }
//     progressFill.style.width = progress + "%";
//   }, 100);
// }

// function stopProgress() {
//   clearInterval(progressInterval);
// }

// document.getElementById("prevBtn").addEventListener("click", () => {
//   progress = 0;
//   progressFill.style.width = "0%";
// });

// document.getElementById("nextBtn").addEventListener("click", () => {
//   progress = 0;
//   progressFill.style.width = "0%";
// });

document.getElementById("playBtn").addEventListener("click", function(){
  document.getElementById("embedPlayer").classList.remove("hidden");
  this.style.display = "none";
});
