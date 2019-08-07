import React from 'react';

const CallToAction = props => {
	const { callout } = props;
	return (
		<div className="ctaMessage">
			Now exploring <span className="genrePop">{callout}</span>
		</div>
	);
};

export default CallToAction;
