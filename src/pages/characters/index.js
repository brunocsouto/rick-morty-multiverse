import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {
		CardDeck,
        Card,
        Button
} from 'react-bootstrap';
import api from '../../services/api.js';

export default class Characters extends Component {
	state = {
		charactersDetails: [],
		charactersInfo: []
	}

	componentDidMount() {
		this.loadData();
	}

	loadData = async () => {
		const characters = await api.get('character');
		this.setState({
						charactersDetails:characters.data.results,
						charactersInfo:characters.data.info
					});

	}

	render() {
		const { charactersDetails, charactersInfo } = this.state;
		console.log(charactersDetails);
		return (
			<div>
				<h1>Characters Page</h1>
				{charactersDetails.map((character, index) => (
					<Card bg="dark" style={{ width:'18rem', margin:'10px' }} key={character.id}>
						<Card.Body>
							<Card.Img src={character.image} />
							<Card.Title>{character.name}</Card.Title>
							<Card.Subtitle>Index: {index}</Card.Subtitle>
						</Card.Body>
					</Card>
				))}
			</div>
		)
	}
};