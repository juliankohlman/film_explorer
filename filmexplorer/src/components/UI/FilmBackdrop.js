import React from 'react';
//!Conditiontionaly render if backdrop exists render if not don't render the component. Create mockups of how film details page should look in the event of any missing data
// Todo handle abscence of backdrop here and render a random image from assets
// *need to create a set of placeholder backdrops when one is not present for the film

const FilmBackdrop = props => {
	return !props.backdrop_path.includes('placeholder') ? (
		// <div
		// 	className="filmBackdrop"
		// 	style={{
		// 		backgroundImage: `url(https://image.tmdb.org/t/p/original/${
		// 			props.backdrop_path
		// 		})`
		// 	}}
		// />
		<div className="filmBackdrop">
			<img
				className="backdropImage"
				src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
				alt=""
			/>
		</div>
	) : (
		//* Think about how a fallback detail page will look that does not have a backdrop image. Render a placeholder?, Render a different page layout?
		<div
			className="filmBackdrop"
			style={{
				// backgroundImage: `${props.title}`,
				color: 'white',
				fontSize: '100px',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				// objectFit: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		>
			{props.title}
		</div>
	);
	// null;
};

export default FilmBackdrop;
