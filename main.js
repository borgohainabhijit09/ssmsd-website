import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { Features } from './components/Features.js';
import { Events } from './components/Events.js';
import { Stats } from './components/Stats.js';
import { Faculty } from './components/Faculty.js';
import { Membership } from './components/Membership.js';
import { Footer } from './components/Footer.js';

const app = document.getElementById('app');
const page = document.body.dataset.page;

const render = () => {
    let content = '';

    switch(page) {
        case 'home':
            content = `
                ${Hero('Uniting Experts.<br><span class="text-accent">Improving Lives.</span>', 'SSMSD is committed to advancing research, education and clinical excellence in Metabolic Syndrome and Diabetes for a healthier tomorrow.', 'assets/hero-doctors.png', true)}
                ${Events()}
                ${Stats()}
                ${Faculty()}
                ${Membership()}
            `;
            break;
        case 'about':
            content = `
                ${Hero('About <span class="text-accent">SSMSD</span>', 'Dedicated to the study and management of Metabolic Syndrome and Diabetes across the nation.', 'assets/hero-bg-2.png')}
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
                ${Stats()}
            `;
            break;
        case 'membership':
            content = `
                ${Hero('Join Our <span class="text-accent">Community</span>', 'Be part of the leading network of experts in Metabolic Syndrome and Diabetes.', 'assets/hero-bg-2.png')}
                ${Membership()}
            `;
            break;
        case 'events':
            content = `
                ${Hero('Medical <span class="text-accent">Events</span>', 'Stay updated with the latest conferences, workshops, and webinars.', 'assets/hero-bg-2.png')}
                ${Events()}
            `;
            break;
        case 'faculty':
            content = `
                ${Hero('Our <span class="text-accent">Faculty</span>', 'Meet the experts leading the way in metabolic health.', 'assets/hero-bg-2.png')}
                ${Faculty()}
            `;
            break;
        case 'resources':
            content = `
                ${Hero('Scientific <span class="text-accent">Resources</span>', 'Access clinical guidelines, research papers, and educational materials.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <h2>Latest Guidelines</h2>
                    <p>Coming soon...</p>
                </section>
            `;
            break;
        case 'contact':
            content = `
                ${Hero('Contact <span class="text-accent">Us</span>', 'Get in touch with the SSMSD secretariat for any queries.', 'assets/hero-bg-2.png')}
                <section class="section-padding container">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
                        <div>
                            <h3 style="margin-bottom: 20px;">Send us a message</h3>
                            <form style="display: flex; flex-direction: column; gap: 15px;">
                                <input type="text" placeholder="Name" style="padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--white); width: 100%;">
                                <input type="email" placeholder="Email" style="padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--white); width: 100%;">
                                <textarea placeholder="Message" rows="5" style="padding: 14px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--white); width: 100%;"></textarea>
                                <button class="btn btn-primary" style="justify-content: center;">Send Message</button>
                            </form>
                        </div>
                        <div>
                            <h3 style="margin-bottom: 20px;">Office Location</h3>
                            <p class="text-muted" style="margin-bottom: 15px;">SSMSD Secretariat<br>C/o Dr. Rakesh Sahay<br>Lucknow, Uttar Pradesh, India</p>
                            <p class="text-muted" style="margin-bottom: 10px;">Email: info@ssmsd.org</p>
                            <p class="text-muted">Phone: +91 98765 43210</p>
                        </div>
                    </div>
                </section>
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
};

document.addEventListener('DOMContentLoaded', render);
