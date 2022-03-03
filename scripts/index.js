const API_URL = "https://rickandmortyapi.com/api/character"
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.querySelector("#main")

const getCharacter = async (url) => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        if (data.results.length === 0) {
            swal.fire({
                title: 'Error!',
                text: 'No se ha encontrado ninguna pelicula',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } else {
            showCharacter(data.results)
        }
    } catch (error) {
        swal.fire({
            title: 'Error!',
            text: error,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }
}

getCharacter(API_URL)

const showCharacter = (element) => {
    main.innerHTML = ''
    element.forEach(character => {
        const { name, image, status, species, location} = character
        const characterDiv = document.createElement('div')

        characterDiv.classList.add('character')
        characterDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="character-info">
            <h3>${name}</h3>
            <span class="green">${status}</span>
        </div>
        <div class="overview">
        <h3>${species}</h3>
            <h3>${location.name}</h3>
        </div>
        `
        main.appendChild(characterDiv)
    });

}

// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     const searchTerm = search.value.toLocaleLowerCase()
//     if (searchTerm && searchTerm !== "") {
//         getCharacter(API_URL - searchTerm)
//         console.log(API_URL);
//         // search.value = ""
//     }else{
//         swal.fire({
//             title: 'Error!',
//             text: 'Do you want to continue',
//             icon: 'error',
//             confirmButtonText: 'Cool'
//         })
//     }
// })


    // const resultado  = data.filter(heroe => heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase)) || (heroe.superhero.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
