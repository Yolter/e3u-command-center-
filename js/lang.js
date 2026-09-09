// =======================================
// E3U Command Center
// Language System v1.0
// =======================================

const E3U_LANG = {

  ru: {
    appName: "E3U HQ",
    commandCenter: "Командный центр",

    menu_home: "Главная",
    menu_operations: "Операции",
    menu_roster: "Состав",
    menu_forum: "Форум",
    menu_settings: "Настройки",

    welcome: "Добро пожаловать",
    nextOperation: "Следующая операция",
    quickActions: "Быстрые действия",
    news: "Новости штаба",

    bank: "Банк",
    truck: "Truck",
    bg: "BG",
    profile: "Профиль"
  },

  en: {
    appName: "E3U HQ",
    commandCenter: "Command Center",

    menu_home: "Home",
    menu_operations: "Operations",
    menu_roster: "Members",
    menu_forum: "Forum",
    menu_settings: "Settings",

    welcome: "Welcome",
    nextOperation: "Next operation",
    quickActions: "Quick actions",
    news: "HQ News",

    bank: "Bank",
    truck: "Truck",
    bg: "BG",
    profile: "Profile"
  },

  es: {
    appName: "E3U HQ",
    commandCenter: "Centro de Mando",

    menu_home: "Inicio",
    menu_operations: "Operaciones",
    menu_roster: "Miembros",
    menu_forum: "Foro",
    menu_settings: "Ajustes",

    welcome: "Bienvenido",
    nextOperation: "Próxima operación",
    quickActions: "Acciones rápidas",
    news: "Noticias del Cuartel",

    bank: "Banco",
    truck: "Truck",
    bg: "BG",
    profile: "Perfil"
  },

  ua: {
    appName: "E3U HQ",
    commandCenter: "Командний центр",

    menu_home: "Головна",
    menu_operations: "Операції",
    menu_roster: "Склад",
    menu_forum: "Форум",
    menu_settings: "Налаштування",

    welcome: "Ласкаво просимо",
    nextOperation: "Наступна операція",
    quickActions: "Швидкі дії",
    news: "Новини штабу",

    bank: "Банк",
    truck: "Truck",
    bg: "BG",
    profile: "Профіль"
  }

};

let currentLanguage = localStorage.getItem("e3u-language") || "ru";

function setLanguage(lang){
  currentLanguage = lang;
  localStorage.setItem("e3u-language", lang);
}

function getText(key){
  return E3U_LANG[currentLanguage][key] || key;
}
