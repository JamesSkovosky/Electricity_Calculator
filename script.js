function calculateKWh() {
    const watts = document.getElementById('watts').value;
    const hours = document.getElementById('hours').value;

    if (watts > 0 && hours > 0) {
        // kWh formula: (Watts * Hours) / 1000
        const kwh = (watts * hours) / 1000;
        document.getElementById('kwh-output').innerText = kwh.toFixed(2);
    } else {
        alert("Please enter valid positive numbers for both fields.");
    }
}
