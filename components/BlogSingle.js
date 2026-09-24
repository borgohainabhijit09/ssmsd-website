import { fetchBlogBySlug, fetchPublishedBlogs, shareToFacebook } from '../js/supabase.js';

const SAMPLE_BLOGS = [
    {
        id: '1',
        title: 'Advancements in Type 2 Diabetes Management & Lifestyle Interventions',
        slug: 'advancements-in-type-2-diabetes-management',
        category: 'Clinical Guidelines',
        excerpt: 'Exploring recent clinical updates, dietary strategies, and pharmacological breakthroughs in managing Metabolic Syndrome and Type 2 Diabetes.',
        content: `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                Metabolic Syndrome and Type 2 Diabetes represent two of the most rapidly escalating health challenges worldwide. Recent updates presented at SSMSD emphasize that combining targeted pharmacotherapies with structured lifestyle modifications offers unprecedented control over glycemic variability and long-term cardiovascular risks.
            </p>
            <h3 style="margin: 30px 0 15px; color: var(--accent);">Key Clinical Guidelines</h3>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 25px; line-height: 1.8;">
                <li>Early screening for insulin resistance in high-risk individuals.</li>
                <li>Integration of SGLT2 inhibitors and GLP-1 receptor agonists for cardiovascular protection.</li>
                <li>Customized dietary planning focusing on glycemic index management and caloric optimization.</li>
            </ul>
            <p style="font-size: 1.05rem; line-height: 1.8;">
                Healthcare professionals are encouraged to stay connected with SSMSD educational programs for ongoing clinical recommendations.
            </p>
        `,
        author: 'Dr. S. K. Sharma',
        cover_image: 'assets/hero-doctors.png',
        published_at: '2026-09-15T10:00:00Z'
    },
    {
        id: '2',
        title: 'Understanding Cardiovascular Risk in Metabolic Syndrome',
        slug: 'understanding-cardiovascular-risk-in-metabolic-syndrome',
        category: 'Research & Studies',
        excerpt: 'A comprehensive review of lipid profile abnormalities, hypertension, and endothelial dysfunction in patients with metabolic disorders.',
        content: `
            <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 20px;">
                Patients diagnosed with metabolic syndrome face significantly elevated risks of cardiovascular complications, including coronary artery disease, stroke, and peripheral vascular disease.
            </p>
            <h3 style="margin: 30px 0 15px; color: var(--accent);">Cardiovascular Risk Factors</h3>
            <ul style="list-style-type: disc; margin-left: 20px; margin-bottom: 25px; line-height: 1.8;">
                <li>Atherogenic dyslipidemia (elevated triglycerides and low HDL cholesterol).</li>
                <li>Elevated blood pressure and arterial stiffness.</li>
                <li>Prothrombotic and proinflammatory states.</li>
            </ul>
            <p style="font-size: 1.05rem; line-height: 1.8;">
                Comprehensive risk assessment and early screening remain key pillars of preventive care.
            </p>
        `,
        author: 'SSMSD Research Team',
        cover_image: 'assets/hero-bg-2.png',
        published_at: '2026-09-10T14:30:00Z'
    }
];

export const BlogSingle = () => {
    setTimeout(async () => {
        const container = document.getElementById('blog-single-container');
        if (!container) return;

        const urlParams = new URLSearchParams(window.location.search);
        let slug = urlParams.get('slug');

        // Fallback to sessionStorage if slug wasn't in URL
        if (!slug) {
            try { slug = sessionStorage.getItem('current_reading_slug'); } catch (e) {}
        }

        let blog = null;

        if (slug) {
            // 1. Fetch by slug from Supabase DB
            try {
                blog = await fetchBlogBySlug(slug);
            } catch (e) {
                console.warn('DB lookup error for slug:', slug);
            }

            // 2. Check local admin cache
            if (!blog) {
                try {
                    const cached = localStorage.getItem('ssmsd_admin_blogs');
                    if (cached) {
                        const localBlogs = JSON.parse(cached);
                        blog = localBlogs.find(b => b.slug === slug || b.id === slug);
                    }
                } catch (e) {}
            }

            // 3. Check sample blogs
            if (!blog) {
                blog = SAMPLE_BLOGS.find(b => b.slug === slug || b.id === slug);
            }
        }

        // 4. Fallback to latest published blog if no slug was found
        if (!blog) {
            try {
                const all = await fetchPublishedBlogs();
                if (all && all.length > 0) {
                    blog = all[0];
                }
            } catch (e) {}
        }

        // 5. Ultimate fallback
        if (!blog) {
            blog = SAMPLE_BLOGS[0];
        }

        // Update address bar URL so the slug is ALWAYS present in the browser URL bar
        if (blog && blog.slug) {
            try {
                const targetUrl = `blog-details.html?slug=${encodeURIComponent(blog.slug)}`;
                history.replaceState({ slug: blog.slug }, blog.title, targetUrl);
            } catch (e) {}
        }

        renderSingleBlog(blog, container);
    }, 50);

    return `
    <article class="section-padding container">
        <div id="blog-single-container" style="max-width: 850px; margin: 0 auto;">
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                Loading blog post...
            </div>
        </div>
    </article>
    `;
};

function renderSingleBlog(blog, container) {
    const dateStr = blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    }) : 'Recent';

    const currentUrl = window.location.href;
    const coverImg = blog.cover_image || 'assets/hero-doctors.png';

    document.title = `${blog.title} - SSMSD`;

    container.innerHTML = `
        <header style="margin-bottom: 35px;">
            <div style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                <a href="blogs.html" style="color: var(--accent); font-weight: 600; font-size: 0.9rem; text-decoration: none;">
                    &larr; Back to all blogs
                </a>
                <span style="background: rgba(14, 165, 233, 0.15); color: var(--accent); border: 1px solid rgba(125, 211, 252, 0.3); font-size: 0.8rem; font-weight: 700; padding: 4px 14px; border-radius: 20px; text-transform: uppercase;">
                    ${blog.category || 'General News'}
                </span>
            </div>
            <h1 style="font-size: 2.5rem; line-height: 1.3; margin-bottom: 20px;">${blog.title}</h1>
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 20px; color: var(--text-muted); font-size: 0.95rem; gap: 15px;">
                <div>
                    By <strong style="color: var(--white);">${blog.author || 'SSMSD'}</strong> &bull; Published on ${dateStr}
                </div>
                <button id="single-fb-share" style="background: #1877F2; color: #FFFFFF; border: none; padding: 10px 20px; border-radius: 25px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Share on Facebook
                </button>
            </div>
        </header>

        ${blog.cover_image ? `
        <div style="margin-bottom: 35px; border-radius: var(--border-radius); overflow: hidden; max-height: 450px; border: 1px solid var(--border);">
            <img src="${coverImg}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
        </div>
        ` : ''}

        <div class="blog-body" style="background: var(--card-bg); padding: 40px; border-radius: var(--border-radius); border: 1px solid var(--border); font-size: 1.05rem; line-height: 1.8;">
            ${blog.content}
        </div>

        <footer style="margin-top: 40px; padding-top: 25px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
            <a href="blogs.html" class="btn btn-outline" style="font-size: 0.9rem; padding: 10px 22px;">&larr; More Articles</a>
            <button id="footer-fb-share" style="background: rgba(24, 119, 242, 0.15); color: #1877F2; border: 1px solid rgba(24, 119, 242, 0.4); padding: 10px 20px; border-radius: 25px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Share Article on Facebook
            </button>
        </footer>
    `;

    const handleShare = () => shareToFacebook(currentUrl, blog.title);
    container.querySelector('#single-fb-share')?.addEventListener('click', handleShare);
    container.querySelector('#footer-fb-share')?.addEventListener('click', handleShare);
}
