const PLAYER_KEY="e3u-player";

function getPlayer(){

    return JSON.parse(localStorage.getItem(PLAYER_KEY)||"null");

}

function savePlayer(player){

    localStorage.setItem(PLAYER_KEY,JSON.stringify(player));

}

function firstLogin(){

    if(getPlayer()) return;

    const nickname=prompt("Введите игровой ник");

    if(!nickname) return;

    const player={

        id:"TEMP-"+Date.now(),

        nickname,

        clan:"E3U",

        rank:"Recruit",

        department:null,

        warrior:false,

        language:localStorage.getItem("e3u-language")||"ru",

        avatar:"",

        approved:false

    };

    savePlayer(player);

}

document.addEventListener("DOMContentLoaded",()=>{

    firstLogin();

});
