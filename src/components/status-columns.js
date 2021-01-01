import React from 'react';
import TaskCard from './task-card';

export default function StatusColumns() {
	return (
		<div className="status-column">
			<h1>TODO</h1>
			<ul>
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
				<TaskCard taskTitle={'hamza'} taskDescription={'haza'} />
			</ul>
		</div>
	);
}
