let goal = 2000; // ml
let consumed = 0;

function addWater(amount) {
    consumed += amount;
    if (consumed > goal) consumed = goal;

    document.getElementById("consumed").textContent = consumed;
    let percent = (consumed / goal) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";

    const fill = document.getElementById("progress-fill");
    if (percent < 50) {
        fill.style.backgroundColor = "#00bfff"; // light blue
    } else if (percent < 100) {
        fill.style.backgroundColor = "#00cc66"; // green
    } else {
        fill.style.backgroundColor = "#ff6600"; // orange
    }
}