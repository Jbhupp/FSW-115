
let myDiv = document.createElement("div")
document.body.appendChild(myDiv);

let header = document.createElement("h1");
header.textContent = "Pokemon Characters List!";
myDiv.appendChild(header);

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let pokemonData = JSON.parse(xhr.responseText)
        displayData(pokemonData.results);
    } else if (xhr.readyState == 4 && xhr.status !== 200) {
        let failed = document.createElement("h3");
        failed.textContent = "API failed, please try again.";
        document.body.appendChild(failed);
    }
}

function displayData(data) {
    data.forEach(function(element, index) {
        let newItem = document.createElement("h3");
        newItem.textContent = data[index].name;
        document.body.appendChild(newItem);

        let newList = document.createElement("ol");
        document.body.appendChild(newList);

        const xml = new XMLHttpRequest();
        xml.open("GET", `https://pokeapi.co/api/v2/pokemon/${index+1}`, true);
        xml.send();

        xml.onreadystatechange = function() {
            if (xml.readyState == 4 && xml.status == 200) {
                let apiData = JSON.parse(xml.responseText);
                displayDetails(apiData.types);
            } else if (xml.readyState == 4 && xml.status !== 200) {
                let failed = document.createElement("li");
                failed.textContent = "API failed, please try again.";
                newList.appendChild(failed);
            }
        }

        function displayDetails(data) {
            data.forEach(function(element, index) {
                let newListEntry = document.createElement("li");
                newListEntry.textContent = data[index].type.name;
                newList.appendChild(newListEntry);
            })
        }
    });


};