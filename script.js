
    
    const birthDate = new Date("2005-14-09T00:00:00"); 

    function updateAge() {
      const now = new Date();
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

      document.getElementById("age").innerText =
        `${years} ans, ${months} mois, ${days} jours, `;
    }
    setInterval(updateAge, 1000);
    updateAge();

  
