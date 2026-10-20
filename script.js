// ഫോൾഡറിലുള്ള എല്ലാ ചിത്രങ്ങളുടെയും പാഥുകൾ
const imageList = [
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.05 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.05 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.55 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.55 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.55.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.56 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.56 (3).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.57 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.57.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.58 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.19.58.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.02 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.05 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.05 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.05.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.06.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.07 (1).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.07 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.08 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.08 (3).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.09 (2).jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.09.jpeg",
       "Photos/WhatsApp Unknown 2026-09-28 at 14.28.43/WhatsApp Image 2026-09-28 at 13.20.10.jpeg",
       
];

function setRandomImages() {
  const img1 = document.getElementById("gallery-img-1");
  const img2 = document.getElementById("gallery-img-2");

  if (!img1 || !img2 || imageList.length < 2) return;

  // ആദ്യത്തെ ചിത്രം റാണ്ടമായി തിരഞ്ഞെടുക്കുന്നു
  let randomIndex1 = Math.floor(Math.random() * imageList.length);
  
  // രണ്ടാമത്തെ ചിത്രം ആദ്യത്തേതിൽ നിന്നും വ്യത്യസ്തമായി തിരഞ്ഞെടുക്കുന്നു
  let randomIndex2;
  do {
    randomIndex2 = Math.floor(Math.random() * imageList.length);
  } while (randomIndex2 === randomIndex1);

  // ഇമേജ് ടാഗുകളുടെ src മാറ്റി നൽകുന്നു
  img1.src = imageList[randomIndex1];
  img2.src = imageList[randomIndex2];
}

// പേജ് ലോഡ് ആകുമ്പോൾ തന്നെ ചിത്രങ്ങൾ മാറാൻ
window.onload = setRandomImages;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".gallery-container");
  if (!container) return;

  // 1. എച്ച്.ടി.എം.എല്ലിലുള്ള എല്ലാ ഇമേജ് ടാഗുകളെയും ഡൈനാമിക് ആയി Wrap ചെയ്യുന്നു
  const images = Array.from(container.querySelectorAll("img"));
  images.forEach((img) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    img.parentNode.insertBefore(item, img);
    item.appendChild(img);
  });

  // 2. സ്ക്രോൾ ചെയ്യുമ്പോൾ ഫേഡ്-ഇൻ ഇഫക്റ്റ് വരാൻ IntersectionObserver ഉപയോഗിക്കുന്നു
  const items = document.querySelectorAll(".gallery-item");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});

// Variable ഒരു തവണ മാത്രംDeclare ചെയ്യുക
const bgm = document.getElementById("bgm");
const banner = document.getElementById("memory-banner");

function startExperience() {
  // 1. Music Play ആകുന്നു
  if (bgm && bgm.paused) {
    bgm.volume = 0.5;
    bgm.play().catch(err => console.log(err));
  }

  // 2. Banner hide ആകുന്നു
  if (banner) {
    banner.classList.add("hide-banner");
  }
}

// Screen-ൽ എവിടെ touch/click/scroll ചെയ്താലും BGM ആരംഭിക്കുകയും banner മാറുകയും ചെയ്യും
['touchstart', 'pointerdown', 'click', 'scroll'].forEach(event => {
  window.addEventListener(event, startExperience, { once: true });
});

function startExperience() {
  // 1. BGM Play aakunnu
  if (bgm && bgm.paused) {
    bgm.volume = 0.5;
    bgm.play().catch(err => console.log(err));
  }

  // 2. Banner hide aakunnu
  if (banner) {
    banner.classList.add("hide-banner");
    banner.style.transform = "translateX(-100%)";
    banner.style.opacity = "0";
  }
}

const photos = document.querySelectorAll(".gallery-container");

function checkPhotoPosition() {
  photos.forEach(photo => {
    const rect = photo.getBoundingClientRect();
    
    // Photo viewport-inte 200px mukalil ethumbol BW aakum
    if (rect.top <= -5) {
      photo.classList.add("desaturated");
    } else {
      photo.classList.remove("desaturated");
    }
  });
}

window.addEventListener("scroll", checkPhotoPosition);
window.addEventListener("load", checkPhotoPosition);

function checkPhotoPosition() {
  const photos = document.querySelectorAll('img'); // Ella images-ne-yum direct select cheyyunnu
  
  photos.forEach(photo => {
    const rect = photo.getBoundingClientRect();
    
    // Photo viewport-inte 300px mukalil/samipathu ethumbol
    if (rect.top <= 15) {
      photo.classList.add("desaturated");
    } else {
      photo.classList.remove("desaturated");
    }
  });
}

window.addEventListener("scroll", checkPhotoPosition);
window.addEventListener("load", checkPhotoPosition);
window.addEventListener("resize", checkPhotoPosition);

