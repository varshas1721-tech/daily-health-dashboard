let stepGoal = 5000;
let stepsWalked = 0;

function addSteps(amount) {
    stepsWalked += amount;
    if (stepsWalked > stepGoal) stepsWalked = stepGoal;

    document.getElementById("steps-walked").textContent = stepsWalked;
    let percent = (stepsWalked / stepGoal) * 100;
    document.getElementById("steps-fill").style.width = percent + "%";

    const fill = document.getElementById("steps-fill");
    if (percent < 50) {
        fill.style.backgroundColor = "#ffcc00"; // yellow
    } else if (percent < 100) {
        fill.style.backgroundColor = "#33cc33"; // green
    } else {
        fill.style.backgroundColor = "#ff6600"; // orange
    }
}