// =======================================
// E3U OS Core v1.0
// =======================================

const DEFAULT_ROLE="player";

const ROLE_NAMES={
    player:"Игрок",
    warrior:"Воин",
    r4:"R4",
    r5:"R5",
    lr5:"LR5"
};

function getPlayerData(){

    const saved=localStorage.getItem("e3u-player");

    if(!saved) return null;

    return JSON.parse(saved);

}

function getRole(){

    const player=getPlayerData();

    if(!player) return DEFAULT_ROLE;

    if(player.rank==="LR5") return "lr5";
    if(player.rank==="R5") return "r5";
    if(player.rank==="R4") return "r4";
    if(player.warrior) return "warrior";

    return "player";

}

function updateTopProfile(){

    const player=getPlayerData();

    if(!player) return;

    const top=document.getElementById("topName");

    if(top) top.textContent=player.nickname;

}

function applyPermissions(){

    const role=getRole();

    document.querySelectorAll("[data-role]").forEach(el=>{

        const allow=el.dataset.role.split(",");

        el.style.display=allow.includes(role) ? "" : "none";

    });

}

window.addEventListener("DOMContentLoaded",()=>{

    updateTopProfile();

    applyPermissions();

});
