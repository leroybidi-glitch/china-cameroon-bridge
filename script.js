/* ═══════════════════════════════════════════════
   CHINA-CAMEROON DIGITAL BRIDGE
   JavaScript — Lando Chaugang Bidias (兰多)
   Version 4.0 — Updated March 2026
═══════════════════════════════════════════════ */

// ─── WELCOME ───
window.onload = function () {
    showSection('home');
};

// ─── SECTION NAVIGATION ───
function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(s => {
        s.style.display = 'none';
    });
    // Remove active from all buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // Show target section
    const section = document.getElementById(id);
    if (section) {
        section.style.display = 'block';
        // Re-trigger animation
        section.style.animation = 'none';
        section.offsetHeight; // reflow
        section.style.animation = '';
    }
    // Activate button
    const btn = document.getElementById(id + '-btn');
    if (btn) btn.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Animate skill bars if About section
    if (id === 'about') animateSkillBars();
}

// ─── SKILL BAR ANIMATION ───
function animateSkillBars() {
    document.querySelectorAll('.skill-fill').forEach(bar => {
        const target = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => { bar.style.width = target; }, 100);
    });
}

// ─── SOLUTIONS ───
function showSolution(type) {
    const content = document.getElementById('solution-content');

    // Fade out
    content.style.opacity = '0';
    content.style.transition = 'opacity 0.3s';

    // Remove active state from all sol-btn
    document.querySelectorAll('.sol-btn').forEach(b => b.style.background = '');

    setTimeout(function () {
        const solutions = {
            ecommerce: {
                icon: '🛒',
                title: 'E-Commerce Solutions',
                cn: '电子商务解决方案',
                borderColor: '#f59e0b',
                paragraphs: [
                    '<strong>Challenge:</strong> Small businesses and entrepreneurs in Cameroon have limited access to global markets and digital payment infrastructure.',
                    '<strong>Chinese Model:</strong> Platforms like Alibaba, Taobao, JD.com, and Pinduoduo demonstrate how e-commerce can empower rural producers and connect them directly to buyers — eliminating costly intermediaries. WeChat Pay and Alipay show how mobile payments can become universal.',
                    '<strong>Proposed Application:</strong> Adapting China\'s "Taobao Village" concept and live-streaming e-commerce to African markets could help Cameroonian SMEs reach regional and international buyers through smartphone-based platforms.',
                    '<strong>Key Technologies:</strong> Mobile payment systems, digital marketplace platforms, QR code commerce, supply chain management, cross-border logistics.'
                ]
            },
            education: {
                icon: '📚',
                title: 'Online Education Platforms',
                cn: '在线教育平台',
                borderColor: '#3b82f6',
                paragraphs: [
                    '<strong>Challenge:</strong> Rural areas in Cameroon face a shortage of qualified teachers, expensive education, and poor digital infrastructure — limiting access to quality learning.',
                    '<strong>Chinese Model:</strong> China\'s rapid deployment of educational technology — from DingTalk Education to MOOC platforms and AI-assisted tutoring — has democratised access to quality learning, especially during and after the pandemic.',
                    '<strong>Proposed Application:</strong> Lightweight mobile-first learning apps that work on low-bandwidth networks, modelled on Chinese EdTech, could deliver vocational training and digital literacy programmes to Cameroonian youth at scale.',
                    '<strong>Key Technologies:</strong> Mobile LMS (Learning Management Systems), offline-capable apps, video compression for low bandwidth, AI tutoring tools, multilingual content (French, English, local languages).'
                ]
            },
            business: {
                icon: '💼',
                title: 'Small Business Technology',
                cn: '小企业数字化',
                borderColor: '#10b981',
                paragraphs: [
                    '<strong>Challenge:</strong> The vast majority of businesses in Cameroon operate manually, with no digital records, no online presence, and no access to formal finance — limiting their growth potential.',
                    '<strong>Chinese Model:</strong> China\'s WeChat ecosystem shows how a single super-app can integrate payments, marketing, customer service, and supply chain management — giving even micro-businesses access to digital tools.',
                    '<strong>Proposed Application:</strong> Simple, low-cost digital tools (inventory management, mobile invoicing, basic CRM, QR code menus) adapted for Cameroonian SMEs. Integration with existing mobile money systems (Orange Money, MTN MoMo).',
                    '<strong>Key Technologies:</strong> Cloud-based accounting software, mobile POS systems, WhatsApp Business integration, digital marketing tools, data analytics dashboards.'
                ]
            },
            agriculture: {
                icon: '🌱',
                title: 'Smart Agriculture Technology',
                cn: '智慧农业技术',
                borderColor: '#059669',
                paragraphs: [
                    '<strong>Challenge:</strong> Over 60% of Cameroon\'s population works in agriculture, yet productivity is low due to traditional methods, post-harvest losses, and limited market access. Climate change adds additional uncertainty.',
                    '<strong>Personal Connection:</strong> Studying at an agricultural vocational college (JSAHVC) gave me unique insight into how technology transforms farming. China\'s agricultural modernisation — from drone crop-spraying to Pinduoduo\'s farm-to-consumer e-commerce — is a direct and applicable model.',
                    '<strong>Proposed Application:</strong> IoT-based soil and weather monitoring for smallholders. Mobile apps providing crop disease detection via smartphone camera (AI-powered). Direct farm-to-buyer platforms eliminating middlemen and improving farmer incomes.',
                    '<strong>Key Technologies:</strong> IoT sensors, satellite imagery for crop monitoring, AI-powered mobile disease detection, e-commerce platforms for agricultural produce, cold chain logistics solutions.'
                ]
            }
        };

        const sol = solutions[type];
        if (!sol) return;

        content.style.borderLeftColor = sol.borderColor;
        content.innerHTML = `
            <h3>${sol.icon} ${sol.title} <span style="color:#64748b;font-size:.8em;font-family:'Microsoft YaHei',sans-serif"> · ${sol.cn}</span></h3>
            ${sol.paragraphs.map(p => `<p>${p}</p>`).join('')}
        `;

        // Fade in
        content.style.opacity = '1';
    }, 280);
}

// ─── CONTACT FORM ───
function submitForm(event) {
    event.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const resp    = document.getElementById('form-response');

    if (!name || !email || !message) {
        resp.innerHTML = '⚠️ Please fill in all required fields.';
        resp.className = 'form-response';
        resp.style.background = '#fef3c7';
        resp.style.color = '#92400e';
        resp.style.border = '2px solid #f59e0b';
        resp.style.display = 'block';
        return;
    }

    // Sending state
    resp.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
    resp.className = 'form-response';
    resp.style.background = '#eff6ff';
    resp.style.color = '#1e40af';
    resp.style.border = '2px solid #3b82f6';
    resp.style.display = 'block';

    // Simulate send (in a real project, this would POST to a backend)
    setTimeout(function () {
        resp.innerHTML = `
            ✅ <strong>Thank you, ${name}!</strong><br>
            Your message has been received. I will reply to 
            <strong>${email}</strong> as soon as possible. 谢谢！
        `;
        resp.className = 'form-response success';
        resp.style.background = '';
        resp.style.color = '';
        resp.style.border = '';
        document.getElementById('contact-form').reset();
    }, 1600);
}

// ─── ACTIVE NAV ON SCROLL (optional enhancement) ───
// Highlight nav button based on visible section when scrolling within page
// (not needed here as sections toggle visibility, but kept for future use)

// ─── SMOOTH ANCHOR LINKS ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
