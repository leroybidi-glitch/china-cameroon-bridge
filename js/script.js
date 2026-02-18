window.onload = function() {
    alert("Welcome to my Digital Solutions Project!");
};
// Fonction pour changer de section
function showSection(sectionId) {

    // Cacher toutes les sections
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Afficher la section choisie
    document.getElementById(sectionId).style.display = "block";
}


// Fonction pour afficher les solutions dynamiques
function showSolution(type) {

    let content = document.getElementById("solution-content");

    if (type === "ecommerce") {
        content.innerHTML = `
            <h3>E-Commerce</h3>
            <p>China's e-commerce systems can help small businesses in Cameroon sell products online and reach international markets.</p >
        `;
    }

    else if (type === "education") {
        content.innerHTML = `
            <h3>Online Education</h3>
            <p>Digital learning platforms can improve access to quality education and technical training in Africa.</p >
        `;
    }

    else if (type === "business") {
        content.innerHTML = `
            <h3>Small Business Technology</h3>
            <p>Basic software tools and digital payment systems can support entrepreneurship and economic development.</p >
        `;
    }
    function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("form-response").innerText =
        "Thank you " + name + "! Your message has been received.";

}
}
