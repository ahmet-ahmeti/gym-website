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

// BMI CALC

let bmi;
const age = document.getElementById("input-age");
const weight = document.getElementById("input-weight");
const height = document.getElementById("input-height");
const BMIbutton = document.getElementById("BMI-button");
const bar = document.getElementById("bar");
const dot = document.getElementById("dot");
const bmiNr = document.getElementById("bmi-nr-value");
const bmiNrText = document.getElementById("bmi-nr-text");
const bmiText = document.getElementById("bmi-text");

function BMIcalc(weight, height) {
    const heightM = height / 100;
    const BMI = weight / (heightM * heightM);
    return BMI;
}

BMIbutton.addEventListener("click", () => {
    if (age.value && weight.value && height.value) {
        const weightValue = Number(weight.value);
        const heightValue = Number(height.value);
        bmi = BMIcalc(weightValue, heightValue);
        const MIN = 10;
        const MAX = 40;
        let percent = (bmi - MIN) / (MAX - MIN) * 100;
        if (percent > 100) percent = 100;
        if (percent < 0) percent = 0;
        dot.style.left = percent + "%";
        if (bmi <= 18.5) {
            bmiNr.style.color = "rgb(79, 195, 247)";
            bmiNrText.style.color = "rgb(79, 195, 247)";
            bmiNrText.innerHTML = "Nën peshë";
            bmiText.innerHTML = "Rezultati juaj tregon se jeni nën peshën e rekomanduar për gjatësinë tuaj. Për të përmirësuar energjinë, forcën dhe shëndetin e përgjithshëm, rekomandohet një ushqim i balancuar dhe aktivitet fizik i përshtatshëm.";
        } 
        else if (bmi <= 25) {
            bmiNr.style.color = "rgb(102, 187, 106)";
            bmiNrText.style.color = "rgb(102, 187, 106)";
            bmiNrText.innerHTML = "Peshë normale";
            bmiText.innerHTML = "Urime! Rezultati juaj tregon se jeni në një kategori të shëndetshme të peshës. Vazhdoni të mbani një stil jetese aktiv dhe ushqim të balancuar për të ruajtur formën dhe mirëqenien tuaj.";
        }
        else if (bmi <= 30) {
            bmiNr.style.color = "rgb(255, 167, 38)";
            bmiNrText.style.color = "rgb(255, 167, 38)";
            bmiNrText.innerHTML = "Mbipeshë";
            bmiText.innerHTML = "Rezultati juaj tregon se jeni mbi peshën e rekomanduar për gjatësinë tuaj. Me një kombinim të aktivitetit fizik dhe ushqimit të kontrolluar, mund të përmirësoni shëndetin dhe formën tuaj fizike.";
        } 
        else {
            bmiNr.style.color = "rgb(239, 83, 80)";
            bmiNrText.style.color = "rgb(239, 83, 80)";
            bmiNrText.innerHTML = "Obez";
            bmiText.innerHTML = "Rezultati juaj tregon nivel obeziteti, që mund të rrisë rrezikun për probleme shëndetësore. Ndryshimet graduale në stilin e jetesës, aktiviteti fizik dhe kujdesi ndaj ushqimit janë hapa të rëndësishëm drejt një jete më të shëndetshme.";
        }
        bar.classList.add("calc");
        dot.classList.add("calc");
        bmiNr.innerHTML = bmi.toFixed(1);
    }
});

