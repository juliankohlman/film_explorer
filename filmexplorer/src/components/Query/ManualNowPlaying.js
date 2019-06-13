import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
// import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';
import FilmPage from '../UI/FilmPage';
import { GET_NOW_PLAYING } from '../../queries/getNowPlaying';

class ManualNowPlaying extends Component {
	state = { page: null, data: {} };

	onPageJump = data => this.setState(() => ({ data }));

	onSubmit = e => {
		e.preventDefault();
		const jumpPage = this.page.value;
		this.setState({
			page: jumpPage
		});
	};

	render() {
		return (
			<ApolloConsumer>
				{client => (
					<div style={{ paddingTop: '350px' }}>
						{this.state.page && (
							<FilmPage
								films={this.state.data || []}
								currentPage={+this.state.page}
							/>
						)}
						<form onSubmit={this.onSubmit}>
							<input
								type="number"
								placeholder="jump to page"
								ref={input => (this.page = input)}
							/>
							<button
								onClick={async () => {
									const { data } = await client.query({
										query: GET_NOW_PLAYING,
										variables: { page: +this.page.value }
									});
									this.state.data = data.getNowPlaying;
								}}
							>
								Jump
							</button>
							{/* <button type="submit">Jump</button> */}
						</form>
					</div>
				)}
			</ApolloConsumer>
		);
	}
}

export default ManualNowPlaying;
