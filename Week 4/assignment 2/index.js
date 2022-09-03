document.getElementById("submit").addEventListener("click", getData);
console.log("clicked")

function getData() {
    axios.get("https://rickandmortyapi.com/api/episode")

    .then(response => {
        //console.log(response.data);
        //console.log(response.data.results[0].name);
        for (let i = 0; i < response.data.results.length; i++){
            const episode = response.data.results[i].name;
            console.log(episode, "line 12");
            const div = document.createElement("li");
            div.textContent = episode;
            div.setAttribute("class", "episode");
            document.body.appendChild(div);
            div.addEventListener("click", function(){
                div.style.textDecoration = "line-through";
            });
        }
    })
    .catch(error => console.log(error));
};

