import React from 'react';
//!Conditiontionaly render if backdrop exists render if not don't render the component. Create mockups of how film details page should look in the event of any missing data
// Todo handle abscence of backdrop here and render a random image from assets
// *need to create a set of placeholder backdrops when one is not present for the film

const FilmBackdrop = props => {
	return props.backdrop_path ? (
		<div
			// Todo adjust this class to resize backdrop and replace tachyons class with custom class
			className="vh-100 cover bg-center"
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original/${
					props.backdrop_path
				})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				// objectFit: 'cover',
				backgroundRepeat: 'no-repeat'
			}}
		/>
	) : //* Think about how a fallback detail page will look that does not have a backdrop image. Render a placeholder?, Render a different page layout?
	null;
};

export default FilmBackdrop;
