// ================= PROJECT FILTER + SEE MORE =================

const filterBtns = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-card");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const seeLessBtn = document.getElementById("seeLessBtn");

let visibleCount = 14;

// Show limited projects
function showLimitedProjects(list, limit) {
  list.forEach((card, index) => {
    card.style.display = index < limit ? "flex" : "none";
  });
}

// Initial Load
showLimitedProjects(projects, visibleCount);

// Filter
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    const filtered = filter === "all"
      ? [...projects]
      : [...projects].filter(card => card.classList.contains(filter));

    projects.forEach(card => card.style.display = "none");
    showLimitedProjects(filtered, visibleCount);

    if (seeMoreBtn && seeLessBtn) {
      seeMoreBtn.style.display =
        filtered.length > visibleCount ? "inline-block" : "none";
      seeLessBtn.style.display = "none";
    }
  });
});

// See More
if (seeMoreBtn) {
  seeMoreBtn.addEventListener("click", () => {
    projects.forEach(card => card.style.display = "flex");
    seeMoreBtn.style.display = "none";
    if (seeLessBtn) seeLessBtn.style.display = "inline-block";
  });
}

// See Less
if (seeLessBtn) {
  seeLessBtn.addEventListener("click", () => {
    showLimitedProjects(projects, visibleCount);
    seeMoreBtn.style.display = "inline-block";
    seeLessBtn.style.display = "none";
  });
}


// ================= MOBILE MENU =================

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}


// ================= ACTIVE LINK ON SCROLL =================

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-brand', 'font-bold');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-brand', 'font-bold');
    }
  });

});


// ================= MODAL SYSTEM =================

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(src) {
  if (!modal) return;

  modalImg.src = src;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove('flex');
  modal.classList.add('hidden');
  document.body.style.overflow = "auto";
}

// Button click
document.querySelectorAll('.project-card button').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const img = this.closest('.project-card').querySelector('img');
    openModal(img.src);
  });
});

// Click outside close
if (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// ESC close
window.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});


// ================= TYPING EFFECT =================

const texts = [
  "I am a  Graphic Designer",
  " "
];

const typing = document.getElementById("typing");

if (typing) {

  let textIndex = 0;
  let charIndex = 0;

  function typeEffect() {

    if (charIndex < texts[textIndex].length) {
      typing.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(() => {
        typing.textContent = "";
        charIndex = 0;
        textIndex = (textIndex + 1) % texts.length;
        typeEffect();
      }, 1500);
    }
  }

  typeEffect();
}