function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function(event) {
        document.getElementById('statusReport').innerHTML = 'Houston! We have liftoff!'
    })
    missionAbort.addEventListener('mouseover', function(event) {
        document.getElementById('abortMission').style.backgroundColor = 'red'
    })
    missionAbort.addEventListener('mouseout', function(event) {
        document.getElementById('abortMission').style.backgroundColor = ''
    })
    if(confirm('Are you sure you want to abort the mission?')) {
        document.getElementById('statusReport').innerHTML = 'Mission aborted! Space shuttle returning home'
    }
}

window.addEventListener("load", init);
