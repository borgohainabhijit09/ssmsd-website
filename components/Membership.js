export const Membership = () => {
    return `
    <section class="section-padding" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
        <div class="container">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 60px;">
                <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 12px;">Join Us</p>
                <h2 style="margin-bottom: 24px;">Be a part of a growing community of experts</h2>
                <p class="text-muted" style="font-size: 1.1rem;">Join SSMSD today and contribute towards better metabolic health through knowledge, collaboration and care. Membership is open to eligible medical professionals.</p>
            </div>
            
            <div class="pricing-grid" style="gap: 30px;">
                <div class="pricing-card" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%;">
                    <div style="margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 15px; font-size: 1.4rem;">Annual Member</h3>
                        <p class="text-muted" style="font-size: 0.95rem;">For practicing doctors and researchers looking to engage with our yearly activities and resources.</p>
                    </div>
                    <a href="contact.html" class="btn btn-outline" style="width: 100%; justify-content: center;">Apply for Annual</a>
                </div>
                
                <div class="pricing-card featured" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%;">
                    <div style="margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 15px; font-size: 1.4rem;">Life Member</h3>
                        <p class="text-muted" style="font-size: 0.95rem;">A permanent affiliation with SSMSD for established professionals dedicated to metabolic health.</p>
                    </div>
                    <a href="contact.html" class="btn btn-primary" style="width: 100%; justify-content: center;">Apply for Life</a>
                </div>
                
                <div class="pricing-card" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%;">
                    <div style="margin-bottom: 30px;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 15px; font-size: 1.4rem;">Student Member</h3>
                        <p class="text-muted" style="font-size: 0.95rem;">For medical students and trainees who want to access educational resources and mentorship.</p>
                    </div>
                    <a href="contact.html" class="btn btn-outline" style="width: 100%; justify-content: center;">Apply for Student</a>
                </div>
            </div>
        </div>
    </section>
    `;
};
