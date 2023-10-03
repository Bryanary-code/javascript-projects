// Code your orbitCircumference function here:


// Code your missionDuration function here:


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 let circum = 0

function orbitCircumference(r) {

return circum = Math.round(Math.PI * 2 * r)
}

console.log(orbitCircumference(2000))

 let speed = 28000
 let radius = 2000

 function missionDuration (numOrbits, rad, speed) {

  let totalKm = numOrbits * orbitCircumference(rad)
  let orbitTime = totalKm/speed

  return Math.round(orbitTime * 100)/100
}

console.log(missionDuration(5, 2000, 28000))

 
let spacewalkHrs = 0

 function oxygenExpended(object) {
  spacewalkHrs = missionDuration(3, 200, 28000)
  return totalO2 = Math.round(object.o2Used(spacewalkHrs)*1000)/1000
}

 console.log(oxygenExpended(candidateD))
 