// SIDEBAR
const sidebar = document.getElementById("sidebar")
const overlay = document.getElementById("overlay")
const toggle = document.getElementById("toggle-button")


toggle.addEventListener("click", () => {
    sidebar.classList.toggle("open")
    overlay.classList.toggle("active")
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open")
    overlay.classList.remove("active")
});

// MAP

const mapButton = document.getElementById("map-button");
const iframe = document.getElementById("iframe");

mapButton.addEventListener("click", () => {
    iframe.classList.toggle("show");
})

// FORM

const form = document.getElementById("kontakti-form");
const firstName = document.getElementById("kontakti-name-input");
const lastName = document.getElementById("kontakti-lname-input");
const email = document.getElementById("kontakti-email-input");
const subject = document.getElementById("subjekti-form");
const message = document.getElementById("mesazhi-form");
const error = document.getElementById("error-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(firstName.value.length < 2 || lastName.value.length < 2 ||
        !email.value.includes("@") || !email.value.includes(".") || subject.value === "0" || message.value.length < 10) {
            error.innerHTML = "Formulari nuk është plotësuar saktë!";
        }
    else {
        document.getElementById("kontakti-form-edit").innerHTML = `<div style='text-align: center; padding: 2.5rem 1.2rem; margin-top: 5.5rem;'>
                                                                        <div style='
                                                                            width: 4.5rem;
                                                                            height: 4.5rem;
                                                                            border-radius: 50%;
                                                                            border: 2px solid rgb(46, 204, 113);
                                                                            display: flex;
                                                                            align-items: center;
                                                                            justify-content: center;
                                                                            margin: 0 auto 1.2rem;
                                                                        '>
                                                                            <span style='font-size: 1.8rem; color: rgb(46, 204, 113);'>&#10003;</span>
                                                                        </div>
                                                                        <h2 style='color: rgb(255, 255, 255); font-size: 1.8rem; margin-bottom: 0.6rem;'>Mesazhi u dërgua!</h2>
                                                                        <p style='color: rgb(160, 160, 160); font-size: 1rem;'>Do t'ju kthehemi përgjigje sa më shpejt.</p>
                                                                    </div>`;
    }
});
