// =======================================
// E3U Command Center
// Router v1.0
// =======================================

const PAGES = {
  home: "pages/home.html",
  profile: "pages/profile.html",
  truck: "pages/truck.html",
  bank: "pages/bank.html",
  bg: "pages/bg.html",
  forum: "pages/forum.html",
  settings: "pages/settings.html",
  admin: "pages/admin.html"
};

let currentPage = "home";

async function loadPage(page){

  if(!PAGES[page]) return;

  currentPage = page;

  const response = await fetch(PAGES[page]);

  const html = await response.text();

  const app = document.getElementById("app");

  if(app){
    app.innerHTML = html;
  }

  localStorage.setItem("e3u-page", page);

}

document.addEventListener("DOMContentLoaded",()=>{

  const lastPage = localStorage.getItem("e3u-page") || "home";

  loadPage(lastPage);

});
