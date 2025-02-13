document.addEventListener('DOMContentLoaded', () => {
    const eventsStore = [
        {
            title: "INFJ Personality Type - Coffee Shop Meet & Greet",
            description: "Being an INFJ",
            date: new Date(2024, 2, 23, 15),
            image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
            type: "offline",
            attendees: 99,
            category: "Hobbies and Passions",
            distance: 50,
        },
        {
            title: "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
            description: "New York AI Users",
            date: new Date(2024, 2, 23, 11, 30),
            image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
            type: "offline",
            attendees: 43,
            category: "Technology",
            distance: 25,
        },
        {
            title: "Book 40+ Appointments Per Month Using AI and Automation",
            description: "New Jersey Business Network",
            date: new Date(2024, 2, 16, 14),
            image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "online",
            category: "Technology",
            distance: 10,
        },
        {
            title: "Dump writing group weekly meetup",
            description: "Dump writing group",
            date: new Date(2024, 2, 13, 11),
            image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "online",
            attendees: 77,
            category: "Business",
            distance: 100,
        },
        {
            title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
            description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
            date: new Date(2024, 2, 14, 11),
            image: "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "online",
            attendees: 140,
            category: "Social Activities",
            distance: 74,
        },
        {
            title: "All Nations - Manhattan Missions Church Bible Study",
            description: "Manhattan Bible Study Meetup Group",
            date: new Date(2024, 2, 14, 11),
            image: "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            type: "offline",
            category: "Health and Wellbeing",
            distance: 15,
        },
    ];

    function renderFunction(filteredEvents = eventsStore) {
        const container = document.getElementById('events-container');
        container.innerHTML = '';

        filteredEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event-item');

            eventElement.innerHTML = `
            <div class="image-events">
                <img src="${event.image}" alt="${event.title}" width='272px' height='153px'>
            </div>
            <div class="event-content">
                <div class="event-details">
                    <h2>${event.date.toLocaleString()}</h2>
                    <p class="title">${event.title}</p>
                    <p class="category"> ${event.category}</p>
                </div>
            </div>      
  `;
            container.appendChild(eventElement);
        });
    }

    function filtersFunction() {
        const typeFilter = document.querySelector('.event-type').value;
        const categoryFilter = document.querySelector('.event-category').value;
        const distanceFilter = document.querySelector('.event-distance').value;
        const dateFilter = document.querySelector('.event-date').value;

        let filteredEvents = eventsStore.filter(event => {
            return (typeFilter === 'all' || event.type === typeFilter) &&
                (categoryFilter === 'all' || event.category === categoryFilter) &&
                (distanceFilter === 'all' || (event.distance && event.distance == distanceFilter)) &&
                (dateFilter === 'all' || event.date.toLocaleString() === dateFilter);
        });

        renderFunction(filteredEvents);
    }

    document.querySelector('.event-type').addEventListener('input', filtersFunction);
    document.querySelector('.event-category').addEventListener('input', filtersFunction);
    document.querySelector('.event-distance').addEventListener('input', filtersFunction);
    document.querySelector('.event-date').addEventListener('input', filtersFunction);

    renderFunction();
});



