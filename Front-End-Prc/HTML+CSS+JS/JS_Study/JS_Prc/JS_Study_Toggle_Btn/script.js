const toggleBtn = document.querySelector("#toggle-btn");
const container = document.querySelector(".container");

const emojiSets = [
  { id: 1, recipientId: 1, emoji: "🥹", count: 20 },
  { id: 2, recipientId: 1, emoji: "🤩", count: 15 },
  { id: 3, recipientId: 1, emoji: "😊", count: 10 },
  { id: 4, recipientId: 1, emoji: "🤫", count: 3 },
  { id: 5, recipientId: 1, emoji: "🤫", count: 1 },
  { id: 6, recipientId: 1, emoji: "🤫", count: 9 },
  { id: 7, recipientId: 1, emoji: "😎", count: 1 },
  { id: 8, recipientId: 1, emoji: "🥰", count: 19 },
  { id: 9, recipientId: 1, emoji: "🥰", count: 1 },
  { id: 10, recipientId: 1, emoji: "🥰", count: 50 },
];

function changeMod() {
  container.classList.toggle("light-mod");
  container.classList.toggle("dark-mod");
}

const topEmojis = emojiSets.sort((a, b) => b.count - a.count).slice(0, 3);
const topEmojiss = emojiSets
  .slice(0)
  .sort((a, b) => b.count - a.count)
  .slice(0, 3);

console.log(topEmojis);
console.log(topEmojiss);
toggleBtn.addEventListener("change", changeMod);
