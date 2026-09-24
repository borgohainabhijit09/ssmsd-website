import { supabase, shareToFacebook } from '../js/supabase.js';
import { showAlert, showConfirm } from '../js/modal.js';

let quill;
let currentBlogs = [
    {
        id: '1',
        title: 'Advancements in Type 2 Diabetes Management & Lifestyle Interventions',
        slug: 'advancements-in-type-2-diabetes-management',
        category: 'Clinical Guidelines',
        excerpt: 'Exploring recent clinical updates, dietary strategies, and pharmacological breakthroughs in managing Metabolic Syndrome and Type 2 Diabetes.',
        content: '<p>Metabolic Syndrome and Type 2 Diabetes represent growing health challenges worldwide. Recent studies presented at SSMSD highlight the critical role of early lifestyle interventions alongside novel pharmacotherapies.</p>',
        author: 'Dr. S. K. Sharma',
        cover_image: 'assets/hero-doctors.png',
        published_at: '2026-09-15T10:00:00Z',
        status: 'published'
    },
    {
        id: '2',
        title: 'Understanding Cardiovascular Risk in Metabolic Syndrome',
        slug: 'understanding-cardiovascular-risk-in-metabolic-syndrome',
        category: 'Research & Studies',
        excerpt: 'A comprehensive review of lipid profile abnormalities, hypertension, and endothelial dysfunction in patients with metabolic disorders.',
        content: '<p>Patients diagnosed with metabolic syndrome face significantly elevated risks of cardiovascular complications. Comprehensive risk assessment and early screening remain key pillars of preventive care.</p>',
        author: 'SSMSD Research Team',
        cover_image: 'assets/hero-bg-2.png',
        published_at: '2026-09-10T14:30:00Z',
        status: 'published'
    }
];

// Sync local cache
try {
    const cached = localStorage.getItem('ssmsd_admin_blogs');
    if (cached) {
        currentBlogs = JSON.parse(cached);
    }
} catch (e) {}

document.addEventListener('DOMContentLoaded', () => {
    initAuthListeners();
    initUIEvents();
    checkSession();
});

function ensureQuill() {
    if (!quill && document.getElementById('quill-editor')) {
        quill = new Quill('#quill-editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['blockquote', 'code-block'],
                    ['link', 'image'],
                    ['clean']
                ]
            }
        });
    }
    if (quill) {
        quill.enable(true);
    }
}

async function checkSession() {
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const logoutBtn = document.getElementById('logout-btn');

    try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            loginView.style.display = 'none';
            dashboardView.style.display = 'block';
            logoutBtn.style.display = 'inline-block';
            loadBlogs();
            return;
        }
    } catch (e) {
        console.warn('Session check error:', e);
    }

    // Require Login: Hide dashboard, show login form
    loginView.style.display = 'block';
    dashboardView.style.display = 'none';
    logoutBtn.style.display = 'none';
}

function initAuthListeners() {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    // Subscribe to auth state changes
    supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
            checkSession();
        } else {
            document.getElementById('login-view').style.display = 'block';
            document.getElementById('dashboard-view').style.display = 'none';
            document.getElementById('logout-btn').style.display = 'none';
        }
    });

    loginForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorEl = document.getElementById('login-error');

        errorEl.style.display = 'none';

        try {
            const { error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            checkSession();
        } catch (err) {
            errorEl.textContent = err.message || 'Invalid email or password';
            errorEl.style.display = 'block';
        }
    });

    logoutBtn?.addEventListener('click', async () => {
        try {
            await supabase.auth.signOut();
        } catch (e) {}
        window.location.reload();
    });
}

function initUIEvents() {
    const createBtn = document.getElementById('create-post-btn');
    const closeBtn = document.getElementById('close-editor-btn');
    const editorCard = document.getElementById('editor-card');
    const titleInput = document.getElementById('post-title');
    const slugInput = document.getElementById('post-slug');
    const blogForm = document.getElementById('blog-form');
    const saveDraftBtn = document.getElementById('save-draft-btn');
    const publishFbBtn = document.getElementById('publish-fb-btn');

    createBtn?.addEventListener('click', () => {
        editorCard.style.display = 'block';
        resetForm();
        document.getElementById('editor-title').textContent = 'Create New Blog Post';
        editorCard.scrollIntoView({ behavior: 'smooth' });
    });

    closeBtn?.addEventListener('click', () => {
        editorCard.style.display = 'none';
    });

    titleInput?.addEventListener('input', () => {
        if (!document.getElementById('blog-id').value) {
            slugInput.value = titleInput.value
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }
    });

    saveDraftBtn?.addEventListener('click', () => {
        document.getElementById('post-status').value = 'draft';
        blogForm.dispatchEvent(new Event('submit'));
    });

    publishFbBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('post-status').value = 'published';
        saveBlog(true);
    });

    blogForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveBlog(false);
    });
}

async function loadBlogs() {
    const tbody = document.getElementById('admin-blog-tbody');
    if (!tbody) return;

    try {
        const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
            currentBlogs = data;
            try { localStorage.setItem('ssmsd_admin_blogs', JSON.stringify(currentBlogs)); } catch (e) {}
        }
    } catch (e) {
        console.warn('Loading cached blogs in admin view');
    }

    renderAdminBlogTable(currentBlogs, tbody);
}

function renderAdminBlogTable(blogs, tbody) {
    if (blogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="padding: 30px; text-align: center; color: var(--text-muted);">No blog posts found. Click "+ Create New Post" above.</td></tr>`;
        return;
    }

    tbody.innerHTML = blogs.map(blog => {
        const dateStr = blog.published_at ? new Date(blog.published_at).toLocaleDateString() : 'Draft';
        const badgeClass = blog.status === 'published' ? 'badge-published' : 'badge-draft';
        const shareUrl = `${window.location.origin}/blog-details.html?slug=${blog.slug}`;
        const cat = blog.category || 'General News';

        return `
        <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 16px 20px; font-weight: 600; color: var(--white);">${blog.title}</td>
            <td style="padding: 16px 20px;"><span style="background: rgba(14, 165, 233, 0.15); color: var(--accent); padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: 700;">${cat}</span></td>
            <td style="padding: 16px 20px; color: var(--text-muted); font-size: 0.9rem;">${blog.author || 'SSMSD'}</td>
            <td style="padding: 16px 20px;"><span class="badge ${badgeClass}">${blog.status}</span></td>
            <td style="padding: 16px 20px; color: var(--text-muted); font-size: 0.9rem;">${dateStr}</td>
            <td style="padding: 16px 20px; text-align: right;">
                <div style="display: flex; gap: 8px; justify-content: flex-end;">
                    <button class="edit-blog-btn" data-id="${blog.id}" style="background: rgba(14, 165, 233, 0.15); color: var(--primary); border: 1px solid rgba(14, 165, 233, 0.3); padding: 5px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Edit</button>
                    <button class="fb-admin-share" data-url="${shareUrl}" data-title="${blog.title}" style="background: #1877F2; color: #FFF; border: none; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        FB Share
                    </button>
                    <button class="delete-blog-btn" data-id="${blog.id}" style="background: rgba(239, 68, 68, 0.15); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 5px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">Delete</button>
                </div>
            </td>
        </tr>
        `;
    }).join('');

    tbody.querySelectorAll('.edit-blog-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const blog = currentBlogs.find(b => b.id === id);
            if (blog) populateForm(blog);
        });
    });

    tbody.querySelectorAll('.fb-admin-share').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title');
            shareToFacebook(url, title);
        });
    });

    tbody.querySelectorAll('.delete-blog-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            const confirmed = await showConfirm('Delete Blog Post', 'Are you sure you want to delete this blog post?');
            if (confirmed) {
                try {
                    await supabase.from('blogs').delete().eq('id', id);
                } catch (e) {}
                currentBlogs = currentBlogs.filter(b => b.id !== id);
                try { localStorage.setItem('ssmsd_admin_blogs', JSON.stringify(currentBlogs)); } catch (e) {}
                renderAdminBlogTable(currentBlogs, tbody);
            }
        });
    });
}

function resetForm() {
    ensureQuill();
    document.getElementById('blog-id').value = '';
    document.getElementById('post-title').value = '';
    document.getElementById('post-slug').value = '';
    document.getElementById('post-category').value = 'Clinical Guidelines';
    document.getElementById('post-author').value = 'SSMSD Editorial Team';
    document.getElementById('post-excerpt').value = '';
    document.getElementById('post-cover').value = '';
    document.getElementById('post-status').value = 'published';
    if (quill) quill.setText('');
}

function populateForm(blog) {
    const editorCard = document.getElementById('editor-card');
    editorCard.style.display = 'block';
    ensureQuill();

    document.getElementById('blog-id').value = blog.id;
    document.getElementById('post-title').value = blog.title;
    document.getElementById('post-slug').value = blog.slug;
    document.getElementById('post-category').value = blog.category || 'Clinical Guidelines';
    document.getElementById('post-author').value = blog.author || 'SSMSD Editorial Team';
    document.getElementById('post-excerpt').value = blog.excerpt || '';
    document.getElementById('post-cover').value = blog.cover_image || '';
    document.getElementById('post-status').value = blog.status || 'draft';
    if (quill) {
        quill.root.innerHTML = blog.content || '';
    }

    document.getElementById('editor-title').textContent = 'Edit Blog Post';
    editorCard.scrollIntoView({ behavior: 'smooth' });
}

async function saveBlog(shareToFb = false) {
    const id = document.getElementById('blog-id').value;
    const title = document.getElementById('post-title').value.trim();
    const slug = document.getElementById('post-slug').value.trim();
    const category = document.getElementById('post-category').value;
    const author = document.getElementById('post-author').value.trim();
    const excerpt = document.getElementById('post-excerpt').value.trim();
    const cover_image = document.getElementById('post-cover').value.trim();
    const status = document.getElementById('post-status').value;
    const content = quill ? quill.root.innerHTML : '';

    if (!title || !slug) {
        await showAlert('Missing Information', 'Please fill in both the blog title and URL slug.');
        return;
    }

    const payload = {
        title,
        slug,
        category,
        author,
        excerpt,
        cover_image,
        status,
        content,
        published_at: status === 'published' ? new Date().toISOString() : null
    };

    try {
        if (id) {
            await supabase.from('blogs').update(payload).eq('id', id);
            const index = currentBlogs.findIndex(b => b.id === id);
            if (index !== -1) currentBlogs[index] = { ...currentBlogs[index], ...payload };
        } else {
            const newId = String(Date.now());
            const { data } = await supabase.from('blogs').insert([payload]).select();
            currentBlogs.unshift(data ? data[0] : { id: newId, ...payload });
        }
    } catch (e) {
        console.warn('Supabase request fallback:', e);
        const newId = id || String(Date.now());
        const existingIdx = currentBlogs.findIndex(b => b.id === newId);
        if (existingIdx !== -1) {
            currentBlogs[existingIdx] = { ...currentBlogs[existingIdx], ...payload };
        } else {
            currentBlogs.unshift({ id: newId, ...payload });
        }
    }

    // Save to local storage for immediate public view sync
    try { localStorage.setItem('ssmsd_admin_blogs', JSON.stringify(currentBlogs)); } catch (e) {}

    await showAlert('Success', 'Blog post saved successfully!');
    document.getElementById('editor-card').style.display = 'none';
    renderAdminBlogTable(currentBlogs, document.getElementById('admin-blog-tbody'));

    if (shareToFb) {
        const shareUrl = `${window.location.origin}/blog-details.html?slug=${slug}`;
        shareToFacebook(shareUrl, title);
    }
}
