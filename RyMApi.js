document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.alignItems="center";
document.body.style.height="100vh";
document.body.style.backgroundColor="lightblue";

let div = document.createElement("div");
document.body.appendChild(div);
div.setAttribute("id","div");
div.style.height="100vh";
div.style.display="flex";
div.style.flexDirection="column";
div.style.alignItems="center";
div.style.justifyContent="space-Around"


let random = Math.floor(Math.random()*20);
async function rickYMorty(){ 
    try{
        let f = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
        let data = await f.json();
        let fEpisodio = await fetch(`${data.episode[0]}`)
        let dataEpisodio = await fEpisodio.json()
        console.log(dataEpisodio);
        return {image:data.image, name:data.name, episodes:data.episode.length,date:dataEpisodio.air_date, episodeName:dataEpisodio.name}
    } catch{
        console.error("error");
    }
}

rickYMorty()
    .then(function(data){
        console.log(data)
        //Creamos la imagen
        let img = document.createElement("img");
        img.src = data.image;
        document.getElementById("div").appendChild(img);
        img.style.borderRadius="15px"
        img.style.border="yellow 7px solid"

        //Creamos el nombre
        let nombre = document.createTextNode(`${data.name}`);
        let h2 = document.createElement("h2");
        h2.appendChild(nombre);
        div.appendChild(h2);
        h2.style.fontFamily="monospace";
        h2.style.fontSize="40px";
        h2.style.letterSpacing="10px";



        let btn = document.createElement("button");
        btn.setAttribute("id","btn");
        div.appendChild(btn);
        btn.appendChild(document.createTextNode("Nº de Episodios"))

        function numeroDeEpisodios(){
                    //Numero de episodios
            let episodios = document.createTextNode(`Aparece en un total de: ${data.episodes} episodios.`);
            let pEpi = document.createElement("p");
            pEpi.appendChild(episodios);
            div.appendChild(pEpi);
            pEpi.style.fontSize="20px";
            pEpi.style.fontFamily="monospace"

            let primerEpi = document.createTextNode(`Apareció por primera vez en el episodio ${data.name}, estrenado en ${data.date}`);
            let parrafoPrimerEpi = document.createElement("p");
            parrafoPrimerEpi.appendChild(primerEpi);
            div.appendChild(parrafoPrimerEpi);
            parrafoPrimerEpi.style.fontSize="20px";
            parrafoPrimerEpi.style.fontFamily="monospace";
            parrafoPrimerEpi.style.textAlign="center";
        }

        document.getElementById("btn").addEventListener("click", numeroDeEpisodios)



            //Creamos otra funcion asincrona porque los episodios están en otra url
            // async function episodio(){
            //     let fEpisodio = await fetch(`${data.episode[0]}`)
            //     let dataEpisodio = await fEpisodio.json()
            //     return dataEpisodio
            // }
            // episodio().then(function(dataEpisodio){
            //     //Y ahora ya creamos el texto de los episodios
            //     let primerEpi = document.createTextNode(`Apareció por primera vez en el episodio ${dataEpisodio.name}, estrenado en ${dataEpisodio.air_date}`);
            //     let parrafoPrimerEpi = document.createElement("p");
            //     parrafoPrimerEpi.appendChild(primerEpi);
            //     div.appendChild(parrafoPrimerEpi);
            //     parrafoPrimerEpi.style.fontSize="20px";
            //     parrafoPrimerEpi.style.fontFamily="monospace";
            //     parrafoPrimerEpi.style.textAlign="center";
            // })
    })

