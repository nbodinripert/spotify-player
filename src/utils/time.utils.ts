export const convertMsToHrsMins = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const hoursStr = h < 10 ? '0' + h : h;
  const minutesStr = m < 10 ? '0' + m : m;
  return `${hoursStr}h${minutesStr}`;
};

export const convertMsToMinsSecs = (millis: number): string => {
  const minutes = Math.floor(millis / 60000);
  const seconds = Math.floor((millis % 60000) / 1000);
  return seconds == 60
    ? minutes + 1 + ':00'
    : minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};
