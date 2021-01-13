import React from 'react';
import StatusColumns from './status-columns';
import FAB from '../fab/fab';
import './cards-style.css';

export default function CardsContainer() {
	return (
		<div className="gray-area">
			<div className="container">
				<StatusColumns listTitle="TODO" />
				<StatusColumns listTitle="DOING" />
				<StatusColumns listTitle="DONE" />
			</div>
			<FAB />
		</div>
	);
}
