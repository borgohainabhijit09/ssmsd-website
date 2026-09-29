import { getRazorpayConfig, loadRazorpaySDK } from './razorpay.js';
import { saveMemberRegistration } from './members.js';
import { showAlert } from './modal.js';

let modalContainer = null;

function ensureModalDOM() {
    if (document.getElementById('ssmsd-registration-modal')) return;

    modalContainer = document.createElement('div');
    modalContainer.id = 'ssmsd-registration-modal';
    modalContainer.innerHTML = `
        <div id="reg-modal-overlay" style="
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(15, 23, 42, 0.9); backdrop-filter: blur(8px);
            display: none; justify-content: center; align-items: center;
            z-index: 10000; padding: 20px; overflow-y: auto;
        ">
            <div style="
                background: var(--card-bg, #1E293B); border: 1px solid var(--border, rgba(255, 255, 255, 0.15));
                border-radius: 20px; width: 100%; max-width: 650px;
                padding: 35px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
                color: #F8FAFC; position: relative; max-height: 90vh; overflow-y: auto;
            ">
                <button id="close-reg-modal" style="
                    position: absolute; top: 20px; right: 22px; background: none;
                    border: none; color: #94A3B8; font-size: 1.8rem; cursor: pointer;
                    line-height: 1; transition: color 0.2s;
                ">&times;</button>

                <div style="margin-bottom: 25px;">
                    <span style="color: var(--accent, #0EA5E9); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px;">SSMSD Official Membership</span>
                    <h2 style="font-size: 1.7rem; margin-top: 5px; color: #FFFFFF;">Member Registration Form</h2>
                    <p style="font-size: 0.9rem; color: #94A3B8; margin-top: 4px;">Fill in your details to register as a member and process membership fee.</p>
                </div>

                <form id="ssmsd-member-form">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 0.9rem; font-weight: 600; color: #E2E8F0; margin-bottom: 8px;">Select Membership Category *</label>
                        <select id="reg-plan-select" class="form-control" style="
                            width: 100%; padding: 12px 16px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                            border-radius: 10px; color: #FFFFFF; font-size: 1rem; outline: none;
                        " required>
                            <option value="Annual Member">Annual Member</option>
                            <option value="Life Member">Life Member</option>
                            <option value="Student Member">Student Member</option>
                        </select>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Full Name *</label>
                            <input type="text" id="reg-name" placeholder="Dr. John Doe" style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            " required>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Email Address *</label>
                            <input type="email" id="reg-email" placeholder="john.doe@example.com" style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            " required>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Phone / Mobile No. *</label>
                            <input type="tel" id="reg-phone" placeholder="+91 98765 43210" style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            " required>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Medical Qualification *</label>
                            <input type="text" id="reg-qualification" placeholder="MBBS, MD, DM, etc." style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            " required>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Medical Reg. No. / Institution *</label>
                            <input type="text" id="reg-no" placeholder="MCI Registration or College" style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            " required>
                        </div>
                        <div>
                            <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Specialty / Department</label>
                            <input type="text" id="reg-specialty" placeholder="e.g. Diabetology, Endocrinology" style="
                                width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                                border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none;
                            ">
                        </div>
                    </div>

                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 0.85rem; font-weight: 600; color: #CBD5E1; margin-bottom: 6px;">Clinic / Correspondence Address</label>
                        <textarea id="reg-address" rows="2" placeholder="City, State, Pincode" style="
                            width: 100%; padding: 12px 14px; background: #0F172A; border: 1px solid rgba(255,255,255,0.15);
                            border-radius: 8px; color: #FFF; font-size: 0.95rem; outline: none; resize: vertical;
                        "></textarea>
                    </div>

                    <!-- Payment Summary Box -->
                    <div style="
                        background: rgba(14, 165, 233, 0.08); border: 1px dashed rgba(14, 165, 233, 0.4);
                        border-radius: 12px; padding: 18px 22px; margin-bottom: 25px; display: flex;
                        justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;
                    ">
                        <div>
                            <span style="font-size: 0.85rem; color: #94A3B8; display: block;">Total Registration Amount</span>
                            <span id="reg-amount-display" style="font-size: 1.6rem; font-weight: 800; color: #38BDF8;">₹2,500</span>
                            <span style="font-size: 0.75rem; color: #4ADE80; margin-left: 8px;">(Includes Taxes)</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: #CBD5E1; background: rgba(255,255,255,0.05); padding: 6px 12px; border-radius: 20px;">
                            <svg width="16" height="16" fill="none" stroke="#38BDF8" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span>Razorpay Checkout</span>
                        </div>
                    </div>

                    <button type="submit" id="reg-submit-btn" style="
                        width: 100%; background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
                        color: #FFFFFF; border: none; padding: 14px; border-radius: 50px;
                        font-size: 1.1rem; font-weight: 700; cursor: pointer;
                        display: flex; align-items: center; justify-content: center; gap: 10px;
                        box-shadow: 0 4px 20px rgba(14, 165, 233, 0.4); transition: transform 0.2s, box-shadow 0.2s;
                    ">
                        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        <span id="reg-submit-text">Pay ₹2,500 & Register Now</span>
                    </button>
                </form>
            </div>
        </div>
    `;

    document.body.appendChild(modalContainer);

    document.getElementById('close-reg-modal').onclick = closeMemberRegistrationModal;
    document.getElementById('reg-modal-overlay').onclick = (e) => {
        if (e.target.id === 'reg-modal-overlay') closeMemberRegistrationModal();
    };
}

export function openMemberRegistrationModal(selectedPlan = 'Annual Member') {
    ensureModalDOM();
    const config = getRazorpayConfig();
    const overlay = document.getElementById('reg-modal-overlay');
    const planSelect = document.getElementById('reg-plan-select');
    const amountDisplay = document.getElementById('reg-amount-display');
    const submitText = document.getElementById('reg-submit-text');

    const updatePrice = () => {
        const plan = planSelect.value;
        let fee = config.annual_fee || 2500;
        if (plan === 'Life Member') fee = config.life_fee || 10000;
        if (plan === 'Student Member') fee = config.student_fee || 1000;

        const formatted = new Intl.NumberFormat('en-IN', { style: 'currency', currency: config.currency || 'INR', maximumFractionDigits: 0 }).format(fee);
        amountDisplay.textContent = formatted;
        submitText.textContent = `Pay ${formatted} & Register Now`;
        planSelect.dataset.amount = fee;
    };

    planSelect.value = selectedPlan;
    updatePrice();
    planSelect.onchange = updatePrice;

    overlay.style.display = 'flex';

    const form = document.getElementById('ssmsd-member-form');
    form.onsubmit = async (e) => {
        e.preventDefault();
        await handleFormSubmission(config);
    };
}

export function closeMemberRegistrationModal() {
    const overlay = document.getElementById('reg-modal-overlay');
    if (overlay) overlay.style.display = 'none';
}

async function handleFormSubmission(config) {
    const plan = document.getElementById('reg-plan-select').value;
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const phone = document.getElementById('reg-phone').value.trim();
    const qualification = document.getElementById('reg-qualification').value.trim();
    const registration_no = document.getElementById('reg-no').value.trim();
    const specialty = document.getElementById('reg-specialty').value.trim();
    const address = document.getElementById('reg-address').value.trim();
    const planSelect = document.getElementById('reg-plan-select');
    const amount = Number(planSelect.dataset.amount || 2500);

    const submitBtn = document.getElementById('reg-submit-btn');
    const submitText = document.getElementById('reg-submit-text');
    const originalText = submitText.textContent;

    submitBtn.disabled = true;
    submitText.textContent = 'Processing...';

    const memberPayload = {
        full_name: name,
        email,
        phone,
        qualification,
        registration_no,
        specialty,
        address,
        plan,
        amount
    };

    // Check if Razorpay is enabled and key ID is available
    if (config.enabled && config.key_id) {
        try {
            await loadRazorpaySDK();

            const options = {
                key: config.key_id,
                amount: amount * 100, // Razorpay takes amount in paise
                currency: config.currency || 'INR',
                name: config.company_name || 'SSMSD',
                description: `${plan} Registration Fee`,
                image: 'assets/logo.png',
                prefill: {
                    name,
                    email,
                    contact: phone
                },
                theme: {
                    color: '#0EA5E9'
                },
                handler: async function (response) {
                    const payment_id = response.razorpay_payment_id;
                    const order_id = response.razorpay_order_id || 'ORD-' + Date.now();

                    const finalRecord = await saveMemberRegistration({
                        ...memberPayload,
                        payment_id,
                        order_id,
                        payment_status: 'Paid'
                    });

                    closeMemberRegistrationModal();
                    await showAlert(
                        'Registration Successful! 🎉',
                        `<div style="text-align: left;">
                            <p style="margin-bottom: 12px;">Thank you <strong>${name}</strong>! Your application for <strong>${plan}</strong> has been received with confirmed payment.</p>
                            <div style="background: rgba(15,23,42,0.8); padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.9rem;">
                                <div><strong>Registration ID:</strong> ${finalRecord.id}</div>
                                <div><strong>Payment ID:</strong> ${payment_id}</div>
                                <div><strong>Amount Paid:</strong> ₹${amount.toLocaleString('en-IN')}</div>
                                <div><strong>Email:</strong> ${email}</div>
                            </div>
                            <p style="margin-top: 12px; font-size: 0.85rem; color: #94A3B8;">An official confirmation email and receipt details will be dispatched shortly.</p>
                        </div>`
                    );
                },
                modal: {
                    ondismiss: function () {
                        submitBtn.disabled = false;
                        submitText.textContent = originalText;
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response) {
                showAlert('Payment Failed', `Reason: ${response.error.description || 'Transaction declined'}`);
                submitBtn.disabled = false;
                submitText.textContent = originalText;
            });
            rzp.open();
            return;
        } catch (err) {
            console.warn('Razorpay SDK error or key invalid, falling back to test completion:', err);
        }
    }

    // Fallback or Test Mode processing
    const testPaymentId = 'pay_TEST_' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const finalRecord = await saveMemberRegistration({
        ...memberPayload,
        payment_id: testPaymentId,
        payment_status: 'Paid (Test Mode)'
    });

    submitBtn.disabled = false;
    submitText.textContent = originalText;
    closeMemberRegistrationModal();

    await showAlert(
        'Registration Submitted! 🎉',
        `<div style="text-align: left;">
            <p style="margin-bottom: 12px;">Thank you <strong>${name}</strong>! Your registration application for <strong>${plan}</strong> has been created successfully.</p>
            <div style="background: rgba(15,23,42,0.8); padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); font-size: 0.9rem;">
                <div><strong>Registration Reference:</strong> ${finalRecord.id}</div>
                <div><strong>Amount:</strong> ₹${amount.toLocaleString('en-IN')}</div>
                <div><strong>Payment Reference:</strong> ${testPaymentId}</div>
            </div>
        </div>`
    );
}
