// =======================================
// E3U Router v2
// =======================================

const ROUTES = {
  home: "pages/home.html",
  roster: "pages/roster.html",
  truck: "pages/truck.html",
  bank: "pages/bank.html",
  bg: "pages/bg.html",
  forum: "pages/forum.html",
  profile: "pages/profile.html",
  settings: "pages/settings.html",
  admin: "pages/admin.html"
};

async function openPage(page){

    if(!ROUTES[page]) return;

    const res = await fetch(ROUTES[page]);
    const html = await res.text();

    document.getElementById("app").innerHTML = html;

    document.querySelectorAll(".menu-item")
      .forEach(x=>x.classList.remove("active"));

    const btn=document.querySelector(`[data-page="${page}"]`);

    if(btn) btn.classList.add("active");

    localStorage.setItem("e3u-last-page",page);

}

window.openPage=openPage;

window.addEventListener("DOMContentLoaded",()=>{

    document.querySelectorAll("[data-page]")
      .forEach(btn=>{

        btn.onclick=(e)=>{

          e.preventDefault();

          openPage(btn.dataset.page);

        };

      });

    openPage(localStorage.getItem("e3u-last-page")||"home");

});
