import React from 'react'

export default function TaskCard({taskTitle,taskDescription}) {
    console.log(this);
    return (
        <div className="card">
            <h2 className="task-title">{taskTitle}</h2>
            <p className="task-description">{taskDescription}</p>
            <div>avatar{/*I say put this in a diffrent componant so you can reuse it */}</div>
        </div>
    )
}
