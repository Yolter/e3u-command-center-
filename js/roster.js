// =======================================
// E3U Roster System v1.0
// =======================================

const STORAGE_KEY="e3u_players";

async function rosterLoad(){

    const saved=localStorage.getItem(STORAGE_KEY);

    if(saved) return JSON.parse(saved);

    const res=await fetch("data/players.json");

    const players=await res.json();

    localStorage.setItem(STORAGE_KEY,JSON.stringify(players));

    return players;

}

function rosterSave(players){

    localStorage.setItem(STORAGE_KEY,JSON.stringify(players));

}

function nextId(players){

    return "E3U-"+String(players.length+1).padStart(3,"0");

}

window.E3URoster={

    async all(){

        return await rosterLoad();

    },

    async add(player){

        const players=await rosterLoad();

        player.id=nextId(players);

        players.push(player);

        rosterSave(players);

    },

    async remove(id){

        let players=await rosterLoad();

        players=players.filter(p=>p.id!==id);

        rosterSave(players);

    },

    async update(id,data){

        const players=await rosterLoad();

        const player=players.find(x=>x.id===id);

        if(player) Object.assign(player,data);

        rosterSave(players);

    }

};
