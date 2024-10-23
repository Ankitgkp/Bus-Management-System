document.getElementById('add-bus-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const busNumber = document.getElementById('bus-number').value;
    const busRoute = document.getElementById('bus-route').value;
    const departureTime = document.getElementById('departure-time').value;

    // Create a new row in the bus timings table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${busNumber}</td>
                        <td>${busRoute}</td>
                        <td>${departureTime}</td>
                        <td><button class="remove-btn">Remove</button></td>`;
    
    // Add the new row to the bus timings table
    document.querySelector('#bus-timings tbody').appendChild(newRow);

    // Clear the input fields
    document.getElementById('bus-number').value = '';
    document.getElementById('bus-route').value = '';
    document.getElementById('departure-time').value = '';
});

// Event delegation for removing buses
document.querySelector('#bus-timings tbody').addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('tr').remove(); // Remove the corresponding row
    }
});

// Lost and Found functionality
document.getElementById('lost-found-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const item = document.getElementById('item').value;
    const contact = document.getElementById('contact').value;
    
    const lostFoundItemsDiv = document.getElementById('lost-found-items');
    lostFoundItemsDiv.innerHTML += `<p><strong>${item}</strong> - Contact: ${contact}</p>`;
    
    // Clear the input fields
    document.getElementById('item').value = '';
    document.getElementById('contact').value = '';
});