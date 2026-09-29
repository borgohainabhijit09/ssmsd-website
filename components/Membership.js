import { getRazorpayConfig } from '../js/razorpay.js';

export const Membership = () => {
    const config = getRazorpayConfig();

    const annualFee = new Intl.NumberFormat('en-IN', { style: 'currency', currency: config.currency || 'INR', maximumFractionDigits: 0 }).format(config.annual_fee || 2500);
    const lifeFee = new Intl.NumberFormat('en-IN', { style: 'currency', currency: config.currency || 'INR', maximumFractionDigits: 0 }).format(config.life_fee || 10000);
    const studentFee = new Intl.NumberFormat('en-IN', { style: 'currency', currency: config.currency || 'INR', maximumFractionDigits: 0 }).format(config.student_fee || 1000);

    return `
    <section class="section-padding" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);">
        <div class="container">
            <div style="text-align: center; max-width: 800px; margin: 0 auto 60px;">
                <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 12px;">Join Us</p>
                <h2 style="margin-bottom: 24px;">Be a part of a growing community of experts</h2>
                <p class="text-muted" style="font-size: 1.1rem;">Join SSMSD today and contribute towards better metabolic health through knowledge, collaboration and care. Membership is open to eligible medical professionals & students.</p>
            </div>
            
            <div class="pricing-grid" style="gap: 30px;">
                <!-- Annual Member Card -->
                <div class="pricing-card" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border: 1px solid var(--border); border-radius: var(--border-radius); padding: 35px 25px; background: var(--card-bg);">
                    <div style="margin-bottom: 30px; text-align: center; width: 100%;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 4-4H8a4 4 0 0 4-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 10px; font-size: 1.4rem; color: var(--white);">Annual Member</h3>
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 15px;">${annualFee}<span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;"> / year</span></div>
                        <p class="text-muted" style="font-size: 0.95rem; margin-bottom: 20px;">For practicing doctors and researchers looking to engage with our yearly activities and resources.</p>
                        
                        <ul style="list-style: none; padding: 0; margin: 20px 0; text-align: left; font-size: 0.9rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px;">
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Full access to annual CME programs</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Digital Certificate of Membership</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Access to clinical guidelines & journals</li>
                        </ul>
                    </div>
                    <button class="btn btn-outline open-member-reg-btn" data-plan="Annual Member" style="width: 100%; justify-content: center; cursor: pointer;">Apply for Annual</button>
                </div>
                
                <!-- Life Member Card (Featured) -->
                <div class="pricing-card featured" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border: 2px solid var(--accent); border-radius: var(--border-radius); padding: 35px 25px; background: rgba(14, 165, 233, 0.05); position: relative;">
                    <div style="position: absolute; top: -14px; background: var(--accent); color: #FFF; padding: 4px 16px; border-radius: 20px; font-weight: 700; font-size: 0.75rem; text-transform: uppercase;">Most Popular</div>
                    <div style="margin-bottom: 30px; text-align: center; width: 100%;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 10px; font-size: 1.4rem; color: var(--white);">Life Member</h3>
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 15px;">${lifeFee}<span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;"> / lifetime</span></div>
                        <p class="text-muted" style="font-size: 0.95rem; margin-bottom: 20px;">A permanent affiliation with SSMSD for established professionals dedicated to metabolic health.</p>

                        <ul style="list-style: none; padding: 0; margin: 20px 0; text-align: left; font-size: 0.9rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px;">
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Lifetime voting rights & voting privileges</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Priority invitation for Faculty & Speakers</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Printed Life Member Certificate & Badge</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Discounts on international conference pass</li>
                        </ul>
                    </div>
                    <button class="btn btn-primary open-member-reg-btn" data-plan="Life Member" style="width: 100%; justify-content: center; cursor: pointer;">Apply for Life</button>
                </div>
                
                <!-- Student Member Card -->
                <div class="pricing-card" style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; height: 100%; border: 1px solid var(--border); border-radius: var(--border-radius); padding: 35px 25px; background: var(--card-bg);">
                    <div style="margin-bottom: 30px; text-align: center; width: 100%;">
                        <div style="width: 60px; height: 60px; background: rgba(14, 165, 233, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: var(--accent);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                        </div>
                        <h3 class="plan-name" style="margin-bottom: 10px; font-size: 1.4rem; color: var(--white);">Student Member</h3>
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: 15px;">${studentFee}<span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 400;"> / year</span></div>
                        <p class="text-muted" style="font-size: 0.95rem; margin-bottom: 20px;">For medical students, PG residents and trainees seeking educational resources and mentorship.</p>

                        <ul style="list-style: none; padding: 0; margin: 20px 0; text-align: left; font-size: 0.9rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px;">
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Discounted CME & workshop registration</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Access to student research mentorship</li>
                            <li style="display: flex; align-items: center; gap: 8px;"><span style="color: #4ADE80;">✓</span> Digital Student Membership Card</li>
                        </ul>
                    </div>
                    <button class="btn btn-outline open-member-reg-btn" data-plan="Student Member" style="width: 100%; justify-content: center; cursor: pointer;">Apply for Student</button>
                </div>
            </div>
        </div>
    </section>
    `;
};
