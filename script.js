async function sendPompiersToDiscord() {
  const webhookURL = "https://discord.com/api/webhooks/1300818708238700564/GhTmMp05JdhWLNDnZzrVlFeKuTHWHaVSKYLC-NpudZhrZVeZNqdD1Ys_XcHxjl8fdkQl";

  const agent = document.getElementById("agent_pompier").value;
  const badge = document.getElementById("badge_pompier").value;
  const lieu = document.getElementById("lieu_pompier").value;
  const date = document.getElementById("date_pompier").value;
  const telephone = document.getElementById("telephone_pompier").value;
  const natureIncendie = document.getElementById("nature_incendie").value;
  const description = document.getElementById("description_pompier").value;
  const nombreVictimes = document.getElementById("nombre_victimes_pompier").value;
  const infosVictimes = document.getElementById("infos_victimes_pompier").value;

  if (!agent || !badge || !lieu || !date || !telephone || !natureIncendie || !description || !nombreVictimes || !infosVictimes) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  const data = {
    content: `📝 **Rapport Intervention Pompiers** - Astra Roleplay V2 📝\n\n` +
             `👨‍🚒 **Pompier:** ${agent}\n` +
             `🆔 **Badge:** ${badge}\n` +
             `📍 **Lieu:** ${lieu}\n` +
             `📅 **Date:** ${date}\n` +
             `📞 **Téléphone:** ${telephone}\n` +
             `🔥 **Nature de l'Incendie:** ${natureIncendie}\n` +
             `📋 **Description:** ${description}\n\n` +
             `🚑 **Nombre de Victimes:** ${nombreVictimes}\n` +
             `📑 **Informations des Victimes:** ${infosVictimes}\n\n` +
             `✅ **Rapport envoyé avec succès !**`
  };

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Rapport envoyé avec succès !");
      document.getElementById("pompiersForm").reset();
    } else {
      alert("Erreur lors de l'envoi du rapport.");
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue.");
  }
}
