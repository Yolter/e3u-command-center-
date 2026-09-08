// ==============================
// E3U Command Center v2
// The Grand Mafia
// ==============================

const music = document.getElementById("bgMusic");

if (music) {

    music.volume = 0.35;

    const saved = localStorage.getItem("e3u_music");

    if (saved === "on") {

        music.play().catch(()=>{});

    }

}

function toggleMusic(){

    if(!music) return;

    if(music.paused){

        music.play();
        localStorage.setItem("e3u_music","on");

    }else{

        music.pause();
        localStorage.setItem("e3u_music","off");

    }

}

// Плавное появление страниц

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .4s";
        document.body.style.opacity="1";

    },50);

});
