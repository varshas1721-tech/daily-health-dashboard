function showTips() {
    const goal = document.getElementById("goal-select").value;
    const tipsDiv = document.getElementById("nutrition-tips");

    let tips = "";

    if (goal === "energy") {
        tips = `
            <ul>
                <li>Eat bananas, oats, and nuts for sustained energy</li>
                <li>Stay hydrated with water and coconut water</li>
                <li>Include lean proteins like eggs and lentils</li>
            </ul>
        `;
    } else if (goal === "weight-loss") {
        tips = `
            <ul>
                <li>Focus on fiber-rich foods like vegetables and whole grains</li>
                <li>Avoid sugary drinks and processed snacks</li>
                <li>Include healthy fats like avocado and olive oil</li>
            </ul>
        `;
    } else if (goal === "focus") {
        tips = `
            <ul>
                <li>Eat omega-3 rich foods like walnuts and flaxseeds</li>
                <li>Stay hydrated and avoid caffeine overload</li>
                <li>Include berries and dark chocolate in moderation</li>
            </ul>
        `;
    } else {
        tips = "";
    }

    tipsDiv.innerHTML = tips;
}