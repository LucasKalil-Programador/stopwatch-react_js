
// return time in Date in string in pattern 00:00:00.00
// Total hour : Minutes : Seconds . Milliseconds
function toTimeString(time) {
	const ms = (~~(time.getMilliseconds() / 10)).toString().padStart(2,0);
	const sc = time.getSeconds().toString().padStart(2,0);
	const mi = time.getMinutes().toString().padStart(2,0);
	const ho = (~~(time.getTime() / 3600000)).toString().padStart(2,0);
	return `${ho}:${mi}:${sc}.${ms}`;
}

export default toTimeString;