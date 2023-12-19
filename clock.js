function newTime(h, m) {
  console.log(h, m);
  let hour = h == undefined ? Math.floor(Math.random() * 24) : h;
  let minute = m == undefined ? Math.floor(Math.random() * 60) : m;
  let fiver = minute * 5;

  let hpointer = document.getElementById("hour-pointer");
  let mpointer = document.getElementById("minute-pointer");

  hpointer.style.transform = `rotate(${hour * 30 + minute * 0.501}deg)`;
  mpointer.style.transform = `rotate(${minute * 6}deg)`;

  console.log(hour, minute, fiver * 0.5);

  let timetxt = document.getElementById("timename");
  let minutenames = ["", "fem över", "tio över", "kvart över", "tjugo över", "fem i halv", "halv", "fem över halv", "tjugo i", "kvart i", "tio i", "fem i", ""];
  let hournames = ["tolv", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv", "ett"];
  let cText = document.getElementById("clock-text");
  let aHour = hour > 12 ? hour - 12 : hour;
  
  time = (hour < 10 ? "0" + hour : hour)+':'+(minute < 10 ? "0" + minute : minute);
  timetxt.textContent = !(minute % 5) ? `${minutenames[minute / 5]} ${hournames[minute > 29 ? aHour + 1 : aHour]}.` : time;
  console.log();

  let digitalclock = document.getElementById("digital");

  while (digitalclock.firstChild) {
    digitalclock.removeChild(digitalclock.firstChild);
  }

  time = "h" + (hour < 10 ? "0" + hour : hour) + "m" + (minute < 10 ? "0" + minute : minute);
  console.log(time);

  for (var i = 1; i <= 5; i++) {
    var p = document.createElement("p");
    p.textContent = `${i == 3 ? ":" : time[i]}`;
    digital.appendChild(p);
  }
  digital.appendChild(document.createElement("div"));
}

function DIG() {
  let d = document.getElementById("digital");
  let a = document.getElementById("analog");
  let dd = document.getElementById("DIG");
  let aa = document.getElementById("ANA");
  let ac = document.getElementById("ANAC");

  d.style.display = "flex";
  aa.style.display = "flex";
  a.style.display = "none";
  dd.style.display = "none";
  ac.style.display = "none";
}

function ANA() {
  let d = document.getElementById("digital");
  let a = document.getElementById("analog");
  let dd = document.getElementById("DIG");
  let aa = document.getElementById("ANA");
  let ac = document.getElementById("ANAC");

  d.style.display = "none";
  aa.style.display = "none";
  a.style.display = "block";
  dd.style.display = "flex";
  ac.style.display = "flex";
}
let test = 1;
function ANAC() {
  let c = document.getElementById("clock");
  let ac = document.getElementById("ANAC");
  ac.textContent = !(test % 2) ? "Numberless" : "Numbers";
  c.src = !(test++ % 2) ? "assets/face.svg" : "assets/face-nonumbers.svg";
  console.log(c.src, test);
}

function RL() {
  h = new Date().getHours();
  m = new Date().getMinutes();
  newTime(h, m);
}
