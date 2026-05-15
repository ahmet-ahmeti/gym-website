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

// CAROUSEL

const SLIDE_W = 300;
const slides = document.getElementsByClassName("slide");
const total = slides.length / 2;
const LOOP_W = SLIDE_W * total;
const track = document.getElementById("track");

let pos = LOOP_W + 1;

function step() {
    pos += 1;

    if (pos >= LOOP_W)pos -= LOOP_W;

    track.style.transform = `translateX(${-pos}px)`;
    requestAnimationFrame(step);
}
requestAnimationFrame(step);

// PROGRAM CARDS

function animateText(el, html, fontSize) {
  el.innerHTML = html;
  el.style.fontSize = fontSize;
  el.classList.add('animate');
}

function shikoProgramin(temp) {
    if (temp === 1) {
        animateText( document.getElementById("card-bottom-text-1"),
            "Ky program është i dizajnuar për humbje peshe dhe përmirësim të formës fizike përmes ushtrimeve kardio, djegies së kalorive dhe një plani të balancuar ushqimor. Programi përfshin stërvitje intensive që ndihmojnë në reduktimin e yndyrës, rritjen e energjisë dhe përmirësimin e qëndrueshmërisë fizike. Gjithashtu, " +
            "do të merrni udhëzime ushqimore dhe këshilla praktike për të arritur rezultate më të shpejta dhe më efektive.",
            "1rem"
        );
        document.getElementById("card-button-1").remove();
    }
    else if (temp === 2) {
        animateText(document.getElementById("card-bottom-text-2"),
            "Ky program është krijuar për ndërtimin e muskujve dhe rritjen e forcës fizike përmes ushtrimeve intensive dhe stërvitjeve progresive. Programi përfshin ushtrime të fokusuara për çdo grup muskulor, teknika për rritjen e masës muskulore dhe plane të strukturuara që ndihmojnë në zhvillimin e trupit dhe përmirësimin e performancës fizike.",
            "1rem"
        );
        document.getElementById("card-button-2").remove();
    }
    else if (temp === 3) {
        animateText(document.getElementById("card-bottom-text-3"),
        "Ky program është i përshtatshëm për fillestarët që sapo nisin rrugëtimin e tyre në fitness. Ai përfshin ushtrime të thjeshta dhe të sigurta për gjithë trupin, me intensitet të moderuar për të ndihmuar në ndërtimin e bazës së forcës, përmirësimin e qëndrueshmërisë dhe mësimin e teknikave të sakta të ushtrimeve." +
        " Programi është i strukturuar që të lehtësojë progresin gradual dhe të shmangë dëmtimet.",
        "1rem"
        );
        document.getElementById("card-button-3").remove();        
    }
    else if (temp === 4) {
        animateText(document.getElementById("card-bottom-text-4"),
        "Ky program është i fokusuar në rritjen e forcës maksimale përmes tre ushtrimeve kryesore: squat, bench press dhe deadlift. Ai përfshin stërvitje të strukturuara me pesha të rënda, përsëritje të ulëta dhe progres të vazhdueshëm për të zhvilluar fuqi, stabilitet dhe performancë të lartë. " +
        "Programi është ideal për ata që duan të rrisin forcën dhe të përmirësojnë teknikën e ngritjes së peshave.",
        "1rem"
        );
        document.getElementById("card-button-4").remove();
    }
    else if (temp === 5) {
        animateText(document.getElementById("card-bottom-text-5"),
        "Ky program është i dizajnuar për atletë që duan të përmirësojnë performancën e tyre fizike në çdo aspekt. Ai fokusohet në rritjen e shpejtësisë, forcës, qëndrueshmërisë dhe eksplozivitetit përmes ushtrimeve të kombinuara dhe stërvitjeve funksionale. Programi ndihmon në përgatitjen e trupit për gara dhe aktivitete sportive, duke rritur aftësitë atletike në nivel profesional.",
        "1rem"
        );
        document.getElementById("card-button-5").remove()
    }
    else if (temp === 6) {
        animateText(document.getElementById("card-bottom-text-6"),
        "Ky program është i fokusuar në përmirësimin e fleksibilitetit, mobilitetit dhe balancës së trupit përmes ushtrimeve të yoga-s dhe stretching-ut. Ai ndihmon në relaksimin e muskujve, uljen e tensionit dhe përshpejtimin e rikuperimit pas stërvitjeve intensive." +
        " Programi është ideal për të rritur lëvizshmërinë e trupit dhe për të parandaluar dëmtimet.",
        "1rem"
        );
        document.getElementById("card-button-6").remove()
    }
}

// SUBSCRIPTION

const button1 = document.getElementById("subs-button-1");
const button2 = document.getElementById("subs-button-2");
const button3 = document.getElementById("subs-button-3");
const popUp = document.getElementById("subs-success");

button1.addEventListener("click", () => {
    popUp.classList.add("slide");
    setTimeout(() => {
        popUp.classList.remove("slide");
    }, 3000);
});

button2.addEventListener("click", () => {
    popUp.classList.add("slide");
    setTimeout(() => {
        popUp.classList.remove("slide");
    }, 3000);
});

button3.addEventListener("click", () => {
    popUp.classList.add("slide");
    setTimeout(() => {
        popUp.classList.remove("slide");
    }, 3000);
});