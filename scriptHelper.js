// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
   div.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
  
}

function validateInput(testInput) {
   let numberInput = Number(testInput)

   if(testInput === ""){
       return "Empty";
   }else if(isNaN(numberInput)) {
        return "Not a number";
   }else if(isNaN(numberInput) === false){
       return "Is a number";
   }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

    if(validateInput(pilot) ==="Empty" ||validateInput(copilot) ==="Empty" ||validateInput(fuelLevel) ==="Empty" ||validateInput(cargoLevel) ==="Empty"){
        alert("all fields are required!");
    }else if(validateInput(pilot)==="Is a number" ||validateInput(copilot)==="Is a number" ||validateInput(fuelLevel)==="Not a number" ||validateInput(cargoLevel)==="Not a number"){
        window.alert("Make sure you enter valid info for each field!");
    }else{
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for liftoff`
        copilotStatus.innerHTML = `copilot ${copilot} is ready for liftoff`
        if(fuelLevel < 10000 || cargoLevel > 10000){
            
            fuelStatus.innerHTML = "Not Enough Fuel"
            cargoStatus.innerHTML = "Too heavy for liftoff"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "#C7254E";
       }else if (fuelLevel >=10000 && cargoLevel < 10000){
        launchStatus.color = "green";
        fuelStatus.innerHTML = "Enough Fuel"
        cargoStatus.innerHTML = "Cargo Weight: OK"
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style.color = "green";

        }
    }

}

    async function myFetch() {
        let planetsReturned;

        planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function
        (response) {
            return response.json()
            });

        return planetsReturned;
    }

    

    function pickPlanet(planets) {
        picked = Math.floor(Math.random()*planets.length)
        return planets[picked];
    }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
