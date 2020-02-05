let starWarsData

const yoda = document.querySelector("#yoda")

fetch('https://swapi.co/api/people/20/')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let starWarsData=data
        for (const trait in data){
            const listItem = document.createElement("p")
            if (trait == "species" || trait == "homeworld" || trait == "birth_year" || trait =="height" ||trait=="starships"){
            listItem.innerText = (trait + ": " + data[trait])
            if (data[trait]==""){
                listItem.innerText=(trait + ": None")
            }
            listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
            yoda.appendChild(listItem)
        }
    }})



    

    //Need species, homeworld, birth year, height, starships
    // for in for objects

    // {
    //     "name": "Yoda",
    //     "height": "66",
    //     "mass": "17",
    //     "hair_color": "white",
    //     "skin_color": "green",
    //     "eye_color": "brown",
    //     "birth_year": "896BBY",
    //     "gender": "male",
    //     "homeworld": "https://swapi.co/api/planets/28/",
    //     "films": [
    //       "https://swapi.co/api/films/2/",
    //       "https://swapi.co/api/films/5/",
    //       "https://swapi.co/api/films/4/",
    //       "https://swapi.co/api/films/6/",
    //       "https://swapi.co/api/films/3/"
    //     ],
    //     "species": [
    //       "https://swapi.co/api/species/6/"
    //     ],
    //     "vehicles": [],
    //     "starships": [],
    //     "created": "2014-12-15T12:26:01.042000Z",
    //     "edited": "2014-12-20T21:17:50.345000Z",
    //     "url": "https://swapi.co/api/people/20/"
    //   }

    //Less pretty attempt:
            // const img = document.createElement("img")
        // img.src = "https://www.liveabout.com/thmb/EmVPGn0PSi_9aheUD8kD526TDYY=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yoda-lightsaber-temple-57153c4a3df78c3fa2fa549c.JPG"
        // img.classList.add("br-100", "h3", "w3", "dib", "f4", "tc")
        // const yodaList = document.createElement("ul")
        // yoda.appendChild(img)
        // yoda.appendChild(yodaList)
        // yodaList.classList.add("lh-copy", "measure", "center", "f6", "black-70")

 