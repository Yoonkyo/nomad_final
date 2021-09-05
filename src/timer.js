const clock = document.getElementById("clock");

function getTime(){
    const now = new Date();
    let hour = now.getHours();
    let am_or_pm = "AM";
    if (hour > 12) {
      am_or_pm = "PM";
      hour -= 12;
    }
    const hourStr = String(hour).padStart(2, "0");
    const minuteStr = String(now.getMinutes()).padStart(2, "0");
    const secondStr = String(now.getSeconds()).padStart(2, "0");
    clock.innerText = `${am_or_pm} ${hourStr}:${minuteStr}:${secondStr}`;
    //clock.innerHTML = `${hourStr}:${minuteStr}:${secondStr}`;
  }
  
  function init() {
    getTime();
    setInterval(getTime, 1000);
  }

  init();