
    
    const birthDate = new Date("2005-14-09T00:00:00"); // YYYY-MM-DDTHH:MM:SS

    function updateAge() {
      const now = new Date();
      let diff = now - birthDate;

      if (diff < 0) {
        document.getElementById("age").innerText = "Tu n'es pas encore né(e) !";
        return;
      }

      const msPerSecond = 1000;
      const msPerMinute = msPerSecond * 60;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerYear = msPerDay * 365.25;
      const msPerMonth = msPerDay * 30.44;

      const years = Math.floor(diff / msPerYear);
      diff -= years * msPerYear;

      const months = Math.floor(diff / msPerMonth);
      diff -= months * msPerMonth;

      const days = Math.floor(diff / msPerDay);
      diff -= days * msPerDay;

      const hours = Math.floor(diff / msPerHour);
      diff -= hours * msPerHour;

      const minutes = Math.floor(diff / msPerMinute);
      diff -= minutes * msPerMinute;

      const seconds = Math.floor(diff / msPerSecond);

      document.getElementById("age").innerText =
        `${years} ans, ${months} mois, ${days} jours, ` +
        `${hours}h ${minutes}min ${seconds}s`;
    }

    // Mettre à jour toutes les secondes
    setInterval(updateAge, 1000);
    updateAge(); // Exécution initiale
  
