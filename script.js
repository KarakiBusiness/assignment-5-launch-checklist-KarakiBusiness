// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
       // picked planets[array]
   }).then(function () {
       console.log(listedPlanets);
       let planetName = pickPlanet(listedPlanets);
       addDestinationInfo(document, planetName.name, planetName.diameter, planetName.star, planetName.distance, planetName.moons, planetName.image);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })

   
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.querySelector("form");
   
   form.addEventListener("submit", function(event){
       event.preventDefault();
       console.log("testing");
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotNameInput.value;

        let coPilotNameInput = document.querySelector("input[name=copilotName]");
        let copilot = coPilotNameInput.value;
        
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);

        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = Number(cargoMassInput.value);

        // if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
        //     window.alert("All fields are required!");
            
        // }       
        // if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === NaN || cargoMassInput.value === NaN){
        //     window.alert("error. Field inputs must be correct value type.");
        // }

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
    
    });

});