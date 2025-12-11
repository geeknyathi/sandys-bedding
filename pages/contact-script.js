// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        const subscribe = document.getElementById('subscribe').checked;

        // Create WhatsApp message
        let whatsappMessage = `Hello Sandy's Bedding,\n\n`;
        whatsappMessage += `Name: ${name}\n`;
        whatsappMessage += `Email: ${email}\n`;
        if (phone) whatsappMessage += `Phone: ${phone}\n`;
        whatsappMessage += `Subject: ${subject}\n`;
        whatsappMessage += `Message: ${message}\n`;
        if (subscribe) whatsappMessage += `\n✓ Interested in newsletter`;

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Show success message
        formMessage.textContent = '✓ Opening WhatsApp. Please complete your message there.';
        formMessage.style.display = 'block';
        formMessage.style.color = '#25D366';
        formMessage.style.backgroundColor = 'rgba(37, 211, 102, 0.1)';
        formMessage.style.padding = '15px';
        formMessage.style.borderRadius = '8px';
        formMessage.style.marginTop = '15px';

        // Reset form
        contactForm.reset();

        // Open WhatsApp
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 500);

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// Add input focus effects
const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.borderColor = 'var(--accent-gold)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.borderColor = '';
    });
});
