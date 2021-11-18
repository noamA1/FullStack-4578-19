"use strict";
const mediaSource = "pexels-blue-bird-7197663.mp4";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let videoContainer;
const video = document.createElement("video");

video.src = mediaSource;

video.loop = true;
videoContainer = {
  video,
  ready: false,
};

video.oncanplay = readyToPlayVideo;

function videoReady() {
  return videoContainer !== undefined && videoContainer.ready;
  //    {
  //     return true;
  //   } else {
  //     return false;
  //   }
}
console.log(canvas.height);

function readyToPlayVideo(e) {
  videoContainer.scale = Math.min(
    canvas.width / this.videoWidth,
    canvas.height / this.videoHeight
  );
  videoContainer.ready = true;
  requestAnimationFrame(updateCanvas);
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (videoReady) {
    const scale = videoContainer.scale;
    const vidH = videoContainer.video.videoHeight;
    const vidW = videoContainer.video.videoWidth;
    const top = canvas.height / 2 - (vidH / 2) * scale;
    const left = canvas.width / 2 - (vidW / 2) * scale;
    ctx.drawImage(videoContainer.video, left, top, vidW * scale, vidH * scale);
  }
  if (videoContainer.video.paused || videoContainer.video.ended) {
    drawPlayIcon();
  }
  requestAnimationFrame(updateCanvas);
}

function playPauseClick() {
  if (!videoReady) return;
  if (!videoContainer.video.paused) {
    return videoContainer.video.pause();
  }
  videoContainer.video.play();
  //   {
  // if (videoContainer.video.paused) {
  //   videoContainer.video.play();
  // } else {
  //   videoContainer.video.pause();
  // }
  //   }
}

function drawPlayIcon() {
  ctx.fillStyle = "#DDD";
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  const size = (canvas.height / 2) * 0.5;
  ctx.moveTo(canvas.width / 2 + size / 2, canvas.height / 2);
  ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 + size);
  ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 - size);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;
}

canvas.addEventListener("click", playPauseClick);
