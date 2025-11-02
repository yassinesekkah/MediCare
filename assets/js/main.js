const nextBtn = document.getElementById('nextBtn');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

nextBtn.addEventListener('click', () => {
    // Optionally: validate step 1 fields
    const prenom = document.getElementById('prenom').value.trim();
    const nom = document.getElementById('nom').value.trim();
    if (!prenom || !nom) {
        alert("Veuillez remplir Prénom et Nom !");
        return;
    }

    // Hide step 1
    step1.classList.add('d-none');
    // Show step 2
    step2.classList.remove('d-none');
});
