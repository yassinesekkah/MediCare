
const input = document.getElementById('searchInput');
const resultsContainer = document.getElementById('searchResults');

function renderResults(list) {
  if (!list.length) {
    resultsContainer.innerHTML = '<p class="text-muted">Aucun résultat</p>';
    return;
  }

  resultsContainer.innerHTML = list.map(d => `
    <a href="${d.url}" class="d-flex align-items-center gap-3 text-decoration-none border-bottom py-2">
      <img src="${d.image}" alt="${d.name}" style="width:50px; height:50px; object-fit:cover; border-radius:50%;">
      <div class="text-start">
        <strong>${d.name}</strong><br>
        <small class="text-muted">${d.specialty}</small>
      </div>
    </a>
  `).join('');
}

function doSearch(term) {
  const q = term.trim().toLowerCase();
  if (!q) {
    resultsContainer.innerHTML = '';
    return;
  }

  const filtered = doctors.filter(d =>
    d.name.toLowerCase().includes(q) ||
    d.specialty.toLowerCase().includes(q)
  );
  renderResults(filtered);
}

input.addEventListener('input', e => {
  doSearch(e.target.value);
});
