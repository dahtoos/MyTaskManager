import React from 'react'
import './tasks.css'

const Tasks = () => {
  return (
    <div className='cont'>
        <div className='hed'>
            <h3>Task Manager App</h3>
            <div id='name'>
            <p id='nam'>Olatunji Damilare</p>
            <button className='Btnnn'>Logout</button>
            </div>
        </div>
        <h1 id='my'>Task Manager App</h1>
        <div id='abt'>
        <div id='abtt'>
            <h4>MY TASKS</h4>
            <h4>PROFILE</h4>
        </div>
        </div>
     </div>
  )
}

export default Tasks