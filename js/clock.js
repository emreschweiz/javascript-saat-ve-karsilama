let userName = prompt("İsminizi giriniz");
if (!userName || userName.trim() === "") {
  userName = "test kullanici";
}
document.getElementById("myName").textContent = userName;


function showTime() {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const trDate = new Date(utc + 3 * 60 * 60 * 1000);

  let hours = trDate.getHours();
  let minutes = trDate.getMinutes();
  let seconds = trDate.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  const dayName = days[trDate.getDay()];

  document.getElementById("myClock").textContent =
    `${hours}:${minutes}:${seconds} ${dayName}`;
}

showTime();
setInterval(showTime, 1000);
