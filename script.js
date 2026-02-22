// Message de bienvenue au chargement
window.onload = function() {
    alert("🌟 欢迎！Welcome to China-Cameroon Digital Bridge!\n\n由兰多（Lando Chaugang Bidias）创建\nCreated by Lando (兰多)");
    // Activer le bouton Home par défaut
    document.getElementById('home-btn').classList.add('active');
};

// Fonction pour changer de section avec mise à jour des boutons actifs
function showSection(sectionId) {
    // Cacher toutes les sections
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Retirer la classe 'active' de tous les boutons
    let buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Afficher la section choisie
    document.getElementById(sectionId).style.display = "block";
    
    // Activer le bouton correspondant
    document.getElementById(sectionId + '-btn').classList.add('active');

    // Animation smooth scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fonction pour afficher les solutions dynamiques avec animations
function showSolution(type) {
    let content = document.getElementById("solution-content");
    
    // Animation de transition
    content.style.opacity = "0";
    setTimeout(function() {
        
        if (type === "ecommerce") {
            content.innerHTML = `
                <h3> 电子商务解决方案 E-Commerce Solutions</h3>
                <p><strong>挑战 Challenge:</strong> Limited access to global markets for Cameroonian small businesses and entrepreneurs.</p>
                <p><strong>解决方案 Solution:</strong> China's advanced e-commerce platforms like Alibaba, Taobao, 
                JD.com, and digital payment systems (Alipay, WeChat Pay) provide excellent models. 
                These systems can help African businesses sell products online, reach international markets, 
                and process payments efficiently through mobile technology.</p>
                <p><strong>影响 Impact:</strong> Increased revenue for local businesses, job creation, economic growth 
                through digital trade, and integration into global value chains.</p>
                <p><strong>关键技术 Key Technologies:</strong> Online marketplaces, mobile payments, supply chain management, 
                cross-border logistics, QR code payments, live-streaming e-commerce.</p>
                <p><strong>中国经验 Chinese Experience:</strong> China's success in rural e-commerce (Taobao Villages) 
                and live-streaming sales can be adapted to African contexts to empower rural entrepreneurs.</p>
            `;
        }
        else if (type === "education") {
            content.innerHTML = `
                <h3> 在线教育平台 Online Education Platforms</h3>
                <p><strong>挑战 Challenge:</strong> Limited access to quality education and technical training 
                in rural African areas, shortage of qualified teachers, and expensive traditional education.</p>
                <p><strong>解决方案 Solution:</strong> Digital learning platforms modeled after successful Chinese 
                systems like DingTalk Education, Xueersi, and MOOC platforms can provide:
                - Remote learning opportunities
                - Affordable skill development programs
                - Teacher training and certification
                - Interactive learning tools with AI tutors</p>
                <p><strong>影响 Impact:</strong> Better educational outcomes, reduced skills gap, increased 
                employment opportunities for African youth, and democratization of quality education.</p>
                <p><strong>关键技术 Key Technologies:</strong> Learning Management Systems (LMS), video conferencing 
                (like Tencent Meeting), mobile learning apps, AI-powered tutoring, virtual classrooms, 
                gamified learning.</p>
                <p><strong>个人经验 Personal Experience:</strong> As an international student in China, I have 
                experienced firsthand how digital tools enhance learning. I want to bring these innovations 
                back to Cameroon.</p>
            `;
        }
        else if (type === "business") {
            content.innerHTML = `
                <h3> 小企业技术 Small Business Technology</h3>
                <p><strong>挑战 Challenge:</strong> Many small businesses in Cameroon lack basic digital tools 
                for operations, financial management, and growth. Manual processes limit efficiency and scalability.</p>
                <p><strong>解决方案 Solution:</strong> Basic but powerful software tools including:
                - Digital payment systems (mobile money integration)
                - Inventory management software
                - Customer relationship management (CRM) tools
                - Cloud-based accounting software
                - Digital marketing tools (social media, WhatsApp Business)
                - Point-of-sale (POS) systems</p>
                <p><strong>影响 Impact:</strong> Improved business efficiency, better financial management, 
                data-driven decision making, increased competitiveness in the digital economy, and easier 
                access to business financing through digital records.</p>
                <p><strong>关键技术 Key Technologies:</strong> Cloud computing, mobile applications, business 
                analytics, digital marketing automation, WeChat mini-programs concept adapted for African markets.</p>
                <p><strong>中国模式 Chinese Model:</strong> China's WeChat ecosystem demonstrates how a single 
                platform can integrate payments, marketing, customer service, and operations – a model 
                that could be adapted for African SMEs.</p>
            `;
        }
        else if (type === "agriculture") {
            content.innerHTML = `
                <h3> 智慧农业 Smart Agriculture Technology</h3>
                <p><strong>挑战 Challenge:</strong> Traditional farming methods in Cameroon result in low productivity, 
                crop losses, and limited market access for farmers. Climate change adds additional uncertainties.</p>
                <p><strong>解决方案 Solution:</strong> Smart agriculture technologies inspired by Chinese innovations:
                - IoT sensors for soil moisture, temperature, and crop health monitoring
                - Mobile apps providing weather forecasts and farming advice
                - Drone technology for crop monitoring and precision spraying
                - E-commerce platforms connecting farmers directly to buyers
                - Cold chain logistics to reduce post-harvest losses</p>
                <p><strong>影响 Impact:</strong> Increased crop yields, reduced losses, better farmer incomes, 
                sustainable farming practices, and improved food security.</p>
                <p><strong>关键技术 Key Technologies:</strong> Internet of Things (IoT), mobile applications, 
                big data analytics, drone technology, satellite imagery, AI-powered disease detection.</p>
                <p><strong>个人联系 Personal Connection:</strong> Studying at an agricultural vocational college 
                has given me unique insights into how technology can transform farming. I've witnessed China's 
                agricultural modernization and believe similar innovations can benefit Cameroon's agricultural 
                sector, which employs over 60% of the population.</p>
                <p><strong>中国实践 Chinese Practice:</strong> China's success in using Pinduoduo (拼多多) for 
                agricultural e-commerce and direct farm-to-consumer sales provides an excellent model for 
                reducing intermediaries and increasing farmer profits in Africa.</p>
            `;
        }
        
        content.style.opacity = "1";
    }, 300);
}

// Fonction pour soumettre le formulaire de contact
function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let responseDiv = document.getElementById("form-response");
    
    // Animation de soumission
    responseDiv.innerHTML = " 正在发送您的消息... Sending your message...";
    responseDiv.className = "form-response";
    responseDiv.style.display = "block";

    // Simuler un délai d'envoi
    setTimeout(function() {
        responseDiv.innerHTML = `
            ✅ <strong>谢谢 Thank you, ${name}!</strong><br>
            您的消息已收到。我会尽快回复您的邮箱 <strong>${email}</strong>！<br>
            Your message has been received. I will get back to you soon!
        `;
        responseDiv.classList.add('success');
        
        // Réinitialiser le formulaire
        document.getElementById("contact-form").reset();
    }, 1500);
}

// Effet de défilement smooth pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
