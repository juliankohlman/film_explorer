import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import React from 'react';

const Carousel = props => {
	return <Carousel>{props.children}</Carousel>;
};

export default Carousel;
