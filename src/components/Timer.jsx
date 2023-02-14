import { useEffect, useState } from "react";
import TimerDisplay from "./TimerDisplay.jsx";
import WatchList from "./WatchList.jsx";
import "./Timer.css";

import play_button from "../assets/play_button.png";
import pause_button from "../assets/pause_button.png";
import reset_button from "../assets/reset_button.png";
import time_tracking_button from "../assets/time_tracking_button.png";

// Timer component container of Timer display and WatchList
export default function Timer() {

	// List with all watched times
	const [historyTimes, setHistoryTimes] = useState([]);
	

	// Time variables
	const [initialTime, setInitialTime] = useState(Date.now());
	const [timeNow, setTimeNow] = useState(0);


	// Variables to pause system
	const [paused, setPaused] = useState(true);
	const [pausedTime, setPausedTime] = useState(initialTime);


	// Update timer display if unpaused
	useEffect(() => {
		const interval = setInterval(() => {
			if(!paused) setTimeNow(Date.now() - initialTime);
		}, 10);

		return () => clearInterval(interval); 
	});


	// Control the pause and unpause timer
	useEffect(() => {
		if(!paused && pausedTime !== -1) {
			setInitialTime(initialTime + (Date.now() - pausedTime));
			setPausedTime(-1);
		} else if (pausedTime === -1) {
			setPausedTime(Date.now());
		}
	}, [paused]);


	// Reset timer to 00:00:00.00
	function resetTimer() {
		const now = Date.now();
		setInitialTime(now);
		setPausedTime(now);
		setPaused(true);
		setTimeNow(0);
	}

	// Pause o unpause timer
	function onPauseClick() {
		setPaused(!paused);
	}

	// Add actual time to list
	function addOnHistoryTimes() {
		setHistoryTimes(historyTimes.concat(timeNow));
	}

	return (
		<div className="Timer">
			<TimerDisplay ms={timeNow}></TimerDisplay>
			

			<button onClick={resetTimer}>
				<img src={reset_button}></img>
			</button>
			
			<button onClick={onPauseClick}>
				<img src={paused ? play_button:pause_button}></img>
			</button>

			<button onClick={addOnHistoryTimes}>
				<img src={time_tracking_button}></img>
			</button>
			
			<div className="Center">
				<WatchList list={historyTimes}></WatchList>
			</div>		

			{historyTimes.length > 0 ? <button className="ClearButton" onClick={() => setHistoryTimes([])}>Clear</button>: null}
		</div>
	);
}