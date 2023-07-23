const ymddDiv = document.querySelector("#ymdd");
const hmsDiv = document.querySelector("#hms");

const days = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

function getTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = days[now.getDay()];
  ymddDiv.innerText = `${year} ${month} ${date} ${day}`;

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  hmsDiv.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
