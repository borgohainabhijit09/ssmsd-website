export const Events = () => {
    const events = [
        {
            img: 'assets/event-1.png',
            tag: 'Conference',
            tagClass: 'tag-conference',
            date: '15 - 16 Jun, 2024',
            title: 'SSMSD Annual Conference 2024',
            location: 'Guwahati, Assam'
        },
        {
            img: 'assets/event-2.png',
            tag: 'Workshop',
            tagClass: 'tag-workshop',
            date: '20 Jul, 2024',
            title: 'Workshop on Insulin Resistance & Metabolic Health',
            location: 'Bangalore, Karnataka'
        },
        {
            img: 'assets/event-3.png',
            tag: 'Webinar',
            tagClass: 'tag-webinar',
            date: '05 Aug, 2024',
            title: 'Current Updates in Diabetes Management',
            location: 'Online Event'
        }
    ];

    return `
    <section class="section-padding">
        <div class="container">
            <div class="events-layout">
                <div class="events-header">
                    <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.8rem; margin-bottom: 12px;">Upcoming Events</p>
                    <h2 style="margin-bottom: 24px;">Learn. Connect. Advance.</h2>
                    <p class="text-muted" style="margin-bottom: 32px; max-width: 400px;">Join our conferences, workshops and CME programs designed to empower healthcare professionals.</p>
                    <a href="#" class="btn btn-primary">View All Events</a>
                </div>
                <div class="events-grid">
                    ${events.map(e => `
                        <div class="event-card">
                            <img src="${e.img}" alt="${e.title}" class="event-img">
                            <div class="event-body">
                                <span class="event-tag ${e.tagClass}">${e.tag}</span>
                                <p class="event-date">${e.date}</p>
                                <h4 class="event-title">${e.title}</h4>
                                <p class="event-location">📍 ${e.location}</p>
                                <a href="#" style="color: var(--accent); font-weight: 600; font-size: 0.9rem;">Register Now →</a>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>
    `;
};
