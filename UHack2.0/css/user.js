// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Simulated scheduled collection time (replace with actual data)
    const scheduledCollectionTime = "Monday, 8:00 AM";

    // Display the scheduled collection time
    const collectionTimeElement = document.getElementById("collection-time");
    collectionTimeElement.textContent = scheduledCollectionTime;

    // Handle complaint and review submission (replace with actual functionality)
    const submitButton = document.getElementById("submit-complaint-review");
    const complaintReviewTextarea = document.getElementById("complaint-review");

    submitButton.addEventListener("click", function () {
        const complaintReviewText = complaintReviewTextarea.value;
        if (complaintReviewText.trim() !== "") {
            alert("Complaint/Review submitted:\n" + complaintReviewText);
            // You can send this data to the server for processing
            complaintReviewTextarea.value = ""; // Clear the textarea
        } else {
            alert("Please enter a complaint or review.");
        }
    });
});