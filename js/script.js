// =============================
// MOBILE MENU
// =============================

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// =============================
// CURRENT YEAR
// =============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =============================
// FAQ
// =============================

function toggleFAQ(button) {

    const item = button.parentElement;

    item.classList.toggle("open");

}


// =============================
// FREE RESOURCE MESSAGE
// =============================

function showMessage(message) {

    alert(message);

}


// =============================
// CONTACT FORM
// =============================

function submitForm(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const interest =
        document.getElementById("interest").value;

    const message =
        document.getElementById("message").value;


    /*
       CHANGE THIS NUMBER
       Replace 91YOURNUMBER with your
       WhatsApp number.
    */

    const phoneNumber = "91YOURNUMBER";


    const whatsappMessage =
        `Hi, I am ${name}.

I am interested in:
${interest}

${message}`;


    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(
        whatsappURL,
        "_blank"
    );

}