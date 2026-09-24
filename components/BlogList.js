import { fetchPublishedBlogs, shareToFacebook } from '../js/supabase.js';

const CATEGORIES = ['All', 'Clinical Guidelines', 'Research & Studies', 'Patient Care', 'CME & Events'];

const SAMPLE_BLOGS = [
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

let allFetchedBlogs = [];
let activeCategory = 'All';

export const BlogList = () => {
    setTimeout(async () => {
        const container = document.getElementById('blog-grid-container');
        if (!container) return;

        try {
            allFetchedBlogs = await fetchPublishedBlogs();
        } catch (e) {
            console.warn('Using sample blogs due to unconfigured Supabase credentials.');
        }

        if (!allFetchedBlogs || allFetchedBlogs.length === 0) {
            allFetchedBlogs = SAMPLE_BLOGS;
        }

        initCategoryFilters(container);
        renderBlogs(allFetchedBlogs, container);
    }, 50);

    return `
    <section class="section-padding container">
        <div style="text-align: center; margin-bottom: 40px;">
            <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.85rem; margin-bottom: 12px;">Latest News & Insights</p>
            <h2>SSMSD Medical Blog</h2>
            <p class="text-muted" style="max-width: 600px; margin: 15px auto 0; font-size: 1.05rem;">
                Stay updated with scientific research, clinical guidelines, and updates on Metabolic Syndrome & Diabetes.
            </p>
        </div>

        <!-- Category Filter Pills -->
        <div id="category-pills-wrapper" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 45px;">
            ${CATEGORIES.map(cat => `
                <button class="category-pill ${cat === 'All' ? 'active' : ''}" data-category="${cat}" style="
                    padding: 8px 20px;
                    border-radius: 30px;
                    border: 1px solid ${cat === 'All' ? 'var(--primary)' : 'var(--border)'};
                    background: ${cat === 'All' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)'};
                    color: ${cat === 'All' ? 'var(--white)' : 'var(--text-muted)'};
                    font-size: 0.9rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: var(--transition);
                ">
                    ${cat}
                </button>
            `).join('')}
        </div>

        <div id="blog-grid-container" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 30px;">
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
                Loading blog posts...
            </div>
        </div>
    </section>
    `;
};

function initCategoryFilters(container) {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            activeCategory = pill.getAttribute('data-category');

            pills.forEach(p => {
                const isActive = p.getAttribute('data-category') === activeCategory;
                p.style.background = isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.05)';
                p.style.borderColor = isActive ? 'var(--primary)' : 'var(--border)';
                p.style.color = isActive ? 'var(--white)' : 'var(--text-muted)';
            });

            const filtered = activeCategory === 'All'
                ? allFetchedBlogs
                : allFetchedBlogs.filter(b => (b.category || 'General News') === activeCategory);

            renderBlogs(filtered, container);
        });
    });
}

function renderBlogs(blogs, container) {
    if (!blogs || blogs.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--card-bg); border-radius: var(--border-radius); border: 1px solid var(--border);">
                <h3 style="color: var(--white); margin-bottom: 10px;">No articles found in this category</h3>
                <p class="text-muted">Try selecting a different category filter above.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = blogs.map(blog => {
        const dateStr = blog.published_at ? new Date(blog.published_at).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
        }) : 'Recent';

        const shareUrl = `${window.location.origin}/blog-details.html?slug=${blog.slug}`;
        const coverImg = blog.cover_image || 'assets/hero-doctors.png';
        const categoryTag = blog.category || 'General News';

        return `
        <article class="blog-card" style="background: var(--card-bg); border-radius: var(--border-radius); border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column; transition: var(--transition);">
            <div style="height: 200px; overflow: hidden; position: relative;">
                <img src="${coverImg}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;" onerror="this.src='assets/hero-doctors.png'">
                <span style="position: absolute; top: 15px; left: 15px; background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); color: var(--accent); border: 1px solid rgba(125, 211, 252, 0.3); font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase;">
                    ${categoryTag}
                </span>
            </div>
            <div style="padding: 25px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 0.85rem; color: var(--text-muted);">
                        <span><strong style="color: var(--accent);">${blog.author || 'SSMSD'}</strong></span>
                        <span>${dateStr}</span>
                    </div>
                    <h3 style="font-size: 1.3rem; margin-bottom: 12px; line-height: 1.4;">
                        <a href="blog-details.html?slug=${blog.slug}" class="blog-read-link" data-slug="${blog.slug}" style="color: var(--white); text-decoration: none;">${blog.title}</a>
                    </h3>
                    <p class="text-muted" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                        ${blog.excerpt || ''}
                    </p>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border); padding-top: 15px; margin-top: 10px;">
                    <a href="blog-details.html?slug=${blog.slug}" class="blog-read-link" data-slug="${blog.slug}" style="color: var(--primary); font-weight: 600; font-size: 0.95rem; display: inline-flex; align-items: center; gap: 6px;">
                        Read Article &rarr;
                    </a>
                    <button class="fb-share-btn" data-url="${shareUrl}" data-title="${blog.title}" style="background: rgba(24, 119, 242, 0.15); color: #1877F2; border: 1px solid rgba(24, 119, 242, 0.3); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        Share
                    </button>
                </div>
            </div>
        </article>
        `;
    }).join('');

    // Attach click listeners to read links for robust navigation & session tracking
    container.querySelectorAll('.blog-read-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const slug = link.getAttribute('data-slug');
            if (slug) {
                try { sessionStorage.setItem('current_reading_slug', slug); } catch (e) {}
                window.location.href = `blog-details.html?slug=${encodeURIComponent(slug)}`;
            }
        });
    });

    container.querySelectorAll('.fb-share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = btn.getAttribute('data-url');
            const title = btn.getAttribute('data-title');
            shareToFacebook(url, title);
        });
    });
}
