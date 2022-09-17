
const getData = async () =>{
    try{
        const response = await axios.get("https://swapi.dev/api/people/2")
        const world = await axios.get("https://swapi.dev/api/planets/2/")
        const film = await axios.get('https://swapi.dev/api/films/2/')
        displayDataToDom(response, world, film)
    }
    catch(error){
        console.log(error)
    }
}

getData()

function displayDataToDom(response, world, film){
    console.log(world)

    const person = document.querySelector("#names")
    person.textContent = `Name: ${response.data.name}`
    document.body.appendChild(person)

    const home = document.querySelector("#world")
    home.textContent = `Home World: ${world.data.name}`
    document.body.appendChild(home)

    const epi = document.querySelector("#episode")
    epi.textContent = `Movie: ${film.data.title}`
    document.body.appendChild(epi)
    
}