function heSecildi() {
  const mesajlar = [
    "😁😁😁😁hAHAHAHA Bilirdim eləəəə 😁😁😁😁😁",
    "Bilirdim sən razısan 😁",
    "Sən rəhbərin sevimlisisən 😎",
    "Maaş sənlikdi, sən maaşlısan 😂",
    "Bu sevinc gözlərindən oxunur 🤩"
  ];
  const randomIndex = Math.floor(Math.random() * mesajlar.length);
  document.getElementById("cavab").innerText = mesajlar[randomIndex];
  document.getElementById("ses").play();
}




function yerDegisdir() {
  const yoxBtn = document.getElementById("yox");
  const randomTop = Math.floor(Math.random() * 300);
  const randomLeft = Math.floor(Math.random() * 300);

  yoxBtn.style.position = "absolute";
  yoxBtn.style.top = randomTop + "px";
  yoxBtn.style.left = randomLeft + "px";
}
