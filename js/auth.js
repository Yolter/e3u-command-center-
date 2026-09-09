// =======================================
// E3U HQ - Authentication v2
// =======================================

const PLAYER_KEY = "e3u-player";

function getPlayer(){
    const saved = localStorage.getItem(PLAYER_KEY);
    return saved ? JSON.parse(saved) : null;
}

function savePlayer(player){
    localStorage.setItem(PLAYER_KEY, JSON.stringify(player));
}

function logoutPlayer(){
    localStorage.removeItem(PLAYER_KEY);
}

document.addEventListener("DOMContentLoaded",()=>{

    const loginBtn=document.getElementById("loginBtn");

    if(!loginBtn) return;

    loginBtn.addEventListener("click",()=>{

        const nickname=document.getElementById("nickname").value.trim();
        const rank=document.getElementById("rank").value;
        const language=document.getElementById("language").value;

        if(nickname===""){
            alert("Введите игровой ник.");
            return;
        }

        const player={
            id:Date.now(),
            nickname,
            clan:"E3U",
            rank,
            role:rank==="LR5"?"LR5":rank==="R5"?"R5":rank==="R4"?"R4":"Игрок",
            language,
            warrior:false,
            avatar:"",
            joined:new Date().toISOString(),
            status:"online"
        };

        savePlayer(player);

        localStorage.setItem("e3u-language",language);

        alert("Добро пожаловать, "+nickname+"!");

    });

});
