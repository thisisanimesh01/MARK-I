const mark1 = document.getElementById("mark1");
const introText = document.getElementById("introText");

const lines = [
  "Hello, I am Mark 1 — the beginning of Iron Man.",
  "Built in a cave, with scraps, by Tony Stark himself.",
  "Heavy, rough, but powerful enough to change everything.",
  "I’m not sleek, but I’m legendary — the first of many."
];

let typingInterval;
let isTyping = false;

mark1.addEventListener("mouseover", () => {
  if (isTyping) return;
  isTyping = true;
  introText.textContent = "";
  introText.style.visibility = "visible";

  const text = lines.join("\n");
  let i = 0;

  typingInterval = setInterval(() => {
    introText.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(typingInterval);
      isTyping = false;
    }
  }, 35); // typing speed
});

mark1.addEventListener("mouseout", () => {
  clearInterval(typingInterval);
  introText.textContent = "";
  introText.style.visibility = "hidden";
  isTyping = false;
});
