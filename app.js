let bool = 0;
const heroImgs = document.querySelector('.hero-images');
const navNext = document.querySelector('#nav-next');
const navPrev = document.querySelector('#nav-prev');
const sliderContainer = document.querySelector('.card-container');
const card = document.querySelector('.card').getBoundingClientRect();
const videoControl = document.querySelector('.vid-control');
const video = document.querySelector('.video');

window.addEventListener("resize", () => {
   const navColumn = document.querySelector(".nav-column");
   const spaceAround = document.querySelector(".space-around");
   if (document.body.clientWidth > 950) {
      navColumn.style.display = 'flex';
      spaceAround.style.display = 'flex';
      document.querySelector(".nav").height = '50vh';
   }
});


function wrap() {
   const navColumn = document.querySelector(".nav-column");
   const spaceAround = document.querySelector(".space-around");
   let width = document.querySelector('.nav').width;
   if (bool === 0) {
      navColumn.style.display = 'flex';
      spaceAround.style.display = 'flex';
      document.querySelector(".nav").height = '50vh';
      bool += 1;
   } else {
      navColumn.style.display = 'none';
      spaceAround.style.display = 'none';
      bool -= 1;
   }
}
heroImgs.addEventListener("mouseover", function(e) {
 const heroImages = document.querySelectorAll('.hero-img');
 let targetImg = e.target;
 if (targetImg.classList.contains('hero-img')) {
 if (targetImg.classList.contains('active')) {
   targetImg.style.width = '50%';
   targetImg.classList.add('active');
 }
 heroImages.forEach(item=> {
   item.style.width = '20%';
   item.classList.remove('active');
   });
 targetImg.style.width = '50%';
 targetImg.classList.add('active');
}
});

navNext.onclick = function() {
   sliderContainer.scrollLeft += card.width * 2;
}
navPrev.onclick = function() {
   sliderContainer.scrollLeft -= card.width;
}
let counter = 0;
video.addEventListener('click', () => {
   if (counter === 0) {
      video.pause();
      counter += 1;
      videoControl.innerText = 'play_arrow';
   } else {
      video.play();
      counter -= 1;
      videoControl.innerText = 'pause';
   }
});
video.addEventListener('mouseover', () => {
   videoControl.style.display = 'inline-block';
})
video.addEventListener('mouseout', () => {
   videoControl.style.display = 'none';
})