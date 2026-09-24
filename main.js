import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { InnerHero } from './components/InnerHero.js';
import { Features } from './components/Features.js';
import { Events } from './components/Events.js';
import { Gallery } from './components/Gallery.js';
import { Stats } from './components/Stats.js';
import { Faculty } from './components/Faculty.js';
import { Membership } from './components/Membership.js';
import { Footer } from './components/Footer.js';
import { Contact } from './components/Contact.js';
import { BlogList } from './components/BlogList.js';
import { BlogSingle } from './components/BlogSingle.js';

const app = document.getElementById('app');
const page = document.body.dataset.page;

const render = () => {
    let content = '';

    switch(page) {
        case 'home':
            content = `
                ${Hero('Uniting Experts.<br><span class="text-accent">Improving Lives.</span>', 'SSMSD is committed to advancing research, education and clinical excellence in Metabolic Syndrome and Diabetes for a healthier tomorrow.', 'assets/hero-doctors.png', true)}
                ${Events()}
                ${Gallery()}
                ${Stats()}
                ${Faculty()}
                ${Membership()}
            `;
            break;
        case 'about':
            content = `
                ${InnerHero('About <span class="text-accent">SSMSD</span>', 'Dedicated to the study and management of Metabolic Syndrome and Diabetes across the nation.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <div style="max-width: 900px; margin: 0 auto;">
                        <h2 style="margin-bottom: 30px; text-align: center;">The objective for which the society is established are:</h2>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 20px;">
                            ${[
                                "To function as a scientific body encouraging and assisting research as well as all such activities that are likely to be beneficial people with diabetes mellitus (DM) in India.",
                                "To encourage, educate, update and train registered medical practitioners, dietitians, qualified nurses and other appropriately qualified paramedical personnel in field of DM and expand knowledge on health care delivery through organization of lectures, continuing medical education programs (CME), seminars, discussions, conferences, update sessions, workshops, training camps, correspondence courses and any other method or measure that may be considered suitable from time to time for the purpose at local, regional, national and international levels.",
                                "To promote exchange of knowledge and sharing of experience amongst specialists in the field of DM as well as any or all such specialty or sub-specialty that may be concerned with research and care of people with DM.",
                                "To establish institutions so as to fulfill the goals as elaborated in (i) to (iv).",
                                "To establish reciprocation, exchange programs and collaboration with other scientific agencies, bodies or organizations engaged in similar activities either within India or abroad.",
                                "To maintain a list of eminent members engaged in research and teaching in the field of DM to be designated as 'FACULTY OF THE STUDY METABOLIC SYNDROME AND DIABETES' so as to avail their assistance for fulfilling the aims and objectives.",
                                "To institute post-graduate studies in DM for medical practitioners in due consultation with the Medical Council of India and in accordance with the prevailing statues, rules and regulations governing all such studies. To collaborate or get associated with recognized Universities or autonomous institutes.",
                                "To award prizes, certificates of merit and/or appreciation and other inducements for distinguished service or research publications in the field of DM.",
                                "To undertake or conduct such other activities as may be found incidental or conductive to the fulfillment of the aims and objectives of the STUDY OF METABOLIC SYNDROME AND DIABETES."
                            ].map((obj, i) => `
                            <li style="display: flex; gap: 15px; align-items: flex-start; background: var(--card-bg); padding: 25px; border-radius: var(--border-radius); border: 1px solid var(--border);">
                                <div style="color: var(--accent); margin-top: 5px; font-weight: bold; font-size: 1.1rem; min-width: 30px;">
                                    ${['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix'][i]})
                                </div>
                                <p class="text-muted" style="font-size: 1.05rem; line-height: 1.6;">${obj}</p>
                            </li>
                            `).join('')}
                        </ul>
                    </div>
                </section>
                
                <section class="section-padding container">
                    <div style="max-width: 1000px; margin: 0 auto;">
                        <div style="text-align: center; margin-bottom: 40px;">
                            <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 12px;">Partner With Us</p>
                            <h2>Sponsorship Opportunities</h2>
                        </div>
                        
                        <div style="overflow-x: auto; background: var(--card-bg); border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-medium);">
                            <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 800px;">
                                <thead>
                                    <tr>
                                        <th style="padding: 20px; background: rgba(15, 23, 42, 0.8); border-bottom: 1px solid var(--border); color: var(--accent); font-weight: 700; width: 25%;">ELEMENTS</th>
                                        <th style="padding: 20px; background: rgba(226, 232, 240, 0.1); border-bottom: 1px solid var(--border); color: #E2E8F0; font-weight: 700; width: 25%; text-align: center; border-left: 1px solid var(--border);">PLATINUM</th>
                                        <th style="padding: 20px; background: rgba(251, 191, 36, 0.1); border-bottom: 1px solid var(--border); color: #FBBF24; font-weight: 700; width: 25%; text-align: center; border-left: 1px solid var(--border);">GOLD</th>
                                        <th style="padding: 20px; background: rgba(148, 163, 184, 0.1); border-bottom: 1px solid var(--border); color: #94A3B8; font-weight: 700; width: 25%; text-align: center; border-left: 1px solid var(--border);">SILVER</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--white);">LOGO / BRAND DISPLAY</td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>Banquet dinner</li>
                                                <li>Brand Logo Display on Website</li>
                                                <li>Branding in Lunch Area</li>
                                                <li>Mention in Sponsors Banner</li>
                                            </ul>
                                        </td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>Registration Desk</li>
                                                <li>Brand Logo Display on Website</li>
                                                <li>Mention in Sponsor Banner</li>
                                            </ul>
                                        </td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>Mention in Sponsor Banner</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--white);">SCIENTIFIC LECTURE</td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border); text-align: center; color: var(--accent); font-weight: bold;">YES</td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border); text-align: center; color: var(--accent); font-weight: bold;">YES</td>
                                        <td style="padding: 20px; border-bottom: 1px solid var(--border); border-left: 1px solid var(--border); text-align: center; color: var(--text-muted);">—</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 20px; font-weight: 600; color: var(--white);">BOOTH</td>
                                        <td style="padding: 20px; border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>Island Booth (4 x 4)</li>
                                                <li>2 tables, 4 chairs</li>
                                                <li>LED display</li>
                                            </ul>
                                        </td>
                                        <td style="padding: 20px; border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>3 x 3</li>
                                                <li>1 table, 2 chairs</li>
                                            </ul>
                                        </td>
                                        <td style="padding: 20px; border-left: 1px solid var(--border);">
                                            <ul style="list-style-type: disc; padding-left: 20px; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 8px;">
                                                <li>2 x 2</li>
                                                <li>1 table, 1 chair</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div style="margin-top: 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 25px; border-radius: var(--border-radius);">
                                <h4 style="color: var(--accent); margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">Booth Dimensions</h4>
                                <ul style="list-style-type: none; padding: 0; color: var(--text-muted); font-size: 0.95rem; display: flex; flex-direction: column; gap: 10px;">
                                    <li style="display: flex; justify-content: space-between;"><span>4 x 4 mtr</span></li>
                                    <li style="display: flex; justify-content: space-between;"><span>3 x 3 mtr (Octonorm)</span></li>
                                    <li style="display: flex; justify-content: space-between;"><span>3 x 3 mtr (Island)</span></li>
                                    <li style="display: flex; justify-content: space-between;"><span>2 x 2 mtr (Octonorm)</span></li>
                                </ul>
                            </div>
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); padding: 25px; border-radius: var(--border-radius);">
                                <h4 style="color: var(--accent); margin-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">Scientific Session</h4>
                                <p style="color: var(--text-muted); font-size: 0.95rem;">Available per session basis.</p>
                            </div>
                        </div>
                    </div>
                </section>
                ${Stats()}
            `;
            break;
        case 'membership':
            content = `
                ${InnerHero('Join Our <span class="text-accent">Community</span>', 'Be part of the leading network of experts in Metabolic Syndrome and Diabetes.', 'assets/hero-bg-2.png')}
                ${Membership()}
            `;
            break;
        case 'events':
            content = `
                ${InnerHero('Medical <span class="text-accent">Events</span>', 'Stay updated with the latest conferences, workshops, and webinars.', 'assets/hero-bg-2.png')}
                ${Events()}
            `;
            break;
        case 'faculty':
            content = `
                ${InnerHero('Our <span class="text-accent">Faculty</span>', 'Meet the experts leading the way in metabolic health.', 'assets/hero-bg-2.png')}
                ${Faculty()}
            `;
            break;
        case 'resources':
            content = `
                ${InnerHero('Scientific <span class="text-accent">Resources</span>', 'Access clinical guidelines, research papers, and educational materials.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <h2>Latest Guidelines</h2>
                    <p>Coming soon...</p>
                </section>
            `;
            break;
        case 'contact':
            content = `
                ${InnerHero('Contact <span class="text-accent">Us</span>', 'Get in touch with the SSMSD secretariat for any queries.', 'assets/hero-bg-2.png')}
                ${Contact()}
            `;
            break;
        case 'privacy':
            content = `
                ${InnerHero('Privacy <span class="text-accent">Policy</span>', 'How we handle and protect your data.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <div style="max-width: 800px; margin: 0 auto; background: var(--card-bg); padding: 40px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                        <h3 style="color: var(--accent); margin-bottom: 15px;">1. Information We Collect</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">We collect information you provide directly to us, such as when you create an account, register for an event, or communicate with us. This may include your name, email address, postal address, phone number, and medical credentials.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">2. How We Use Your Information</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you related information, including confirmations and receipts, and to communicate with you about events, CME programs, and other news.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">3. Information Sharing</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">We do not share your personal information with third parties except as described in this privacy policy or as required by law. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">4. Security</h3>
                        <p class="text-muted" style="line-height: 1.7;">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </div>
                </section>
            `;
            break;
        case 'terms':
            content = `
                ${InnerHero('Terms of <span class="text-accent">Use</span>', 'Guidelines for using the SSMSD platform.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <div style="max-width: 800px; margin: 0 auto; background: var(--card-bg); padding: 40px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                        <h3 style="color: var(--accent); margin-bottom: 15px;">1. Acceptance of Terms</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">By accessing or using the SSMSD website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">2. Professional Conduct</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">Members are expected to maintain the highest standards of professional conduct. Any resources, forums, or directories provided by SSMSD must be used respectfully and solely for educational and professional networking purposes.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">3. Intellectual Property</h3>
                        <p class="text-muted" style="margin-bottom: 25px; line-height: 1.7;">All content, guidelines, and educational materials published on this website are the intellectual property of SSMSD unless otherwise stated. They may not be reproduced without explicit written consent.</p>
                        
                        <h3 style="color: var(--accent); margin-bottom: 15px;">4. Limitation of Liability</h3>
                        <p class="text-muted" style="line-height: 1.7;">SSMSD shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services or materials.</p>
                    </div>
                </section>
            `;
            break;
        case 'faq':
            content = `
                ${InnerHero('Frequently Asked <span class="text-accent">Questions</span>', 'Find answers to common queries about SSMSD.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <div style="max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
                        <div style="background: var(--card-bg); padding: 25px 30px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                            <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                Who can become a member of SSMSD?
                            </h4>
                            <p class="text-muted" style="line-height: 1.6; padding-left: 30px;">Membership is open to medical professionals, researchers, dietitians, and qualified personnel engaged in the study and management of Metabolic Syndrome and Diabetes.</p>
                        </div>
                        
                        <div style="background: var(--card-bg); padding: 25px 30px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                            <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                How do I register for CME programs?
                            </h4>
                            <p class="text-muted" style="line-height: 1.6; padding-left: 30px;">You can register for upcoming CME programs and conferences directly through the Events section on our website. Members often receive early access or discounted registration rates.</p>
                        </div>
                        
                        <div style="background: var(--card-bg); padding: 25px 30px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                            <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                Are there opportunities for sponsorship?
                            </h4>
                            <p class="text-muted" style="line-height: 1.6; padding-left: 30px;">Yes, we offer Platinum, Gold, and Silver sponsorship tiers for our events and programs. Please visit the About Us page or contact our secretariat for a detailed prospectus.</p>
                        </div>
                        
                        <div style="background: var(--card-bg); padding: 25px 30px; border-radius: var(--border-radius); border: 1px solid var(--border); box-shadow: var(--shadow-soft);">
                            <h4 style="color: var(--white); margin-bottom: 10px; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                Where is the secretariat located?
                            </h4>
                            <p class="text-muted" style="line-height: 1.6; padding-left: 30px;">Our secretariat office is located at Z Square, 4th floor, Above Apollo Clinic, Graham Bazar, Dibrugarh, PIN- 786001, India, Assam.</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'blogs':
            content = `
                ${InnerHero('Medical <span class="text-accent">Blog</span>', 'Articles, Research Updates & Clinical Guidelines from SSMSD', 'assets/hero-bg-2.png')}
                ${BlogList()}
            `;
            break;
        case 'blog-details':
            content = `
                ${BlogSingle()}
            `;
            break;
        default:
            content = `<h1>Page Not Found</h1>`;
    }

    app.innerHTML = `
        ${Navbar()}
        <main>
            ${content}
        </main>
        ${Footer()}
    `;

    // Handle mobile menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Handle scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Initialize Gallery Carousel if present
    initGalleryCarousel();
};

const initGalleryCarousel = () => {
    const wrapper = document.getElementById('galleryCarousel');
    if (!wrapper) return;

    const slides = Array.from(wrapper.querySelectorAll('.gallery-slide'));
    const dots = Array.from(document.querySelectorAll('.gallery-dot'));
    const prevBtn = document.getElementById('galleryPrevBtn');
    const nextBtn = document.getElementById('galleryNextBtn');
    const currentNum = document.getElementById('galleryCurrentNum');

    if (slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;

    const updateCarousel = (newIndex) => {
        currentIndex = (newIndex + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev-slide', 'next-slide', 'hidden-left', 'hidden-right');

            const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
            const nextIndex = (currentIndex + 1) % slides.length;

            if (i === currentIndex) {
                slide.classList.add('active');
            } else if (i === prevIndex) {
                slide.classList.add('prev-slide');
            } else if (i === nextIndex) {
                slide.classList.add('next-slide');
            } else {
                const diff = (i - currentIndex + slides.length) % slides.length;
                if (diff < slides.length / 2) {
                    slide.classList.add('hidden-right');
                } else {
                    slide.classList.add('hidden-left');
                }
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        if (currentNum) {
            currentNum.textContent = `0${currentIndex + 1}`;
        }
    };

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCarousel(currentIndex - 1);
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCarousel(currentIndex + 1);
            resetAutoPlay();
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const idx = parseInt(dot.dataset.index, 10);
            updateCarousel(idx);
            resetAutoPlay();
        });
    });

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('prev-slide')) {
                updateCarousel(currentIndex - 1);
                resetAutoPlay();
            } else if (slide.classList.contains('next-slide')) {
                updateCarousel(currentIndex + 1);
                resetAutoPlay();
            }
        });
    });

    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayTimer = setInterval(() => {
            updateCarousel(currentIndex + 1);
        }, 4500);
    };

    const stopAutoPlay = () => {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    };

    const resetAutoPlay = () => {
        startAutoPlay();
    };

    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    // Initial state
    updateCarousel(0);
    startAutoPlay();

    // Lightbox modal logic
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxTag = document.getElementById('lightboxTag');
    const lightboxDate = document.getElementById('lightboxDate');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxOverlay = document.getElementById('lightboxOverlay');

    const openLightbox = (data) => {
        if (!lightbox) return;
        stopAutoPlay();
        lightboxImg.src = data.img;
        lightboxTitle.textContent = data.title;
        lightboxTag.textContent = data.tag;
        lightboxDate.textContent = data.date;
        lightboxDesc.textContent = data.desc;
        lightbox.classList.add('active');
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        startAutoPlay();
    };

    document.querySelectorAll('.gallery-expand-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox({
                img: btn.dataset.img,
                title: btn.dataset.title,
                tag: btn.dataset.tag,
                date: btn.dataset.date,
                desc: btn.dataset.desc
            });
        });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
};

document.addEventListener('DOMContentLoaded', render);

