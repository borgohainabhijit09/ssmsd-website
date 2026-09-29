/**
 * Razorpay Integration Helper for SSMSD
 */

const DEFAULT_RAZORPAY_CONFIG = {
    key_id: 'rzp_test_SSMSD123456789',
    key_secret: '',
    enabled: true,
    currency: 'INR',
    annual_fee: 2500,
    life_fee: 10000,
    student_fee: 1000,
    company_name: 'SSMSD - Society for Study of Metabolic Syndrome and Diabetes',
    description: 'Membership Registration Fee'
};

export function getRazorpayConfig() {
    try {
        const saved = localStorage.getItem('ssmsd_razorpay_config');
        if (saved) {
            return { ...DEFAULT_RAZORPAY_CONFIG, ...JSON.parse(saved) };
        }
    } catch (e) {
        console.warn('Failed to load razorpay config from local storage', e);
    }
    return DEFAULT_RAZORPAY_CONFIG;
}

export function saveRazorpayConfig(config) {
    const current = getRazorpayConfig();
    const updated = { ...current, ...config };
    try {
        localStorage.setItem('ssmsd_razorpay_config', JSON.stringify(updated));
    } catch (e) {
        console.warn('Failed to save razorpay config to local storage', e);
    }
    return updated;
}

export function loadRazorpaySDK() {
    return new Promise((resolve, reject) => {
        if (window.Razorpay) {
            resolve(true);
            return;
        }
        const existingScript = document.querySelector('script[src*="razorpay"]');
        if (existingScript) {
            existingScript.addEventListener('load', () => resolve(true));
            existingScript.addEventListener('error', () => reject(new Error('Failed to load Razorpay SDK')));
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error('Failed to load Razorpay SDK. Please check your internet connection.'));
        document.body.appendChild(script);
    });
}
