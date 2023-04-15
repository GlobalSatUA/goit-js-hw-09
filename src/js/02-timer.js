import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const picker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      return;
    }
  },
});

const timer = document.querySelector(".timer");
const daysValue = timer.querySelector('[data-days]');
const hoursValue = timer.querySelector('[data-hours]');
const minutesValue = timer.querySelector('[data-minutes]');
const secondsValue = timer.querySelector('[data-seconds]');

let countdownIntervalId;

function startCountdown(endDate) {
  countdownIntervalId = setInterval(() => {
    const now = new Date();
    const remainingTime = endDate - now;
    if (remainingTime < 0) {
      clearInterval(countdownIntervalId);
      daysValue.textContent = '00';
      hoursValue.textContent = '00';
      minutesValue.textContent = '00';
      secondsValue.textContent = '00';
      document.getElementById("start-button").disabled = true;
      return;
    }
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000).toString().padStart(2, '0');
    daysValue.textContent = days;
    hoursValue.textContent = hours;
    minutesValue.textContent = minutes;
    secondsValue.textContent = seconds;
  }, 1000);
}

document.getElementById("start-button").addEventListener("click", () => {
  const selectedDate = picker.selectedDates[0];
  if (selectedDate < new Date()) {
    window.alert("Please choose a date in the future");
    return;
  }
  document.getElementById("start-button").disabled = true;
  startCountdown(selectedDate);
})
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20};
