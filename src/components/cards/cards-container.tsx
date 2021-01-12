import React from 'react';
import StatusColumns from './status-columns';
export default function CardsContainer() {
	return (
		<div className="container">
			<StatusColumns listTitle="TODO" />
			<StatusColumns listTitle="DOING" />
			<StatusColumns listTitle="DONE" />
		</div>
	);
}
