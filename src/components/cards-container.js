import React from 'react';
import StatusColumns from './status-columns'
export default function CardsContainer() {
	return <div className="container" >
        <StatusColumns></StatusColumns>
        <StatusColumns></StatusColumns>
        <StatusColumns></StatusColumns>
    </div>;
}
