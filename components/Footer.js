export const Footer = () => {
    return `
    <footer class="footer" style="background: #020617; color: #94A3B8; padding: 100px 0 40px; border-top: 1px solid rgba(255,255,255,0.05); position: relative; overflow: hidden;">
        <!-- Background decorative elements -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.5;"></div>
        
        <div class="container" style="position: relative; z-index: 2;">
            <div class="footer-grid-modern">
                <!-- Brand Col -->
                <div>
                    <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 24px;">
                        <img src="assets/logo.png" alt="SSMSD Logo" style="height: 90px;">
                        <h3 style="color: var(--white); font-weight: 700; letter-spacing: 1px;">SSMSD</h3>
                    </div>
                    <p style="margin-bottom: 30px; line-height: 1.8; font-size: 0.95rem; max-width: 350px;">
                        The Society for Study of Metabolic Syndrome and Diabetes is dedicated to advancing research, education and clinical excellence for a healthier society in India and globally.
                    </p>
                    <div style="display: flex; gap: 15px;">
                        <a href="#" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: var(--white); transition: var(--transition);" onmouseover="this.style.background='var(--accent)'; this.style.color='#0f172a'" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='var(--white)'">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: var(--white); transition: var(--transition);" onmouseover="this.style.background='var(--accent)'; this.style.color='#0f172a'" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='var(--white)'">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                        <a href="#" style="width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; color: var(--white); transition: var(--transition);" onmouseover="this.style.background='var(--accent)'; this.style.color='#0f172a'" onmouseout="this.style.background='rgba(255,255,255,0.05)'; this.style.color='var(--white)'">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 style="color: var(--white); margin-bottom: 24px; font-size: 1.1rem; font-weight: 600;">Quick Links</h4>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="index.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Home</a></li>
                        <li><a href="about.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">About Us</a></li>
                        <li><a href="membership.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Membership</a></li>
                        <li><a href="events.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Events & CME</a></li>
                        <li><a href="faculty.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Faculty</a></li>
                    </ul>
                </div>

                <!-- Legal/Support -->
                <div>
                    <h4 style="color: var(--white); margin-bottom: 24px; font-size: 1.1rem; font-weight: 600;">Support</h4>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px;">
                        <li><a href="contact.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Contact Us</a></li>
                        <li><a href="privacy.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Privacy Policy</a></li>
                        <li><a href="terms.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">Terms of Use</a></li>
                        <li><a href="faq.html" style="color: inherit; transition: var(--transition);" onmouseover="this.style.color='var(--accent)'" onmouseout="this.style.color='inherit'">FAQ</a></li>
                    </ul>
                </div>

                <!-- Newsletter -->
                <div>
                    <h4 style="color: var(--white); margin-bottom: 24px; font-size: 1.1rem; font-weight: 600;">Stay Updated</h4>
                    <p style="margin-bottom: 20px; font-size: 0.95rem;">Subscribe to our newsletter for the latest updates on research, events, and programs.</p>
                    <form style="display: flex; flex-direction: column; gap: 12px;" onsubmit="event.preventDefault(); alert('Subscribed successfully!');">
                        <input type="email" placeholder="Your email address" required style="padding: 14px 20px; border-radius: var(--border-radius-sm); border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: var(--white); width: 100%; font-family: inherit;">
                        <button type="submit" class="btn btn-primary" style="justify-content: center; width: 100%;">Subscribe Now</button>
                    </form>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div style="padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.05); display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 20px; font-size: 0.9rem;">
                <p>© 2026 SSMSD. All Rights Reserved.</p>
                <div style="display: flex; gap: 15px; align-items: center;">
                    <span style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        ssmsd.we@gmail.com
                    </span>
                    <span style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +91 9435055131
                    </span>
                </div>
            </div>
        </div>
    </footer>
    `;
};
