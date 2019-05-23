// Poster property assignment
// Use original image size if poster exists
// If poster property is null use a placeholder
//Todo add more dynamic placeholder posters using randomly generated colors for background: May need to create your own placeholders to inject
export const posterImageCheck = (posterPath, film) => {
	if (!posterPath) {
		let posterText = film.title.split(' ').join('+');
		posterPath = `https://via.placeholder.com/300x500.png?text=${posterText}`;
	} else {
		posterPath = `https://image.tmdb.org/t/p/original${posterPath}`;
	}
	return posterPath;
};

export const backdropCheck = (backdropPath, film) => {
	if (!backdropPath) {
		let backdropText = film.title.split(' ').join('+');
		backdropPath = `https://via.placeholder.com/728x90.png?text=${backdropText}`;
	}

	return backdropPath;
};
