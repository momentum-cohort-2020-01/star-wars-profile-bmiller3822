let starWarsData

const yoda = document.querySelector("#yoda")

fetch('https://swapi.co/api/people/?page=2')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let starWarsData=data
        const img = document.createElement("img")
        img.src = "https://www.liveabout.com/thmb/EmVPGn0PSi_9aheUD8kD526TDYY=/1000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/yoda-lightsaber-temple-57153c4a3df78c3fa2fa549c.JPG"
        img.classList.add("br-100", "h3", "w3", "dib")
        const yodaList = document.createElement("ul")
        yoda.appendChild(img)
        yoda.appendChild(yodaList)
        yodaList.classList.add(
            // Need to come back to this once I have data in there to see how it styles***
          )
        for (const trait of data){
            const listItem = document.createElement("li")
            listItem.innerText = trait.name //What??
        }
    })

    // for in for objects

    console.log('Nothing broken!')