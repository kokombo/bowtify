export const formatDuration = (durationInSeconds: number) => {
  const hrs = Math.floor(durationInSeconds / 3600);
  const mins = Math.floor((durationInSeconds % 3600) / 60);
  const secs = durationInSeconds % 60;

  if (hrs > 0) {
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}h`;
  }

  if (mins > 0) {
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}m`;
  }

  return `${String(secs).padStart(2, "0")}s`;
};
