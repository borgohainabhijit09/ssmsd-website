export const Hero = (title, subtitle, bgImage = 'assets/hero-doctors.png', showFeatures = false) => {
    const features = [
        { 
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, 
            title: 'Expert Network'
        },
        { 
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`, 
            title: 'CME & Education'
        },
        { 
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`, 
            title: 'Research & Innovation'
        },
        { 
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>`, 
            title: 'Collaborations'
        },
        { 
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`, 
            title: 'Recognition'
        }
    ];

    return `
    <section class="hero hero-modern" style="background-image: url('${bgImage}')">
        <div class="hero-overlay"></div>
        <div class="container hero-container">
            <div class="hero-content-modern">
                <div class="hero-text">
                    <h1 class="hero-title">${title}</h1>
                    <p class="hero-subtitle">${subtitle}</p>
                    <div class="hero-btns">
                        <a href="membership.html" class="btn btn-primary btn-lg">Become a Member</a>
                        <a href="events.html" class="btn btn-outline btn-lg" style="border-color: var(--white); color: var(--white);">Explore Events</a>
                    </div>
                </div>
                
                ${showFeatures ? `
                <div class="hero-features-grid">
                    ${features.map(f => `
                        <div class="hero-feature-item">
                            <div class="h-feature-icon">${f.icon}</div>
                            <span class="h-feature-title">${f.title}</span>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    </section>
    `;
};
