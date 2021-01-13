import React from 'react';
import TaskCard from './task-card';
import { columnPropsTypes } from '../../types/column-props';
import './cards-style.css';

export default function StatusColumns({ listTitle }: columnPropsTypes) {
	return (
		<div className="status-column">
			<h2>{listTitle}</h2>
			<div className="cards-list">
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
			</div>
		</div>
	);
}
