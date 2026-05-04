export const InnerHero = (title, subtitle, bgImage = 'assets/hero-bg-2.png') => {
    return `
    <section class="hero-inner" style="background-image: url('${bgImage}')">
        <div class="hero-overlay-inner"></div>
        <div class="container hero-container">
            <div class="hero-content-inner">
                <h1 class="hero-title-inner">${title}</h1>
                ${subtitle ? `<p class="hero-subtitle-inner">${subtitle}</p>` : ''}
            </div>
        </div>
    </section>
    `;
};
