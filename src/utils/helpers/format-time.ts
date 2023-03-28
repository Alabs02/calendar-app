const formatTime = (time: string) => {
  const timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes: number | string = Number(timeArray[1]);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  const strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export { formatTime as default };