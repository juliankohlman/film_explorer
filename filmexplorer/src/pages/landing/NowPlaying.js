import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

//Todo be sure to tune queries and only grab the fields you'll need. Nowplaying only really needs ids' and poster paths for example
const GET_NOW_PLAYING = gql`
	{
		getNowPlaying {
			id
			poster_path
			title
			overview
		}
	}
`;

const NowPlaying = () => (
	<Query query={GET_NOW_PLAYING}>
		{({ loading, error, data }) => {
			if (loading) return <p>loading...</p>;
			if (error) return <p>error :(</p>;
			console.log(data.getNowPlaying);

			return data.getNowPlaying.map(movie => (
				<div key={movie.id}>
					<img src={movie.poster_path} alt="poster" srcSet="" />
				</div>
			));
		}}
	</Query>
);

//* Tachyons felx columns
// <div>
// 	<section class="cf pt7">
// 		<div class="fl w-100 w-50-m w-25-l bg-black-10 tc pv4">
// 			<NowPlaying />
// 		</div>
// 		<div class="fl w-100 w-50-m w-25-l bg-black-05 tc pv4">Action</div>
// 		<div class="fl w-100 w-50-m w-25-l bg-black-20 tc pv4">Adventure</div>
// 		<div class="fl w-100 w-50-m w-25-l bg-black-30 tc pv4">Animation</div>
// 	</section>{' '}
// </div>

export default class Landing extends Component {
	render() {
		return (
			<div>
				{/* <Header /> */}
				<NowPlaying />
			</div>
		);
	}
}
