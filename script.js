let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            });
        }
    });
};


menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Save data in localStorage (or simulate saving it)
    localStorage.setItem('contactFormData', JSON.stringify({
        fullName, email, phone, subject, message
    }));

    // Show an alert when the form is successfully "saved"
    alert("Your message has been successfully sent! We'll get back to you soon.");

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
});