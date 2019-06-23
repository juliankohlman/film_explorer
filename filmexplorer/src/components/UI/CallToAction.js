import React from 'react';

// export default function CallToAction(props) {
// 	return (
// 		<div className="dtc-ns tc pv4 bg-black-05 white v-mid">
// 			{/* Need to give this h3 a unique className and style it accordingly */}
// 			<h3>{props.callout}</h3>
// 		</div>
// 	);
// }
const CallToAction = props => {
	return (
		<div className="dtc-ns tc pv4 bg-black-05 white v-mid">
			<h3>{props.callout}</h3>
		</div>
	);
};

export default CallToAction;
