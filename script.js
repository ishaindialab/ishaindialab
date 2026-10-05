function sendWhatsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const requirement = document.getElementById("requirement").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone) {
        alert("Please enter your Name and Mobile Number.");
        return;
    }

    const whatsappNumber = "918818886177";

    const whatsappMessage =
        "New Website Enquiry - Isha Indialab%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Company/Laboratory: " + encodeURIComponent(company || "Not provided") + "%0A" +
        "Mobile: " + encodeURIComponent(phone) + "%0A" +
        "Requirement: " + encodeURIComponent(requirement) + "%0A" +
        "Message: " + encodeURIComponent(message || "Not provided") + "%0A%0A" +
        "Source: Isha Indialab Website";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
}


// Mobile menu
function toggleMenu() {
    const nav = document.getElementById("navlinks");

    if (nav) {
        nav.classList.toggle("active");
    }
}


// Footer year
document.addEventListener("DOMContentLoaded", function () {
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
