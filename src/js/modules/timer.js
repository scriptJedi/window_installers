const timer = (id, deadline) => {
  const addZero = (num) => {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  };
  const getTimeRemaining = (endTime) => {
    const time = Date.parse(endTime) - Date.parse(new Date()),
      seconds = Math.floor((time / 1000) % 60),
      minutes = Math.floor((time / 1000 / 60) % 60),
      hours = Math.floor((time / (1000 * 60 * 60)) % 24),
      days = Math.floor(time / (1000 * 60 * 60 * 24));

    return {
      total: time,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const setClock = (selector, endTime) => {
    const timer = document.querySelector(selector),
      days = document.querySelector("#days"),
      hours = document.querySelector("#hours"),
      minutes = document.querySelector("#minutes"),
      seconds = document.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.innerText = addZero(t.days);
      hours.innerText = addZero(t.hours);
      minutes.innerText = addZero(t.minutes);
      seconds.innerText = addZero(t.seconds);

      if (t.total <= 0) {
        days.innerText = "00";
        hours.innerText = "00";
        minutes.innerText = "00";
        seconds.innerText = "00";

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;
