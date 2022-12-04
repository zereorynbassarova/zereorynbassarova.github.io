let hamburger = document.querySelector(".mobile-menu")
let menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("open")
  hamburger.classList.toggle("open")
})

document.querySelectorAll(".link").forEach(n => n.
addEventListener("click", () => {
  menu.classList.remove("open")
  hamburger.classList.remove("open")
}))

function ShowHide() {
  let AllCourses = document.getElementById("AllCourses");
  if (AllCourses.style.display == "none") {
    AllCourses.style.display = "block";
    document.getElementById("Courses_taken").innerHTML="[hide]";
  } 
  else {
    AllCourses.style.display = "none";
    document.getElementById("Courses_taken").innerHTML="[show]";
  }
}

function Attachments() {
  let Attachments = document.getElementById("Attachments");
  if (Attachments.style.display == "none") {
    Attachments.style.display = "block";
    document.getElementById("button").innerHTML="[hide]";
  } 
  else {
    Attachments.style.display = "none";
    document.getElementById("button").innerHTML="[show]";
  }
}



