let btn = document.getElementById("the-button");
let links = document.getElementsByClassName("the-links");
let circul = document.getElementById("circul");
let logo = document.getElementById("the-logo");
let lg = document.getElementById("h1");
let imp = document.getElementsByClassName("imp");
let email = document.getElementById("email");
const sp = document.getElementById("swapnilproject");
const mp = document.getElementById("mp");

mp.addEventListener("click", () => {
  window.open("https://webcrafters-spacetour.netlify.app/home.html");
})


sp.addEventListener("click", () => {
  window.open("https://www.figma.com/design/p5njDEFr7R6o6c56Iev3dA/Untitled?node-id=0-1&p=f&t=JeVBqdBSNvAYl1lF-0")
})
email.addEventListener('click', () => {
  const textToCopy = "ryuk67678@gmai.com";
  
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Ryuk's E-mail copied");
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const opt = document.getElementById("opt");

  //     options tonggle button

  menu.addEventListener("click", () => {
    menu.className = "fa-solid fa-xmark"
    if (opt.style.display === "block") {
      opt.style.display = "none";
      menu.className = "fa-solid fa-bars"
    } else {
      opt.style.display = "block";
    }
   opt.addEventListener("click", () => {
     menu.className = "fa-solid fa-bars"
     opt.style.display = "none";
    })
  });
});

for (let element of imp) {
  element.addEventListener("mouseenter", () => {
    gsap.to(circul, {
      scale: 3,
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(circul, {
      scale: 1,
    });
  });
}


lg.addEventListener("mouseenter", () => {
  gsap.to(circul, {
    scale: 4 
 });
})
lg.addEventListener("mouseleave", () => {
  gsap.to(circul, {
    scale: 1 
 });
})

logo.addEventListener("mouseenter", () => {
  gsap.to(circul, {
    scale: 6 
 });
})
logo.addEventListener("mouseleave", () => {
  gsap.to(circul, {
    scale: 1 
 });
})

window.addEventListener("mousemove", (dets) => {
  gsap.to(circul, {
    x: dets.clientX,
    y: dets.clientY
  })
});

Array.from(links).forEach((link) => {
  link.addEventListener("mouseenter", () => {
    document.body.style.cursor = "none";
      gsap.to(circul, {
         scale: 4 
      });
  });
});
Array.from(links).forEach((link) => {
  link.addEventListener("mouseleave", () => {
      gsap.to(circul, { scale: 1 });
  });
});
// scroll animation 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});