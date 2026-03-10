console.log("its aliiiiivvveeeee!!!");
("strict mode");
// !Window Object Brief
// alert("ALERT! You opened Maddy's website!"); // which is the same as:
// window.alert("Now that I have your attention...");

// let prompt = window.prompt("What is your favourite colour? 🙂", "Pink");
// if (prompt.length > 0) {
//   alert(`Your favourite colour is ${prompt} !!! 😃`);
// } else {
//   alert("Why didn't you add a colour 🥲");
// }
// console.log(prompt);

const images = [
  { src: "images/luffy_gear_5.jpg", name: "Luffy" },
  { src: "images/all might my hero.webp", name: "All Might" },
  { src: "images/naruto.jpg", name: "Obito" },
  { src: "images/saitama.webp", name: "Saitama" },
  { src: "images/jjk.jpg", name: "Nanami & Gojo" },
  { src: "images/demon slayer.avif", name: "Nezuko" },
  { src: "images/chopper.jpg", name: "Chopper" },
  { src: "images/senshi.jpg", name: "Senshi" },
  { src: "images/saiki.jpg", name: "Saiki" },
  { src: "images/alphonse and edward.jpg", name: "Alphonse and Edward" },
];

let currentIndex = 0;

// get elements by id for selected-Image, image-name, left-arrow and right arrow
// get elements by query selector all for .thumbnail
const selectedImage = document.getElementById("selected-image");
const imageName = document.getElementById("image-name");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const thumbnails = document.querySelectorAll(".thumbnail"); // [elements,elements]

// to update the selected image and the displayed image name
function updateGallery() {
  selectedImage.src = images[currentIndex].src;
  imageName.innerText = images[currentIndex].name;
}

// currentIndex++;
// updateGallery();

// to change current index to the next one
// if at end of gallery, start from begining again
// call update gallery
function nextImage() {
  console.log("next image clicked");
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateGallery();
}

// to change current index to the prevous one
// if at begining of gallery, change to end
// call update gallery
function prevImage() {
  console.log("prev image clicked");
  currentIndex--;
  if (currentIndex === -1) {
    currentIndex = 9;
  }
  updateGallery();
}

// change current index to selected thumbnail index
// call updateGallery
function selectThumbnail(index) {
  currentIndex = index;
  updateGallery();
}

// add functions to elements by adding event listners or directly in the html
leftArrow.addEventListener("click", prevImage);
rightArrow.addEventListener("click", nextImage);
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    selectThumbnail(index);
  });
});

let menu = document.getElementById("menu");
if (menu) {
  menu.scrollLeft = localStorage.getItem("menu-scroll-position");
  menu.onscroll = function () {
    localStorage.setItem("menu-scroll-position", menu.scrollLeft);
  };
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var id = this.getAttribute("href").substr(1);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelector(`[id='${decodeURIComponent(id)}']`)
        .scrollIntoView({
          behavior: "smooth",
        });
    } else {
      document
        .querySelector(`[id='${decodeURIComponent(id)}']`)
        .scrollIntoView();
    }
    if (id === "top") {
      history.replaceState(null, null, " ");
    } else {
      history.pushState(null, null, `#${id}`);
    }
  });
});

var mybutton = document.getElementById("top-link");
window.onscroll = function () {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = "0";
  }
};

// this was a work in progress but ehhhhh
document.getElementById("theme-toggle").addEventListener("click", () => {
  if (document.body.className.includes("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("pref-theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("pref-theme", "dark");
  }
});
