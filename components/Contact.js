export const Contact = () => {
    return `
    <section class="section-padding" style="position: relative; overflow: hidden;">
        <!-- Decorative Background Elements -->
        <div style="position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%); border-radius: 50%; z-index: 0;"></div>
        <div style="position: absolute; bottom: -100px; left: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%); border-radius: 50%; z-index: 0;"></div>

        <div class="container" style="position: relative; z-index: 1;">
            <div style="text-align: center; margin-bottom: 60px;">
                <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 12px;">Get in Touch</p>
                <h2>We're Here to Help</h2>
                <p class="text-muted" style="max-width: 600px; margin: 15px auto 0;">Whether you have a question about membership, upcoming events, or general inquiries, our team is ready to assist you.</p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 50px;">
                <!-- Contact Information Cards -->
                <div style="display: flex; flex-direction: column; gap: 24px;">
                    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 30px; border-radius: var(--border-radius); display: flex; gap: 20px; align-items: flex-start; transition: var(--transition); box-shadow: var(--shadow-soft);" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(14,165,233,0.3)'" onmouseout="this.style.transform='none'; this.style.borderColor='var(--border)'">
                        <div style="background: rgba(14, 165, 233, 0.1); color: var(--accent); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 8px; font-size: 1.1rem;">Secretariat Office</h4>
                            <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6;">Z Square, 4th floor, Above Apollo Clinic,<br>Graham Bazar, Dibrugarh, PIN- 786001,<br>India, Assam.</p>
                        </div>
                    </div>

                    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 30px; border-radius: var(--border-radius); display: flex; gap: 20px; align-items: flex-start; transition: var(--transition); box-shadow: var(--shadow-soft);" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(14,165,233,0.3)'" onmouseout="this.style.transform='none'; this.style.borderColor='var(--border)'">
                        <div style="background: rgba(14, 165, 233, 0.1); color: var(--accent); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 8px; font-size: 1.1rem;">Email Us</h4>
                            <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6;">ssmsd.we@gmail.com</p>
                        </div>
                    </div>

                    <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 30px; border-radius: var(--border-radius); display: flex; gap: 20px; align-items: flex-start; transition: var(--transition); box-shadow: var(--shadow-soft);" onmouseover="this.style.transform='translateY(-5px)'; this.style.borderColor='rgba(14,165,233,0.3)'" onmouseout="this.style.transform='none'; this.style.borderColor='var(--border)'">
                        <div style="background: rgba(14, 165, 233, 0.1); color: var(--accent); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <div>
                            <h4 style="margin-bottom: 8px; font-size: 1.1rem;">Call Us</h4>
                            <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6;">+91 9435055131<br>Mon - Fri, 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div style="background: var(--card-bg); border: 1px solid var(--border); padding: 40px; border-radius: var(--border-radius); box-shadow: var(--shadow-medium);">
                    <h3 style="margin-bottom: 24px; font-size: 1.5rem;">Send a Message</h3>
                    <form style="display: flex; flex-direction: column; gap: 20px;" onsubmit="event.preventDefault(); alert('Message sent successfully!');">
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">First Name</label>
                                <input type="text" placeholder="John" required style="padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--white); font-family: inherit; font-size: 0.95rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--accent)'; this.style.background='rgba(255,255,255,0.05)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'">
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Last Name</label>
                                <input type="text" placeholder="Doe" required style="padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--white); font-family: inherit; font-size: 0.95rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--accent)'; this.style.background='rgba(255,255,255,0.05)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'">
                            </div>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Email Address</label>
                            <input type="email" placeholder="john@example.com" required style="padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--white); font-family: inherit; font-size: 0.95rem; transition: var(--transition);" onfocus="this.style.borderColor='var(--accent)'; this.style.background='rgba(255,255,255,0.05)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'">
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Subject</label>
                            <select style="padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--white); font-family: inherit; font-size: 0.95rem; transition: var(--transition); cursor: pointer;" onfocus="this.style.borderColor='var(--accent)'; this.style.background='rgba(255,255,255,0.05)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'">
                                <option value="general" style="background: var(--background); color: var(--white);">General Inquiry</option>
                                <option value="membership" style="background: var(--background); color: var(--white);">Membership</option>
                                <option value="events" style="background: var(--background); color: var(--white);">Events & CME</option>
                                <option value="sponsorship" style="background: var(--background); color: var(--white);">Sponsorship</option>
                            </select>
                        </div>

                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Message</label>
                            <textarea placeholder="How can we help you?" required rows="5" style="padding: 14px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.03); color: var(--white); font-family: inherit; font-size: 0.95rem; transition: var(--transition); resize: vertical;" onfocus="this.style.borderColor='var(--accent)'; this.style.background='rgba(255,255,255,0.05)'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'"></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary" style="justify-content: center; padding: 16px; font-size: 1.05rem; margin-top: 10px;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
};
