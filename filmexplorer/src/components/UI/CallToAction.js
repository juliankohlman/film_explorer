import React from 'react';

//Todo refactor component to display message with dynamic genre or actor/director name in CTA
export default function CallToAction(props) {
	return (
		<div className="dtc-ns tc pv4 bg-black-05 white v-mid">
			{/* Need to give this h3 a unique className and style it accordingly */}
			<h3>{props.callout}</h3>
		</div>
	);
}
