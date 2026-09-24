/**
 * SSMSD Custom In-App Dialog & Modal System
 */

// Inject Modal HTML Container into DOM if not present
function getModalContainer() {
    let container = document.getElementById('ssmsd-modal-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'ssmsd-modal-container';
        container.innerHTML = `
            <div id="ssmsd-modal-overlay" style="
                position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px);
                display: none; justify-content: center; align-items: center;
                z-index: 9999; padding: 20px; transition: all 0.3s ease;
            ">
                <div id="ssmsd-modal-card" style="
                    background: #1E293B; border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 16px; width: 100%; max-width: 500px;
                    padding: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                    color: #F8FAFC; position: relative; animation: modalPop 0.3s ease;
                ">
                    <button id="ssmsd-modal-close" style="
                        position: absolute; top: 18px; right: 20px; background: none;
                        border: none; color: #94A3B8; font-size: 1.5rem; cursor: pointer;
                    ">&times;</button>
                    
                    <div id="ssmsd-modal-header" style="margin-bottom: 15px;">
                        <h3 id="ssmsd-modal-title" style="font-size: 1.4rem; color: #FFFFFF; margin: 0;"></h3>
                    </div>
                    
                    <div id="ssmsd-modal-body" style="font-size: 1rem; color: #94A3B8; line-height: 1.6; margin-bottom: 25px;"></div>
                    
                    <div id="ssmsd-modal-actions" style="display: flex; justify-content: flex-end; gap: 12px;"></div>
                </div>
            </div>
            <style>
                @keyframes modalPop {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            </style>
        `;
        document.body.appendChild(container);
    }
    return container;
}

/**
 * Custom In-App Notification Modal (Replaces browser alert)
 */
export function showAlert(title, message) {
    getModalContainer();
    const overlay = document.getElementById('ssmsd-modal-overlay');
    const titleEl = document.getElementById('ssmsd-modal-title');
    const bodyEl = document.getElementById('ssmsd-modal-body');
    const actionsEl = document.getElementById('ssmsd-modal-actions');
    const closeBtn = document.getElementById('ssmsd-modal-close');

    titleEl.textContent = title || 'Notification';
    bodyEl.innerHTML = typeof message === 'string' ? `<p>${message}</p>` : message;

    actionsEl.innerHTML = `
        <button id="ssmsd-modal-ok" style="
            background: #0EA5E9; color: #FFFFFF; border: none;
            padding: 10px 24px; border-radius: 50px; font-weight: 600; cursor: pointer;
        ">OK</button>
    `;

    overlay.style.display = 'flex';

    return new Promise((resolve) => {
        const closeModal = () => {
            overlay.style.display = 'none';
            resolve();
        };
        document.getElementById('ssmsd-modal-ok').onclick = closeModal;
        closeBtn.onclick = closeModal;
    });
}

/**
 * Custom In-App Confirmation Modal (Replaces browser confirm)
 */
export function showConfirm(title, message) {
    getModalContainer();
    const overlay = document.getElementById('ssmsd-modal-overlay');
    const titleEl = document.getElementById('ssmsd-modal-title');
    const bodyEl = document.getElementById('ssmsd-modal-body');
    const actionsEl = document.getElementById('ssmsd-modal-actions');
    const closeBtn = document.getElementById('ssmsd-modal-close');

    titleEl.textContent = title || 'Confirm Action';
    bodyEl.innerHTML = `<p>${message}</p>`;

    actionsEl.innerHTML = `
        <button id="ssmsd-modal-cancel" style="
            background: rgba(255, 255, 255, 0.05); color: #FFFFFF; border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 20px; border-radius: 50px; font-weight: 600; cursor: pointer;
        ">Cancel</button>
        <button id="ssmsd-modal-confirm" style="
            background: #EF4444; color: #FFFFFF; border: none;
            padding: 10px 22px; border-radius: 50px; font-weight: 600; cursor: pointer;
        ">Confirm</button>
    `;

    overlay.style.display = 'flex';

    return new Promise((resolve) => {
        document.getElementById('ssmsd-modal-confirm').onclick = () => {
            overlay.style.display = 'none';
            resolve(true);
        };
        document.getElementById('ssmsd-modal-cancel').onclick = () => {
            overlay.style.display = 'none';
            resolve(false);
        };
        closeBtn.onclick = () => {
            overlay.style.display = 'none';
            resolve(false);
        };
    });
}

/**
 * Custom In-App Social Share Dialog Box
 */
export function showShareModal(blogUrl, blogTitle = 'SSMSD Blog Post') {
    getModalContainer();
    const overlay = document.getElementById('ssmsd-modal-overlay');
    const titleEl = document.getElementById('ssmsd-modal-title');
    const bodyEl = document.getElementById('ssmsd-modal-body');
    const actionsEl = document.getElementById('ssmsd-modal-actions');
    const closeBtn = document.getElementById('ssmsd-modal-close');

    const targetUrl = blogUrl || window.location.href;
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(targetUrl)}`;

    titleEl.textContent = 'Share Post to Social Media';
    bodyEl.innerHTML = `
        <div style="background: #0F172A; padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 20px;">
            <p style="font-weight: 600; color: #FFFFFF; margin-bottom: 8px;">${blogTitle}</p>
            <p style="font-size: 0.85rem; color: #7DD3FC; word-break: break-all;">${targetUrl}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
            <a href="${fbShareUrl}" target="_blank" id="fb-direct-link" style="
                background: #1877F2; color: #FFFFFF; text-decoration: none;
                padding: 12px 20px; border-radius: 10px; font-weight: 600;
                display: flex; align-items: center; justify-content: center; gap: 10px;
                transition: transform 0.2s ease;
            ">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Continue to Facebook Share
            </a>

            <button id="copy-share-link" style="
                background: rgba(255, 255, 255, 0.05); color: #F8FAFC;
                border: 1px solid rgba(255, 255, 255, 0.2); padding: 12px 20px;
                border-radius: 10px; font-weight: 600; cursor: pointer;
                display: flex; align-items: center; justify-content: center; gap: 8px;
            ">
                Copy Article Link
            </button>
        </div>
    `;

    actionsEl.innerHTML = '';
    overlay.style.display = 'flex';

    const copyBtn = document.getElementById('copy-share-link');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(targetUrl);
        copyBtn.textContent = '✓ Link Copied to Clipboard!';
        copyBtn.style.color = '#4ADE80';
        setTimeout(() => {
            copyBtn.textContent = 'Copy Article Link';
            copyBtn.style.color = '#F8FAFC';
        }, 2500);
    };

    closeBtn.onclick = () => {
        overlay.style.display = 'none';
    };
}
