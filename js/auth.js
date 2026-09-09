// =======================================
// E3U Command Center
// Auth v1.0
// =======================================

const PLAYER_KEY = "e3u-player";

function getPlayer() {
  const saved = localStorage.getItem(PLAYER_KEY);
  return saved ? JSON.parse(saved) : null;
}

function savePlayer(player) {
  localStorage.setItem(PLAYER_KEY, JSON.stringify(player));
}

function createPlayer(name) {

  const player = {
    id: Date.now(),
    nickname: name,
    clan: "E3U",
    rank: "R1",
    role: "Игрок",
    warrior: false,
    language: localStorage.getItem("e3u-language") || "ru",
    avatar: "",
    joined: new Date().toISOString(),
    status: "online"
  };

  savePlayer(player);

  return player;
}

function ensurePlayer() {

  let player = getPlayer();

  if (player) return player;

  let nickname = prompt("Введите игровой ник");

  while (!nickname || nickname.trim() === "") {
    nickname = prompt("Введите игровой ник");
  }

  return createPlayer(nickname.trim());
}

document.addEventListener("DOMContentLoaded", () => {

  const player = ensurePlayer();

  const name = document.querySelector(".name");
  const subtitle = document.querySelector(".subtitle");

  if (name) name.textContent = player.nickname;

  if (subtitle)
    subtitle.textContent = `${player.clan} • ${player.rank} • ${player.role}`;

});
