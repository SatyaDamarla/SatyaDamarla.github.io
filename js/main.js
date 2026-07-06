// Show/Hide Scroll-Up Button
window.addEventListener("scroll", () => {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY > 300) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
});

// Smooth Scroll to Top
document.getElementById("scroll-up").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu
const toggle = document.querySelector(".navbar-toggle");
const menu = document.querySelector(".navbar-menu");
const bars = document.querySelectorAll(".bar");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  bars.forEach((bar) => bar.classList.toggle("active"));
});

document.querySelectorAll(".navbar-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    bars.forEach((bar) => bar.classList.remove("active"));
  });
});

// Contact form
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Something went wrong. Please try again or email me directly.");
    }
  } catch (err) {
    alert("Something went wrong. Please try again or email me directly.");
  }
});

// Custom cursor (desktop only)
if (window.matchMedia("(hover: hover)").matches) {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function animateCursor() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;

    if (cursor) {
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    }
    if (follower) {
      follower.style.left = posX - 12 + "px";
      follower.style.top = posY - 12 + "px";
    }

    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, button").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor?.classList.add("active");
      follower?.classList.add("active");
    });
    link.addEventListener("mouseleave", () => {
      cursor?.classList.remove("active");
      follower?.classList.remove("active");
    });
  });
}
