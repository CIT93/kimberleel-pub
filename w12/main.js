const FORM = document.getElementById("form");

duration.addEventListener("input", () => {
  const duration = document.getElementById("duration");
  const durationDisplay = document.getElementById("durationDisplay");
  durationDisplay.value = duration.value + " secs";
});

const startWorkout = (callback) => {
  const exercise = FORM.exercises.value;
  const target = FORM.target.value;
  const start = document.getElementById("start-display");
  start.textContent = `Start Now! Your target is ${target} ${exercise}`;
  let time = duration.value * 1000;
  setTimeout(() => {
    callback(exercise);
  }, time);
};

const stopWorkout = (exercise) => {
  const stop = document.getElementById("stop-display");
  stop.textContent = `Stop ${exercise}`;
};

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  startWorkout(stopWorkout);
});
