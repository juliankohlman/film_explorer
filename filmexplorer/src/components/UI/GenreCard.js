import React from 'react';
// import { Link, Route } from 'react-router-dom';
// import Genre from '../pages/Genre';
export default function GenreCard(props) {
	return (
		// <div className="fl w-100 w-50-m w-25-l bg-black-10 tc pv4 red">
		<div className="genreCard">{props.genre}</div>
	);
}
