// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
  let button = document.getElementById("takeoff");

  button.addEventListener("click", function (event) {
    if (confirm("Shuttle is ready for takeoff?")) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight";

      document.querySelector("#shuttleBackground").style.backgroundColor =
        "blue";

      document.getElementById("spaceShuttleHeight").innerHTML = "10000";
    }
  });

  let land = document.getElementById("landing");

  land.addEventListener("click", function (event) {
    alert("The shuttle is landing. Landing gear engaged.");

    document.getElementById("flightStatus").innerHTML ="The shuttle has landed.";

    document.querySelector("#shuttleBackground").style.backgroundColor = "green";

    document.getElementById("spaceShuttleHeight").innerHTML = "0";
  });

  let abortMission = document.getElementById("missionAbort");

  abortMission.addEventListener("click", function (event) {
    if (confirm("Do you really want to abort?")) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";

      document.getElementById("shuttleBackground").style.backgroundColor = "green";

      document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
  });

  let moveUp = document.getElementById("up");

  document.getElementById("rocket").style.position = "relative";

  document.getElementById("rocket").style.top = "0px";

  moveUp.addEventListener("click", function (event) {
    document.getElementById("rocket").style.top =
      parseInt(document.getElementById("rocket").style.top) - 10 + "px";

    let height = document.getElementById("spaceShuttleHeight").innerHTML;

    let value = parseInt(height) + 10000;

    document.getElementById("spaceShuttleHeight").innerHTML = value;
  });

  let moveDown = document.getElementById("down");

  document.getElementById("rocket").style.position = "relative";

  document.getElementById("rocket").style.top = "0px";

  moveDown.addEventListener("click", function (event) {
    document.getElementById("rocket").style.top =
      parseInt(document.getElementById("rocket").style.top) + 10 + "px";

    let height = document.getElementById("spaceShuttleHeight").innerHTML;

    let value = parseInt(height) - 10000;

    document.getElementById("spaceShuttleHeight").innerHTML = value;
  });

  let moveLeft = document.getElementById("left");

  document.getElementById("rocket").style.position = "relative";

  document.getElementById("rocket").style.left = "0px";

  moveLeft.addEventListener("click", function (event) {
    document.getElementById("rocket").style.left =
      parseInt(document.getElementById("rocket").style.left) - 10 + "px";
  });

  let moveRight = document.getElementById("right");

  document.getElementById("rocket").style.position = "relative";

  document.getElementById("rocket").style.left = "0px";

  moveRight.addEventListener("click", function (event) {
    document.getElementById("rocket").style.left =
      parseInt(document.getElementById("rocket").style.left) + 10 + "px";
  });
});
