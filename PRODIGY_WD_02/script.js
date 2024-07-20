let hr = min = sec = ms = "00",
    startTimer, lapCount = 1;

const startBtn = document.querySelector(".start"),
      stopBtn = document.querySelector(".stop"),
      resetBtn = document.querySelector(".reset"),
      lapBtn = document.querySelector(".lap");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms === "100") {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "00";
    }
    if (sec === "60") {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "00";
    }
    if (min === "60") {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "00";
    }
    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "00";
  lapCount = 1;
  document.querySelector(".lap-list").innerHTML = "";
  putValue();
}

function lap() {
  if (!startTimer) return; // Prevent laps if stopwatch isn't running
  const lapList = document.querySelector(".lap-list");
  const lapTime = `${hr}:${min}:${sec}.${ms}`;
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap ${lapCount++}: ${lapTime}`;
  lapList.appendChild(lapItem);
}

function putValue() {
  document.querySelector(".millisecond").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}
