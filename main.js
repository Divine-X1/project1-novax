/* Contactformulier: opent het e-mailprogramma van de bezoeker. */
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const naam = String(formData.get("naam") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const onderwerp = String(formData.get("onderwerp") || "").trim();
        const reden = String(formData.get("reden") || "algemeen").trim();
        const vraag = String(formData.get("vraag") || "").trim();
        const body = [
            "Naam: " + naam,
            "E-mailadres: " + email,
            "Reden van contact: " + reden,
            "",
            "Bericht:",
            vraag
        ].join("\\n");
        const mailto = "mailto:Wilson.divine279@gmail.com"
            + "?subject=" + encodeURIComponent(onderwerp)
            + "&body=" + encodeURIComponent(body);
        const message = document.querySelector("#formMessage");
        if (message) message.textContent =
            "Je e-mailprogramma wordt geopend. Controleer het bericht en verstuur het daar.";
        window.location.href = mailto;
    });
});
