document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('event-form');
    const messageContainer = document.createElement('div');
    messageContainer.id = 'confirmation-message';
    document.querySelector('main').insertBefore(messageContainer, document.getElementById('event-list'));

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        // Retrieve values from the form
        const title = document.getElementById('event-title').value;
        const date = document.getElementById('event-date').value;
        const time = document.getElementById('event-time').value;
        const location = document.getElementById('event-location').value;
        const description = document.getElementById('event-description').value;

        // Create a new event item
        const eventItem = document.createElement('li');
        eventItem.innerHTML = `
            <strong>${title}</strong> (${date} ${time})<br>
            Location: ${location}<br>
            Description: ${description}
            <button class="remove-btn">✖</button>
        `;

        // Append the new event item to the event list
        document.querySelector('#event-list ul').appendChild(eventItem);

        // Show confirmation message
        messageContainer.innerHTML = '<p>Your event has been created successfully!</p>';
        messageContainer.style.color = 'green'; // Optional: Style the confirmation message

        // Optionally clear the form
        form.reset();
    });

    // Handle removal of events
    document.querySelector('#event-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-btn')) {
            event.target.parentElement.remove();
        }
    });
});
