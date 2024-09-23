let employeeId = 1;

// Get modal elements
const modal = document.getElementById("employeeModal");
const btn = document.getElementById("addEmployeeBtn");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTableBody");

// Show the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
form.onsubmit = function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${employeeId++}</td>
        <td>${name}</td>
        <td>${position}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="removeBtn">Remove</button>
        </td>
    `;

    tableBody.appendChild(row);
    modal.style.display = "none";

    // Attach event listeners to the buttons
    row.querySelector('.editBtn').addEventListener('click', () => {
        const newName = prompt("Edit employee name:", name);
        const newPosition = prompt("Edit employee position:", position);
        if (newName) row.cells[1].innerText = newName;
        if (newPosition) row.cells[2].innerText = newPosition;
    });

    row.querySelector('.removeBtn').addEventListener('click', () => {
        row.remove();
    });

    // Clear form fields
    form.reset();
};

// Hide the modal initially
modal.style.display = "none";

