const form = document.getElementById('multiStepForm');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const nextBtn = document.getElementById('nextBtn');

// Step 1 -> Step 2
nextBtn.addEventListener('click', () => {
  const prenom = document.getElementById('prenom').value.trim();
  const nom = document.getElementById('nom').value.trim();

  if (!prenom || !nom) {
    alert('Veuillez remplir le prénom et le nom');
    return;
  }

  step1.classList.add('d-none');
  step2.classList.remove('d-none');
});

// Submit form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const prenom = document.getElementById('prenom').value.trim();
  const nom = document.getElementById('nom').value.trim();
  const date = document.getElementById('date').value;
  const medecin = document.getElementById('medecin').value;

  if (!date || !medecin) {
    alert('Veuillez choisir une date et un médecin');
    return;
  }

  // Récupérer les rendez-vous existants depuis LocalStorage
  let rendezVous = JSON.parse(localStorage.getItem('rendezVous')) || [];

  // Ajouter le nouveau rendez-vous
  rendezVous.push({ prenom, nom, date, medecin });

  // Sauvegarder dans LocalStorage
  localStorage.setItem('rendezVous', JSON.stringify(rendezVous));

  alert('Rendez-vous enregistré avec succès !');

  // Réinitialiser le formulaire
  form.reset();
  step2.classList.add('d-none');
  step1.classList.remove('d-none');
});