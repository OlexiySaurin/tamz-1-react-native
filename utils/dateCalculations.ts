export function calculateTimeDifference(startDate: Date, endDate: Date) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let timeDifference = end.getTime() - start.getTime();
  let seconds = Math.floor(timeDifference / 1000);

  let days = Math.floor(seconds / 86400);
  seconds %= 86400;

  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
