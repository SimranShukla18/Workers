document.addEventListener("DOMContentLoaded", function () {
    // Initialize the map
    const map = L.map("map").setView([51.505, -0.09], 13); // Set the initial map view

    // Add a tile layer (you can replace this with your map provider)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Example: Add a marker for a binman's location (replace with real data)
    const binmanMarker = L.marker([51.505, -0.09]).addTo(map);
    binmanMarker.bindPopup("Binman's Location").openPopup();
});