import React from 'react';
import TaskCard from './task-card';
import { columnPropsTypes } from '../../types/column-props';
import './cards-style.css';

export default function StatusColumns({ listTitle }: columnPropsTypes) {
	return (
		<div className="status-column">
			<h2>{listTitle}</h2>
			<div className="cards-list">
				{/** map the comming list into cards */}
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something and a lot of text here just to see how it would look I don't know what the hell I want to do" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
				<TaskCard taskTitle="task1" taskDescription="I should do something" />
			</div>
		</div>
	);
}
