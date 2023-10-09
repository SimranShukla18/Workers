const workers = [
    {
        name: "John Doe",
        position: "Trash Collector",
        location: "Municipality Name",
        age: 35,
        experience: 7,
        contact: "john@example.com",
        phone: "+123 456 7890",
        image: "worker1.jpg"
    },
    {
        name: "Jane Smith",
        position: "Recycling Specialist",
        location: "Another Municipality",
        age: 28,
        experience: 5,
        contact: "jane@example.com",
        phone: "+987 654 3210",
        image: "worker1.jpg"
    },
    {
        name: "Prince Mehera",
        position: "Trash Collector",
        location: "Another Municipality",
        age: 28,
        experience: 2,
        contact: "prince@example.com",
        phone: "+132 654 3210",
        image: "worker1.jpg"
    },
    {
        name: "jane Malik",
        position: "Recycling Specialist",
        location: "Another Municipality",
        age: 29,
        experience: 5,
        contact: "jane@example.com",
        phone: "+432 654 3210",
        image: "worker1.jpg"
    },
    {
        name: "Bill Smith",
        position: "Trash Colletor",
        location: "Municipality Name",
        age: 25,
        experience: 2,
        contact: "bill@example.com",
        phone: "+446 654 3210",
        image: "worker1.jpg"
    },
    {
        name: "Jhon Doe",
        position: "Trash Colletor",
        location: "Municipality Name",
        age: 2,
        experience: 2,
        contact: "jhon@example.com",
        phone: "+123 456 7898",
        image: "worker1.jpg"
    },
    {
        name: "Ramu Maurya",
        position: "Recycling Specialist",
        location: "Municipality Name",
        age: 27,
        experience: 3,
        contact: "ramu@example.com",
        phone: "+333 456 7898",
        image: "worker1.jpg"
    },
    {
        name: "Rajesh Malik",
        position: "Trash Collector",
        location: "Municipality Name",
        age: 31,
        experience: 6,
        contact: "rajesh@example.com",
        phone: "+123 456 7898",
        image: "worker1.jpg"
    }


];

// Function to generate profiles dynamically
function generateProfiles() {
    const profilesContainer = document.getElementById("profiles");
    profilesContainer.innerHTML = "";

    workers.forEach(worker => {
        const profile = document.createElement("div");
        profile.classList.add("profile");

        profile.innerHTML = `
            <img src="${worker.image}" alt="${worker.name}'s Photo" class="profile-picture">
            <h2>${worker.name}</h2>
            <p>Position: ${worker.position}</p>
            <p>Location: ${worker.location}</p>
            <ul>
                <li>Age: ${worker.age}</li>
                <li>Experience: ${worker.experience} years</li>
                <li>Contact: ${worker.contact}</li>
                <li>Phone: ${worker.phone}</li>
            </ul>
        `;

        profilesContainer.appendChild(profile);
    });
}