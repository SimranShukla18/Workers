const completeTask1Button = document.getElementById('completeTask1Button');
const completeTask2Button = document.getElementById('completeTask2Button');

// Add event listeners to mark tasks as complete
completeTask1Button.addEventListener('click', () => {
    alert('Task 1 marked as complete!');
    // You can add logic here to update the task status on the server.
});

completeTask2Button.addEventListener('click', () => {
    alert('Task 2 marked as complete!');
    // You can add logic here to update the task status on the server.
});