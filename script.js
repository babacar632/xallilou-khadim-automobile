// Charger les voitures sur la page d'accueil
if (document.getElementById("voitures")) {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      let container = document.getElementById("voitures");
      data.forEach(voiture => {
        container.innerHTML += `
          <div class="card">
            <img src="${voiture.image}" alt="${voiture.marque} ${voiture.modele}">
            <h3>${voiture.marque} ${voiture.modele}</h3>
            <p>${voiture.annee} - ${voiture.type}</p>
            <p><strong>${voiture.prix}</strong></p>
            <a href="voiture.html?id=${voiture.id}">Voir détails</a>
          </div>
        `;
      });
    });
}

// Charger les détails d'une voiture
if (document.getElementById("details")) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      let voiture = data.find(v => v.id == id);
      if (voiture) {
        document.getElementById("details").innerHTML = `
          <h2>${voiture.marque} ${voiture.modele} (${voiture.annee})</h2>
          <img src="${voiture.image}" alt="${voiture.marque}">
          <p><strong>Type :</strong> ${voiture.type}</p>
          <p><strong>Prix :</strong> ${voiture.prix}</p>
          <p>${voiture.description}</p>
        `;
      }
    });
}