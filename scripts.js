// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleHeight = 0;
    let rocket = document.getElementById('rocket');
    let moveRocket = 0;

    document.getElementById("takeoff").addEventListener("click", () => {
        let userAnswer = window.confirm('Confirm the shuttle is ready for takeoff');
        if (userAnswer) {
            flightStatus.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = shuttleHeight + 10000;
        }
    });

    document.getElementById('landing').addEventListener("click", () => {
        alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.transform = 'translateX(0px)';
    });

    document.getElementById('missionAbort').addEventListener("click", () => {
        let userAnswer = window.confirm('Confirm that you want to abort the mission');
        if (userAnswer) {
            flightStatus.innerHTML = 'Mission Aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.transform = 'translateX(0px)';
        }
    });

    document.getElementById('up').addEventListener('click', () => {
        shuttleHeight += 10000
        spaceShuttleHeight.innerHTML = shuttleHeight;
    });

    document.getElementById('down').addEventListener('click', () => {
        shuttleHeight -= 10000
        spaceShuttleHeight.innerHTML = shuttleHeight;
    });

    document.getElementById('left').addEventListener('click', () => {
        moveRocket -= 10;
        if (moveRocket > -240){
            rocket.style.transform = `translateX(${moveRocket}px)`;  
        }    
    });

    document.getElementById('right').addEventListener('click', () => {
        moveRocket += 10;
        if (moveRocket < 240){
            rocket.style.transform = `translateX(${moveRocket}px)`;
        }      
    });
});
