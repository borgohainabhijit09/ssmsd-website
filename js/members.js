import { supabase } from './supabase.js';

let defaultMembers = [
    {
        id: 'REG-1001',
        full_name: 'Dr. Ananya Sharma',
        email: 'ananya.sharma@example.com',
        phone: '+91 98765 43210',
        qualification: 'MD, DM (Endocrinology)',
        registration_no: 'MCI-87654',
        specialty: 'Endocrinology',
        address: 'Guwahati, Assam',
        plan: 'Life Member',
        amount: 10000,
        payment_status: 'Paid',
        payment_id: 'pay_PZ1234567890',
        created_at: new Date(Date.now() - 86400000 * 3).toISOString()
    },
    {
        id: 'REG-1002',
        full_name: 'Dr. Rahul Barua',
        email: 'rahul.barua@example.com',
        phone: '+91 98123 45678',
        qualification: 'MBBS, DNB (Internal Med)',
        registration_no: 'AMC-43210',
        specialty: 'Diabetology',
        address: 'Dibrugarh, Assam',
        plan: 'Annual Member',
        amount: 2500,
        payment_status: 'Paid',
        payment_id: 'pay_PZ9876543210',
        created_at: new Date(Date.now() - 86400000 * 1).toISOString()
    }
];

export async function fetchMemberRegistrations() {
    try {
        const { data, error } = await supabase
            .from('member_registrations')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
            try { localStorage.setItem('ssmsd_member_registrations', JSON.stringify(data)); } catch (e) {}
            return data;
        }
    } catch (e) {
        console.warn('Supabase fetch error for member registrations:', e);
    }

    try {
        const cached = localStorage.getItem('ssmsd_member_registrations');
        if (cached) {
            return JSON.parse(cached);
        }
    } catch (e) {}

    try {
        localStorage.setItem('ssmsd_member_registrations', JSON.stringify(defaultMembers));
    } catch (e) {}

    return defaultMembers;
}

export async function saveMemberRegistration(memberData) {
    const registration = {
        id: 'REG-' + Math.floor(100000 + Math.random() * 900000),
        created_at: new Date().toISOString(),
        payment_status: memberData.payment_id ? 'Paid' : 'Pending',
        ...memberData
    };

    try {
        const { data, error } = await supabase
            .from('member_registrations')
            .insert([registration])
            .select();

        if (!error && data && data[0]) {
            registration.id = data[0].id || registration.id;
        }
    } catch (e) {
        console.warn('Supabase fallback for registration save:', e);
    }

    const currentList = await fetchMemberRegistrations();
    const updatedList = [registration, ...currentList.filter(m => m.id !== registration.id)];

    try {
        localStorage.setItem('ssmsd_member_registrations', JSON.stringify(updatedList));
    } catch (e) {}

    return registration;
}

export async function deleteMemberRegistration(id) {
    try {
        await supabase.from('member_registrations').delete().eq('id', id);
    } catch (e) {
        console.warn('Supabase delete error:', e);
    }

    const currentList = await fetchMemberRegistrations();
    const updatedList = currentList.filter(m => m.id !== id);

    try {
        localStorage.setItem('ssmsd_member_registrations', JSON.stringify(updatedList));
    } catch (e) {}

    return updatedList;
}
