document.getElementById('studentform').addEventListener('submit', function(e) {
    e.preventDefault(); // 

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const course = document.getElementById('course').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const genderInputs = document.getElementsByName('gender');
    let gender = '';
    for (const input of genderInputs) {
        if (input.checked) {
            gender = input.nextElementSibling.innerText; // Get label text
            break;
        }
    }


    if (name === '' || age === '' || gender === '' || course === '' || email === '') {
        alert("Please fill all fields!");
        return; 
    }

    const tableBody = document.getElementById('detailsTable').querySelector('tbody');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button onclick="update(this)" class="btn">Delete</button></td>
    `;

    tableBody.appendChild(newRow);

    // Clear form after saving
    // document.getElementById('studentform').reset();

    function update(btn) {
        const rowToDelete = btn.closest('tr'); // Find the closest <tr> (row)
        if (rowToDelete) {
            rowToDelete.remove(); // 
        }
    }
});
