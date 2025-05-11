

const modal3 = document.getElementById("modal3");
const closeModal3 = document.getElementById("closeModal3");
const loginBtn = document.querySelector(".secondary"); 


loginBtn.addEventListener("click", () => {
  modal3.style.display = "block";
});


closeModal3.addEventListener("click", () => {
  modal3.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal3) {
    modal3.style.display = "none";
  }
});

