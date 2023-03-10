'use strict';


let h1s = document.getElementsByClassName("animated");

function startWave() {
    for (let i = 0; i < h1s.length; i++) {
        let h1 = h1s[i];
        let text = h1.innerText;
        h1.innerHTML = text.split("").map(letter => {
            console.log(letter);
            return `<span>` + letter + `</span>`;
        })
            .join("");
    }
    let delay = 200;

    for (let i = 0; i < h1s.length; i++) {
        let h1 = h1s[i];
        Array.from(h1.children).forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("wavy");
            }, index * 60 + delay);
        });
    }
}

function ChangePlaylist()
{
    let possibilities = [
        "https://open.spotify.com/embed/album/3uCJj8N2yanB0qzIi7xv1P?utm_source=generator", // Romantic Song playlist (bem brega)
        "https://open.spotify.com/embed/playlist/3AvOOX7jnNkrN6zAj20RDy?utm_source=generator", //essa eu fiz para você, fofa da marina
        "https://open.spotify.com/embed/playlist/2phFtNYykuOleAQFeCF2MD?utm_source=generator", // musicas romanticas br
    ]
    let playlist = document.getElementById("spotify");
    playlist.src = possibilities[Math.floor(Math.random() * possibilities.length)];
}

function ChangePhoto()
{
    let max_num = 62;

    let foto = document.getElementById("foto");
    foto.src = "fotos/" + Math.floor(Math.random() * max_num) + ".jpg";
}


setTimeout(() => {
    startWave();
    ChangePlaylist();
    ChangePhoto();
    setInterval(() => {
        ChangePhoto();
    }, 1000 * 30);
}, 2);
