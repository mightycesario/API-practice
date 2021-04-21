const endPoint = "https://randomuser.me/api/?gender=female&results=70"
// const endPoint = "https://steppschuh-json-porn-v1.p.rapidapi.com/porn/"
let peopleDiv = document.querySelector(".people-data")
let craftDiv = document.querySelector(".craft-data")
let imageDiv = document.querySelector(".image-data")


// RANDOMUSER

fetch(endPoint)
    .then(responseData => {
        return responseData.json()
    })
    .then(parsedData => {
        console.log(parsedData)
        parsedData.results.forEach(person => {
            // console.log(person.name)
                for(let i = 0; i < 1; i++) {
                    let el = document.createElement("div")
                    el.setAttribute("class", "people")
                    el.innerHTML = `
                    <strong>First:</strong><br>${person.name.first}
                    <br>
                    <strong>Last:</strong><br>${person.name.last}
                    <br>
                    <strong>City:</strong><br>${person.location.country}
                    <br>
                    <strong>Cell:</strong><br>${person.cell}
                    <br><br>
                    <img src="${person.picture.large}">
                    <br><br>
                    `
                    document.body.appendChild(el)
                }                    
        })
    })
