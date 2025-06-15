document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelectorAll(".page");
    const buttons = document.querySelectorAll(".nextprev-btn");
    const contactButton = document.getElementById("contact-me-btn");

    // Handle next and previous button clicks
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetPageId = button.getAttribute("data-target");
            pages.forEach((page) => {
                page.style.display = page.id === targetPageId ? "block" : "none";
            });
        });
    });

    // Add event listener for the "Contact Me" button
    contactButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default action of the button (if any)
        pages.forEach((page) => {
            page.style.display = page.id === "page-8" ? "block" : "none"; // Show page 8
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("uovrDB62rtJYX5z6l"); // Again, Public Key

  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_a08jtac", "template_yhbid3p", this)
      .then(() => {
        alert("Message sent successfully!");
        contactForm.reset();
      }, (error) => {
        alert("Failed to send message: " + error.text);
      });
  });
});
