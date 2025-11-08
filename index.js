const cursor = document.querySelector("#cursor");
const bg = document.querySelector(".bg");

let isInside = false;

bg.addEventListener("mouseover", () => {
  isInside = true;
});

bg.addEventListener("mouseout", () => {
  isInside = false;
});

bg.addEventListener("mousemove", (event) => {
  if (!isInside) return;

  const rect = bg.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const clampedX = Math.min(Math.max(x, 0), rect.width - cursor.offsetWidth);
  const clampedY = Math.min(Math.max(y, 0), rect.height - cursor.offsetHeight);

  cursor.style.transform = `translate3d(${clampedX}px, ${clampedY}px, 0)`;
});

const cursorImg = document.querySelector("#cursor-img");
bg.addEventListener("click", () => {
  if (cursorImg.src.includes("ghost.svg")) {
    cursorImg.src = "pumpkin.svg";
  } else {
    cursorImg.src = "ghost.svg";
  }
});
