const formatTime = (time: string) => {
  return time.padStart(2, "0");
};

export const getTime = () => {
  const [time, period] = new Date()
    .toLocaleTimeString("en-US", { hour12: true })
    .split(" ");

  const [hours, minutes, seconds] = time.split(":").map(formatTime);

  return {
    hours,
    minutes,
    seconds,
    period,
  };
};
