const API = "https://kursi-chats.dainisantars.repl.co"

let zina = document.querySelector('.manaZina');
let zinas = document.querySelector('.chataZinas');
let vards = document.querySelector('.vards');

function sutitZinu()
{
    console.log('sutitZinu() Darbojas');
    zinas.innerHTML = zinas.innerHTML + '<br />' + zina.value;
    fetch(API + '/sutit/' + vards.value + '/' + zina.value)
}

async function ieladetChataZinas()
{
    let datiNoServera = await fetch(API + '/lasit');
    let dati = await datiNoServera.text();
    // console.log(dati)
    zinas.innerHTML = dati;
}
setInterval(ieladetChataZinas, 1000)