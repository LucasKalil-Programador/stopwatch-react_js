import PropTypes from "prop-types";
import toTimeString from "./../Utils.js";
import "./TimerDisplay.css";


// Return a display h1 with ms in time string
export default function TimerDisplay({ ms }) {
	return (<h1>{toTimeString(new Date(ms))}</h1>);
}

// accept number time in milliseconds
TimerDisplay.propTypes  = {
	ms: PropTypes.number.isRequired
};