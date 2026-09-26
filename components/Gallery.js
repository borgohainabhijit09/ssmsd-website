export const Gallery = () => {
    // Shared gallery configuration
    const config = {
        highlights: [
            "assets/gallery/event-01.jpg", "assets/gallery/event-02.jpg", "assets/gallery/event-03.jpg",
            "assets/gallery/event-04.jpg", "assets/gallery/event-05.jpg", "assets/gallery/event-06.jpg"
        ],
        moments: [
            "assets/gallery/moment-01.jpg", "assets/gallery/moment-02.jpg", "assets/gallery/moment-03.jpg",
            "assets/gallery/moment-04.jpg", "assets/gallery/moment-05.jpg", "assets/gallery/moment-06.jpg",
            "assets/gallery/moment-07.jpg", "assets/gallery/moment-08.jpg", "assets/gallery/moment-09.jpg",
            "assets/gallery/moment-10.jpg"
        ],
        speakers: [
            "assets/gallery/speaker-01.jpg", "assets/gallery/speaker-02.jpg", "assets/gallery/speaker-03.jpg",
            "assets/gallery/speaker-04.jpg", "assets/gallery/speaker-05.jpg", "assets/gallery/speaker-06.jpg"
        ],
        awards: [
            "assets/gallery/award-01.jpg", "assets/gallery/award-02.jpg", "assets/gallery/award-03.jpg",
            "assets/gallery/award-04.jpg", "assets/gallery/award-05.jpg", "assets/gallery/award-06.jpg"
        ],
        people: [
            "assets/gallery/people-01.jpg", "assets/gallery/people-02.jpg", "assets/gallery/people-03.jpg",
            "assets/gallery/people-04.jpg", "assets/gallery/people-05.jpg", "assets/gallery/people-06.jpg"
        ]
    };

    // Attach global lightbox and filter handlers safely
    if (typeof window !== 'undefined' && !window.openNewLightbox) {
        window.galleryState = { currentGroup: [], currentIndex: 0, config: config, currentFilter: 'highlights' };
        
        window.openNewLightbox = (index) => {
            window.galleryState.currentGroup = window.galleryState.config[window.galleryState.currentFilter];
            window.galleryState.currentIndex = index;
            const lb = document.getElementById('new-lightbox');
            const img = document.getElementById('new-lightbox-img');
            const counter = document.getElementById('new-lightbox-counter');
            if (lb && img) {
                img.src = window.galleryState.currentGroup[index];
                counter.innerText = (index + 1) + " / " + window.galleryState.currentGroup.length;
                lb.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        };
        
        window.closeNewLightbox = () => {
            const lb = document.getElementById('new-lightbox');
            if (lb) {
                lb.style.display = 'none';
                document.body.style.overflow = 'unset';
            }
        };
        
        window.navigateNewLightbox = (dir, event) => {
            if (event) event.stopPropagation();
            const state = window.galleryState;
            if (dir === 'prev') {
                state.currentIndex = (state.currentIndex - 1 + state.currentGroup.length) % state.currentGroup.length;
            } else {
                state.currentIndex = (state.currentIndex + 1) % state.currentGroup.length;
            }
            const img = document.getElementById('new-lightbox-img');
            if(img) img.src = state.currentGroup[state.currentIndex];
            const counter = document.getElementById('new-lightbox-counter');
            if(counter) counter.innerText = (state.currentIndex + 1) + " / " + state.currentGroup.length;
        };

        window.filterGallery = (category, btnElement) => {
            window.galleryState.currentFilter = category;
            
            // Update active tab styling
            document.querySelectorAll('.n-tab').forEach(btn => btn.classList.remove('active'));
            if(btnElement) btnElement.classList.add('active');
            else {
                const firstTab = document.querySelector('.n-tab');
                if (firstTab) firstTab.classList.add('active');
            }

            // Toggle grid visibility
            document.querySelectorAll('.n-masonry-grid').forEach(grid => {
                grid.style.display = 'none';
                grid.classList.remove('active-grid');
            });
            const activeGrid = document.getElementById(`grid-${category}`);
            if (activeGrid) {
                activeGrid.style.display = 'block';
                // Trigger reflow for animation
                void activeGrid.offsetWidth;
                activeGrid.classList.add('active-grid');
            }
        };

        window.addEventListener('keydown', (e) => {
            const lb = document.getElementById('new-lightbox');
            if (lb && lb.style.display === 'flex') {
                if (e.key === 'Escape') window.closeNewLightbox();
                if (e.key === 'ArrowLeft') window.navigateNewLightbox('prev');
                if (e.key === 'ArrowRight') window.navigateNewLightbox('next');
            }
        });
        
        // Initial render after DOM is ready
        setTimeout(() => {
            window.filterGallery('highlights', document.querySelector('.n-tab'));
        }, 100);
    }

    const renderImagesForCategory = (category) => {
        return config[category].map((src, index) => `
            <div class="n-gallery-item" onclick="openNewLightbox(${index})">
                <img src="${src}" alt="Gallery ${category} ${index + 1}" loading="lazy" 
                     onerror="this.onerror=null; this.parentElement.style.display='none';">
                <div class="n-gallery-overlay">
                    <span class="n-gallery-view-text">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D62839" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                        View Image
                    </span>
                </div>
            </div>
        `).join('');
    };

    return `
    <style>
        :root {
            --n-brand-blue: #123B6D;
            --n-brand-red: #D62839;
            --n-brand-soft: #F6F8FB;
            --n-brand-dark: #172033;
        }

        .n-gallery-wrapper {
            background: #fff;
            color: var(--n-brand-dark);
            font-family: inherit;
        }

        .n-section {
            padding: 80px 24px;
        }

        .n-section.bg-soft {
            background-color: var(--n-brand-soft);
        }

        .n-container {
            max-width: 1280px;
            margin: 0 auto;
        }

        .n-header {
            margin-bottom: 32px;
            text-align: center;
        }

        .n-header h2 {
            font-size: clamp(2rem, 4vw, 2.5rem);
            font-weight: 700;
            margin-bottom: 16px;
            color: var(--n-brand-dark);
        }

        .n-header p {
            font-size: 1.125rem;
            color: #4b5563;
            max-width: 700px;
            margin: 0 auto;
        }
        
        .n-filter-tabs {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            margin-bottom: 48px;
        }
        
        .n-tab {
            background: transparent;
            border: 2px solid #e5e7eb;
            color: #4b5563;
            padding: 10px 24px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .n-tab:hover {
            border-color: var(--n-brand-blue);
            color: var(--n-brand-blue);
        }
        
        .n-tab.active {
            background: var(--n-brand-blue);
            border-color: var(--n-brand-blue);
            color: white;
        }

        /* Base gallery item */
        .n-gallery-item {
            position: relative;
            background: #f3f4f6;
            border-radius: 12px;
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            break-inside: avoid;
            margin-bottom: 24px;
        }

        .n-gallery-item:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .n-gallery-item img {
            width: 100%;
            height: auto;
            object-fit: cover;
            transition: transform 0.5s ease;
            display: block;
        }

        .n-gallery-item:hover img {
            transform: scale(1.1);
        }

        .n-gallery-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(18, 59, 109, 0.9) 0%, rgba(18, 59, 109, 0.2) 50%, transparent 100%);
            opacity: 0;
            transition: opacity 0.5s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 24px;
        }

        .n-gallery-item:hover .n-gallery-overlay {
            opacity: 1;
        }

        .n-gallery-view-text {
            color: white;
            font-weight: 600;
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            gap: 8px;
            transform: translateY(24px);
            transition: transform 0.5s ease;
        }

        .n-gallery-item:hover .n-gallery-view-text {
            transform: translateY(0);
        }

        @keyframes galleryFadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Masonry Grid */
        .n-masonry-grid {
            display: none;
            column-count: 1;
            column-gap: 24px;
        }
        
        .n-masonry-grid.active-grid {
            display: block;
            animation: galleryFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (min-width: 640px) { .n-masonry-grid { column-count: 2; } }
        @media (min-width: 1024px) { .n-masonry-grid { column-count: 3; } }
        @media (min-width: 1280px) { .n-masonry-grid { column-count: 4; } }

        /* CTA Section */
        .n-cta {
            background-color: var(--n-brand-blue);
            color: white;
            text-align: center;
            padding: 100px 24px;
        }

        .n-cta h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            font-weight: 700;
            margin-bottom: 24px;
            color: white;
        }

        .n-cta p {
            font-size: 1.125rem;
            color: rgba(255,255,255,0.8);
            max-width: 700px;
            margin: 0 auto 40px;
        }

        .n-cta-btn {
            background-color: var(--n-brand-red);
            color: white;
            border: none;
            padding: 16px 40px;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .n-cta-btn:hover { background-color: #b91d2b; }

        /* Lightbox */
        .n-lightbox {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 10000;
            background: rgba(0,0,0,0.95);
            backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
        }

        .n-lightbox-img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
        }

        .n-lb-btn {
            position: absolute;
            background: rgba(0,0,0,0.5);
            color: white;
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 25px;
            font-size: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s;
        }
        .n-lb-btn:hover { background: rgba(0,0,0,0.8); }
        .n-lb-prev { left: 20px; top: 50%; transform: translateY(-50%); }
        .n-lb-next { right: 20px; top: 50%; transform: translateY(-50%); }
        
        .n-lb-top {
            position: absolute;
            top: 20px;
            right: 20px;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .n-lb-counter {
            color: white;
            font-weight: 500;
            font-family: sans-serif;
        }

        .n-lb-close {
            background: rgba(0,0,0,0.5);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            font-size: 24px;
            cursor: pointer;
        }
        .n-lb-close:hover { background: rgba(0,0,0,0.8); }
    </style>

    <div class="n-gallery-wrapper">
        <section class="n-section bg-soft" id="gallery-start">
            <div class="n-container">
                <div class="n-header">
                    <h2>Event Gallery</h2>
                    <p>Me-Care Conclave 2026 moments, speakers, and more.</p>
                </div>
                
                <div class="n-filter-tabs">
                    <button class="n-tab active" onclick="filterGallery('highlights', this)">Highlights</button>
                    <button class="n-tab" onclick="filterGallery('moments', this)">Moments</button>
                    <button class="n-tab" onclick="filterGallery('speakers', this)">Speakers</button>
                    <button class="n-tab" onclick="filterGallery('awards', this)">Felicitation</button>
                    <button class="n-tab" onclick="filterGallery('people', this)">Community</button>
                </div>

                <div id="grid-highlights" class="n-masonry-grid">
                    ${renderImagesForCategory('highlights')}
                </div>
                <div id="grid-moments" class="n-masonry-grid">
                    ${renderImagesForCategory('moments')}
                </div>
                <div id="grid-speakers" class="n-masonry-grid">
                    ${renderImagesForCategory('speakers')}
                </div>
                <div id="grid-awards" class="n-masonry-grid">
                    ${renderImagesForCategory('awards')}
                </div>
                <div id="grid-people" class="n-masonry-grid">
                    ${renderImagesForCategory('people')}
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="n-cta">
            <div class="n-container">
                <h2>Together, We Can Build a Healthier Future</h2>
                <p>Through collaboration, knowledge sharing and continued engagement, we work towards better health outcomes for our communities.</p>
                <button class="n-cta-btn">Learn More About Us</button>
            </div>
        </section>
    </div>

    <!-- Lightbox -->
    <div id="new-lightbox" class="n-lightbox" onclick="closeNewLightbox()">
        <button class="n-lb-btn n-lb-prev" onclick="navigateNewLightbox('prev', event)">&#8249;</button>
        <img id="new-lightbox-img" class="n-lightbox-img" src="" alt="Gallery Preview" onclick="event.stopPropagation()">
        <button class="n-lb-btn n-lb-next" onclick="navigateNewLightbox('next', event)">&#8250;</button>
        
        <div class="n-lb-top">
            <span id="new-lightbox-counter" class="n-lb-counter"></span>
            <button class="n-lb-close" onclick="closeNewLightbox()">&#10005;</button>
        </div>
    </div>
    `;
};
