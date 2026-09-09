const languages = ["ru","en","es","ua"];
let currentLang = localStorage.getItem("e3u-lang") || "ru";

const text = {
  ru:{
    welcome:"Добро пожаловать.",
    subtitle:"Операционный центр семьи E3U.",
    home:"🏠 Главная",
    operations:"📅 Операции",
    roster:"👥 Состав",
    forum:"💬 Форум",
    settings:"⚙ Настройки"
  },

  en:{
    welcome:"Welcome.",
    subtitle:"E3U Operational Center.",
    home:"🏠 Home",
    operations:"📅 Operations",
    roster:"👥 Members",
    forum:"💬 Forum",
    settings:"⚙ Settings"
  },

  es:{
    welcome:"Bienvenido.",
    subtitle:"Centro operativo de E3U.",
    home:"🏠 Inicio",
    operations:"📅 Operaciones",
    roster:"👥 Miembros",
    forum:"💬 Foro",
    settings:"⚙ Ajustes"
  },

  ua:{
    welcome:"Ласкаво просимо.",
    subtitle:"Операційний центр E3U.",
    home:"🏠 Головна",
    operations:"📅 Операції",
    roster:"👥 Склад",
    forum:"💬 Форум",
    settings:"⚙ Налаштування"
  }
};

function applyLanguage(lang){

  currentLang=lang;

  localStorage.setItem("e3u-lang",lang);

  document.documentElement.lang=lang;

  const t=text[lang];

  document.getElementById("welcome").textContent=t.welcome;
  document.getElementById("subtitle").textContent=t.subtitle;

  document.getElementById("menu-home").textContent=t.home;
  document.getElementById("menu-operations").textContent=t.operations;
  document.getElementById("menu-roster").textContent=t.roster;
  document.getElementById("menu-forum").textContent=t.forum;
  document.getElementById("menu-settings").textContent=t.settings;

  document.getElementById("langBtn").textContent=
    lang==="ru"?"🇷🇺":
    lang==="en"?"🇬🇧":
    lang==="es"?"🇪🇸":"🇺🇦";
}

document.addEventListener("DOMContentLoaded",()=>{

  applyLanguage(currentLang);

  document.getElementById("langBtn").onclick=()=>{

    let i=languages.indexOf(currentLang);

    i=(i+1)%languages.length;

    applyLanguage(languages[i]);

  };

});
