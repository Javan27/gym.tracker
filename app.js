const form = document.getElementById("workoutForm");
const table = document.getElementById("workoutTable");
const formError = document.getElementById("formError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const exercise = document.getElementById("exercise").value.trim();
    const sets = document.getElementById("sets").value;
    const reps = document.getElementById("reps").value;
    const weight = document.getElementById("weight").value;
    const muscle = document.getElementById("muscleGroup").value;

    // Validation
    if (!exercise || !sets || !reps || !weight || !muscle) {
        formError.textContent = "Please fill out all fields.";
        return;
    }

    formError.textContent = "";

    // Add row dynamically
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${exercise}</td>
        <td>${sets}</td>
        <td>${reps}</td>
        <td>${weight}</td>
        <td>${muscle}</td>
    `;
    table.appendChild(row);

    form.reset();
});

// Asynchronous Fetch Request
document.getElementById("loadTips").addEventListener("click", () => {
    fetch("workouts.json")
        .then(res => res.json())
        .then(data => {
            const random = data.tips[Math.floor(Math.random() * data.tips.length)];
            document.getElementById("tipText").textContent = random;
        });
});
