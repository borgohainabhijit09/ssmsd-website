export const Navbar = () => {
    return `
    <header class="header" id="header">
        <div class="container nav-container">
            <a href="index.html" class="logo-wrapper">
                <img src="assets/logo.png" alt="SSMSD Logo" class="logo-img">
                <div class="logo-text">
                    <h3 style="margin:0; line-height:1">SSMSD</h3>
                    <p style="font-size:0.7rem;">Society for Study of Metabolic Syndrome & Diabetes</p>
                </div>
            </a>
            <nav class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About Us</a>
                <a href="membership.html" class="nav-link">Membership</a>
                <a href="events.html" class="nav-link">Events</a>
                <a href="faculty.html" class="nav-link">Faculty</a>
                <a href="contact.html" class="nav-link">Contact</a>
            </nav>
            <div class="nav-cta">
                <a href="membership.html" class="btn btn-primary">Join Now</a>
                <button class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
    `;
};
