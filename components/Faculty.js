export const Faculty = () => {
    const internationalFaculty = [
        "Dr Azad Khan", "Dr Banshi Saboo", "Dr Biswajit Bhowmick", "Dr Dina Shrestha"
    ];

    const nationalFaculty = [
        "Dr Ashok Kr Das", "Dr Sanjeev Kakati", "Dr Rama Prasad Medhi", "Dr Girindra Nath Gogoi", 
        "Dr Ripun Borpuzari", "Dr Pranab Kr Biswas", "Dr Debomallya Bhuyan", "Dr Kunjan Saikia", 
        "Dr Noni G Singha", "Dr Gunabhi R Das", "Dr Sanjeev Sharma", "Dr Krishna N D Baruah", 
        "Dr Rupam Hazarika", "Dr Deepanjan Ghosh", "Dr Horshojyoti Chutia", "Dr Bharat Saboo", 
        "Dr Amit Dey", "Dr Rutul Goklani", "Dr Manas Gogoi", "Dr Jyoti Bikash Saikia", 
        "Dr Jyotismita Pathak", "Dr Vinod Mittal", "Dr Supratik Bhattacharyaee", "Dr Kaushik Shah", 
        "Dr Mahua Sikdhar", "Dr K K Barman", "Dr Dinesh Agarwal", "Dr Mithun Bhartia", 
        "Dr Samiran Das", "Dr Sweety Kakoti", "Dr Miranda Pegu", "Dr Abhishek Raha", 
        "Dr Mizan Ahmed", "Dr Samik Deb", "Dr Pankaj Patawari", "Dr Debasish Paul", 
        "Dr Pritom Kurmi", "Dr Abdul Hamid", "Dr Monprotiv Baruah", "Dr Manoj Kr Gogoi", 
        "Dr Rahul Bagaria", "Dr Ayondyuti Bora", "Dr Arnab Paul", "Dr Lien Lhoujem", 
        "Dr Partha Roy", "Dr Basab Ghosh"
    ];

    const renderDoctorList = (doctors) => {
        return `
            <ul class="faculty-list" style="list-style: none; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px;">
                ${doctors.map(name => `
                    <li style="display: flex; align-items: center; gap: 10px; padding: 10px 15px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px;">
                        <span style="color: var(--accent);">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </span>
                        <span style="font-weight: 500; font-size: 0.95rem;">${name}</span>
                    </li>
                `).join('')}
            </ul>
        `;
    };

    return `
    <section class="section-padding">
        <div class="container">
            <div style="text-align: center; margin-bottom: 50px;">
                <p class="text-accent" style="font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.85rem; margin-bottom: 12px;">Our Esteemed Faculty</p>
                <h2>Leaders in Metabolic Health</h2>
            </div>
            
            <div style="margin-bottom: 50px;">
                <h3 style="margin-bottom: 24px; border-bottom: 2px solid var(--border); padding-bottom: 10px; color: var(--accent);">International Faculty</h3>
                ${renderDoctorList(internationalFaculty)}
            </div>

            <div>
                <h3 style="margin-bottom: 24px; border-bottom: 2px solid var(--border); padding-bottom: 10px; color: var(--accent);">National Faculty</h3>
                ${renderDoctorList(nationalFaculty)}
            </div>
        </div>
    </section>
    `;
};
