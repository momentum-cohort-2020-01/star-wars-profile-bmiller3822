//EDIT: I FINALLY MADE IT WORK!  WOO!  Final code is below:

let starWarsData

const yoda = document.querySelector("#yoda")

fetch('https://swapi.co/api/people/20/')
    .then(function (response) {
        return response.json()
    })

    .then(function (data) {
        let starWarsData = data
        for (const trait in data) {
            const listItem = document.createElement("p")
            console.log("Where are we?")
            if (trait == "birth_year" || trait == "height" || trait == "starships") {
                listItem.innerText = (trait + ": " + data[trait])
                if (data[trait] == "") {
                    listItem.innerText = (trait + ": None")
                }
                listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
                yoda.appendChild(listItem)
            }
        }
    })

fetch('https://swapi.co/api/people/20/')
    .then(res => res.json())
    .then(data => {
        return data.species
    })
    .then (speciesURL => {
        const fetches = speciesURL.map(url => fetch(url))
        return Promise.all(fetches)
    })
    .then(responses => {
        return Promise.all(responses.map(res => res.json()))
    })
    .then(dataArray=> {
        for (const species of dataArray){
            const listItem = document.createElement('p')
            listItem.innerText = ("Species: " + species.name)
            listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
            yoda.appendChild(listItem)
        }
    })

fetch('https://swapi.co/api/people/20/')
    .then(res => res.json())
    .then(data => {
        return data.homeworld
    })
    .then (homeworld => fetch (homeworld))
    .then(response => response.json())
    .then(data => {
            const listItem = document.createElement('p')
            listItem.innerText = ("Homeworld: " + data.name)
            listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
            yoda.appendChild(listItem)  
    })





//==================================Notes, failed attempts, and other nonsense ============================================



//This commented code works mostly, but I tried really hard to solve the dual URL problem (homeworld and species) 
//for Yoda using Promise.all and couldn't quite figure it out.  I feel like I'm on the cusp but don't 
//fully understand Promise.all enough to work through the problem.  Feel like I gave it a valient 
//effort this evening though!  I'm sure I could fix the problem by just using a new fetch() for the URL
//that is specific to homeworld and species, but that's not really the point of the exercise.  So, hopefully 
//I can get some answers tomorrow.  

//The code that mostly works is below:

//let starWarsData

// const yoda = document.querySelector("#yoda")

// fetch('https://swapi.co/api/people/20/')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data)
//         let starWarsData=data
//         for (const trait in data){
//             const listItem = document.createElement("p")
//             if (trait == "species" || trait == "homeworld" || trait == "birth_year" || trait =="height" ||trait=="starships"){
//             listItem.innerText = (trait + ": " + data[trait])
//             if (data[trait]==""){
//                 listItem.innerText=(trait + ": None")
//             }
//             listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
//             yoda.appendChild(listItem)
//         }
//     }})


//And here is the attempt to solve with Problem.all....Close but no cigar. 

//Example from class:
/* globals fetch */
// const profileDiv = document.querySelector('#profile')

// fetch('https://swapi.co/api/people/14/')
//   .then(res => res.json())
//   .then(data => {
//     console.log('The data we get back from the first fetch:', data)
//     const h2 = document.createElement('h2')
//     h2.innerText = data.name
//     profileDiv.appendChild(h2)
//     return data.films
//   })
//   .then(filmURLs => {
//     // console.log(filmURLs)
//     const fetches = filmURLs.map(url => fetch(url))
//     console.log(
//       'Here are the return values from the fetches we created by mapping over the film urls:',
//       fetches
//     )
//     return Promise.all(fetches)
//   })
//   .then(responses => {
//     console.log('Promise.all returns these responses:', responses)
//     return Promise.all(responses.map(res => res.json()))
//   })
//   .then(dataArray => {
//     console.log(
//       'Once we call .json() on the above, we get back this array of json objects',
//       dataArray
//     )
//     const ul = document.createElement('ul')
//     for (const film of dataArray) {
//       const li = document.createElement('li')
//       li.innerText = film.title
//       ul.appendChild(li)
//     }
//     profileDiv.appendChild(ul)
//   })

//Commenting this out for now but it's what I submitted for the homework.
// fetch('https://swapi.co/api/people/20/')
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (data) {
//         let starWarsData = data
//         let planetsURL = data.homeworld
//         let speciesURL = data.species[0]
//         var urls = [planetsURL, speciesURL]
//         Promise.all(urls.map(url =>
//             fetch(url)
//                 .then(function (urls) {
//                     return urls.json()
//                 })))
//         console.log(urls)
//         for (const trait in data) {
//             const listItem = document.createElement("p")
//             console.log("Where are we TWO?")
//             if (trait == "species" || trait == "homeworld") {
//                 listItem.innerText = (trait + ": " + data[trait])
//                 if (data[trait] == "") {
//                     listItem.innerText = (trait + ": None")
//                 }
//                 listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
//                 yoda.appendChild(listItem)
//             }
//         }
//     })





        // AHHHALGKJJKLSDKJLGJLKSDJKLF WHY DOESN'T THIS WORK?!
        // for (const trait in data) {
        //     const listItem = document.createElement("p")
        //     console.log("Where are we?") 
        //     if (trait == "species" || trait == "homeworld") {  
        //         listItem.innerText = (trait + ": " + data[trait])
        //         if (data[trait] == "") {
        //             listItem.innerText = (trait + ": None")
        //         }
        //         listItem.classList.add("lh-copy", "measure", "center", "f6", "black-70", "capitalize")
        //         yoda.appendChild(listItem)
        //     }
        // }
    // })





//May come back to this later:
// .then(function (data) {
//     let starWarsData = data
//     let planetsURL = data.homeworld
//     let speciesURL = data.species[0]
//     var urls = [planetsURL, speciesURL]
//     Promise.all(urls.map(url =>
//         fetch(url)
//             .then(function(urls){
//                 console.log(urls)
//                 return urls.json()
//             })
//     ))
//     })  

    //This didn't seem to work
//     Promise.all(urls.map(url =>
//         fetch(url).then(resp => resp.text())
//     )).then(texts => {

//     })
// })

//CHECK OUT DOCUMENTATION!

    //Stack Overflow
    // Promise.all(urls.map(u=>fetch(u))).then(responses =>
    //     Promise.all(responses.map(res => res.text()))
    // ).then(texts => {
    //     …
    // })

    //Treehouse
    // store urls to fetch in an array
// const urls = [
//     'https://dog.ceo/api/breeds/list',
//     'https://dog.ceo/api/breeds/image/random'
//   ];

//   // use map() to perform a fetch and handle the response for each url
//   Promise.all(urls.map(url =>
//     fetch(url)
//       .then(checkStatus)                 
//       .then(parseJSON)
//       .catch(logError)
//   ))
//   .then(data => {
//     // do something with the data
//   })


    // Promise.all(
    //     fetch(planetsURL)
    //     fetch(speciesURL)
    // )



    //potentially do a .map to pull that data out


    // .then(function(data){
    //     let starWarsData=data
    //     return data.species
    // })
    // .then(url => fetch(url))
    // .then(response => response.json())

// Attempt with Amy before documentation
// return Promise.all(
        // fetch(data.homeworld).then(response => response.json())
        // fetch(data.species[0]).then(response => response.json())


    //Need species, homeworld, birth year, height, starships
    // for in for objects

    // Just copying this for visibility purposes.
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



        //Copying for visibility purposes. 
        // let githubData

        // const dataSection = document.querySelector('#github-data')

        // fetch('https://api.github.com/orgs/momentum-cohort-2020-01')

        //   .then(response => response.json())
        //   .then(function(data) {
        //     githubData = data
        //     renderH2()
        //     return data.repos_url
        //   })
        //   // The argument to the next .then method is the repos_url
        //   // I immediately use that to make the next fetch request
        //   // I can return the value of calling the fetch method (remember, arrow syntax has an implicit return)
        //   .then(url => fetch(url))
        //   // because that return value is a promise, I can chain another .then on top of that
        //   // now I'm doing the same thing as above, making sure I have json to work with
        //   .then(response => response.json())
        //   // then chaining another .then to get the json data so I can use it.
        //   .then(function(data) {
        //     // helpful to give yourself a console.log to confirm you have what you need here
        //     console.log(data)
        //     // now that I have the data to use for values, I can construct my DOM elements
        //     // I could do this in a separate function, but I'll just show you how to do it here.
        //     const repoList = document.createElement('ul')
        //     dataSection.appendChild(repoList)
        //     // These classes are coming from Tachyons CSS
        //     repoList.classList.add(
        //       'list',
        //       'pl0',
        //       'ml0',
        //       'center',
        //       'mw6',
        //       'ba',
        //       'b--light-silver',
        //       'br3'
        //     )
        //     // Loop over the list of repos in that json data
        //     for (const repo of data) {
        //       // and for each one, create a new li element
        //       const listItem = document.createElement('li')
        //       listItem.innerText = repo.name
        //       listItem.classList.add('ph3', 'pv2', 'bb', 'b--light-silver')
        //       repoList.appendChild(listItem)
        //     }
        //   })

        // // this is a named function that creates and inserts an h2 element
        // // I didn't have to put it in a function, but it can clean up the code above
        // function renderH2() {
        //   const h2El = document.createElement('h2')
        //   h2El.innerText = githubData.name
        //   dataSection.appendChild(h2El)
        // }