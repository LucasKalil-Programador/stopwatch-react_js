import PropTypes from "prop-types";
import toTimeString from "./../Utils.js";
import "./WatchList.css";

// Show a list with all times watched
export default function WatchList({ list }) {
	const show = (time, index) => {
		return <h3 key={index}>{"N" + (index + 1) + " | " + toTimeString(new Date(time))}</h3>;
	};

	return (<div className="WatchPanel">{list.map(show)}</div>);
}

// Receive list of number in ms
WatchList.propTypes  = {
	list: PropTypes.arrayOf(Number).isRequired
};