import React, { PureComponent } from 'react';

export default class FilmBackdrop extends PureComponent {
  //!Conditiontionaly render if backdrop exists render if not don't render the component. Create mockups of how film details page should look in the event of any missing data
	// Todo handle abscence of backdrop here and render a random image from assets
	// *need to create a set of placeholder backdrops when one is not present for the film

	render() {
		return (
			<div
				className="vh-100 cover bg-center"
				style={{
					backgroundImage: `url(https://image.tmdb.org/t/p/original/${
						this.props.backdrop_path
					})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			/>
		);
	}
}
