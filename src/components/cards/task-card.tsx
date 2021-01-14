import React from 'react';
import { cardPropsTypes } from '../../types/task-cards-props';
import './cards-style.css';
export default function TaskCard({ taskTitle, taskDescription }: cardPropsTypes) {
	return (
		<div className="card">
			<h3 className="task-title">{taskTitle}</h3>
			<p className="task-description">{taskDescription}</p>
			<div className="avatar">avatar{/*I say put this in a diffrent componant so you can reuse it*/}</div>
			<div className="actions-area">
				<div className="delete-button" />
				<div className="edit-button" />
			</div>
			{/* make the card dragabble and add some animation for it */}
		</div>
	);
}
