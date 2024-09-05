
import freeCodeCampLogo from './images/freecodecamp-logo.png';

import './App.css'
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  

  return (
    <div className='task-app'>
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt="Logo" 
        />
      </div>
      <div className='task-list-main'>
        <h1>My Tasks</h1>
        <TaskForm />
      </div>
      
    </div>
  )
}

export default App
