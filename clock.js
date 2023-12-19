function newTime() {
  let hour = Math.floor(Math.random() * 13);
  let minute = Math.floor(Math.random() * 13);
  let fiver = minute * 5;

  let hpointer = document.getElementById("hour-pointer");
  let mpointer = document.getElementById("minute-pointer");

  hpointer.style.transform = `rotate(${(hour * 30 + (fiver*0.5))}deg)`;
  mpointer.style.transform = `rotate(${minute * 30}deg)`;
  
  console.log(hour, minute, fiver*0.5);

  let timetxt = document.getElementById("timename");
  let minutenames = ["", "fem över", "tio över", "kvart över", "tjugo över", "fem i halv", "halv", "fem över halv", "tjugo i", "kvart i", "tio i", "fem i", ""];
  let hournames = ["tolv", "ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio", "elva", "tolv", 'ett'];
  timetxt.textContent = `${minutenames[minute]} ${hournames[fiver>29 ? hour+1: hour]}.`;
}
