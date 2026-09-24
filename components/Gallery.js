export const Gallery = () => {
    const slides = [
        {
            id: 1,
            img: 'assets/gallery-symposium.png',
            tag: 'Scientific Symposium',
            title: 'SSMSD Annual National Conference 2024',
            date: 'June 15–16, 2024 • Guwahati',
            desc: 'Keynote deliberations and breakthrough research presentations on Type 2 Diabetes & Metabolic Syndrome.'
        },
        {
            id: 2,
            img: 'assets/event-1.png',
            tag: 'Clinical Workshop',
            title: 'Hands-On Intensive Skill Station',
            date: 'July 20, 2024 • Bangalore',
            desc: 'Interactive practical training for registered medical practitioners and metabolic specialists.'
        },
        {
            id: 3,
            img: 'assets/hero-doctors.png',
            tag: 'Faculty Leadership',
            title: 'Eminent Medical Experts Forum',
            date: 'August 05, 2024 • New Delhi',
            desc: 'Bringing together leading healthcare experts to set updated clinical guidelines across India.'
        },
        {
            id: 4,
            img: 'assets/gallery-gala.png',
            tag: 'Presidential Gala',
            title: 'Excellence & Research Awards Evening',
            date: 'September 12, 2024 • Dibrugarh',
            desc: 'Honoring pioneering research publications, young investigator awards, and lifetime contributions.'
        },
        {
            id: 5,
            img: 'assets/event-2.png',
            tag: 'Outreach Initiative',
            title: 'Community Metabolic Screening Camp',
            date: 'October 01, 2024 • Assam & Northeast',
            desc: 'Early detection camps and lifestyle awareness sessions for healthcare delivery to underprivileged populations.'
        }
    ];

    return `
    <section class="gallery-section section-padding" id="gallery">
        <div class="container">
            <div class="section-header text-center" style="max-width: 750px; margin: 0 auto 50px auto;">
                <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.85rem; margin-bottom: 12px;">SSMSD Highlights</p>
                <h2 style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px;">Society Gallery & Events in Action</h2>
                <p class="text-muted" style="font-size: 1.05rem; line-height: 1.6;">Immerse yourself in moments from our scientific CMEs, international symposiums, clinical workshops, and honor ceremonies.</p>
            </div>

            <div class="gallery-carousel-wrapper" id="galleryCarousel">
                <button class="carousel-btn prev-btn" id="galleryPrevBtn" aria-label="Previous Slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                <div class="gallery-carousel-track">
                    ${slides.map((s, index) => `
                        <div class="gallery-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                            <div class="gallery-card glass-panel">
                                <div class="gallery-image-box">
                                    <img src="${s.img}" alt="${s.title}" class="gallery-img" loading="lazy">
                                    <div class="gallery-overlay-gradient"></div>
                                    <span class="gallery-tag">${s.tag}</span>
                                    <button class="gallery-expand-btn" data-img="${s.img}" data-title="${s.title}" data-tag="${s.tag}" data-date="${s.date}" data-desc="${s.desc}" title="View Fullscreen">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="gallery-info">
                                    <p class="gallery-date">${s.date}</p>
                                    <h3 class="gallery-title">${s.title}</h3>
                                    <p class="gallery-desc">${s.desc}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button class="carousel-btn next-btn" id="galleryNextBtn" aria-label="Next Slide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <div class="gallery-controls">
                <div class="gallery-dots" id="galleryDots">
                    ${slides.map((_, index) => `
                        <button class="gallery-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>
                    `).join('')}
                </div>
                <div class="gallery-counter">
                    <span id="galleryCurrentNum" class="text-accent" style="font-weight:700;">01</span> / <span class="text-muted">0${slides.length}</span>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div class="gallery-lightbox" id="galleryLightbox">
            <div class="lightbox-overlay" id="lightboxOverlay"></div>
            <div class="lightbox-content glass-panel">
                <button class="lightbox-close" id="lightboxClose" aria-label="Close Lightbox">&times;</button>
                <div class="lightbox-body">
                    <img id="lightboxImg" src="" alt="Gallery Image" class="lightbox-img">
                    <div class="lightbox-details">
                        <span id="lightboxTag" class="gallery-tag"></span>
                        <h3 id="lightboxTitle" style="margin: 12px 0 8px 0;"></h3>
                        <p id="lightboxDate" class="gallery-date" style="margin-bottom: 12px;"></p>
                        <p id="lightboxDesc" class="text-muted" style="line-height: 1.6;"></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};
