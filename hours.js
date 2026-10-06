// Shows today's opening hours in the first screen and marks today's row in the hours table.

// Opening and closing times in 24-hour time.
// The position in the list is the day number JavaScript uses: 0 is Sunday, 6 is Saturday.
const hours = [
  { open: 8, close: 20 }, // Sunday
  { open: 7, close: 21 }, // Monday
  { open: 7, close: 21 }, // Tuesday
  { open: 7, close: 21 }, // Wednesday
  { open: 7, close: 21 }, // Thursday
  { open: 7, close: 22 }, // Friday
  { open: 7, close: 22 }, // Saturday
];

const dayNumbers = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// A visitor's phone may be set to another time zone, so always read the clock in Manila.
function manilaNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date());

  const find = (type) => parts.find((part) => part.type === type).value;

  return {
    day: dayNumbers[find('weekday')],
    // 14:30 becomes 14.5, so it can be compared with the opening hours.
    time: Number(find('hour')) + Number(find('minute')) / 60,
  };
}

// 7 becomes "7 AM", 21 becomes "9 PM".
function formatHour(hour) {
  const suffix = hour < 12 ? 'AM' : 'PM';
  return (hour % 12 || 12) + ' ' + suffix;
}

const now = manilaNow();
const today = hours[now.day];
const tomorrow = hours[(now.day + 1) % 7];

let message;
if (now.time < today.open) {
  message = 'Opens today at ' + formatHour(today.open);
} else if (now.time < today.close) {
  message = 'Open today until ' + formatHour(today.close);
} else {
  message = 'Closed now. Opens tomorrow at ' + formatHour(tomorrow.open);
}

document.getElementById('status').textContent = message;
document.querySelector('.hours tr[data-day="' + now.day + '"]').classList.add('today');
