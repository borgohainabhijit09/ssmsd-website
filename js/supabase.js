import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// REPLACE WITH YOUR SUPABASE PROJECT URL AND ANON KEY
export const SUPABASE_URL = 'https://lzwgltzcvotiwgnqncpe.supabase.co';
export const SUPABASE_ANON_KEY = 'sb_publishable_jH0gZtdaeg1Sr1MJgNa-Vg_I30bNN0S';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Fetch all published blogs for the public site with optional category filter
 */
export async function fetchPublishedBlogs(category = null) {
    let query = supabase
        .from('blogs')
        .select('*')
        .eq('status', 'published');

    if (category && category !== 'All') {
        query = query.eq('category', category);
    }

    const { data, error } = await query.order('published_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
    return data || [];
}

/**
 * Fetch a single published blog by slug
 */
export async function fetchBlogBySlug(slug) {
    if (!slug) return null;
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle();

    if (error) {
        console.error('Error fetching blog:', error);
        return null;
    }
    return data;
}

import { showShareModal } from './modal.js';

/**
 * Helper to trigger Facebook Share dialog via in-app modal
 * @param {string} blogUrl - Full URL to share
 * @param {string} title - Optional article title
 */
export function shareToFacebook(blogUrl, title) {
    const targetUrl = blogUrl || window.location.href;
    showShareModal(targetUrl, title || 'SSMSD Article');
}
