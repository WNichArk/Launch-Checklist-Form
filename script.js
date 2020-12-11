// Write your JavaScript code here!


window.addEventListener("load", function(){
   //Get form data
    
   let formSubmit = document.getElementById("formSubmit");
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
   //Assign faulty items
   let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
   let launchStatus = document.getElementById("launchStatus");
   let missionTarget = document.getElementById("missionTarget");

   //fetch
fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(res){
   res.json().then(function(json){
      missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
           <li>Name: ${json[2].name}</li>
           <li>Diameter: ${json[2].diameter}</li>
           <li>Star: ${json[2].star}</li>
           <li>Distance from Earth: ${json[2].distance}</li>
           <li>Number of Moons: ${json[2].moons}</li>
        </ol>
        <img src="${json[2].image}"></img>
        ` 
      })
   })  


   //Adds event listener to submit button
   formSubmit.addEventListener("click", function(event){
   
      if(pilotName.value === ""){
         window.alert("All fields required.")
         event.preventDefault();
         }else{
            pilotStatus.innerText = `Pilot: ${pilotName.value} ready for launch.`
         }
      if(pilotName.value === ""){
         window.alert("All fields required.")
         event.preventDefault();
         }else{
               copilotStatus.innerText = `Co-pilot: ${copilotName.value} ready for launch.`
         }   
   //If cargoMass or fuelLevel are not numbers, alert.
      if(isNaN(cargoMass.value) || isNaN(fuelLevel.value) || fuelLevel.value === "" || cargoMass.value === "" ){
         window.alert("Fuel Level and Cargo Mass must be a valid number.")
         event.preventDefault();
         }else{
            checkValues();
         }

      })
   
function checkValues(){
      if(fuelLevel.value < 10000){
         fuelStatus.innerText = "Not enough fuel for journey."
         shuttleNotReady();
      }else{
         shuttleReady();
      }
      if(cargoMass.value > 10000){
         cargoStatus.innerText = "Mass too high for shuttle launch."
         shuttleNotReady();
      }else{
         shuttleReady();
      }
   }

function shuttleReady(){
      launchStatus.style.color = "green";
      launchStatus.innerText = "Shuttle is ready for launch";
      faultyItems.style.visibility = "visible";
      event.preventDefault();
   }

function shuttleNotReady(){
      launchStatus.style.color = "red";
      launchStatus.innerText = "Shuttle not ready for launch."
      faultyItems.style.visibility = "visible";
      event.preventDefault();
   }
})
