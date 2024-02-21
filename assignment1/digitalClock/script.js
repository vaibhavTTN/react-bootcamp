function getDateAndTime() {
  const date = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let great = "Good Morning";
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let day = date.getDate();
  let month = months[date.getMonth()];
  let year = date.getFullYear();
  let currentDate = `${day} ${month} ${year}`;
  console.log(currentDate);

  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }

  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  const digitalTime = `${hh}:${mm}:${ss} ${session}`;
  document.getElementById("time").innerText = digitalTime;

  if (session === "PM") {
    great = "Good Afternoon";
  }
  if (date.getHours() >= 18) {
    great = "Good Evening";
  }

  document.getElementById("great").innerText = great;
  document.getElementById("date").innerText = currentDate;
}

setInterval(getDateAndTime, 1000);
