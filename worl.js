const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");
let visibleCount = 11;

// Initial: show first 6
projects.forEach((card, index) => {
  if(index < visibleCount) card.style.display = "flex";
  else card.style.display = "none";
});

// Filter buttons
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    projects.forEach((card, index) => {
      if(filter === "all") {
        if(index < visibleCount) card.style.display = "flex";
        else card.style.display = "none";
      } else {
        if(card.classList.contains(filter)) card.style.display = "flex";
        else card.style.display = "none";
      }
    });

    // See More / See Less button visibility
    if(filter === "all") {
      seeMoreBtn.style.display = "inline-block";
      seeLessBtn.style.display = "none";
    } else {
      seeMoreBtn.style.display = "none";
      seeLessBtn.style.display = "none";
    }
  });
});

// See More
seeMoreBtn.addEventListener("click", () => {
  projects.forEach(card => card.style.display = "flex");
  seeMoreBtn.style.display = "none";
  seeLessBtn.style.display = "inline-block";
});

// See Less
seeLessBtn.addEventListener("click", () => {
  projects.forEach((card, index) => {
    if(index < visibleCount) card.style.display = "flex";
    else card.style.display = "none";
  });
  seeMoreBtn.style.display = "inline-block";
  seeLessBtn.style.display = "none";
});



// Mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(scrollY >= sectionTop){
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-brand', 'font-bold');
    if(link.getAttribute('href') === '#' + current){
      link.classList.add('text-brand', 'font-bold');
    }
  });
});











// Additional IGNORE edits in index.html
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  function openModal(src){
    modalImg.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal(){
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }

  // Example: add onclick to your button
  document.querySelectorAll('.project-card button').forEach(btn => {
    btn.addEventListener('click', function(){
      const imgSrc = this.closest('.project-card').querySelector('img').src;
      openModal(imgSrc);
    });
  });







// Typing effect
     const texts = [
    " I am a UI/UX Designer & Frontend Developer",
    "and a Graphic Designer"
  ];

  const typing = document.getElementById("typing");
  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {
    typing.textContent = texts[textIndex].substring(0, charIndex);
    charIndex++;

    if (charIndex > texts[textIndex].length) {
      setTimeout(() => {
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        typing.textContent = "";
        typeEffect(); // start next text immediately
      }, 1000); // wait before next text
    } else {
      setTimeout(typeEffect, 120);
    }
  }

  typeEffect();


  